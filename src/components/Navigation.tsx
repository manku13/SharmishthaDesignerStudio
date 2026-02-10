"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Collections", href: "#collections" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation({ onBooking }: { onBooking: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#FAF8F5]/90 backdrop-blur-xl shadow-[0_1px_0_rgba(11,11,15,0.04)]"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-20 py-5">
          {/* Logo */}
          <a
            href="#home"
            className={`transition-colors duration-500 group ${
              scrolled ? "text-[#0B0B0F]" : "text-white"
            }`}
          >
            <div className="flex flex-col">
              <span
                className="text-[15px] tracking-[0.18em] font-light"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Sharmishtha
              </span>
              <span
                className="text-[8px] tracking-[0.35em] uppercase opacity-50 mt-[-2px]"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
              >
                Designer Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`animated-border text-[10px] tracking-[0.18em] uppercase pb-1 transition-all duration-300 hover:opacity-100 ${
                  scrolled
                    ? "text-[#0B0B0F]/50 hover:text-[#0B0B0F]"
                    : "text-white/50 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={onBooking}
              className={`ml-3 text-[10px] tracking-[0.18em] uppercase px-7 py-2.5 transition-all duration-500 ${
                scrolled
                  ? "bg-[#0B0B0F] text-white hover:bg-[#C17F59]"
                  : "bg-white/10 backdrop-blur-sm text-white border border-white/15 hover:bg-[#C17F59] hover:border-[#C17F59]"
              }`}
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              Book Now
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-6 h-[1px] transition-all duration-500 ${
                scrolled ? "bg-[#0B0B0F]" : "bg-white"
              } ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`}
            />
            <span
              className={`block w-6 h-[1px] transition-all duration-500 ${
                scrolled ? "bg-[#0B0B0F]" : "bg-white"
              } ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#0B0B0F] flex flex-col items-center justify-center animate-fade-in"
          role="dialog"
          aria-label="Mobile navigation"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-[#C17F59]/20" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-[#C17F59]/20" />

          <div className="flex flex-col items-center gap-7">
            <span
              className="text-[9px] tracking-[0.4em] text-[#C17F59]/60 uppercase mb-4"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              Navigation
            </span>
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-white text-[28px] font-light tracking-[0.05em] opacity-0 animate-fade-in-up hover:text-[#C17F59] transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-display)",
                  animationDelay: `${i * 80}ms`,
                  animationFillMode: "forwards",
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="accent-line mt-6" />
            <button
              onClick={() => {
                setMobileOpen(false);
                onBooking();
              }}
              className="mt-3 text-[11px] tracking-[0.2em] uppercase px-10 py-4 bg-[#C17F59] text-white hover:bg-[#A66B47] transition-all duration-300"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </>
  );
}
