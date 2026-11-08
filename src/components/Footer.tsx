import React from 'react';
import { VWinLogo } from './VWinLogo';
import { COMPANY_DETAILS, REPAIR_SERVICES, PRODUCT_CATEGORIES } from '../data/appliancesData';
import { Phone, Mail, MapPin, Clock, ArrowUp, ShieldCheck, Database } from 'lucide-react';

interface FooterProps {
  onOpenAppointmentsManager?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointmentsManager }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <VWinLogo size="lg" variant="light" showSubtitle={true} />
              <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
                V WIN Enterprises operates under the brand name <strong className="text-white">V WIN Home Appliances</strong>, specializing in residential and commercial home appliance sales, technical diagnostics, component repair, and preventive maintenance.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-orange-400" />
              <span>Genuine Spares · Certified Bench Standards</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About V WIN</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">Appliance Range</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Repair & Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">Service Process</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Key Services Directory (SEO Friendly) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Specialized Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {REPAIR_SERVICES.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-orange-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#services" className="text-orange-400 font-semibold hover:underline">
                  + View All 12 Repair Services →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Col */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Service Desk
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-500">Helpline & Mobile</span>
                  <a href="tel:+919920213799" className="font-semibold text-white hover:text-orange-400 transition-colors">
                    {COMPANY_DETAILS.phonePlaceholder}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-500">Email Address</span>
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-white hover:underline">
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-500">Service Location Placeholder</span>
                  <span className="text-slate-300">{COMPANY_DETAILS.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-500">Operating Schedule</span>
                  <span className="text-slate-300">{COMPANY_DETAILS.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Key Term Cloud (Quiet, Clean unboxed metadata) */}
        <div className="py-6 border-b border-slate-800/80">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
            Appliance Engineering Keywords & Coverage:
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-400">
            <span>V WIN Enterprises</span>
            <span aria-hidden="true">·</span>
            <span>V WIN Home Appliances</span>
            <span aria-hidden="true">·</span>
            <span>Home Appliance Sales</span>
            <span aria-hidden="true">·</span>
            <span>Home Appliance Repair</span>
            <span aria-hidden="true">·</span>
            <span>Home Appliance Maintenance</span>
            <span aria-hidden="true">·</span>
            <span>Kitchen Appliance Repair</span>
            <span aria-hidden="true">·</span>
            <span>Mixer Grinder Repair</span>
            <span aria-hidden="true">·</span>
            <span>Gas Stove Repair</span>
            <span aria-hidden="true">·</span>
            <span>Home Appliance Technical Services</span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} <strong className="text-slate-200">V WIN Enterprises</strong>. All rights reserved. Brand name: <strong className="text-slate-200">V WIN Home Appliances</strong>.
          </p>

          <div className="flex items-center gap-4">
            {onOpenAppointmentsManager && (
              <button
                type="button"
                onClick={onOpenAppointmentsManager}
                className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Database className="w-3.5 h-3.5" />
                <span>Supabase Appointments</span>
              </button>
            )}
            <span className="text-slate-400">
              Professional Technical Solutions
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer border border-slate-800"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
