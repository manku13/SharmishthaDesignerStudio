"use client";

import { useEffect } from "react";
import { GALLERY_ITEMS } from "./GallerySection";

interface LightboxModalProps {
  open: boolean;
  onClose: () => void;
  currentIndex: number;
  onChangeIndex: (index: number) => void;
}

export default function LightboxModal({
  open,
  onClose,
  currentIndex,
  onChangeIndex,
}: LightboxModalProps) {
  const items = GALLERY_ITEMS;
  const current = items[currentIndex];

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChangeIndex((currentIndex + 1) % items.length);
      if (e.key === "ArrowLeft") onChangeIndex((currentIndex - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, currentIndex, items.length, onClose, onChangeIndex]);

  if (!open || !current) return null;

  return (
    <div
      className="fixed inset-0 z-[70] bg-[#0A0A09]/95 flex items-center justify-center animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10"
        aria-label="Close lightbox"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-6 text-white/40 text-[12px] tracking-[0.15em]">
        {currentIndex + 1} / {items.length}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onChangeIndex((currentIndex - 1 + items.length) % items.length);
        }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
        aria-label="Previous image"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onChangeIndex((currentIndex + 1) % items.length);
        }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
        aria-label="Next image"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Image */}
      <div
        className="max-w-5xl max-h-[80vh] mx-16"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="w-full h-[70vh] bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${current.src}')` }}
          role="img"
          aria-label={current.alt}
        />
        <div className="text-center mt-6">
          <p className="text-white/60 text-sm">{current.caption}</p>
          <div className="flex gap-2 justify-center mt-3">
            {current.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.15em] uppercase text-[#C59A4B]/70 border border-[#C59A4B]/20 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
