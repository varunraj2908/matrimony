"use client";
import { useState } from "react";

const menuItems = [
  { key: "email",       label: "Edit e-mail Address" },
  { key: "password",    label: "Change Password" },
  { key: "alerts",      label: "Alerts & Updates" },
  { key: "call",        label: "Call Preferences" },
  { key: "privacy",     label: "Privacy" },
  { key: "profile",     label: "Profile Settings" },
  { key: "deactivate",  label: "Deactivate Profile" },
  { key: "delete",      label: "Delete Profile" },
  { key: "ignored",     label: "Ignored Profiles" },
  { key: "blocked",     label: "Blocked Profiles" },
  { key: "logout",      label: "Logout" },
];

// ── Section content components ──────────────────────────────────────────────

function EditEmail() {
  const [email, setEmail] = useState("varunrajnellickal@gmail.com");
  const [saved, setSaved] = useState(false);
  const original = "varunrajnellickal@gmail.com";

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-1">Edit e-mail Address</h2>
      <div className="border-t border-dashed border-gray-300 my-3" />
      <p className="text-sm text-gray-600 mb-5">
        A valid e-mail id will be used to send you partner search mailers, member to member communication mailers and special offers.
      </p>
      <div className="flex items-center gap-3">
        <input
          type="email"
          value={email}
          onChange={e => { setEmail(e.target.value); setSaved(false); }}
          className="border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-700 focus:outline-none focus:ring-2"
          style={{ minWidth: 260, focusRingColor: "#c0174c" }}
        />
        <button
          onClick={() => setSaved(true)}
          className="px-4 py-1.5 rounded text-white text-sm font-semibold transition hover:opacity-90"
          style={{ background: "#c0174c" }}
        >
          Save
        </button>
        <button
          onClick={() => { setEmail(original); setSaved(false); }}
          className="px-4 py-1.5 rounded text-sm font-semibold text-gray-600 bg-gray-200 hover:bg-gray-300 transition"
        >
          Reset
        </button>
      </div>
      {saved && <p className="text-xs mt-2 font-medium" style={{ color: "#c0174c" }}>✓ Email updated successfully.</p>}
    </div>
  );
}

function ChangePassword() {
  const [form, setForm] = useState({ current: "", newP: "", confirm: "" });
  const [msg, setMsg] = useState("");
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  const save = () => {
    if (!form.current || !form.newP || !form.confirm) { setMsg("Please fill all fields."); return; }
    if (form.newP !== form.confirm) { setMsg("Passwords do not match."); return; }
    setMsg("✓ Password changed successfully.");
    setForm({ current: "", newP: "", confirm: "" });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-1">Change Password</h2>
      <div className="border-t border-dashed border-gray-300 my-3" />
      <p className="text-sm text-gray-600 mb-5">Choose a strong password to keep your account secure.</p>
      <div className="space-y-4 max-w-sm">
        {[["current", "Current Password"], ["newP", "New Password"], ["confirm", "Confirm New Password"]].map(([k, label]) => (
          <div key={k}>
            <label className="block text-xs font-medium text-gray-500 mb-1">{label}</label>
            <input type="password" value={form[k]} onChange={set(k)}
              className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2"
              style={{ focusRingColor: "#c0174c" }} />
          </div>
        ))}
        <div className="flex gap-3 pt-1">
          <button onClick={save} className="px-5 py-1.5 rounded text-white text-sm font-semibold hover:opacity-90 transition" style={{ background: "#c0174c" }}>Save</button>
          <button onClick={() => { setForm({ current: "", newP: "", confirm: "" }); setMsg(""); }} className="px-4 py-1.5 rounded text-sm font-semibold text-gray-600 bg-gray-200 hover:bg-gray-300 transition">Reset</button>
        </div>
        {msg && <p className="text-xs font-medium mt-1" style={{ color: msg.startsWith("✓") ? "#c0174c" : "#dc2626" }}>{msg}</p>}
      </div>
    </div>
  );
}

function AlertsUpdates() {
  const [prefs, setPrefs] = useState({
    partnerSearch: true, newMatches: true, profileViews: false,
    messages: true, smsAlerts: false, emailDigest: true,
  });
  const toggle = k => setPrefs(p => ({ ...p, [k]: !p[k] }));
  const labels = {
    partnerSearch: "Partner search mailers", newMatches: "New match notifications",
    profileViews: "Profile view alerts", messages: "Message notifications",
    smsAlerts: "SMS Alerts", emailDigest: "Weekly email digest",
  };
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-1">Alerts & Updates</h2>
      <div className="border-t border-dashed border-gray-300 my-3" />
      <p className="text-sm text-gray-600 mb-5">Manage your notification preferences.</p>
      <div className="space-y-4 max-w-sm">
        {Object.entries(labels).map(([k, label]) => (
          <div key={k} className="flex items-center justify-between">
            <span className="text-sm text-gray-700">{label}</span>
            <button onClick={() => toggle(k)}
              className="relative w-11 h-6 rounded-full transition-all"
              style={{ background: prefs[k] ? "#c0174c" : "#d1d5db" }}>
              <span className="absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all"
                style={{ left: prefs[k] ? "calc(100% - 1.25rem)" : "0.25rem" }} />
            </button>
          </div>
        ))}
        <button className="mt-2 px-5 py-1.5 rounded text-white text-sm font-semibold hover:opacity-90 transition" style={{ background: "#c0174c" }}>Save Preferences</button>
      </div>
    </div>
  );
}

