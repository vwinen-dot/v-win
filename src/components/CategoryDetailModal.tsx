import React from 'react';
import { ApplianceProductCategory } from '../data/appliancesData';
import { X, CheckCircle, ArrowRight, Shield, HelpCircle, Phone } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/appliancesData';

interface CategoryDetailModalProps {
  category: ApplianceProductCategory | null;
  onClose: () => void;
  onInquire: (categoryName: string) => void;
}

export const CategoryDetailModal: React.FC<CategoryDetailModalProps> = ({
  category,
  onClose,
  onInquire,
}) => {
  if (!category) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-900">
              V WIN Home Appliances · Catalogue
            </span>
            <h3 className="text-xl font-bold font-display text-slate-900">{category.name}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Image & Description */}
          <div className="relative rounded-xl overflow-hidden border border-slate-200 aspect-video">
            <img
              src={category.image}
              alt={category.altText}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 text-white">
              <p className="text-xs font-semibold text-orange-400">Available via V WIN Enterprises</p>
              <p className="text-sm font-medium text-slate-200">{category.description}</p>
            </div>
          </div>

          {/* Included Appliance Lineup */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <span>Appliances in this Category:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {category.featuredItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 text-sm font-medium text-slate-800"
                >
                  <CheckCircle className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Quality & Service Highlights */}
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/70 space-y-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-blue-800" />
              <span>V WIN Quality & Support Standards</span>
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {category.keyHighlights.map((hl, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Notice */}
          <div className="text-xs text-slate-500 flex items-start gap-2 bg-slate-50 p-3 rounded-lg">
            <HelpCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <span>
              V WIN Enterprises provides guidance on appliance selection, installation, and after-purchase maintenance. For specifications and purchase assistance, contact our technical team directly.
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-slate-200 bg-slate-50">
          <div className="text-xs text-slate-600 flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-orange-600" />
            <span>Helpline: {COMPANY_DETAILS.phonePlaceholder}</span>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onInquire(category.name);
                onClose();
              }}
              className="w-1/2 sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
            >
              <span>Enquire About Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
