"use client";
import { useRef, useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  belowHeader?: boolean;
};

export default function RegisterModal({ open, onClose, belowHeader = false }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [open]);

  if (!open) return null;

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOutsideClick}
      className="fixed inset-0 z-999 flex items-center justify-center bg-black/50"
      style={{ top: belowHeader ? 72 : 0 }}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-120 mx-4 rounded-2xl relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #c0174c, #e8305e)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        }}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white/80 hover:text-white text-xl cursor-pointer z-10 transition"
        >
          ✕
        </button>
        <div className="px-6 pt-6 pb-2 text-center">
          <h2 className="text-white text-xl font-bold tracking-wide">
            Registration Now
          </h2>
          <p className="text-white/60 text-xs mt-1">
            Find your perfect match today
          </p>
        </div>
        <div
          className="mx-10 mb-10 mt-4 rounded-xl p-5 flex flex-col gap-3"
          style={{
            background: "rgba(255,255,255,0.10)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.20)",
          }}
        >
          <div className="relative group">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white placeholder-white/50 outline-none transition-all"
              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
              onFocus={e => { e.target.style.background = "rgba(255,255,255,0.22)"; e.target.style.border = "1px solid rgba(255,255,255,0.7)"; }}
              onBlur={e =>  { e.target.style.background = "rgba(255,255,255,0.12)"; e.target.style.border = "1px solid rgba(255,255,255,0.2)"; }}
            />
          </div>
          <div className="relative group">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </span>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white placeholder-white/50 outline-none transition-all"
              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
              onFocus={e => { e.target.style.background = "rgba(255,255,255,0.22)"; e.target.style.border = "1px solid rgba(255,255,255,0.7)"; }}
              onBlur={e =>  { e.target.style.background = "rgba(255,255,255,0.12)"; e.target.style.border = "1px solid rgba(255,255,255,0.2)"; }}
            />
          </div>
          <div className="relative group">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </span>
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white placeholder-white/50 outline-none transition-all"
              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
              onFocus={e => { e.target.style.background = "rgba(255,255,255,0.22)"; e.target.style.border = "1px solid rgba(255,255,255,0.7)"; }}
              onBlur={e =>  { e.target.style.background = "rgba(255,255,255,0.12)"; e.target.style.border = "1px solid rgba(255,255,255,0.2)"; }}
            />
          </div>
          <button
            className="w-full py-3 rounded-xl font-bold text-sm tracking-wide text-white transition-all hover:scale-[1.02] active:scale-95 mt-1"
            style={{
              background: "linear-gradient(135deg, #e05a1a, #c44d14)",
              boxShadow: "0 4px 18px rgba(224,90,26,0.5)",
            }}
          >
            Join Now For Free 🎉
          </button>

          <p className="text-center text-white/50 text-xs">
            Already registered?{" "}
            <a href="/login" className="text-white/90 underline font-semibold hover:text-white transition">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}