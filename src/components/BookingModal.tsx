"use client";

import { useState, useEffect, useRef } from "react";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  preset: string | null;
}

export default function BookingModal({ open, onClose, preset }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    eventType: "",
    budget: "",
    message: "",
    consent: false,
  });
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setStep(1);
      setSubmitted(false);
      if (preset) {
        setForm((f) => ({ ...f, message: `Interested in: ${preset}` }));
      }
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open, preset]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setForm({
        name: "",
        phone: "",
        date: "",
        time: "",
        eventType: "",
        budget: "",
        message: "",
        consent: false,
      });
    }, 2500);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] modal-backdrop flex items-center justify-center p-4 animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label="Book Appointment"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-[#F7F5F3] max-h-[90vh] overflow-y-auto animate-fade-in-up"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-[#141312]/50 hover:text-[#141312] transition-colors z-10"
          aria-label="Close booking modal"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 mx-auto border-2 border-[#C59A4B] rounded-full flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C59A4B" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="heading-3 text-[#141312]">Request Received</h3>
              <p className="body-text text-[#6B6560] mt-3">
                We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <span className="micro-text text-[#C59A4B] tracking-[0.3em]">
                Appointment
              </span>
              <h3 className="heading-3 text-[#141312] mt-3">Book Your Consultation</h3>
              <div className="gold-line mt-4" />

              {/* Step indicators */}
              <div className="flex gap-2 mt-6 mb-8">
                {[1, 2].map((s) => (
                  <div
                    key={s}
                    className={`h-[2px] flex-1 transition-colors duration-300 ${
                      s <= step ? "bg-[#C59A4B]" : "bg-[#141312]/10"
                    }`}
                  />
                ))}
              </div>

              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <label className="micro-text text-[#6B6560] text-[10px]" htmlFor="booking-name">
                      Full Name *
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full mt-2 px-0 py-3 bg-transparent border-b border-[#141312]/15 text-[#141312] text-sm focus:outline-none focus:border-[#C59A4B] transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="micro-text text-[#6B6560] text-[10px]" htmlFor="booking-phone">
                      Phone *
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full mt-2 px-0 py-3 bg-transparent border-b border-[#141312]/15 text-[#141312] text-sm focus:outline-none focus:border-[#C59A4B] transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="micro-text text-[#6B6560] text-[10px]" htmlFor="booking-date">
                        Preferred Date
                      </label>
                      <input
                        id="booking-date"
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full mt-2 px-0 py-3 bg-transparent border-b border-[#141312]/15 text-[#141312] text-sm focus:outline-none focus:border-[#C59A4B] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="micro-text text-[#6B6560] text-[10px]" htmlFor="booking-time">
                        Preferred Time
                      </label>
                      <select
                        id="booking-time"
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        className="w-full mt-2 px-0 py-3 bg-transparent border-b border-[#141312]/15 text-[#141312] text-sm focus:outline-none focus:border-[#C59A4B] transition-colors"
                      >
                        <option value="">Select time</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                        <option value="6:00 PM">6:00 PM</option>
                        <option value="7:00 PM">7:00 PM</option>
                        <option value="8:00 PM">8:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    disabled={!form.name || !form.phone}
                    className="w-full mt-6 py-3.5 bg-[#C59A4B] text-white text-[12px] tracking-[0.2em] uppercase hover:bg-[#A67D35] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <label className="micro-text text-[#6B6560] text-[10px]" htmlFor="booking-event">
                      Event Type
                    </label>
                    <select
                      id="booking-event"
                      value={form.eventType}
                      onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                      className="w-full mt-2 px-0 py-3 bg-transparent border-b border-[#141312]/15 text-[#141312] text-sm focus:outline-none focus:border-[#C59A4B] transition-colors"
                    >
                      <option value="">Select event type</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Reception">Reception</option>
                      <option value="Engagement">Engagement</option>
                      <option value="Festive/Party">Festive / Party</option>
                      <option value="Custom Order">Custom Order</option>
                      <option value="Alteration">Alteration</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="micro-text text-[#6B6560] text-[10px]" htmlFor="booking-budget">
                      Budget Range (Optional)
                    </label>
                    <select
                      id="booking-budget"
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="w-full mt-2 px-0 py-3 bg-transparent border-b border-[#141312]/15 text-[#141312] text-sm focus:outline-none focus:border-[#C59A4B] transition-colors"
                    >
                      <option value="">Prefer not to say</option>
                      <option value="Under ₹25,000">Under ₹25,000</option>
                      <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                      <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                      <option value="₹1,00,000+">₹1,00,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="micro-text text-[#6B6560] text-[10px]" htmlFor="booking-message">
                      Message
                    </label>
                    <textarea
                      id="booking-message"
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full mt-2 px-0 py-3 bg-transparent border-b border-[#141312]/15 text-[#141312] text-sm focus:outline-none focus:border-[#C59A4B] transition-colors resize-none"
                      placeholder="Tell us about your vision..."
                    />
                  </div>
                  <div className="flex items-start gap-3 mt-4">
                    <input
                      type="checkbox"
                      id="booking-consent"
                      checked={form.consent}
                      onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                      className="mt-1 accent-[#C59A4B]"
                    />
                    <label htmlFor="booking-consent" className="text-[#6B6560] text-xs leading-relaxed">
                      I consent to being contacted by Sharmishtha Designer Studio
                      regarding my appointment and for marketing communications.
                    </label>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 py-3.5 border border-[#141312]/15 text-[#141312] text-[12px] tracking-[0.2em] uppercase hover:border-[#141312]/40 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!form.consent}
                      className="flex-1 py-3.5 bg-[#C59A4B] text-white text-[12px] tracking-[0.2em] uppercase hover:bg-[#A67D35] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      Submit Request
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
