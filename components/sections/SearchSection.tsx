import { useState } from "react";

export default function SearchSection() {
     const [searchType, setSearchType] = useState("Bride");
      const [profileId, setProfileId] = useState("");
  return (
    <section
      className="flex items-center gap-0 pl-6 "
      style={{ overflow: "hidden" }}
    >
      {/* Search By Id — white background */}
      <div style={{ width: 200 }}>
        <div
          className="flex flex-col gap-2  items-start "
          style={{ width: 180, height: "100%" }}
        >
          <span className="text-gray-800 font-semibold text-sm">
            Search By Id
          </span>
          <input
            type="text"
            value={profileId}
            onChange={(e) => setProfileId(e.target.value)}
            placeholder="Enter Profile ID"
            className="border border-gray-300 rounded px-3 py-1.5 text-gray-700 text-sm w-44 focus:outline-none"
          />
          <button className="bg-[#b01545] hover:bg-[#8e1039] text-white font-semibold py-1.5 rounded text-sm transition w-44">
            Search By Id
          </button>
        </div>
      </div>

      {/* Search Your Partner — #b01545 curved left pill */}
      <div
        className="flex-1 self-stretch flex flex-col justify-center py-4 px-8"
        style={{
          background: "#b01545",
          borderRadius: "0px 0 0 0px",
        }}
      >
        <h3 className="text-white font-bold text-sm mb-2.5">
          Search Your Partner
        </h3>
        <div className="grid grid-cols-3 gap-2">
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="bg-white rounded px-3 py-1.5 text-gray-700 text-sm focus:outline-none"
          >
            <option>Bride</option>
            <option>Groom</option>
          </select>
          <select className="bg-white rounded px-3 py-1.5 text-gray-700 text-sm focus:outline-none">
            <option>20</option>
            {Array.from({ length: 40 }, (_, i) => (
              <option key={i}>{18 + i}</option>
            ))}
          </select>
          <select className="bg-white rounded px-3 py-1.5 text-gray-700 text-sm focus:outline-none">
            <option>18</option>
            {Array.from({ length: 40 }, (_, i) => (
              <option key={i}>{18 + i}</option>
            ))}
          </select>
          <select className="bg-white rounded px-3 py-1.5 text-gray-700 text-sm focus:outline-none">
            <option>Any</option>
            <option>Hindu</option>
            <option>Muslim</option>
            <option>Christian</option>
          </select>
          <select className="bg-white rounded px-3 py-1.5 text-gray-700 text-sm focus:outline-none">
            <option>Any</option>
            <option>Brahmin</option>
            <option>Kshatriya</option>
          </select>
          <div className="flex flex-col gap-1.5 items-end">
            <label className="flex items-center gap-1.5 text-white text-xs cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-white" />
              With photo
            </label>
            <button className="bg-[#7a1030] hover:bg-[#6e1430] text-white font-semibold py-1.5 px-5 rounded text-sm transition w-full">
              Search Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
