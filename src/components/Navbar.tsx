import React, { useState, useEffect } from 'react';
import { VWinLogo } from './VWinLogo';
import { Menu, X, Phone, Wrench, Database } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/appliancesData';

interface NavbarProps {
  onOpenBookingModal?: (serviceId?: string) => void;
  onOpenAppointmentsManager?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBookingModal,
  onOpenAppointmentsManager,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking
      const sections = ['home', 'about', 'products', 'services', 'why-us', 'process', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Products', href: '#products', id: 'products' },
    { label: 'Repair & Services', href: '#services', id: 'services' },
    { label: 'Why Choose Us', href: '#why-us', id: 'why-us' },
    { label: 'Contact Us', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 84;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Top Utility Contact Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-slate-300 font-medium">
              V WIN Enterprises – Professional Appliance Sales & Service
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-orange-400 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
              {COMPANY_DETAILS.hours}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:vwinen@gmail.com"
              className="hover:text-white transition-colors text-slate-300 flex items-center gap-1.5"
            >
              <span>Email:</span>
              <span className="text-white font-medium">{COMPANY_DETAILS.email}</span>
            </a>
            <span className="text-slate-600">·</span>
            <a
              href="tel:+919920213799"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>Support:</span>
              <span className="text-white font-medium">{COMPANY_DETAILS.phonePlaceholder}</span>
            </a>
            {onOpenAppointmentsManager && (
              <>
                <span className="text-slate-600">·</span>
                <button
                  type="button"
                  onClick={onOpenAppointmentsManager}
                  className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                  title="View bookings saved in Supabase"
                >
                  <Database className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Appointments</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-md ${
          isScrolled ? 'shadow-md shadow-slate-900/5 border-b border-slate-200 py-3' : 'border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark / Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="inline-flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
              aria-label="V WIN Home Appliances Home"
            >
              <VWinLogo size="md" variant="dark" />
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`whitespace-nowrap transition-colors py-1 relative ${
                      isActive ? 'text-blue-900 font-semibold' : 'hover:text-blue-900'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action CTA */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-lg transition-colors shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 flex items-center gap-2"
              >
                <span>Contact Us</span>
              </a>

              {onOpenBookingModal && (
                <button
                  type="button"
                  onClick={() => onOpenBookingModal()}
                  className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200/80 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 flex items-center gap-1.5"
                >
                  <Wrench className="w-3.5 h-3.5 text-blue-700" />
                  <span>Book Service</span>
                </button>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="sm:hidden px-3.5 py-2 text-xs font-semibold text-white bg-orange-600 rounded-md"
              >
                Contact
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                    activeSection === link.id
                      ? 'bg-blue-50 text-blue-900 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full text-center py-3 text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-700 rounded-lg shadow-sm"
              >
                Contact V WIN Now
              </a>

              {onOpenBookingModal && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBookingModal();
                  }}
                  className="w-full text-center py-2.5 text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200"
                >
                  Book Service / Diagnostic
                </button>
              )}

              <div className="mt-2 text-xs text-slate-500 text-center">
                <span>Helpline: </span>
                <span className="font-semibold text-slate-700">{COMPANY_DETAILS.phonePlaceholder}</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
