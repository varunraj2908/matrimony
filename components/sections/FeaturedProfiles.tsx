import { profiles } from "@/constants/profiles";
import Image from "next/image";

export default function FeaturedProfiles() {
    const allProfiles = [...profiles, ...profiles];

    return(
        <section className="bg-[#fdf5f7] px-8 py-10">
      <style>{`
        @keyframes scrollX {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .profiles-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: scrollX 30s linear infinite;
        }
        .profiles-track:hover { animation-play-state: paused; }
      `}</style>

      <p className="text-[#c0174c] text-xs font-bold tracking-widest uppercase mb-1">✦ Curated For You</p>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-1">Featured Profiles</h2>
      <p className="text-gray-500 text-sm mb-8">Handpicked, verified profiles that match your preferences.</p>
      <div className="overflow-hidden -mx-8">
        <div className="profiles-track px-8">
          {allProfiles.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-pink-100 flex flex-col" style={{ width: 250, minWidth: 200 }}>
              <div className="relative h-40" style={{ background: p.bg }}>
                <Image src={p.image} alt={p.name} fill className="object-cover object-top" />
                <span className="absolute top-2 right-2 text-white text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ background: p.badgeColor }}>
                  {p.badge}
                </span>
              </div>
              <div className="p-3 flex flex-col gap-1.5 flex-1">
                <p className="font-bold text-gray-900 text-xs">{p.name}</p>
                <p className="text-gray-400 text-[10px]">{p.age} yrs • {p.height} • {p.job}</p>
                <div className="flex flex-wrap gap-1 mt-0.5">
                  {[p.religion, p.lang, p.city].map(tag => (
                    <span key={tag} className="bg-pink-50 text-[#c0174c] text-[10px] px-1.5 py-0.5 rounded-full border border-pink-100">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 mt-auto pt-2">
                  <button className="flex-1 bg-[#c0174c] hover:bg-[#a01040] text-white font-bold py-1.5 rounded-lg text-[10px] transition">Connect</button>
                  <button className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-[#c0174c] hover:bg-pink-50 transition text-xs">♡</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="border-2 border-[#c0174c] text-[#c0174c] font-bold px-8 py-2.5 rounded-full text-sm hover:bg-[#c0174c] hover:text-white transition">
          View All Profiles →
        </button>
      </div>
    </section>


    )}