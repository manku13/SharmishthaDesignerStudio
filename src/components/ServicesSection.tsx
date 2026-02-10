"use client";

import { useEffect, useRef } from "react";

const SERVICES = [
  {
    number: "01",
    title: "Bridal Couture",
    subtitle: "Your once-in-a-lifetime look, perfected",
    desc: "From initial sketch to final fitting, we craft bridal lehengas and gowns that become family heirlooms. Every stitch carries intention, every detail tells your love story.",
    tags: ["Lehengas", "Gowns", "Ensembles"],
  },
  {
    number: "02",
    title: "Festive & Partywear",
    subtitle: "Celebrations deserve couture",
    desc: "Sculptural silhouettes and contemporary draping for every occasion. Our festive pieces blend Indian heritage with modern design sensibility.",
    tags: ["Sarees", "Separates", "Cocktail"],
  },
  {
    number: "03",
    title: "Couture Alteration",
    subtitle: "The art of the perfect fit",
    desc: "Precision tailoring and expert alterations that transform existing pieces. In-studio fittings with virtual consultation available for distant clients.",
    tags: ["Fitting", "Restyling", "Virtual"],
  },
  {
    number: "04",
    title: "Worldwide Delivery",
    subtitle: "From Jabalpur to your doorstep",
    desc: "Select pieces available for immediate shipping. Custom orders delivered globally with care, ensuring your couture arrives in pristine condition.",
    tags: ["Express", "Global", "Insured"],
  },
];

export default function ServicesSection() {
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
    <section id="services" className="relative bg-[#0B0B0F] py-32 md:py-48 noise-overlay" ref={ref}>
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6 reveal">
              <div className="accent-line" />
              <span
                className="text-[10px] tracking-[0.35em] text-[#C17F59] uppercase"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                What We Do
              </span>
            </div>
            <h2 className="display-lg text-white reveal" style={{ transitionDelay: "100ms" }}>
              Crafted with <em className="italic text-[#E8C4B8]">obsessive</em>
              <br />
              attention to detail
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end reveal" style={{ transitionDelay: "200ms" }}>
            <p className="body-text text-white/35">
              Four pillars of our practice. Each one, a promise of excellence.
            </p>
          </div>
        </div>

        {/* Services — editorial list layout */}
        <div className="space-y-0">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="reveal group border-t border-white/[0.06] py-10 md:py-14 transition-all duration-500 hover:bg-white/[0.02] px-0 md:px-8 -mx-0 md:-mx-8"
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                {/* Number */}
                <div className="md:col-span-1">
                  <span
                    className="text-[#C17F59]/40 text-[12px] tracking-[0.2em]"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
                  >
                    {service.number}
                  </span>
                </div>
                {/* Title */}
                <div className="md:col-span-3">
                  <h3
                    className="text-white text-[24px] md:text-[28px] font-light group-hover:text-[#E8C4B8] transition-colors duration-500"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-[#C17F59]/60 text-[10px] tracking-[0.15em] uppercase mt-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {service.subtitle}
                  </p>
                </div>
                {/* Description */}
                <div className="md:col-span-5">
                  <p className="body-text text-white/35 group-hover:text-white/50 transition-colors duration-500">
                    {service.desc}
                  </p>
                </div>
                {/* Tags */}
                <div className="md:col-span-3 flex flex-wrap gap-2 md:justify-end">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] tracking-[0.15em] uppercase text-white/20 border border-white/[0.06] px-3 py-1.5 group-hover:border-[#C17F59]/20 group-hover:text-[#C17F59]/50 transition-all duration-500"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-white/[0.06]" />
        </div>
      </div>
    </section>
  );
}
