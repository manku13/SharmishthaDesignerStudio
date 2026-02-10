"use client";

import { useState, useEffect } from "react";

export default function Hero({ onBooking }: { onBooking: () => void }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-[#0B0B0F] letterbox vignette-gold film-grain"
    >
      {/* Background with cinematic pan */}
      <div className="absolute inset-0 animate-cinematic-pan">
        <div
          className="absolute inset-[-20%] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?q=80&w=2070&auto=format&fit=crop')",
            filter: "saturate(0.7) brightness(0.45) contrast(1.15) sepia(0.1)",
          }}
        />
      </div>

      {/* Layered gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/20 to-[#0B0B0F]/40 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0F]/50 via-transparent to-[#0B0B0F]/30 z-[1]" />

      {/* Decorative side elements */}
      <div
        className={`absolute left-8 md:left-16 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-4 transition-all duration-[1.5s] ${loaded ? "opacity-40" : "opacity-0"
          }`}
        style={{ transitionDelay: "2000ms" }}
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-[#C17F59]/60" />
        <span
          className="text-[9px] tracking-[0.4em] text-white/40 uppercase"
          style={{ fontFamily: "var(--font-heading)", writingMode: "vertical-lr" }}
        >
          Est. 2019
        </span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#C17F59]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Micro label with decorative lines */}
        <div
          className={`flex items-center gap-4 transition-all duration-[1.2s] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#C17F59]" />
          <span
            className="text-[10px] tracking-[0.4em] uppercase text-[#D4B896]"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
          >
            Atelier of Dreams
          </span>
          <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#C17F59]" />
        </div>

        {/* Main headline — enormous display type */}
        <h1
          className={`display-xl text-white mt-8 max-w-5xl transition-all duration-[1.4s] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          style={{ transitionDelay: "800ms" }}
        >
          Where Fabric
          <br />
          Becomes{" "}
          <em className="italic text-[#E8C4B8]">Poetry</em>
        </h1>

        {/* Subline */}
        <p
          className={`body-text text-white/45 mt-8 max-w-md transition-all duration-[1.2s] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          style={{ transitionDelay: "1200ms" }}
        >
          Bespoke bridal couture handcrafted in Jabalpur.
          <br className="hidden sm:block" />
          Each creation, a masterpiece. Each stitch, intentional.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-5 mt-12 transition-all duration-[1.2s] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          style={{ transitionDelay: "1500ms" }}
        >
          <button
            onClick={onBooking}
            className="group relative px-10 py-4 bg-[#C17F59] text-white text-[11px] tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:bg-[#A66B47] hover:shadow-[0_8px_40px_rgba(193,127,89,0.3)]"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
          >
            <span className="relative z-10">Begin Your Story</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
          <a
            href="#collections"
            className="px-10 py-4 border border-white/15 text-white/70 text-[11px] tracking-[0.2em] uppercase hover:border-[#C17F59]/50 hover:text-white hover:bg-white/[0.02] transition-all duration-500"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
          >
            Explore Collections
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-[1.5s] ${loaded ? "opacity-50" : "opacity-0"
            }`}
          style={{ transitionDelay: "2200ms" }}
        >
          <span
            className="text-white/40 text-[8px] tracking-[0.4em] uppercase"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Discover
          </span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#C17F59]/60 to-transparent" />
        </div>
      </div>

      {/* Bottom right corner detail */}
      <div
        className={`absolute bottom-[10%] right-8 md:right-16 z-10 hidden lg:block transition-all duration-[1.5s] ${loaded ? "opacity-30" : "opacity-0"
          }`}
        style={{ transitionDelay: "2000ms" }}
      >
        <span className="text-[9px] tracking-[0.3em] text-white/40 uppercase" style={{ fontFamily: "var(--font-heading)" }}>
          Jabalpur, India
        </span>
      </div>
    </section>
  );
}
