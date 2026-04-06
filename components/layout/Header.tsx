export default function Header({ onClick,
}: {
  onClick?: () => void;}) {
  return (
     <header className="flex items-center justify-between px-6 py-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div>
            <span className="text-3xl font-extrabold tracking-tight" style={{ color: "#c0174c", fontFamily: "Georgia, serif" }}>
              G<span style={{ color: "#e63975" }}>et</span>M<span style={{ color: "#e63975" }}>arry</span>
            </span>
            <span className="text-lg font-semibold text-gray-500">.com</span>
          </div>
          <div className="ml-1 text-2xl">🪬</div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-medium italic text-base">Let&apos;s Get Married</span>
          <button className="bg-[#8b1a3a] hover:bg-[#6e1430] text-white px-5 py-1.5 rounded font-semibold transition cursor-pointer">Login</button>
          <button onClick={onClick} className="bg-[#8b1a3a] hover:bg-[#6e1430] text-white px-5 py-1.5 rounded font-semibold transition cursor-pointer">Register Free?</button>
          <div className="w-10 h-10 rounded-full bg-white border-2 border-[#c0174c] flex items-center justify-center font-bold text-[#c0174c] text-lg">
            G<span className="text-green-500">M</span>
          </div>
        </div>
      </header>
  );
}