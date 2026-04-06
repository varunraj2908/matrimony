"use client";

import { useRef, useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function RegisterModal({ open, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const inputStyle =
    "w-full rounded-md border border-white/70 bg-white px-3 py-3 text-sm outline-none focus:border-yellow-300 focus:ring-2 focus:ring-yellow-200 cursor-pointer";

  return (
    <div
      onClick={handleOutsideClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl rounded-lg bg-linear-to-r from-[#c0174c] to-pink-600 p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white text-xl cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-center text-white text-xl font-semibold mb-6">
          Registration Now
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <input className={inputStyle} placeholder="Email" />
          <input className={inputStyle} placeholder="Password" type="password" />
          <input className={inputStyle} placeholder="Name" />
          <input className={inputStyle} placeholder="Mobile Number" />

          <select className={inputStyle}>
            <option>Gender</option>
          </select>

          <select className={inputStyle}>
            <option>Select Language</option>
          </select>

          <div className="flex gap-2">
            <select className={inputStyle}><option>Day</option></select>
            <select className={inputStyle}><option>MM</option></select>
            <select className={inputStyle}><option>Year</option></select>
          </div>

          <select className={inputStyle}>
            <option>Select Religion</option>
          </select>

          <select className={inputStyle}>
            <option>Select Caste</option>
          </select>

          <select className={inputStyle}>
            <option>India</option>
          </select>

          <div className="flex items-center gap-2 col-span-2">
            <input type="checkbox" className="accent-white" />
            <span className="text-white text-sm">
              Agree with Terms & Conditions
            </span>
          </div>

          <button className="col-span-2 bg-[#8b1a3a] text-white py-3 rounded-md cursor-pointer transition">
            Join Now For Free...
          </button>
        </div>
      </div>
    </div>
  );
}