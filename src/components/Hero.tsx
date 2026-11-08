import React from 'react';
import { VWinLogo } from './VWinLogo';
import { ArrowRight, PhoneCall, ShieldCheck, Wrench, Sparkles, Clock, CheckCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/appliancesData';

interface HeroProps {
  onExploreServices: () => void;
  onContactUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onContactUs }) => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/60 pt-6 pb-16 lg:py-20 overflow-hidden border-b border-slate-200/80">
      {/* Subtle Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1e3a8a 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Proposition & Call to Action */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Editorial Brand Lockup / Trust Kicker */}
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50/90 border border-blue-200/70 px-3.5 py-1.5 rounded-md w-fit">
              <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
              <span>V WIN Enterprises · Authorized Appliance Specialists</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-5xl/tight text-slate-900 tracking-tight text-balance">
              Your Trusted Partner for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-800 to-blue-950">
                Home Appliances
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              {COMPANY_DETAILS.subheading}
            </p>

            <p className="mt-2 text-sm text-slate-500 max-w-xl">
              Specialising in household electrical and electronic appliances with dependable on-site repair, professional maintenance, and quality equipment solutions.
            </p>

            {/* Prominent Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={onExploreServices}
                className="px-6 py-3.5 text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-lg shadow-sm hover:shadow transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onContactUs}
                className="px-6 py-3.5 text-sm font-bold text-blue-900 bg-white hover:bg-slate-50 active:bg-slate-100 rounded-lg border border-slate-300 shadow-xs hover:border-slate-400 transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <PhoneCall className="w-4 h-4 text-orange-600" />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Key Service Highlights List */}
            <div className="mt-8 pt-8 border-t border-slate-200/90 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-blue-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Tested Reliability</h4>
                  <p className="text-[11px] text-slate-500">Rigorous safety standards</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Wrench className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Expert Repair</h4>
                  <p className="text-[11px] text-slate-500">12+ appliance categories</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1">
                <Clock className="w-5 h-5 text-blue-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Prompt Support</h4>
                  <p className="text-[11px] text-slate-500">Phone & WhatsApp booking</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual & Animated Brand Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl shadow-slate-900/10 bg-slate-900 group">
              <img
                src="/src/assets/images/hero_modern_appliances_1794140429239.jpg"
                alt="Modern home appliances including refrigerator, microwave, gas stove, and mixer grinder"
                className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="eager"
              />

              {/* Contrast Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/25 to-transparent pointer-events-none" />

              {/* Animated Corporate Brand Presentation Overlay */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/40 shadow-lg flex items-center gap-3">
                <VWinLogo size="sm" variant="dark" showSubtitle={true} />
              </div>

              {/* Bottom Information Card Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700/80 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 bg-orange-500/20 text-orange-400 rounded-md">
                      <Sparkles className="w-4 h-4 text-orange-400" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                        V WIN Quality Guarantee
                      </p>
                      <p className="text-xs text-slate-300">
                        Sales · Maintenance · Electrical Troubleshooting
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-slate-200">100% Genuine</span>
                    <p className="text-[10px] text-slate-400">Spare Parts Policy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Quick Feature Badge */}
            <div className="hidden sm:flex items-center gap-2.5 absolute -bottom-4 -left-4 bg-white p-3.5 rounded-xl border border-slate-200 shadow-lg text-slate-800">
              <div className="p-2 bg-blue-50 text-blue-900 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-800" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Residential & Commercial</p>
                <p className="text-[11px] text-slate-500">Dedicated Technical Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
