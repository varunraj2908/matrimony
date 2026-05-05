// import Image from "next/image";

// export default function HeroRegistration() {
//   return (
//     <section
//       className="relative flex items-stretch "
//       style={{
//         background:
//           "linear-gradient(135deg, #8b1a3a 0%, #c0174c 60%, #d4185a 100%)",
//       }}
//     >
//       <div className="relative w-[50%]  overflow-hidden  flex justify-center align-bottom ">
//         <Image
//           src="/Newlywed South Asian couple in traditional attire.png"
//           alt="Couple"
//           width={500}
//           height={500} // adjust based on your image ratio
//           className="object-contain mt-3.5"
//         />
//       </div>
//       <div className="flex-1 flex flex-col justify-center items-center px-8 py-6">
       

//         <h2 className="text-white text-xl font-semibold mb-4 text-center">
//           Registration Nowss
//         </h2>
//         <div className="grid grid-cols-2 gap-3">
//           <input
//             type="email"
//             placeholder="Email"
//             className="bg-white/90 rounded px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none text-sm"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="bg-white/90 rounded px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none text-sm"
//           />
//           <input
//             type="text"
//             placeholder="Name"
//             className="bg-white/90 rounded px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none text-sm"
//           />
//           <input
//             type="tel"
//             placeholder="Mobile Number"
//             className="bg-white/90 rounded px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none text-sm"
//           />
//           <select className="bg-white/90 rounded px-3 py-2 text-gray-600 focus:outline-none text-sm">
//             <option value="">Gender</option>
//             <option>Male</option>
//             <option>Female</option>
//           </select>
//           <select className="bg-white/90 rounded px-3 py-2 text-gray-600 focus:outline-none text-sm">
//             <option value="">Select Language</option>
//             <option>Hindi</option>
//             <option>Tamil</option>
//             <option>Telugu</option>
//             <option>Malayalam</option>
//             <option>English</option>
//           </select>
//           <div className="flex gap-2">
//             <select className="bg-white/90 rounded px-2 py-2 text-gray-600 focus:outline-none text-sm flex-1">
//               <option>Day</option>
//               {Array.from({ length: 31 }, (_, i) => (
//                 <option key={i + 1}>{i + 1}</option>
//               ))}
//             </select>
//             <select className="bg-white/90 rounded px-2 py-2 text-gray-600 focus:outline-none text-sm flex-1">
//               <option>MM</option>
//               {[
//                 "Jan",
//                 "Feb",
//                 "Mar",
//                 "Apr",
//                 "May",
//                 "Jun",
//                 "Jul",
//                 "Aug",
//                 "Sep",
//                 "Oct",
//                 "Nov",
//                 "Dec",
//               ].map((m) => (
//                 <option key={m}>{m}</option>
//               ))}
//             </select>
//             <select className="bg-white/90 rounded px-2 py-2 text-gray-600 focus:outline-none text-sm flex-1">
//               <option>Year</option>
//               {Array.from({ length: 50 }, (_, i) => (
//                 <option key={i}>{2005 - i}</option>
//               ))}
//             </select>
//           </div>
//           <select className="bg-white/90 rounded px-3 py-2 text-gray-600 focus:outline-none text-sm">
//             <option value="">Select Religion</option>
//             <option>Hindu</option>
//             <option>Muslim</option>
//             <option>Christian</option>
//             <option>Sikh</option>
//             <option>Jain</option>
//           </select>
//           <select className="bg-white/90 rounded px-3 py-2 text-gray-600 focus:outline-none text-sm">
//             <option value="">Select Caste</option>
//             <option>Brahmin</option>
//             <option>Kshatriya</option>
//             <option>Vaishya</option>
//             <option>Other</option>
//           </select>
//           <select className="bg-white/90 rounded px-3 py-2 text-gray-600 focus:outline-none text-sm">
//             <option>India</option>
//             <option>USA</option>
//             <option>UK</option>
//             <option>Canada</option>
//             <option>Australia</option>
//           </select>
//           <div className="flex items-center gap-2">
//             <div className="bg-gray-200 rounded px-3 py-2 font-mono font-bold text-gray-700 tracking-widest text-sm select-none">
//               79817
//             </div>
//             <input
//               type="text"
//               placeholder="Captcha"
//               className="bg-white/90 rounded px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none text-sm flex-1"
//             />
//           </div>
//           <div className="flex flex-col gap-2">
//             <label className="flex items-center gap-1.5 text-white/90 text-xs cursor-pointer">
//               <input type="checkbox" className="accent-[#c0174c]" />
//               Agree with Terms &amp; Conditions
//             </label>
//             <button className="bg-[#e05a1a] hover:bg-[#c44d14] text-white font-semibold py-2 rounded transition text-sm">
//               Join Now For Free...
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import Image from "next/image";

