"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";


const sections = ["Basic", "Religious", "Professional", "Location", "About My Partner"];

const preferenceData = {
  Basic: [
    { label: "Bride's Age", value: "20 - 33 years" },
    { label: "Height", value: "4 Ft 6 In - 5 Ft 6 In / 137 Cms - 168 Cms" },
    { label: "Marital Status", value: "Never Married" },
    { label: "Mother Tongue", value: "Any" },
    { label: "Physical Status", value: "Normal" },
    { label: "Eating Habits", value: "Non Vegetarian, Eggetarian" },
    { label: "Drinking Habits", value: "Does not drink" },
    { label: "Smoking Habits", value: "Does not smoke" },
  ],
  Religious: [
    { label: "Religion", value: "Hindu" },
    { label: "Caste", value: "Any" },
    { label: "Sub Caste", value: "Any" },
    { label: "Star", value: "Any" },
    { label: "Raasi", value: "Any" },
    { label: "Gothram", value: "Any" },
  ],
  Professional: [
    { label: "Education", value: "Any Graduate" },
    { label: "Employed In", value: "Any" },
    { label: "Occupation", value: "Any" },
    { label: "Annual Income", value: "No Preference" },
  ],
  Location: [
    { label: "Country", value: "India" },
    { label: "State", value: "Kerala" },
    { label: "City / District", value: "Any" },
    { label: "Residency Status", value: "Any" },
  ],
  "About My Partner": [
    { label: "About My Partner", value: "Looking for a kind and caring partner who values family traditions." },
  ],
};

const sectionIcons = {
  Basic: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  Religious: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  Professional: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
      <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Location: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  "About My Partner": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
};

