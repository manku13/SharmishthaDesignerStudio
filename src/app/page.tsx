"use client";

import { useState, useEffect, useRef } from "react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/use-animations";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import CollectionsSection from "@/components/CollectionsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import LightboxModal from "@/components/LightboxModal";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingPreset, setBookingPreset] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openBooking = (preset?: string) => {
    setBookingPreset(preset || null);
    setBookingOpen(true);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <Navigation onBooking={() => openBooking()} />
      <main id="main-content">
        <Hero onBooking={() => openBooking()} />
        <AboutSection />
        <ServicesSection />
        <CollectionsSection />
        <GallerySection onLightbox={openLightbox} onRequestLook={openBooking} />
        <ContactSection onBooking={() => openBooking()} />
      </main>
      <Footer />
      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preset={bookingPreset}
      />
      <LightboxModal
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentIndex={lightboxIndex}
        onChangeIndex={setLightboxIndex}
      />
      <CookieConsent />
    </>
  );
}
