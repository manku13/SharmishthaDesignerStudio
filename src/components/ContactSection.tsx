"use client";

import { useEffect, useRef } from "react";

export default function ContactSection({ onBooking }: { onBooking: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    el.querySelectorAll(".reveal").forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="relative bg-[#FAF8F5] py-32 md:py-48 noise-overlay" ref={ref}>
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20 relative z-10">
        {/* Full-width header */}
        <div className="mb-20 reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="accent-line" />
            <span
              className="text-[10px] tracking-[0.35em] text-[#C17F59] uppercase"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              Get in Touch
            </span>
          </div>
          <h2 className="display-lg text-[#0B0B0F] max-w-3xl">
            Let&apos;s create something
            <br />
            <em className="italic text-[#C17F59]">extraordinary</em> together
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          {/* Left — contact info with card-style layout */}
          <div className="lg:col-span-5">
            <div className="space-y-10">
              <div className="reveal" style={{ transitionDelay: "100ms" }}>
                <span
                  className="text-[9px] tracking-[0.3em] text-[#6B6B7B] uppercase"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  Visit the Atelier
                </span>
                <p className="body-text text-[#0B0B0F] mt-3">
                  Koushalya Vatika, Gorakhpur
                  <br />
                  Jabalpur, Madhya Pradesh
                </p>
              </div>

              <div className="reveal" style={{ transitionDelay: "200ms" }}>
                <span
                  className="text-[9px] tracking-[0.3em] text-[#6B6B7B] uppercase"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  Studio Hours
                </span>
                <p className="body-text text-[#0B0B0F] mt-3">
                  11:00 AM — 8:30 PM
                  <br />
                  <span className="text-[#6B6B7B]">Open every day, by appointment preferred</span>
                </p>
              </div>

              <div className="reveal" style={{ transitionDelay: "300ms" }}>
                <span
                  className="text-[9px] tracking-[0.3em] text-[#6B6B7B] uppercase"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  Direct Line
                </span>
                <a
                  href="tel:+917987306459"
                  className="body-text text-[#0B0B0F] mt-3 block hover:text-[#C17F59] transition-colors duration-300"
                >
                  +91 79873 06459
                </a>
              </div>

              <div className="flex gap-4 reveal" style={{ transitionDelay: "400ms" }}>
                <a
                  href="https://wa.me/917987306459"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 text-[10px] tracking-[0.15em] uppercase px-6 py-3.5 bg-[#0B0B0F] text-white hover:bg-[#C17F59] transition-all duration-500"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
                <button
                  onClick={onBooking}
                  className="text-[10px] tracking-[0.15em] uppercase px-6 py-3.5 border border-[#0B0B0F] text-[#0B0B0F] hover:bg-[#C17F59] hover:border-[#C17F59] hover:text-white transition-all duration-500"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>

          {/* Right — map */}
          <div className="lg:col-span-7 reveal" style={{ transitionDelay: "200ms" }}>
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[420px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.5!2d79.95!3d23.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEwJzQ4LjAiTiA3OcKwNTcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                className="absolute inset-0 w-full h-full border-0 grayscale contrast-[1.1]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sharmishtha Designer Studio location"
              />
              {/* Overlay border */}
              <div className="absolute inset-0 border border-[#0B0B0F]/5 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
