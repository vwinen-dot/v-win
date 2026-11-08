import { createClient } from '@supabase/supabase-js';

// Project credentials provided by user
const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL || 'https://creocdvivegokgruavpo.supabase.co';
const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'sb_publishable_NoTi-Z0BPrlLQHu1eqMq6Q_xJUWJsw_';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export interface BookingRecord {
  reference_id: string;
  customer_name: string;
  phone_number: string;
  email_address?: string;
  appliance_category: string;
  service_required: string;
  message: string;
  status?: string;
  source?: 'web_booking_modal' | 'web_contact_form';
  created_at?: string;
}

export interface SaveBookingResult {
  success: boolean;
  syncedToCloud: boolean;
  referenceId: string;
  errorMessage?: string;
}

const LOCAL_STORAGE_KEY = 'vwin_saved_appointments';

/**
 * Save booking appointment details directly to user's Supabase database
 * with reliable offline / local cache fallback.
 */
export async function saveBookingAppointment(
  data: Omit<BookingRecord, 'created_at' | 'status'> & {
    status?: string;
  }
): Promise<SaveBookingResult> {
  const timestamp = new Date().toISOString();
  const payload: BookingRecord = {
    ...data,
    status: data.status || 'pending',
    created_at: timestamp,
  };

  // Always save locally as a guaranteed fallback record
  try {
    const existing = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
    existing.unshift(payload);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existing.slice(0, 50)));
  } catch (err) {
    console.warn('Could not cache booking to local storage:', err);
  }

  try {
    // Primary target table in Supabase
    const { data: insertedData, error } = await supabase
      .from('service_bookings')
      .insert([payload])
      .select();

    if (error) {
      console.warn('Supabase service_bookings insert notice:', error.message);
      // Attempt alternative table name if standard service_bookings not found
      if (error.code === '42P01' || error.message.includes('relation') || error.message.includes('does not exist')) {
        const { error: altError } = await supabase
          .from('appointments')
          .insert([payload]);

        if (!altError) {
          return {
            success: true,
            syncedToCloud: true,
            referenceId: payload.reference_id,
          };
        }
      }

      return {
        success: true,
        syncedToCloud: false,
        referenceId: payload.reference_id,
        errorMessage: error.message,
      };
    }

    return {
      success: true,
      syncedToCloud: true,
      referenceId: payload.reference_id,
    };
  } catch (err: any) {
    console.error('Network error connecting to Supabase:', err);
    return {
      success: true,
      syncedToCloud: false,
      referenceId: payload.reference_id,
      errorMessage: err?.message || 'Network connection issue',
    };
  }
}

/**
 * Retrieve saved appointments from Supabase or local backup cache
 */
export async function getSavedAppointments(): Promise<BookingRecord[]> {
  try {
    const { data, error } = await supabase
      .from('service_bookings')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(20);

    if (!error && data && data.length > 0) {
      return data as BookingRecord[];
    }
  } catch (err) {
    console.warn('Fetching from Supabase failed, using local backup:', err);
  }

  // Fallback to local storage
  try {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

/**
 * SQL Schema for user reference in Supabase SQL Editor
 */
export const SUPABASE_SETUP_SQL = `-- Run this in your Supabase SQL Editor (SQL Editor -> New Query)
CREATE TABLE IF NOT EXISTS service_bookings (
  id BIGSERIAL PRIMARY KEY,
  reference_id TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  email_address TEXT,
  appliance_category TEXT NOT NULL,
  service_required TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  source TEXT DEFAULT 'web',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE service_bookings ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts from the website
CREATE POLICY "Allow public insert" 
ON service_bookings 
FOR INSERT 
WITH CHECK (true);

-- Allow viewing bookings
CREATE POLICY "Allow public select" 
ON service_bookings 
FOR SELECT 
USING (true);
`;
