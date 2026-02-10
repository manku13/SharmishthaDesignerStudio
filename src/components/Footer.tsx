"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0F] noise-overlay">
      {/* Large CTA banner */}
      <div className="relative z-10 border-b border-white/[0.04]">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20 py-24 md:py-32 text-center">
          <p
            className="text-[10px] tracking-[0.4em] text-[#C17F59]/50 uppercase mb-6"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
          >
            Ready to begin?
          </p>
          <h2
            className="text-white text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your dream outfit is one
            <br />
            conversation <em className="italic text-[#E8C4B8]">away</em>
          </h2>
          <a
            href="#contact"
            className="inline-block mt-10 px-12 py-4 bg-[#C17F59] text-white text-[10px] tracking-[0.2em] uppercase hover:bg-[#A66B47] transition-all duration-500 hover:shadow-[0_8px_40px_rgba(193,127,89,0.25)]"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
          >
            Start a Conversation
          </a>
        </div>
      </div>

      {/* Footer grid */}
      <div className="relative z-10">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="flex flex-col">
                <span
                  className="text-[18px] tracking-[0.15em] font-light text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Sharmishtha
                </span>
                <span
                  className="text-[8px] tracking-[0.35em] uppercase text-white/30 mt-0.5"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
                >
                  Designer Studio
                </span>
              </div>
              <p className="text-white/25 text-[13px] mt-6 max-w-[250px] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Where Indian craftsmanship meets contemporary vision. Bespoke couture atelier in Jabalpur.
              </p>
            </div>

            {/* Navigate */}
            <div>
              <span
                className="text-[9px] tracking-[0.3em] text-[#C17F59]/50 uppercase"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                Navigate
              </span>
              <div className="flex flex-col gap-3 mt-5">
                {["Home", "About", "Services", "Collections", "Gallery", "Contact"].map(
                  (link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      className="animated-border inline-block text-white/25 text-[13px] hover:text-white/60 transition-colors duration-300 pb-0.5 w-fit"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Contact */}
            <div>
              <span
                className="text-[9px] tracking-[0.3em] text-[#C17F59]/50 uppercase"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                Contact
              </span>
              <div className="flex flex-col gap-3 mt-5">
                <a
                  href="tel:+917987306459"
                  className="text-white/25 text-[13px] hover:text-white/60 transition-colors duration-300"
                >
                  +91 79873 06459
                </a>
                <a
                  href="https://wa.me/917987306459"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/25 text-[13px] hover:text-white/60 transition-colors duration-300"
                >
                  WhatsApp
                </a>
                <p className="text-white/25 text-[13px]">
                  Koushalya Vatika, Gorakhpur
                  <br />
                  Jabalpur, MP
                </p>
              </div>
            </div>

            {/* Info */}
            <div>
              <span
                className="text-[9px] tracking-[0.3em] text-[#C17F59]/50 uppercase"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                Information
              </span>
              <div className="flex flex-col gap-3 mt-5">
                <span className="text-white/25 text-[13px]">
                  Prices on consultation
                </span>
                <span className="text-white/25 text-[13px]">
                  Lead times vary by order
                </span>
                <a href="#" className="text-white/25 text-[13px] hover:text-white/60 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/25 text-[13px] hover:text-white/60 transition-colors duration-300">
                  Terms &amp; Conditions
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[0.04] mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/15 text-[11px] tracking-[0.1em]" style={{ fontFamily: "var(--font-body)" }}>
              &copy; {new Date().getFullYear()} Sharmishtha Designer Studio
            </p>
            <p
              className="text-white/10 text-[9px] tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Bespoke &bull; Couture &bull; Luxury
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
