"use client";

import { useEffect, useRef } from "react";

export default function AboutSection() {
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
    el.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative bg-[#FAF8F5] noise-overlay" ref={ref}>
      {/* Marquee strip */}
      <div className="py-6 bg-[#0B0B0F] overflow-hidden">
        <div className="marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="text-white/[0.07] text-[11px] tracking-[0.4em] uppercase whitespace-nowrap mx-12"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              Bespoke Couture &nbsp;&bull;&nbsp; Handcrafted Luxury &nbsp;&bull;&nbsp; Since 2019 &nbsp;&bull;&nbsp; Jabalpur Atelier &nbsp;&bull;&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="py-32 md:py-48">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
          {/* Section header — offset to left */}
          <div className="mb-20 reveal">
            <div className="flex items-center gap-4 mb-6">
              <div className="accent-line" />
              <span
                className="text-[10px] tracking-[0.35em] text-[#C17F59] uppercase"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                Our Philosophy
              </span>
            </div>
            <h2 className="display-lg text-[#0B0B0F] max-w-3xl">
              Not just clothing.
              <br />
              <em className="italic text-[#C17F59]">An experience</em> that lingers.
            </h2>
          </div>

          {/* Asymmetric layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* Left column — large editorial image */}
            <div className="lg:col-span-6 reveal-left">
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center gallery-item"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1200&auto=format&fit=crop')",
                      filter: "saturate(0.85) contrast(1.05)",
                    }}
                  />
                </div>
                {/* Floating stat card */}
                <div className="absolute -bottom-8 -right-4 md:right-[-30px] bg-[#0B0B0F] px-8 py-6 z-10">
                  <span
                    className="text-[48px] font-light text-white leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    500<span className="text-[#C17F59]">+</span>
                  </span>
                  <p
                    className="text-white/40 text-[9px] tracking-[0.3em] uppercase mt-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Bespoke Creations
                  </p>
                </div>
              </div>
            </div>

            {/* Right column — text + smaller image */}
            <div className="lg:col-span-5 lg:col-start-8 pt-0 lg:pt-24">
              <p className="body-text text-[#6B6B7B] reveal" style={{ transitionDelay: "100ms" }}>
                Born from a singular vision in 2019, Sharmishtha Designer Studio is where
                Indian craftsmanship meets contemporary elegance. Every thread we choose,
                every embellishment we place, is a deliberate act of artistry.
              </p>
              <p className="body-text text-[#6B6B7B] mt-5 reveal" style={{ transitionDelay: "200ms" }}>
                We don&apos;t follow trends. We create heirlooms. From hand-embroidered
                bridal lehengas to sculptural couture gowns, each piece is a conversation
                between tradition and the avant-garde — designed to make you feel
                extraordinary on your most extraordinary day.
              </p>

              {/* Stats row */}
              <div className="flex gap-10 mt-14 reveal" style={{ transitionDelay: "300ms" }}>
                <div>
                  <span
                    className="text-[36px] font-light text-[#0B0B0F] leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    6<span className="text-[#C17F59]">+</span>
                  </span>
                  <p
                    className="text-[#6B6B7B] text-[9px] tracking-[0.3em] uppercase mt-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Years of Craft
                  </p>
                </div>
                <div className="w-[1px] bg-[#0B0B0F]/10" />
                <div>
                  <span
                    className="text-[36px] font-light text-[#0B0B0F] leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    100<span className="text-[#C17F59]">%</span>
                  </span>
                  <p
                    className="text-[#6B6B7B] text-[9px] tracking-[0.3em] uppercase mt-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Made-to-Order
                  </p>
                </div>
              </div>

              {/* Small secondary image */}
              <div className="mt-14 reveal-right" style={{ transitionDelay: "400ms" }}>
                <div className="aspect-[16/9] overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center gallery-item"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=800&auto=format&fit=crop')",
                      filter: "saturate(0.8) contrast(1.05)",
                    }}
                  />
                </div>
                <p
                  className="text-[10px] tracking-[0.2em] text-[#6B6B7B] uppercase mt-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Inside our Jabalpur atelier
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
