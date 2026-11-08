import React, { useState, useEffect } from 'react';
import { X, Database, RefreshCw, Check, Copy, AlertCircle, Phone, Calendar, Clock, User, ShieldCheck } from 'lucide-react';
import { getSavedAppointments, BookingRecord, SUPABASE_SETUP_SQL } from '../lib/supabase';

interface AppointmentsManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentsManagerModal: React.FC<AppointmentsManagerModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [appointments, setAppointments] = useState<BookingRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);
  const [activeTab, setActiveTab] = useState<'appointments' | 'supabase_setup'>('appointments');

  const loadData = async () => {
    setIsLoading(true);
    try {
      const data = await getSavedAppointments();
      setAppointments(data);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopySql = () => {
    navigator.clipboard.writeText(SUPABASE_SETUP_SQL);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                Connected to Supabase (creocdvivegokgruavpo)
              </span>
              <h3 className="font-display font-bold text-lg text-slate-900">
                Booking Appointments & Data Storage
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={loadData}
              disabled={isLoading}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
              title="Refresh bookings"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Toggle */}
        <div className="flex border-b border-slate-200 bg-slate-100/70 px-6 pt-2 gap-4 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab('appointments')}
            className={`pb-2.5 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'appointments'
                ? 'border-emerald-600 text-emerald-800 font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Saved Appointments</span>
            <span className="bg-slate-200 text-slate-700 px-1.5 py-0.2 rounded-full text-[10px]">
              {appointments.length}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('supabase_setup')}
            className={`pb-2.5 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'supabase_setup'
                ? 'border-emerald-600 text-emerald-800 font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Supabase SQL Table Guide</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeTab === 'appointments' ? (
            <div>
              {/* Connection Status Banner */}
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Database configured with Project ID: <code className="bg-white px-1.5 py-0.5 rounded border border-emerald-300 font-mono font-bold">creocdvivegokgruavpo</code>
                  </span>
                </div>
                <span className="text-[11px] text-emerald-700 font-medium">
                  Table: <code className="font-mono">service_bookings</code>
                </span>
              </div>

              {appointments.length === 0 ? (
                <div className="text-center py-12 text-slate-500">
                  <Calendar className="w-10 h-10 mx-auto mb-2 text-slate-400" />
                  <p className="font-medium text-sm text-slate-700">No appointments logged yet</p>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                    When customers submit a service request via the website or booking modal, details will automatically be saved to your Supabase account.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {appointments.map((item, idx) => (
                    <div
                      key={item.reference_id || idx}
                      className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-shadow shadow-xs flex flex-col sm:flex-row justify-between gap-4"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                            {item.reference_id}
                          </span>
                          <span className="text-xs font-bold text-slate-900">
                            {item.customer_name}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
                          <span className="flex items-center gap-1 font-medium text-slate-800">
                            <Phone className="w-3.5 h-3.5 text-orange-600" />
                            <a href={`tel:${item.phone_number}`} className="hover:underline">
                              {item.phone_number}
                            </a>
                          </span>
                          {item.email_address && (
                            <span className="text-slate-500">
                              {item.email_address}
                            </span>
                          )}
                        </div>

                        <div className="text-xs text-slate-700 pt-1">
                          <span className="font-semibold text-slate-900">{item.service_required}</span>
                          <span className="text-slate-400 mx-1.5">·</span>
                          <span className="text-slate-600">{item.appliance_category}</span>
                        </div>

                        {item.message && (
                          <p className="text-xs text-slate-500 bg-slate-50 p-2 rounded-lg border border-slate-100 mt-1">
                            &quot;{item.message}&quot;
                          </p>
                        )}
                      </div>

                      <div className="shrink-0 text-right text-[11px] text-slate-400 flex flex-col justify-between">
                        <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200 font-medium inline-block w-fit self-end">
                          {item.status || 'pending'}
                        </span>
                        {item.created_at && (
                          <span className="flex items-center gap-1 justify-end text-slate-400 mt-2">
                            <Clock className="w-3 h-3" />
                            <span>{new Date(item.created_at).toLocaleDateString()}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 space-y-1">
                <p className="font-bold flex items-center gap-1.5">
                  <Database className="w-4 h-4 text-blue-800" />
                  <span>How to create the Table in your Supabase Account:</span>
                </p>
                <p className="text-blue-800 leading-relaxed">
                  1. Log into your Supabase dashboard at <strong>supabase.com</strong> and open project <strong>creocdvivegokgruavpo</strong>.
                  <br />
                  2. In the left navigation, click on <strong>SQL Editor</strong>.
                  <br />
                  3. Click <strong>New Query</strong>, paste the SQL below, and click <strong>Run</strong>.
                </p>
              </div>

              <div className="relative">
                <pre className="bg-slate-900 text-slate-100 p-4 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed">
                  {SUPABASE_SETUP_SQL}
                </pre>
                <button
                  type="button"
                  onClick={handleCopySql}
                  className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700 shadow-sm"
                >
                  {copiedSql ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-300" />
                      <span>Copy SQL</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>V WIN Enterprises Data Integration</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
