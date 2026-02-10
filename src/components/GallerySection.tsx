"use client";

import { useEffect, useRef, useState } from "react";

const GALLERY_ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop",
    alt: "Bridal lehenga with intricate gold embroidery",
    tags: ["bridal", "lehenga"],
    caption: "Handcrafted bridal lehenga with zardozi embroidery and dupatta",
  },
  {
    src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    alt: "Designer couture gown in deep red",
    tags: ["couture", "gown"],
    caption: "Custom couture gown — deep crimson silk with hand-beading",
  },
  {
    src: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop",
    alt: "Festive partywear collection piece",
    tags: ["festive", "partywear"],
    caption: "Festive collection — contemporary silhouettes with traditional craft",
  },
  {
    src: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1200&auto=format&fit=crop",
    alt: "Reception outfit with mirror work details",
    tags: ["reception", "lehenga"],
    caption: "Reception lehenga with mirror work and pearl accents",
  },
  {
    src: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=1200&auto=format&fit=crop",
    alt: "Bespoke bridal ensemble",
    tags: ["bridal", "couture"],
    caption: "Bespoke bridal ensemble — ivory silk organza with threadwork",
  },
  {
    src: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1200&auto=format&fit=crop",
    alt: "Luxury couture lehenga in pastel tones",
    tags: ["couture", "lehenga"],
    caption: "Pastel couture lehenga with hand-painted details",
  },
];

export { GALLERY_ITEMS };

export default function GallerySection({
  onLightbox,
  onRequestLook,
}: {
  onLightbox: (index: number) => void;
  onRequestLook: (preset: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<"editorial" | "grid">("editorial");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.03 }
    );
    el.querySelectorAll(".reveal").forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, [view]);

  return (
    <section id="gallery" className="relative bg-[#0B0B0F] py-32 md:py-48 noise-overlay" ref={ref}>
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6 reveal">
              <div className="accent-line" />
              <span
                className="text-[10px] tracking-[0.35em] text-[#C17F59] uppercase"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                Gallery
              </span>
            </div>
            <h2 className="display-lg text-white reveal" style={{ transitionDelay: "100ms" }}>
              Visual <em className="italic text-[#E8C4B8]">Poetry</em>
            </h2>
            <p className="body-text text-white/30 mt-4 max-w-md reveal" style={{ transitionDelay: "200ms" }}>
              A curated glimpse into our world of handcrafted luxury.
              Click any image to explore in detail.
            </p>
          </div>
          <div className="flex gap-3 reveal" style={{ transitionDelay: "200ms" }}>
            <button
              onClick={() => setView("editorial")}
              className={`text-[10px] tracking-[0.15em] uppercase px-5 py-2.5 transition-all duration-300 ${
                view === "editorial"
                  ? "bg-[#C17F59] text-white"
                  : "bg-white/[0.04] text-white/30 hover:text-white/60"
              }`}
              style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
            >
              Editorial
            </button>
            <button
              onClick={() => setView("grid")}
              className={`text-[10px] tracking-[0.15em] uppercase px-5 py-2.5 transition-all duration-300 ${
                view === "grid"
                  ? "bg-[#C17F59] text-white"
                  : "bg-white/[0.04] text-white/30 hover:text-white/60"
              }`}
              style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
            >
              Grid
            </button>
          </div>
        </div>

        {/* Editorial view — bento-style */}
        {view === "editorial" && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {GALLERY_ITEMS.map((item, i) => {
              const spans = [
                "md:col-span-8 aspect-[16/10]",
                "md:col-span-4 aspect-[3/4]",
                "md:col-span-4 aspect-[3/4]",
                "md:col-span-8 aspect-[16/10]",
                "md:col-span-6 aspect-[4/5]",
                "md:col-span-6 aspect-[4/5]",
              ];
              return (
                <div
                  key={i}
                  className={`reveal group relative overflow-hidden cursor-pointer ${spans[i]}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                  onClick={() => onLightbox(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${item.alt}`}
                  onKeyDown={(e) => e.key === "Enter" && onLightbox(i)}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1s] ease-out group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${item.src}')`,
                      filter: "saturate(0.75) contrast(1.05)",
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#0B0B0F]/0 group-hover:bg-[#0B0B0F]/60 transition-all duration-700 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-2 mb-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] tracking-[0.2em] uppercase text-[#D4B896] border border-[#D4B896]/30 px-3 py-1"
                          style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-white/60 text-[13px] max-w-xs text-center mt-2 px-6">
                      {item.caption}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRequestLook(`Look #${i + 1} — ${item.tags.join(", ")}`);
                      }}
                      className="mt-5 text-[9px] tracking-[0.2em] uppercase text-white border border-white/20 px-6 py-2.5 hover:bg-[#C17F59] hover:border-[#C17F59] transition-all duration-300"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
                    >
                      Request This Look
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Grid view */}
        {view === "grid" && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={i}
                className="reveal group relative aspect-square overflow-hidden cursor-pointer"
                style={{ transitionDelay: `${i * 60}ms` }}
                onClick={() => onLightbox(i)}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.alt}`}
                onKeyDown={(e) => e.key === "Enter" && onLightbox(i)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1s] ease-out group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${item.src}')`,
                    filter: "saturate(0.75) contrast(1.05)",
                  }}
                />
                <div className="absolute inset-0 bg-[#0B0B0F]/0 group-hover:bg-[#0B0B0F]/50 transition-all duration-500 flex items-end p-5 opacity-0 group-hover:opacity-100">
                  <span
                    className="text-white/70 text-[10px] tracking-[0.15em] uppercase"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.tags.join(" / ")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
