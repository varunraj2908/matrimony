import { useState } from "react";

export default function BeginLoveStory({ onClick,
}: {
  onClick: () => void;}) {
  const [email, setEmail] = useState("");
  return (
    <section
      className="mx-4 my-4 rounded-2xl overflow-hidden relative flex items-center px-10 py-10 min-h-40 bg-[##fdf5f5]"
      style={{
        background:
          "linear-gradient(135deg, #8b1a3a 0%, #c0174c 60%, #d4185a 100%)",
      }}
    >
      <div className="absolute right-32 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white/10" />
      <div className="absolute right-20 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white/10" />
      <div className="flex-1 z-10">
        <h2 className="text-white text-2xl font-extrabold mb-2">
          Begin Your Love Story Today 💍
        </h2>
        <p className="text-white/80 text-sm mb-5 max-w-sm">
          Join over 10 lakh happy couples. Create your free profile and let our
          intelligent system find your perfect match.
        </p>
        <div className="flex items-center gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="bg-white/20 border border-white/40 rounded-full px-5 py-2 text-white placeholder-white/60 text-sm focus:outline-none focus:bg-white/30 w-56"
          />
          <button onClick={onClick} className="bg-white cursor-pointer text-[#c0174c] font-bold px-6 py-2 rounded-full text-sm hover:bg-white/90 transition">
            Register Free →
          </button>
        </div>
      </div>
      <div className="absolute right-16 top-1/2 -translate-y-1/2 text-7xl z-10 select-none">
        🌹
      </div>
    </section>
  );
}
