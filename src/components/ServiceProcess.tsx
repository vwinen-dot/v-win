import React, { useState } from 'react';
import { SERVICE_PROCESS } from '../data/appliancesData';
import { PhoneCall, MessageSquareQuote, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

const stepIcons: Record<string, React.ReactNode> = {
  '01': <PhoneCall className="w-5 h-5 text-orange-600" />,
  '02': <MessageSquareQuote className="w-5 h-5 text-blue-900" />,
  '03': <Cpu className="w-5 h-5 text-orange-600" />,
  '04': <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
};

interface ServiceProcessProps {
  onStartProcess: () => void;
}

export const ServiceProcess: React.FC<ServiceProcessProps> = ({ onStartProcess }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-md mb-3">
            <span>Workflow & Protocol</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Our Service Process
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            A structured, transparent four-step workflow from initial enquiry to verified appliance handover.
          </p>
        </div>

        {/* Desktop Horizontal Timeline (Visible on lg screens) */}
        <div className="hidden lg:block relative mb-12">
          {/* Continuous Connecting Line */}
          <div className="absolute top-1/2 left-12 right-12 h-1 bg-slate-200 -translate-y-12 z-0" />
          <div
            className="absolute top-1/2 left-12 h-1 bg-orange-500 -translate-y-12 z-0 transition-all duration-300"
            style={{ width: `${(activeStep / 3) * 78}%` }}
          />

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {SERVICE_PROCESS.map((step, index) => {
              const isSelected = activeStep === index;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  className={`bg-white rounded-xl border p-6 transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'border-orange-500 shadow-md ring-2 ring-orange-500/20'
                      : 'border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm transition-colors ${
                        isSelected
                          ? 'bg-orange-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {step.number}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                      {stepIcons[step.number]}
                    </div>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
                    {step.step}
                  </span>
                  <h3 className="font-display font-bold text-lg text-slate-900 mt-1">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Outcome:</span>
                    <span className="font-semibold text-slate-700">{step.timeframe}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline (Visible on < lg screens) */}
        <div className="lg:hidden relative pl-6 border-l-2 border-orange-400 space-y-8 mb-12 ml-4">
          {SERVICE_PROCESS.map((step, idx) => (
            <div key={step.number} className="relative bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
              {/* Dot on Timeline */}
              <div className="absolute -left-[33px] top-4 w-6 h-6 rounded-full bg-orange-600 border-4 border-white flex items-center justify-center text-[10px] text-white font-bold shadow-xs">
                {idx + 1}
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  {step.step} · Step {step.number}
                </span>
                <div className="p-1.5 rounded-md bg-slate-50">
                  {stepIcons[step.number]}
                </div>
              </div>

              <h3 className="font-display font-bold text-base text-slate-900">
                {step.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>
              <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="font-semibold text-slate-700">Service Stage: </span>
                <span>{step.timeframe}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Bar */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display font-bold text-xl text-white">
              Ready to schedule an appliance assessment?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Describe your appliance symptoms now. Our technicians provide an honest diagnosis and transparent estimate before carrying out repairs.
            </p>
          </div>
          <button
            type="button"
            onClick={onStartProcess}
            className="w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm shrink-0 cursor-pointer"
          >
            <span>Begin Step 1: Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
