import React, { useState } from 'react';
import { COMPANY_DETAILS, PRODUCT_CATEGORIES, REPAIR_SERVICES } from '../data/appliancesData';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  MessageSquare,
  ShieldAlert,
  Sparkles,
  Database,
} from 'lucide-react';
import { saveBookingAppointment } from '../lib/supabase';

interface ContactSectionProps {
  prefilledCategory?: string;
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledCategory = '',
  prefilledService = '',
}) => {
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    emailAddress: '',
    applianceCategory: prefilledCategory || '',
    serviceRequired: prefilledService || '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    customerName: string;
    category: string;
    service: string;
    syncedToCloud?: boolean;
  } | null>(null);

  // Sync prefilled data if updated externally
  React.useEffect(() => {
    if (prefilledCategory) {
      setFormData((prev) => ({ ...prev, applianceCategory: prefilledCategory }));
    }
  }, [prefilledCategory]);

  React.useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, serviceRequired: prefilledService }));
    }
  }, [prefilledService]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.customerName.trim()) {
      errs.customerName = 'Customer name is required.';
    } else if (formData.customerName.trim().length < 2) {
      errs.customerName = 'Name must be at least 2 characters.';
    }

    const phoneRegex = /^[+]?[\d\s-]{8,15}$/;
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone number is required for service confirmation.';
    } else if (!phoneRegex.test(formData.phoneNumber.trim())) {
      errs.phoneNumber = 'Please enter a valid phone number (8-15 digits).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.emailAddress.trim()) {
      errs.emailAddress = 'Email address is required.';
    } else if (!emailRegex.test(formData.emailAddress.trim())) {
      errs.emailAddress = 'Please enter a valid email address.';
    }

    if (!formData.applianceCategory) {
      errs.applianceCategory = 'Please select an appliance category.';
    }

    if (!formData.serviceRequired) {
      errs.serviceRequired = 'Please specify the service required.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide details or symptoms of the appliance issue.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const generatedRef = `VWIN-${Math.floor(100000 + Math.random() * 900000)}`;

    const result = await saveBookingAppointment({
      reference_id: generatedRef,
      customer_name: formData.customerName.trim(),
      phone_number: formData.phoneNumber.trim(),
      email_address: formData.emailAddress.trim() || undefined,
      appliance_category: formData.applianceCategory,
      service_required: formData.serviceRequired,
      message: formData.message.trim(),
      source: 'web_contact_form',
    });

    setIsSubmitting(false);
    setSubmittedData({
      referenceId: generatedRef,
      customerName: formData.customerName,
      category: formData.applianceCategory,
      service: formData.serviceRequired,
      syncedToCloud: result.syncedToCloud,
    });

    // Clear form
    setFormData({
      customerName: '',
      phoneNumber: '',
      emailAddress: '',
      applianceCategory: '',
      serviceRequired: '',
      message: '',
    });
    setErrors({});
  };

  const handleReset = () => {
    setSubmittedData(null);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-900 bg-white border border-slate-200 px-3 py-1 rounded-md mb-3 shadow-xs">
            <Mail className="w-3.5 h-3.5 text-orange-500" />
            <span>Direct Client Communications</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Contact V WIN Enterprises
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Reach our service desk for appliance repairs, scheduled maintenance, or new appliance sales inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Business Details & Google Maps Placeholder */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <h3 className="font-display font-bold text-xl text-slate-900 mb-6">
                Official Business Channels
              </h3>

              <div className="space-y-6">
                {/* Business Name */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-blue-50 text-blue-900 shrink-0">
                    <Sparkles className="w-5 h-5 text-blue-800" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Business Entity
                    </span>
                    <p className="text-base font-bold text-slate-900">
                      {COMPANY_DETAILS.businessName}
                    </p>
                    <p className="text-xs text-orange-600 font-semibold">
                      Operating as {COMPANY_DETAILS.brandName}
                    </p>
                  </div>
                </div>

                {/* Contact Number */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-orange-50 text-orange-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Helpline & Technical Calling
                    </span>
                    <p className="text-sm font-semibold text-slate-800">
                      <a
                        href="tel:+919920213799"
                        className="hover:text-orange-600 transition-colors focus-visible:outline-none focus-visible:underline"
                      >
                        {COMPANY_DETAILS.phonePlaceholder}
                      </a>
                    </p>
                    <p className="text-xs text-slate-500">Tap to call our technical desk</p>
                  </div>
                </div>

                {/* WhatsApp Support */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      WhatsApp Messaging Support
                    </span>
                    <p className="text-sm font-semibold text-slate-800">
                      <a
                        href="https://wa.me/919920213799?text=Hello%20V%20WIN%20Home%20Appliances,%20I%20need%20assistance%20with%20my%20appliance."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-700 transition-colors focus-visible:outline-none focus-visible:underline"
                      >
                        {COMPANY_DETAILS.whatsappPlaceholder}
                      </a>
                    </p>
                    <p className="text-xs text-slate-500">Fast photo & symptom diagnostics on WhatsApp</p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-blue-50 text-blue-900 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Official Email
                    </span>
                    <p className="text-sm font-semibold text-slate-800">
                      {COMPANY_DETAILS.email}
                    </p>
                    <p className="text-xs text-slate-500">Inquiries, quotes & partnerships</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-slate-100 text-slate-700 shrink-0">
                    <MapPin className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Workshop & Service Center
                    </span>
                    <p className="text-sm font-medium text-slate-800">
                      {COMPANY_DETAILS.address}
                    </p>
                    <p className="text-xs text-slate-500">Registered Business Address Placeholder</p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100">
                  <div className="p-2.5 rounded-lg bg-slate-100 text-slate-700 shrink-0">
                    <Clock className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Operational Hours
                    </span>
                    <p className="text-sm font-semibold text-slate-800">
                      {COMPANY_DETAILS.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Location Placeholder Card */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  <span className="text-xs font-bold text-slate-800">
                    Google Maps Service Location
                  </span>
                </div>
                <span className="text-[11px] text-slate-500">Interactive Map View</span>
              </div>

              {/* Styled Vector Map Placeholder Visual */}
              <div className="relative h-48 bg-slate-200 overflow-hidden flex items-center justify-center">
                {/* SVG Map Grid Layout */}
                <svg className="w-full h-full opacity-60" viewBox="0 0 400 200" fill="none">
                  {/* Road grid lines */}
                  <path d="M0 60 H400" stroke="#cbd5e1" strokeWidth="8" />
                  <path d="M0 130 H400" stroke="#cbd5e1" strokeWidth="12" />
                  <path d="M120 0 V200" stroke="#cbd5e1" strokeWidth="10" />
                  <path d="M260 0 V200" stroke="#cbd5e1" strokeWidth="8" />
                  <path d="M40 0 L360 200" stroke="#e2e8f0" strokeWidth="6" />
                  {/* Green park zone */}
                  <rect x="140" y="20" width="100" height="90" rx="8" fill="#dcfce7" />
                  {/* Water stream */}
                  <path d="M0 180 Q200 160 400 180" stroke="#bfdbfe" strokeWidth="14" fill="none" />
                </svg>

                {/* Central Pin Card */}
                <div className="absolute z-10 flex flex-col items-center">
                  <div className="bg-blue-900 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg border border-white/50 flex items-center gap-1.5 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-orange-400" />
                    <span>V WIN Enterprises</span>
                  </div>
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-blue-900" />
                  <div className="w-3 h-1 bg-black/20 rounded-full mt-0.5 blur-xs" />
                </div>

                <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-xs text-[10px] text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                  Google Maps Location Placeholder
                </div>
              </div>

              <div className="p-3 bg-slate-50 text-xs text-slate-600 flex items-center justify-between">
                <span>Central Commercial Hub Service Territory</span>
                <span className="text-blue-900 font-semibold flex items-center gap-1">
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Enquiry & Service Request Form
                </span>
                <h3 className="font-display font-bold text-2xl text-slate-900 mt-1">
                  Submit Appliance Request
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Complete the fields below to receive transparent diagnostic guidance and appointment confirmation.
                </p>
              </div>

              {submittedData ? (
                /* Success Confirmation State */
                <div className="p-8 rounded-xl bg-emerald-50/80 border border-emerald-200 text-center animate-in fade-in duration-200">
                  <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-slate-900">
                    Enquiry Received Successfully!
                  </h4>
                  <p className="mt-2 text-sm text-slate-700">
                    Thank you, <strong className="text-slate-900">{submittedData.customerName}</strong>. Our appliance specialist has logged your request.
                  </p>

                  <div className="my-6 p-4 bg-white rounded-xl border border-emerald-200/80 inline-block text-left text-xs space-y-1.5 shadow-xs">
                    <p className="text-slate-500">
                      Service Ticket Reference: <strong className="text-blue-900 font-mono text-sm">{submittedData.referenceId}</strong>
                    </p>
                    <p className="text-slate-600">
                      Category: <span className="font-medium text-slate-900">{submittedData.category}</span>
                    </p>
                    <p className="text-slate-600">
                      Service Type: <span className="font-medium text-slate-900">{submittedData.service}</span>
                    </p>
                    <p className="text-slate-500 pt-1 text-[11px]">
                      Our technical supervisor will contact you via phone or WhatsApp shortly.
                    </p>

                    <div className="pt-2 border-t border-emerald-200/80 flex items-center gap-1.5 text-[11px] text-emerald-800">
                      <Database className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>
                        {submittedData.syncedToCloud
                          ? 'Saved to Supabase database (creocdvivegokgruavpo)'
                          : 'Appointment logged securely & cached'}
                      </span>
                    </div>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Validated Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Customer Name */}
                  <div>
                    <label htmlFor="customerName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Customer Name <span className="text-orange-600">*</span>
                    </label>
                    <input
                      id="customerName"
                      type="text"
                      value={formData.customerName}
                      onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-white text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                        errors.customerName
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-slate-300 focus:border-blue-900 focus:ring-blue-100'
                      }`}
                    />
                    {errors.customerName && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.customerName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phoneNumber" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number <span className="text-orange-600">*</span>
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-white text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                          errors.phoneNumber
                            ? 'border-red-500 focus:ring-red-200'
                            : 'border-slate-300 focus:border-blue-900 focus:ring-blue-100'
                        }`}
                      />
                      {errors.phoneNumber && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phoneNumber}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label htmlFor="emailAddress" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address <span className="text-orange-600">*</span>
                      </label>
                      <input
                        id="emailAddress"
                        type="email"
                        value={formData.emailAddress}
                        onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                        placeholder="yourname@domain.com"
                        className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-white text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                          errors.emailAddress
                            ? 'border-red-500 focus:ring-red-200'
                            : 'border-slate-300 focus:border-blue-900 focus:ring-blue-100'
                        }`}
                      />
                      {errors.emailAddress && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.emailAddress}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Appliance Category & Service Required */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Appliance Category Dropdown */}
                    <div>
                      <label htmlFor="applianceCategory" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Appliance Category <span className="text-orange-600">*</span>
                      </label>
                      <select
                        id="applianceCategory"
                        value={formData.applianceCategory}
                        onChange={(e) => setFormData({ ...formData, applianceCategory: e.target.value })}
                        className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-white text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                          errors.applianceCategory
                            ? 'border-red-500 focus:ring-red-200'
                            : 'border-slate-300 focus:border-blue-900 focus:ring-blue-100'
                        }`}
                      >
                        <option value="">Select Category...</option>
                        {PRODUCT_CATEGORIES.map((cat) => (
                          <option key={cat.id} value={cat.name}>
                            {cat.name}
                          </option>
                        ))}
                        <option value="General Home Utility">General Household Utility</option>
                      </select>
                      {errors.applianceCategory && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.applianceCategory}</span>
                        </p>
                      )}
                    </div>

                    {/* Service Required Dropdown */}
                    <div>
                      <label htmlFor="serviceRequired" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Service Required <span className="text-orange-600">*</span>
                      </label>
                      <select
                        id="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-white text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                          errors.serviceRequired
                            ? 'border-red-500 focus:ring-red-200'
                            : 'border-slate-300 focus:border-blue-900 focus:ring-blue-100'
                        }`}
                      >
                        <option value="">Select Service...</option>
                        <option value="Appliance Repair & Breakdown Fix">Appliance Repair / Breakdown Fix</option>
                        <option value="Preventative Maintenance Service">Preventative Maintenance Service</option>
                        <option value="New Appliance Sales Inquiry">New Appliance Sales Inquiry</option>
                        <option value="Appliance Installation & Setup">Appliance Installation & Setup</option>
                        <option value="Technical Inspection & Assessment">Technical Inspection & Assessment</option>
                        {REPAIR_SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                      {errors.serviceRequired && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.serviceRequired}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message / Symptoms */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Message & Appliance Problem Details <span className="text-orange-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your appliance symptoms (e.g., Mixer grinder making high grinding noise and smoking, or Gas stove burner has low yellow flame)..."
                      className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-white text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-slate-300 focus:border-blue-900 focus:ring-blue-100'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Privacy / Safety Notice */}
                  <div className="text-[11px] text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                    <span>
                      V WIN Enterprises respects your privacy. Your contact details are used exclusively for scheduling appliance inspections, diagnostics, and service estimates.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 disabled:opacity-60 rounded-lg shadow-sm hover:shadow transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  >
                    {isSubmitting ? (
                      <span>Submitting Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Enquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