function EditModal({ field, onClose, onSave }) {
  const [value, setValue] = useState(field.value);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100" style={{ background: "linear-gradient(135deg, #c0174c, #e8305e)" }}>
          <h3 className="text-white font-semibold text-lg tracking-wide">Edit {field.label}</h3>
        </div>
        <div className="p-6">
          <label className="block text-sm font-medium text-gray-500 mb-2">{field.label}</label>
          <input
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm"
            style={{ focusRingColor: "#c0174c" }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="px-6 pb-6 flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(value)}
            className="px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
            style={{ background: "linear-gradient(135deg, #c0174c, #e8305e)" }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PartnerPreferences() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("Basic");
  const [data, setData] = useState(preferenceData);
  const [editField, setEditField] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSave = (newValue:any) => {
    setData((prev) => ({
      ...prev,
      [activeSection]: prev[activeSection].map((f) =>
        f.label === editField.label ? { ...f, value: newValue } : f
      ),
    }));
    setEditField(null);
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Top Header */}
      <header className="text-white shadow-lg mb-10 " style={{ background: "linear-gradient(135deg, #c0174c 0%, #a01040 100%)" }}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="font-bold text-lg tracking-wide">MatriMatch</span>

          </div>

          <button className="px-5 py-1 border rounded-full cursor-pointer hover:bg-white hover:text-[#c0174c] font-extrabold" onClick={()=>router.push('/specialoffer')}>Upgrade Now</button>
          <button
            className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto flex min-h-[calc(100vh-64px)] gap-2 my-10">
        {/* Sidebar */}
        <aside
          className={`w-72 shrink-0 text-white flex flex-col transition-transform duration-300 rounded-xl ${
            mobileMenuOpen ? "fixed inset-y-0 left-0 z-40" : "hidden md:flex"
          }`}
          style={{ background: "linear-gradient(180deg, #c0174c 0%, #8b0f38 100%)" }}
        >
          {/* Sidebar Header */}
          <div className="px-6 py-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-base tracking-wider uppercase leading-tight">Partner</p>
                <p className="font-bold text-base tracking-wider uppercase leading-tight">Preferences</p>
              </div>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 py-4">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => { setActiveSection(section); setMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-6 py-4 text-left transition-all duration-200 group ${
                  activeSection === section
                    ? "bg-white/20 font-semibold border-r-4 border-white"
                    : "hover:bg-white/10 font-medium text-white/80"
                }`}
              >
                <span className={`transition-colors ${activeSection === section ? "text-white" : "text-white/60 group-hover:text-white/80"}`}>
                  {sectionIcons[section]}
                </span>
                <span className="text-sm tracking-wide">{section}</span>
                {activeSection === section && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 ml-auto">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                )}
              </button>
            ))}
          </nav>

          {/* Completion indicator */}
          <div className="px-6 py-6 border-t border-white/10">
            <p className="text-xs text-white/60 mb-2 uppercase tracking-wider">Profile Completion</p>
            <div className="w-full bg-white/20 rounded-full h-2 mb-1">
              <div className="bg-white rounded-full h-2 transition-all" style={{ width: "75%" }} />
            </div>
            <p className="text-xs text-white/70 mt-1">75% complete</p>
          </div>
        </aside>

        {/* Mobile overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-30 bg-black/40 md:hidden " onClick={() => setMobileMenuOpen(false)} />
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10  shadow-2xl border rounded-xl border-gray-200">
          {/* Info Banner */}
          <div className="rounded-2xl p-5 mb-8 border" style={{ background: "#fff5f8", borderColor: "#f9c8d6" }}>
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "#fde8ef" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#c0174c" strokeWidth="2" className="w-4 h-4">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4m0 4h.01" />
                </svg>
              </div>
              <div>
                <h2 className="font-bold text-gray-800 text-lg mb-1">Partner Preferences</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Matches recommended by us are based on{" "}
                  <span className="font-semibold" style={{ color: "#c0174c" }}>Acceptable matches</span>{" "}
                  criteria and at times might go slightly beyond your preferences.
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  Turn on <span className="font-medium">"Compulsory"</span> to get matches exactly as per your preferences.
                </p>
                <p className="text-xs text-gray-400 mt-2 italic">*Patent pending</p>
              </div>
            </div>
          </div>

          {/* Section Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg" style={{ background: "linear-gradient(135deg, #c0174c, #e8305e)" }}>
              {sectionIcons[activeSection]}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{activeSection} Preferences</h2>
              <p className="text-sm text-gray-400">{data[activeSection]?.length} preferences set</p>
            </div>
          </div>

          {/* Preferences List */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {data[activeSection]?.map((item, index) => (
              <div
                key={item.label}
                className={`flex items-center justify-between px-6 py-5 group transition-colors duration-150 ${
                  index !== data[activeSection].length - 1 ? "border-b border-gray-100" : ""
                }`}
                style={{ cursor: "default" }}
                onMouseEnter={e => e.currentTarget.style.background = "#fff5f8"}
                onMouseLeave={e => e.currentTarget.style.background = ""}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-400 mb-0.5 font-medium">{item.label}</p>
                  <p className="font-semibold text-gray-800 text-sm truncate">{item.value}</p>
                </div>
                <button
                  onClick={() => setEditField(item)}
                  className="ml-4 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                  style={{ background: "#fff0f4", color: "#c0174c" }}
                  title={`Edit ${item.label}`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-8">
            <button
              className="flex-1 py-3.5 rounded-xl text-sm font-semibold text-white shadow-md hover:opacity-90 active:scale-95 transition-all"
              style={{ background: "linear-gradient(135deg, #c0174c, #e8305e)" }}
            >
              Save Preferences
            </button>
            <button
              className="px-6 py-3.5 rounded-xl text-sm font-semibold border-2 transition-all active:scale-95"
              style={{ borderColor: "#c0174c", color: "#c0174c" }}
              onMouseEnter={e => e.currentTarget.style.background = "#fff5f8"}
              onMouseLeave={e => e.currentTarget.style.background = ""}
            >
              Reset
            </button>
          </div>
        </main>
      </div>

      {/* Edit Modal */}
      {editField && (
        <EditModal field={editField} onClose={() => setEditField(null)} onSave={handleSave} />
      )}
    </div>
  );
}