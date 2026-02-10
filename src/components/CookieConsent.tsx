"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const t = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-in-up">
      <div className="mx-auto max-w-2xl bg-[#141312] border border-white/8 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-white/60 text-[13px] leading-relaxed flex-1">
          We use cookies to enhance your experience. By continuing to visit this
          site you agree to our use of cookies.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-[10px] tracking-[0.15em] uppercase text-white/40 px-4 py-2 border border-white/10 hover:border-white/30 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="text-[10px] tracking-[0.15em] uppercase text-white px-4 py-2 bg-[#C59A4B] hover:bg-[#A67D35] transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
