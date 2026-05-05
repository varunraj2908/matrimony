import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Header({ onClick }: { onClick?: () => void }) {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-999 bg-white flex items-center justify-between px-6 py-3 border-b border-gray-200">
      <div className="flex items-center">
        <Image
          src="/golden-hearts.png"
          alt="golden-hearts"
          width={120}
          height={60}
          className="object-cover"
        />
        <div className="w-75">
          <span
            className="text-3xl font-extrabold tracking-tight"
            style={{ color: "#e63975", fontFamily: "Georgia, serif" }}
          >
            <span className="text-[#c0174c] text-[40px]">M</span>
            ade
            <span style={{ color: "#e63975" }}>
              <span className="text-[#FFD700] text-[40px]">2</span>
              <span className="text-[#c0174c] text-[40px]">M</span>atch
            </span>
          </span>
        </div>
      </div>
        <div className=" overflow-hidden">
          <div className="whitespace-nowrap animate-marquee text-[#c0174c] font-semibold text-sm">
            🇮🇳 India’s No.1 Matrimony App • Find Your Perfect Match • Made2Match
            💍
          </div>
        </div>
      <div className="flex items-center gap-4">
        <span className="text-gray-700 font-medium italic text-base">
          Let&apos;s Get Married
        </span>
        <button  onClick={() => router.push("/login")} className="bg-[#8b1a3a] hover:bg-[#6e1430] text-white px-5 py-1.5 rounded font-semibold transition cursor-pointer">
          Login
        </button>
        <button
          onClick={onClick}
          className="bg-[#8b1a3a] hover:bg-[#6e1430] text-white px-5 py-1.5 rounded font-semibold transition cursor-pointer"
        >
          Register Free?
        </button>
        <div className="w-15 h-15 rounded-full bg-white border-2 border-[#c0174c] flex items-center justify-center font-bold text-[#c0174c] text-lg">
          M<span className="text-[#FFD700]">2</span>M
        </div>
      </div>
    </header>
  );
}
