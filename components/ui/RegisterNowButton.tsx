"use client";

export default function RegisterNowButton({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex justify-center items-center p-4 cursor-pointer">
      <button
        onClick={onClick}
        className="bg-[#c0174c] text-white w-36  py-2  shadow-lg -rotate-90 origin-left cursor-pointer"
      >
        Register Now
      </button>
    </div>
  );
}
