import React from 'react';
import { CORE_VALUES } from '../data/appliancesData';
import { Smile, ShieldCheck, CheckCircle2, Wrench, HeartHandshake, Award, Cpu, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Smile: <Smile className="w-5 h-5 text-orange-600" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-blue-800" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-orange-600" />,
  Wrench: <Wrench className="w-5 h-5 text-blue-800" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-orange-600" />,
};

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-md mb-3">
            <span>Corporate Identity & Values</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            About V WIN Enterprises
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            V WIN Enterprises focuses on providing dependable home appliance solutions through professional repair services, maintenance support and appliance sales.
          </p>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            With practical experience in appliance servicing and technical support, our objective is to deliver convenient, dependable and customer-focused solutions to residential households and businesses alike.
          </p>
        </div>

        {/* Narrative & Visual Split */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Technical Workshop Photo */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200 shadow-md">
            <img
              src="/src/assets/images/repair_technician_service_1794140431964.jpg"
              alt="V WIN Enterprises technical service workshop with calibrated diagnostics and specialized tools"
              className="w-full h-80 sm:h-96 object-cover object-center"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 uppercase tracking-wider">
                <Cpu className="w-4 h-4 text-orange-400" />
                <span>Technical Bench Standards</span>
              </div>
              <p className="text-sm font-medium text-slate-200 mt-1">
                Precision electrical circuit diagnosis, motor rewinding, and component-level calibration.
              </p>
            </div>
          </div>

          {/* Right Narrative Cards */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-5 h-5 text-blue-900" />
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Engineering Commitment & Integrity
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Home appliances are vital to modern living comfort. When a mixer grinder, microwave, water geyser, or gas stove malfunctions, families require an honest technical partner who diagnoses accurately rather than pushing arbitrary replacements. V WIN Enterprises operates with standard diagnostic safety protocols, ensuring prolonged appliance life and peak operational efficiency.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-blue-900 text-white shadow-md">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Our Service Commitment</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                Reliable, Safe, & Customer-Centered Solutions
              </h3>
              <p className="mt-2 text-sm text-blue-100 leading-relaxed">
                Operating under the brand name <strong className="text-white font-semibold">V WIN Home Appliances</strong>, we bridge the gap between quality equipment sales and reliable post-purchase maintenance. Every customer receives dedicated attention, transparent pricing estimates, and dependable technical backup.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-display font-bold text-2xl text-slate-900">
              Our Core Values
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Principles guiding every appliance consultation, service diagnosis, and customer relationship at V WIN Enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                    {iconMap[val.iconName] || <CheckCircle2 className="w-5 h-5 text-blue-900" />}
                  </div>
                  <h4 className="font-display font-bold text-base text-slate-900">
                    {val.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-900">
                  <span>V WIN Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
