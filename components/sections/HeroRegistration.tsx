import Image from "next/image";

export default function HeroRegistration() {
  return (
    <section
      className="relative flex items-stretch "
      style={{
        background:
          "linear-gradient(135deg, #8b1a3a 0%, #c0174c 60%, #d4185a 100%)",
      }}
    >
      <div className="relative w-[50%]  overflow-hidden  flex justify-center align-bottom ">
        <Image
          src="/Newlywed South Asian couple in traditional attire.png"
          alt="Couple"
          width={500}
          height={500} // adjust based on your image ratio
          className="object-contain mt-3.5"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center px-8 py-6">
        <h2 className="text-white text-xl font-semibold mb-4 text-center">
          Registration Now
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="email"
            placeholder="Email"
            className="bg-white/90 rounded px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-white/90 rounded px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none text-sm"
          />
          <input
            type="text"
            placeholder="Name"
            className="bg-white/90 rounded px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none text-sm"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="bg-white/90 rounded px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none text-sm"
          />
          <select className="bg-white/90 rounded px-3 py-2 text-gray-600 focus:outline-none text-sm">
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <select className="bg-white/90 rounded px-3 py-2 text-gray-600 focus:outline-none text-sm">
            <option value="">Select Language</option>
            <option>Hindi</option>
            <option>Tamil</option>
            <option>Telugu</option>
            <option>Malayalam</option>
            <option>English</option>
          </select>
          <div className="flex gap-2">
            <select className="bg-white/90 rounded px-2 py-2 text-gray-600 focus:outline-none text-sm flex-1">
              <option>Day</option>
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1}>{i + 1}</option>
              ))}
            </select>
            <select className="bg-white/90 rounded px-2 py-2 text-gray-600 focus:outline-none text-sm flex-1">
              <option>MM</option>
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ].map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
            <select className="bg-white/90 rounded px-2 py-2 text-gray-600 focus:outline-none text-sm flex-1">
              <option>Year</option>
              {Array.from({ length: 50 }, (_, i) => (
                <option key={i}>{2005 - i}</option>
              ))}
            </select>
          </div>
          <select className="bg-white/90 rounded px-3 py-2 text-gray-600 focus:outline-none text-sm">
            <option value="">Select Religion</option>
            <option>Hindu</option>
            <option>Muslim</option>
            <option>Christian</option>
            <option>Sikh</option>
            <option>Jain</option>
          </select>
          <select className="bg-white/90 rounded px-3 py-2 text-gray-600 focus:outline-none text-sm">
            <option value="">Select Caste</option>
            <option>Brahmin</option>
            <option>Kshatriya</option>
            <option>Vaishya</option>
            <option>Other</option>
          </select>
          <select className="bg-white/90 rounded px-3 py-2 text-gray-600 focus:outline-none text-sm">
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
            <option>Canada</option>
            <option>Australia</option>
          </select>
          <div className="flex items-center gap-2">
            <div className="bg-gray-200 rounded px-3 py-2 font-mono font-bold text-gray-700 tracking-widest text-sm select-none">
              79817
            </div>
            <input
              type="text"
              placeholder="Captcha"
              className="bg-white/90 rounded px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none text-sm flex-1"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-1.5 text-white/90 text-xs cursor-pointer">
              <input type="checkbox" className="accent-[#c0174c]" />
              Agree with Terms &amp; Conditions
            </label>
            <button className="bg-[#e05a1a] hover:bg-[#c44d14] text-white font-semibold py-2 rounded transition text-sm">
              Join Now For Free...
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
