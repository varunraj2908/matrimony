import Image from "next/image";

export default function BannerQuote({  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <section
      className=" flex  items-center justify-between gap-8 px-10 pt-4  overflow-hidden h-60"
      style={{
        background:
          "linear-gradient(135deg, #8b1a3a 0%, #c0174c 70%, #d4185a 100%)",
      }}
    >
      <div className="relative h-full  w-50">
        {" "}
        <Image
          src="/romantic-couple.png"
          alt={"couple"}
          fill
          className="object-contain object-top"
        />
      </div>
      <div className="flex flex-col items-start gap-3 max-w-md">
        <p
          className="text-white text-xl font-semibold leading-snug"
          style={{ fontFamily: "Georgia, serif" }}
        >
          It is true that marriages are made in heaven and life is too much
          boring without a life partner.
        </p>
        <button onClick={onClick} className="border cursor-pointer border-white text-white font-bold text-xs tracking-widest px-5 py-2 rounded-full hover:bg-white hover:text-[#c0174c] transition uppercase">
          Register Now
        </button>
      </div>
      <div className="shrink-0 text-4xl opacity-60 rotate-12">🎺</div>
      <div className="relative h-92.5 w-92.5  -right-35 overflow-hidden">
        <Image
          src="/wedding-bg.webp"
          alt="wedding-bg"
          width={370}
          height={370}
          className="object-cover object-top rotate-320"
        />
      </div>
    </section>
  );
}
