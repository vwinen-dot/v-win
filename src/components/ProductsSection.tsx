import React, { useState } from 'react';
import { PRODUCT_CATEGORIES, ApplianceProductCategory } from '../data/appliancesData';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { CategoryDetailModal } from './CategoryDetailModal';

interface ProductsSectionProps {
  onSelectCategoryForInquiry: (categoryName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectCategoryForInquiry,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ApplianceProductCategory | null>(null);

  return (
    <section id="products" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-900 bg-white border border-slate-200 px-3 py-1 rounded-md mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span>V WIN Appliances Range</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Our Products & Appliance Categories
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              V WIN Enterprises supplies reliable household electrical and electronic appliances built for longevity, energy conservation, and everyday ease of use.
            </p>
          </div>

          <div className="text-xs text-slate-500 bg-white p-3.5 rounded-lg border border-slate-200 shrink-0 max-w-xs">
            <span className="font-semibold text-slate-700">Appliance Sales & Consulting:</span> Need help choosing the right capacity or model? Our technical advisors assist your purchase.
          </div>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCT_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col overflow-hidden group"
            >
              {/* Image Container with 4:3 Aspect */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={category.image}
                  alt={category.altText}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-bold text-blue-900 uppercase tracking-wider shadow-sm">
                  V WIN Catalogue
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    {category.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Featured Appliance Items List */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                      Included Appliances:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.featuredItems.slice(0, 6).map((item, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200/70"
                        >
                          {item}
                        </span>
                      ))}
                      {category.featuredItems.length > 6 && (
                        <span className="text-xs font-medium text-orange-600 py-1 px-1">
                          +{category.featuredItems.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className="text-xs font-bold text-blue-900 hover:text-orange-600 transition-colors flex items-center gap-1.5 cursor-pointer py-1"
                  >
                    <span>Explore More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectCategoryForInquiry(category.name)}
                    className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-orange-600 rounded-lg transition-colors cursor-pointer"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explore More Detail Modal */}
      <CategoryDetailModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
        onInquire={(categoryName) => {
          onSelectCategoryForInquiry(categoryName);
        }}
      />
    </section>
  );
};
