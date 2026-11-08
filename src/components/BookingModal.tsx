import React, { useState, useEffect } from 'react';
import { X, Wrench, CheckCircle, AlertCircle, Phone, Send, ShieldCheck, Database } from 'lucide-react';
import { REPAIR_SERVICES, PRODUCT_CATEGORIES, COMPANY_DETAILS } from '../data/appliancesData';
import { saveBookingAppointment } from '../lib/supabase';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultCategory?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
  defaultCategory = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState(defaultCategory || 'Kitchen Appliances');
  const [service, setService] = useState(defaultService || 'Gas Stove Repair');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCloudSynced, setIsCloudSynced] = useState(false);
  const [reference, setReference] = useState('');

  useEffect(() => {
    if (defaultService) setService(defaultService);
    if (defaultCategory) setCategory(defaultCategory);
  }, [defaultService, defaultCategory]);

  if (!isOpen) return null;

  const handleValidate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please provide your full name.';
    if (!phone.trim()) errs.phone = 'Phone number is required.';
    else if (!/^[+]?[\d\s-]{8,15}$/.test(phone.trim())) {
      errs.phone = 'Please provide a valid contact number.';
    }
    if (!notes.trim()) {
      errs.notes = 'Please describe the appliance problem.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!handleValidate()) return;

    setIsSubmitting(true);
    const ref = `VWIN-SRV-${Math.floor(10000 + Math.random() * 90000)}`;
    setReference(ref);

    const result = await saveBookingAppointment({
      reference_id: ref,
      customer_name: name.trim(),
      phone_number: phone.trim(),
      email_address: email.trim() || undefined,
      appliance_category: category,
      service_required: service,
      message: notes.trim(),
      source: 'web_booking_modal',
    });

    setIsCloudSynced(result.syncedToCloud);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setName('');
    setPhone('');
    setEmail('');
    setNotes('');
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900">
                V WIN Home Appliances
              </span>
              <h3 className="font-display font-bold text-lg text-slate-900">
                Book Appliance Service
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-display font-bold text-xl text-slate-900">
                Service Booking Confirmed!
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Thank you, <strong>{name}</strong>. Your appliance service appointment has been scheduled.
              </p>

              <div className="my-5 p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs space-y-1.5">
                <p className="text-slate-500">
                  Appointment Reference: <strong className="text-blue-900 font-mono text-sm">{reference}</strong>
                </p>
                <p className="text-slate-700">
                  Service: <strong className="text-slate-900">{service}</strong>
                </p>
                <p className="text-slate-700">
                  Category: <span>{category}</span>
                </p>
                <p className="text-slate-500 pt-1 text-[11px]">
                  Our diagnostic supervisor will call your phone (<span className="font-semibold text-slate-700">{phone}</span>) to coordinate timing.
                </p>

                <div className="pt-2 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px]">
                  <Database className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="text-slate-600">
                    {isCloudSynced
                      ? 'Saved to Supabase database (creocdvivegokgruavpo)'
                      : 'Appointment logged securely & cached'}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-900 hover:bg-blue-950 rounded-lg cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name <span className="text-orange-600">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className={`w-full px-3.5 py-2 text-sm rounded-lg border bg-white text-slate-900 focus:outline-none focus:ring-2 ${
                    errors.name ? 'border-red-500 focus:ring-red-100' : 'border-slate-300 focus:ring-blue-100'
                  }`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Phone <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className={`w-full px-3.5 py-2 text-sm rounded-lg border bg-white text-slate-900 focus:outline-none focus:ring-2 ${
                      errors.phone ? 'border-red-500 focus:ring-red-100' : 'border-slate-300 focus:ring-blue-100'
                    }`}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="optional@domain.com"
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  >
                    {PRODUCT_CATEGORIES.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                    <option value="General Domestic Appliance">General Domestic</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Service Required
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  >
                    {REPAIR_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Comprehensive Appliance Inspection">General Inspection</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Describe Fault / Symptoms <span className="text-orange-600">*</span>
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Sparking, heating element cold, strange sound, leaking..."
                  className={`w-full px-3.5 py-2 text-sm rounded-lg border bg-white text-slate-900 focus:outline-none focus:ring-2 ${
                    errors.notes ? 'border-red-500 focus:ring-red-100' : 'border-slate-300 focus:ring-blue-100'
                  }`}
                />
                {errors.notes && <p className="mt-1 text-xs text-red-600">{errors.notes}</p>}
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 bg-blue-50/60 p-2.5 rounded-lg border border-blue-100">
                <ShieldCheck className="w-4 h-4 text-blue-800 shrink-0" />
                <span>Upfront quote provided before technical disassembly begins.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 disabled:opacity-60 rounded-lg shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Saving to Database...' : 'Confirm Service Request'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
