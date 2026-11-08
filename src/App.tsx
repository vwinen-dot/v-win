import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { ProductsSection } from './components/ProductsSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServiceProcess } from './components/ServiceProcess';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { AppointmentsManagerModal } from './components/AppointmentsManagerModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [appointmentsManagerOpen, setAppointmentsManagerOpen] = useState(false);
  const [modalService, setModalService] = useState<string>('');
  const [modalCategory, setModalCategory] = useState<string>('');

  // Contact form prefilled values
  const [contactCategory, setContactCategory] = useState<string>('');
  const [contactService, setContactService] = useState<string>('');

  const handleOpenBookingModal = (serviceId?: string) => {
    if (serviceId) {
      setModalService(serviceId);
    }
    setBookingModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 84;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectCategoryForInquiry = (categoryName: string) => {
    setContactCategory(categoryName);
    setContactService('New Appliance Sales Inquiry');
    scrollToSection('contact');
  };

  const handleBookSpecificService = (serviceTitle: string) => {
    setContactService(serviceTitle);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-body selection:bg-orange-500 selection:text-white">
      {/* Sticky Header & Navigation */}
      <Navbar
        onOpenBookingModal={() => handleOpenBookingModal()}
        onOpenAppointmentsManager={() => setAppointmentsManagerOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreServices={() => scrollToSection('services')}
          onContactUs={() => scrollToSection('contact')}
        />

        {/* About Us Section */}
        <AboutUs />

        {/* Our Products Section */}
        <ProductsSection
          onSelectCategoryForInquiry={handleSelectCategoryForInquiry}
        />

        {/* Repair & Services Section */}
        <ServicesSection
          onBookService={handleBookSpecificService}
        />

        {/* Why Choose V WIN? Section */}
        <WhyChooseUs />

        {/* Our Service Process Section */}
        <ServiceProcess
          onStartProcess={() => scrollToSection('contact')}
        />

        {/* Contact Us Section */}
        <ContactSection
          prefilledCategory={contactCategory}
          prefilledService={contactService}
        />
      </main>

      {/* Corporate Footer */}
      <Footer onOpenAppointmentsManager={() => setAppointmentsManagerOpen(true)} />

      {/* Quick Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService={modalService}
        defaultCategory={modalCategory}
      />

      {/* Supabase Appointments & Database Guide Modal */}
      <AppointmentsManagerModal
        isOpen={appointmentsManagerOpen}
        onClose={() => setAppointmentsManagerOpen(false)}
      />
    </div>
  );
}
