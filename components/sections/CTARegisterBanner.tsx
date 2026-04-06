export default function CTARegisterBanner({ onClick,
}: {
  onClick: () => void;}) {
  return (
    <section
      className="flex items-center gap-6 px-8 py-5"
      style={{
        background: "linear-gradient(90deg, #8b1a3a 0%, #c0174c 100%)",
      }}
    >
      <div className="w-24 h-16 shrink-0 flex items-center justify-center bg-white/10 rounded overflow-hidden">
        <span className="text-4xl">💑</span>
      </div>
      <div className="flex-1">
        <p className="text-white font-bold text-sm tracking-widest uppercase">
          GETMARRY.COM
        </p>
        <p className="text-white/80 text-xs mt-1">
          is one of the leading matrimonial services of brides and grooms.
        </p>
      </div>
      <button onClick={onClick} className="shrink-0 cursor-pointer bg-[white]  hover:bg-gray-700 text-[#c0174c] font-bold px-8 py-3 rounded-full text-sm transition tracking-wide">
        Register Free
      </button>
    </section>
  );
}