function CallPreferences() {
  const [selected, setSelected] = useState("anytime");
  const slots = [
    { key: "morning", label: "Morning (8AM – 12PM)" },
    { key: "afternoon", label: "Afternoon (12PM – 4PM)" },
    { key: "evening", label: "Evening (4PM – 8PM)" },
    { key: "anytime", label: "Anytime" },
  ];
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-1">Call Preferences</h2>
      <div className="border-t border-dashed border-gray-300 my-3" />
      <p className="text-sm text-gray-600 mb-5">Select your preferred time slot to receive calls.</p>
      <div className="space-y-3 max-w-xs">
        {slots.map(s => (
          <label key={s.key} className="flex items-center gap-3 cursor-pointer">
            <span className="w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0"
              style={{ borderColor: selected === s.key ? "#c0174c" : "#d1d5db" }}
              onClick={() => setSelected(s.key)}>
              {selected === s.key && <span className="w-2 h-2 rounded-full" style={{ background: "#c0174c" }} />}
            </span>
            <span className="text-sm text-gray-700">{s.label}</span>
          </label>
        ))}
        <button className="mt-3 px-5 py-1.5 rounded text-white text-sm font-semibold hover:opacity-90 transition" style={{ background: "#c0174c" }}>Save</button>
      </div>
    </div>
  );
}

function Privacy() {
  const [prefs, setPrefs] = useState({ showPhoto: true, showNumber: false, showEmail: false, showLastSeen: true });
  const toggle = k => setPrefs(p => ({ ...p, [k]: !p[k] }));
  const labels = { showPhoto: "Show my photo to all members", showNumber: "Show my phone number", showEmail: "Show my email address", showLastSeen: "Show my last seen status" };
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-1">Privacy</h2>
      <div className="border-t border-dashed border-gray-300 my-3" />
      <p className="text-sm text-gray-600 mb-5">Control who can see your information.</p>
      <div className="space-y-4 max-w-sm">
        {Object.entries(labels).map(([k, label]) => (
          <div key={k} className="flex items-center justify-between">
            <span className="text-sm text-gray-700">{label}</span>
            <button onClick={() => toggle(k)} className="relative w-11 h-6 rounded-full transition-all" style={{ background: prefs[k] ? "#c0174c" : "#d1d5db" }}>
              <span className="absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all" style={{ left: prefs[k] ? "calc(100% - 1.25rem)" : "0.25rem" }} />
            </button>
          </div>
        ))}
        <button className="mt-2 px-5 py-1.5 rounded text-white text-sm font-semibold hover:opacity-90 transition" style={{ background: "#c0174c" }}>Save Preferences</button>
      </div>
    </div>
  );
}

function BlankSection({ title }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-1">{title}</h2>
      <div className="border-t border-dashed border-gray-300 my-3" />
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: "#fff0f4" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#c0174c" strokeWidth="1.8" className="w-7 h-7">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
        </div>
        <p className="text-gray-500 text-sm font-medium">No content available for <span className="font-semibold" style={{ color: "#c0174c" }}>{title}</span> yet.</p>
        <p className="text-gray-400 text-xs mt-1">This section is coming soon.</p>
      </div>
    </div>
  );
}

function LogoutModal({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-4 overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-5" style={{ background: "linear-gradient(135deg, #c0174c, #8b0f38)" }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5">
                <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg">Logout</h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-6 text-center">
          <p className="text-gray-700 text-sm font-medium mb-1">Are you sure you want to logout?</p>
          <p className="text-gray-400 text-xs">You will need to sign in again to access your account.</p>
        </div>

        {/* Modal Footer */}
        <div className="px-6 pb-6 flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition"
          >
            No, Stay
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 active:scale-95 transition"
            style={{ background: "linear-gradient(135deg, #c0174c, #8b0f38)" }}
          >
            Yes, Logout
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main ────────────────────────────────────────────────────────────────────

export default function Settings() {
  const [active, setActive] = useState("email");
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const renderContent = () => {
    switch (active) {
      case "email":    return <EditEmail />;
      case "password": return <ChangePassword />;
      case "alerts":   return <AlertsUpdates />;
      case "call":     return <CallPreferences />;
      case "privacy":  return <Privacy />;
      default:         return <BlankSection title={menuItems.find(m => m.key === active)?.label || ""} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Logout Modal */}
      {showLogoutModal && (
        <LogoutModal
          onConfirm={() => { setShowLogoutModal(false); alert("Logged out!"); }}
          onCancel={() => { setShowLogoutModal(false); setActive("email"); }}
        />
      )}
      {/* Header */}
      <header className="w-full px-8 py-3  flex items-center gap-3 shadow-md sticky top-0 z-30"
        style={{ background: "linear-gradient(135deg, #c0174c 0%, #8b0f38 100%)" }}>
        <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)" }}>
          <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <span className="text-white font-bold text-base tracking-wide">MatriMatch</span>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-5">Profile Settings</h1>

        <div className="flex gap-0 items-start">
          {/* Sidebar */}
          <aside className="w-56 shrink-0 bg-white rounded-l-lg border border-gray-200 overflow-hidden shadow-sm">
            {menuItems.map((item, i) => {
              const isActive = active === item.key;
              const isDanger = item.key === "logout" || item.key === "delete" || item.key === "deactivate";
              return (
                <button
                  key={item.key}
                  onClick={() => item.key === "logout" ? setShowLogoutModal(true) : setActive(item.key)}
                  className="w-full text-left px-4 py-3 text-sm font-medium transition-all border-b border-gray-100 last:border-b-0"
                  style={{
                    background: isActive ? "#c0174c" : "white",
                    color: isActive ? "white" : isDanger ? "#c0174c" : "#1d6fa8",
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </aside>

          {/* Content */}
          <main className="flex-1 bg-white rounded-r-lg border border-l-0 border-gray-200 shadow-sm p-6 min-h-64">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}