// export default function HeroRegistration() {
//   return (
//     <section
//       className="relative flex items-stretch "
//       style={{
//         background:
//           "linear-gradient(135deg, #8b1a3a 0%, #c0174c 60%, #d4185a 100%)",
//       }}
//     >
//       <div className="relative w-[50%]  overflow-hidden  flex justify-center align-bottom ">
//         <Image
//           src="/Newlywed South Asian couple in traditional attire.png"
//           alt="Couple"
//           width={500}
//           height={500} // adjust based on your image ratio
//           className="object-contain mt-3.5"
//         />
//       </div>

//       <div className="flex-1 flex flex-col justify-center items-center px-8 py-6">
//         <h2 className="text-white text-xl font-semibold mb-6 text-center">
//           Registration Now
//         </h2>

//         <div className="flex flex-col gap-3 w-full max-w-sm">
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="bg-white/90 rounded-lg px-4 py-2.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/60 text-sm w-full"
//           />
//           <input
//             type="email"
//             placeholder="Email Address"
//             className="bg-white/90 rounded-lg px-4 py-2.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/60 text-sm w-full"
//           />
//           <input
//             type="tel"
//             placeholder="Mobile Number"
//             className="bg-white/90 rounded-lg px-4 py-2.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/60 text-sm w-full"
//           />
//           <button className="bg-[#e05a1a] hover:bg-[#c44d14] text-white font-bold py-2.5 rounded-lg transition text-sm mt-1 w-full">
//             Join Now For Free
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";

export default function HeroRegistration() {
  return (
    <section
      className="relative flex items-stretch"
      style={{
        background:
          "linear-gradient(135deg, #8b1a3a 0%, #c0174c 60%, #d4185a 100%)",
      }}
    >
      <div className="relative w-[50%] overflow-hidden flex justify-center align-bottom">
        <Image
          src="/Newlywed South Asian couple in traditional attire.png"
          alt="Couple"
          width={500}
          height={500}
          className="object-contain mt-3.5"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center items-center px-10 py-8">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-white text-2xl font-bold tracking-wide">
            Find Your Perfect Match
          </h2>
          <p className="text-white/60 text-xs mt-1">
            Create your free profile in seconds
          </p>
        </div>

        {/* Glassmorphism card */}
        <div
          className="w-full max-w-sm rounded-2xl p-6 flex flex-col gap-4"
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.18)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          }}
        >
          {/* Full Name */}
          <div className="relative group">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white placeholder-white/50 outline-none transition-all"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
              onFocus={e => {
                e.target.style.background = "rgba(255,255,255,0.2)";
                e.target.style.border = "1px solid rgba(255,255,255,0.6)";
              }}
              onBlur={e => {
                e.target.style.background = "rgba(255,255,255,0.12)";
                e.target.style.border = "1px solid rgba(255,255,255,0.2)";
              }}
            />
          </div>

          {/* Email */}
          <div className="relative group">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </span>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white placeholder-white/50 outline-none transition-all"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
              onFocus={e => {
                e.target.style.background = "rgba(255,255,255,0.2)";
                e.target.style.border = "1px solid rgba(255,255,255,0.6)";
              }}
              onBlur={e => {
                e.target.style.background = "rgba(255,255,255,0.12)";
                e.target.style.border = "1px solid rgba(255,255,255,0.2)";
              }}
            />
          </div>

          {/* Mobile */}
          <div className="relative group">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </span>
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white placeholder-white/50 outline-none transition-all"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
              onFocus={e => {
                e.target.style.background = "rgba(255,255,255,0.2)";
                e.target.style.border = "1px solid rgba(255,255,255,0.6)";
              }}
              onBlur={e => {
                e.target.style.background = "rgba(255,255,255,0.12)";
                e.target.style.border = "1px solid rgba(255,255,255,0.2)";
              }}
            />
          </div>

          {/* Button */}
          <button
            className="w-full py-3 rounded-xl font-bold text-sm tracking-wide text-white transition-all hover:scale-[1.02] active:scale-95 mt-1"
            style={{
              background: "linear-gradient(135deg, #e05a1a, #cebd05)",
              boxShadow: "0 4px 18px rgba(224,90,26,0.5)",
            }}
          >
            Join Now For Free 🎉
          </button>

          <p className="text-center text-white/40 text-xs">
            Already registered?{" "}
            <a href="/login" className="text-white/80 underline font-medium hover:text-white transition">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}