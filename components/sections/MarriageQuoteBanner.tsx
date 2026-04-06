export default function MarriageQuoteBanner({ onClick,
}: {
  onClick: () => void;}){
    return(

         <section
        className="relative flex flex-col items-center justify-center text-center px-8 py-16 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #8b1a3a 0%, #c0174c 60%, #d4185a 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10 max-w-2xl">
          <h2
            className="text-white text-3xl font-extrabold leading-tight mb-3"
            style={{ fontFamily: "Georgia, serif" }}
          >
            It is true that marriages are made in heaven,
          </h2>
          <p
            className="text-yellow-300 text-2xl font-bold italic mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            and life is so much loving with a life person.
          </p>
          <p className="text-white/70 text-sm mb-8">
            Join millions who found their perfect match on GetMarry. Start your
            journey today — completely free.
          </p>
          <button onClick={onClick} className="bg-white text-[#c0174c] font-bold px-8 py-3 rounded-full text-sm hover:bg-white/90 transition mx-auto flex items-center gap-2 cursor-pointer">
            💍 Register Now — It&apos;s Free
          </button>
        </div>
      </section>
        
    )
}