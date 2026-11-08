import React from 'react';
import { WHY_CHOOSE_US } from '../data/appliancesData';
import { Shield, Sparkles, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-900 bg-white border border-slate-200 px-3 py-1 rounded-md mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span>The V WIN Distinction</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Why Choose V WIN?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Delivering dependable technical standards, transparent communications, and durable home appliance solutions.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200/90 p-8 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Number & Highlight */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display font-extrabold text-2xl text-blue-900/30 group-hover:text-blue-900 transition-colors">
                    0{item.id}
                  </span>
                  <span className="text-[11px] font-semibold tracking-wide text-orange-700 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200/60">
                    {item.highlight}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-900 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Assurance */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-blue-800" />
                <span>Verified Quality Assurance</span>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Personality Trust Strip */}
        <div className="mt-12 bg-white rounded-xl border border-slate-200 p-6 flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <p className="font-display font-bold text-xl text-slate-900">Professional</p>
            <p className="text-xs text-slate-500 mt-0.5">Trained technical engineers</p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-slate-200" />
          <div>
            <p className="font-display font-bold text-xl text-slate-900">Reliable</p>
            <p className="text-xs text-slate-500 mt-0.5">Consistent performance testing</p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-slate-200" />
          <div>
            <p className="font-display font-bold text-xl text-slate-900">Customer-Friendly</p>
            <p className="text-xs text-slate-500 mt-0.5">Transparent & courteous</p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-slate-200" />
          <div>
            <p className="font-display font-bold text-xl text-slate-900">Trustworthy</p>
            <p className="text-xs text-slate-500 mt-0.5">Ethical diagnostics & billing</p>
          </div>
        </div>
      </div>
    </section>
  );
};
