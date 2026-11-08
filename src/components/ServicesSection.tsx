import React, { useState } from 'react';
import { REPAIR_SERVICES, ApplianceServiceItem } from '../data/appliancesData';
import {
  Flame,
  RotateCw,
  Wand2,
  Tv,
  ThermometerSun,
  Droplets,
  Fan,
  Sun,
  Wind,
  Cog,
  Gauge,
  Wrench,
  ArrowRight,
  Clock,
  ShieldCheck,
  CheckCircle2,
  X,
  PhoneCall,
  Zap,
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/appliancesData';

interface ServicesSectionProps {
  onBookService: (serviceTitle: string) => void;
}

const serviceIconMap: Record<string, React.ReactNode> = {
  'gas-stove-repair': <Flame className="w-6 h-6 text-orange-600" />,
  'mixer-grinder-repair': <RotateCw className="w-6 h-6 text-blue-800" />,
  'hand-blender-repair': <Wand2 className="w-6 h-6 text-orange-600" />,
  'microwave-oven-repair': <Tv className="w-6 h-6 text-blue-800" />,
  'electric-iron-repair': <ThermometerSun className="w-6 h-6 text-orange-600" />,
  'geyser-repair': <Droplets className="w-6 h-6 text-blue-800" />,
  'fan-repair': <Fan className="w-6 h-6 text-orange-600" />,
  'toaster-repair': <Sun className="w-6 h-6 text-blue-800" />,
  'air-fryer-repair': <Wind className="w-6 h-6 text-orange-600" />,
  'food-processor-repair': <Cog className="w-6 h-6 text-blue-800" />,
  'pressure-cooker-servicing': <Gauge className="w-6 h-6 text-orange-600" />,
  'general-household-maintenance': <Wrench className="w-6 h-6 text-blue-800" />,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [inspectingService, setInspectingService] = useState<ApplianceServiceItem | null>(null);

  const filteredServices = REPAIR_SERVICES.filter((svc) => {
    if (activeCategory === 'all') return true;
    return svc.category === activeCategory;
  });

  return (
    <section id="services" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-md mb-3">
            <Wrench className="w-3.5 h-3.5 text-blue-800" />
            <span>Dedicated Technical Center</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Professional Repair & Maintenance Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Reliable technical support to keep your home appliances working efficiently.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            From electrical motor overhauls to gas burner balancing, our technicians apply rigorous safety checks and genuine spare parts across all household appliance categories.
          </p>
        </div>

        {/* Featured Technical Spotlight: Gas Stove Repair with 3D Cutaway Diagnostics */}
        <div className="mb-14 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl border border-slate-800 text-white overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* 3D Image Container */}
            <div className="lg:col-span-7 relative group overflow-hidden bg-slate-950">
              <img
                src="/src/assets/images/gas_stove_repair_3d.png"
                alt="Expert technician repairing modern gas stove with 3D exploded view of brass gas valve and spark ignition"
                className="w-full h-[320px] sm:h-[400px] lg:h-[440px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950/80" />

              {/* 3D Diagnostic Label Badge */}
              <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-semibold text-orange-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span>3D Exploded Diagnostic Cutaway</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-300 bg-slate-950/80 backdrop-blur-xs p-3 rounded-xl border border-slate-800/80">
                <span className="font-bold text-white">3D Technical Focus:</span> Calibrating brass gas valve, micro-switch spark ignition, and blue flame burner pressure.
              </div>
            </div>

            {/* Content & Action Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-md mb-3">
                  <Flame className="w-3.5 h-3.5 text-orange-400" />
                  <span>Featured Technical Service</span>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                  Gas Stove & Hob Diagnostic Repair
                </h3>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Our certified technicians conduct precision calibration of brass burner orifices, electronic spark ignition micro-switches, and air-fuel mixture valves to eliminate irregular yellow flames and guarantee zero gas leakage.
                </p>

                {/* 4 Diagnostic Checkpoints */}
                <div className="mt-6 space-y-2.5">
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span><strong>Flame Balancing:</strong> Eliminates yellow soot and restores clean blue flame combustion.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Leakage Safety Audit:</strong> High-sensitivity electronic sniffers test all joints & valves.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <Zap className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span><strong>Auto-Ignition Repair:</strong> Direct replacement of faulty piezo electrodes & switches.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <Wrench className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span><strong>Genuine Brass Components:</strong> 100% authentic heavy-gauge replacement jets.</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => onBookService('Gas Stove Repair')}
                  className="w-full sm:w-auto px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>Book Gas Stove Repair</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:+919920213799"
                  className="w-full sm:w-auto px-4 py-3 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-orange-400" />
                  <span>+91 99202 13799</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Category Filter Tabs (Zero-pill compliant button group) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-100 rounded-xl max-w-xl mx-auto mb-12 border border-slate-200/80">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-white text-blue-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Services (12)
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('kitchen')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeCategory === 'kitchen'
                ? 'bg-white text-blue-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Kitchen Appliances
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('home')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeCategory === 'home'
                ? 'bg-white text-blue-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Home & Geyser
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('cooking')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeCategory === 'cooking'
                ? 'bg-white text-blue-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Cooking & Microwave
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('maintenance')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeCategory === 'maintenance'
                ? 'bg-white text-blue-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Maintenance
          </button>
        </div>

        {/* 12 Individual Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-slate-200/90 p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Icon & Turnaround Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-blue-50/60 transition-colors">
                    {serviceIconMap[service.id] || <Wrench className="w-6 h-6 text-blue-800" />}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/60">
                    <Clock className="w-3 h-3 text-orange-500" />
                    <span>{service.turnaroundTime}</span>
                  </div>
                </div>

                {/* Service Heading */}
                <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-900 transition-colors">
                  {service.title}
                </h3>

                {/* Summary */}
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.summary}
                </p>

                {/* Common Issues Diagnostic Checklist */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Common Symptoms Serviced:
                  </p>
                  <ul className="space-y-1.5">
                    {service.commonIssues.slice(0, 3).map((issue, idx) => (
                      <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setInspectingService(service)}
                  className="text-xs font-semibold text-blue-900 hover:text-orange-600 transition-colors flex items-center gap-1 cursor-pointer py-1.5"
                >
                  <span>Diagnostic Info</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <button
                  type="button"
                  onClick={() => onBookService(service.title)}
                  className="px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-orange-600 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Book Service</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-100/80 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-slate-900">
                100% Genuine Replacement Parts Policy
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                All components, heating elements, thermostats, and gaskets supplied and fitted by V WIN adhere strictly to domestic safety standards.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              type="button"
              onClick={() => onBookService('General Inspection')}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-900 hover:bg-blue-950 rounded-lg transition-colors cursor-pointer"
            >
              Request Technical Assessment
            </button>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {inspectingService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div
            className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider">
                  V WIN Technical Specification
                </span>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  {inspectingService.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setInspectingService(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {inspectingService.image && (
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-200">
                <img
                  src={inspectingService.image}
                  alt={inspectingService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-slate-950/90 text-orange-400 text-[11px] font-bold px-2.5 py-1 rounded-md border border-slate-700 flex items-center gap-1.5 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span>3D Exploded Diagnostic Cutaway</span>
                </div>
              </div>
            )}

            <div className="p-6 overflow-y-auto space-y-4">
              <p className="text-sm text-slate-700">{inspectingService.summary}</p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Technical Service Scope:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {inspectingService.serviceScope.map((scope, i) => (
                    <li key={i} className="flex items-start gap-2 bg-slate-50 p-2 rounded-md">
                      <span className="font-bold text-blue-900">•</span>
                      <span>{scope}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Symptoms Addressed:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {inspectingService.commonIssues.map((issue, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-orange-50 text-orange-800 border border-orange-200/60 px-2.5 py-1 rounded-md"
                    >
                      {issue}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-100 p-3 rounded-lg flex items-center justify-between text-xs text-slate-600">
                <span className="font-semibold text-slate-700">Typical Turnaround:</span>
                <span className="font-bold text-blue-900">{inspectingService.turnaroundTime}</span>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setInspectingService(null)}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = inspectingService.title;
                  setInspectingService(null);
                  onBookService(title);
                }}
                className="px-5 py-2.5 text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-lg flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Book This Service</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
