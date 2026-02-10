"use client";

import { useEffect, useRef } from "react";

const COLLECTIONS = [
  {
    title: "The Bride",
    subtitle: "Timeless silhouettes for your sacred day",
    image: "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?q=80&w=1200&auto=format&fit=crop",
    pieces: "24",
    accent: "#E8C4B8",
  },
  {
    title: "After Dark",
    subtitle: "Reception & cocktail elegance",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    pieces: "18",
    accent: "#D4B896",
  },
  {
    title: "Festiva",
    subtitle: "Contemporary meets celebration",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop",
    pieces: "32",
    accent: "#A8B5A0",
  },
  {
    title: "Atelier",
    subtitle: "Avant-garde couture statements",
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=1200&auto=format&fit=crop",
    pieces: "12",
    accent: "#B8A9C9",
  },
];

export default function CollectionsSection() {
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
      { threshold: 0.05 }
    );
    el.querySelectorAll(".reveal").forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="collections" className="relative bg-[#F0EDE8] py-32 md:py-48" ref={ref}>
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-8 reveal">
            <div className="flex items-center gap-4 mb-6">
              <div className="accent-line" />
              <span
                className="text-[10px] tracking-[0.35em] text-[#C17F59] uppercase"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                Collections
              </span>
            </div>
            <h2 className="display-lg text-[#0B0B0F]">
              Four worlds.
              <br />
              One <em className="italic text-[#C17F59]">vision</em>.
            </h2>
          </div>
          <div className="lg:col-span-3 lg:col-start-10 flex items-end reveal" style={{ transitionDelay: "100ms" }}>
            <p className="body-text text-[#6B6B7B]">
              Each collection is a chapter in our story of craft, draped in intention.
            </p>
          </div>
        </div>

        {/* Collections — staggered height grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {COLLECTIONS.map((col, i) => (
            <a
              key={i}
              href="#gallery"
              className={`reveal group block ${i % 2 === 1 ? "lg:mt-16" : ""}`}
              style={{ transitionDelay: `${(i + 1) * 120}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${col.image}')`,
                    filter: "saturate(0.75) contrast(1.05)",
                  }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/80 via-[#0B0B0F]/10 to-transparent" />
                {/* Hover color wash */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                  style={{ background: col.accent }}
                />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-[1px]" style={{ background: col.accent }} />
                    <span
                      className="text-[9px] tracking-[0.3em] uppercase"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 600, color: col.accent }}
                    >
                      {col.pieces} Pieces
                    </span>
                  </div>
                  <h3
                    className="text-white text-[28px] md:text-[32px] font-light"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {col.title}
                  </h3>
                  <p className="text-white/40 text-[13px] mt-1" style={{ fontFamily: "var(--font-body)" }}>
                    {col.subtitle}
                  </p>
                </div>
                {/* Corner accent */}
                <div className="absolute top-5 right-5 w-8 h-8 border-t border-r opacity-0 group-hover:opacity-40 transition-opacity duration-700" style={{ borderColor: col.accent }} />
              </div>
              {/* Bottom CTA bar */}
              <div className="flex items-center justify-between mt-4 pb-4 border-b border-[#0B0B0F]/8">
                <span
                  className="text-[10px] tracking-[0.15em] text-[#0B0B0F]/50 uppercase group-hover:text-[#C17F59] transition-colors duration-500"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
                >
                  Explore
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-[#0B0B0F]/25 group-hover:text-[#C17F59] group-hover:translate-x-1.5 transition-all duration-500"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
