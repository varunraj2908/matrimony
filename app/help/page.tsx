"use client";
import { useState } from "react";

const tabs = ["Contact Us", "Business Enquiries", "Feedback", "Our Retail Stores"];

const faqs = [
  { q: "How do I login if I forget my email, mobile number?", a: "You can recover your account by visiting the login page and clicking 'Forgot Details'. Enter your registered mobile number or email and follow the instructions sent to you." },
  { q: "How do I log in if I forget my password?", a: "Click on 'Forgot Password' on the login page. Enter your registered email or mobile number and you'll receive a reset link or OTP to create a new password." },
  { q: "Can I change the mobile number, email address associated with my matrimony account?", a: "Yes, you can update your mobile number and email address from Profile Settings > Edit e-mail Address or by contacting our support team." },
  { q: "I didn't receive the OTP for login. What should I do?", a: "Please check if your mobile number is correct. You can retry after 60 seconds. If the issue persists, contact our helpline." },
  { q: "I didn't receive the password reset email. What should I do?", a: "Check your spam/junk folder. Make sure you entered the correct registered email. Contact support if the issue continues." },
  { q: "Can I log into my profile from multiple devices simultaneously?", a: "Yes, you can log into your profile from multiple devices at the same time using your registered credentials." },
  { q: "Why is the message 'Invalid E-mail ID/mobile number or Incorrect Password' being displayed when I try to login?", a: "This message appears when the credentials entered don't match our records. Please double-check your email/mobile and password, or use the forgot password option." },
  { q: "I'm already logged in, but I get a message 'You must login prior to using the matrimonial services'. What should I do?", a: "Please clear your browser cookies and cache, then log in again. If the issue persists, try a different browser or contact support." },
];

const retailStores = [
  { city: "Kochi", address: "3rd Floor, Nucleus Mall, MG Road, Kochi - 682035", phone: "0484-1234567" },
  { city: "Thiruvananthapuram", address: "2nd Floor, Bhavani Complex, Statue Junction, TVM - 695001", phone: "0471-1234567" },
  { city: "Kozhikode", address: "1st Floor, Focus Mall, Mavoor Road, Kozhikode - 673001", phone: "0495-1234567" },
  { city: "Thrissur", address: "Ground Floor, Pearl Shopping Mall, Round South, Thrissur - 680001", phone: "0487-1234567" },
];

const categories = ["--Select--", "Profile Related", "Payment Related", "Technical Issue", "Match Related", "Account Security", "Other"];

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

function FAQAccordion() {
  const [open, setOpen] = useState(null);
  return (
    <div className="mt-10 w-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 border-2 border-gray-300 text-sm font-bold">?</div>
        <h3 className="text-xl font-bold text-gray-800">Frequently Asked Questions</h3>
      </div>
      <div className="divide-y divide-gray-100 w-full">
        {faqs.map((faq, i) => (
          <div key={i} className="w-full">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between py-4 text-left text-sm text-gray-700 hover:text-gray-900 transition-colors gap-4"
            >
              <span className="font-medium">{i + 1}. {faq.q}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                className="w-4 h-4 shrink-0 transition-transform"
                style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)", color: "#c0174c" }}>
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {open === i && (
              <div className="pb-4 text-sm text-gray-500 leading-relaxed pl-4 border-l-2" style={{ borderColor: "#c0174c" }}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Contact Us ───────────────────────────────────────────────────────────────

function ContactUs() {
  return (
    <div className="w-full">
      <p className="text-sm text-gray-600 mb-6 leading-relaxed">
        MatriMatch is eager to help you find your partner at the earliest. Our customer service team will be pleased to assist you anytime you have a query. You can contact our customer service team in one of the following ways.
      </p>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="p-5 rounded-xl border border-gray-100" style={{ background: "#fafafa" }}>
          <h4 className="font-bold text-gray-800 mb-4">Helpline Numbers</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xl">🇮🇳</span>
              <div>
                <span className="font-bold text-gray-700 text-sm mr-2">INDIA</span>
                <span className="text-sm text-gray-600">0-8144-99-88-77</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">🇦🇪</span>
              <div>
                <span className="font-bold text-gray-700 text-sm mr-2">UAE</span>
                <span className="text-sm text-gray-600">+971 525060879</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 rounded-xl border border-gray-100" style={{ background: "#fafafa" }}>
          <h4 className="font-bold text-gray-800 mb-4">For payment related queries</h4>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#e8f8f5" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" className="w-5 h-5">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="text-sm text-gray-600">Call <span className="font-semibold text-gray-800">+91 9597337974</span></span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 p-5 rounded-xl border border-gray-100 mb-2 w-full" style={{ background: "#f9fafb" }}>
        <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ background: "#e8f8f5" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8" className="w-7 h-7">
            <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-700">Chat live with our customer service team. Get answers instantly.</p>
        </div>
        <button className="px-6 py-2.5 rounded-full text-white text-sm font-bold hover:opacity-90 transition shrink-0"
          style={{ background: "linear-gradient(135deg, #c0174c, #8b0f38)" }}>
          Chat Now
        </button>
      </div>
      <FAQAccordion />
    </div>
  );
}

// ─── Feedback ─────────────────────────────────────────────────────────────────

function Feedback() {
  const [form, setForm] = useState({ name: "varun", id: "E7086341", priority: "Medium", category: "--Select--", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  if (submitted) return (
    <div className="w-full flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: "#fff0f4" }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="#c0174c" strokeWidth="2.5" className="w-8 h-8"><path d="M5 13l4 4L19 7" /></svg>
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-1">Feedback Submitted!</h3>
      <p className="text-sm text-gray-500 mb-4">Thank you. Our team will get back to you shortly.</p>
      <button onClick={() => setSubmitted(false)} className="px-6 py-2 rounded-full text-white text-sm font-semibold hover:opacity-90 transition" style={{ background: "#c0174c" }}>
        Submit Another
      </button>
    </div>
  );

  return (
    <div className="w-full">
      <p className="text-sm text-gray-600 mb-6 leading-relaxed">
        Please feel free to post your questions, comments and suggestions. We are eager to assist you and serve you better.
      </p>
      <div className="border-t border-dashed border-gray-200 mb-6" />
      <div className="grid grid-cols-2 gap-6 w-full">
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">Your Name</label>
            <input value={form.name} onChange={set("name")} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">Matrimony ID</label>
            <input value={form.id} onChange={set("id")} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">Priority</label>
            <select value={form.priority} onChange={set("priority")} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white">
              {["Low", "Medium", "High"].map(p => <option key={p}>{p}</option>)}
            </select>
          </div>
        </div>
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">Category</label>
            <select value={form.category} onChange={set("category")} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white">
              {categories.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">Suggestions / Feedback</label>
            <textarea value={form.message} onChange={set("message")} rows={5} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-300 resize-none" />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <button onClick={() => setSubmitted(true)} className="px-10 py-3 rounded-full text-white font-bold text-sm hover:opacity-90 transition hover:scale-105 active:scale-95"
          style={{ background: "linear-gradient(135deg, #c0174c, #8b0f38)" }}>
          Submit
        </button>
      </div>
    </div>
  );
}

// ─── Business Enquiries ───────────────────────────────────────────────────────

function BusinessEnquiries() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  if (sent) return (
    <div className="w-full flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: "#fff0f4" }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="#ff4982" strokeWidth="2.5" className="w-8 h-8"><path d="M5 13l4 4L19 7" /></svg>
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-1">Enquiry Sent!</h3>
      <p className="text-sm text-gray-500 mb-4">Our business team will reach out to you within 2 business days.</p>
      <button onClick={() => setSent(false)} className="px-6 py-2 rounded-full text-white text-sm font-semibold hover:opacity-90 transition" style={{ background: "#c0174c" }}>
        Submit Another
      </button>
    </div>
  );

  return (
    <div className="w-full">
      <p className="text-sm text-gray-600 mb-6 leading-relaxed">
        Interested in partnering with us or have a business proposal? Fill in the details below and our business team will get in touch with you.
      </p>
      <div className="border-t border-dashed border-gray-200 mb-6" />
      <div className="grid grid-cols-2 gap-5 w-full">
        {[["name","Your Name","text"],["company","Company Name","text"],["email","Email Address","email"],["phone","Phone Number","tel"]].map(([k, label, type]) => (
          <div key={k}>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">{label}</label>
            <input type={type} value={form[k]} onChange={set(k)} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300" />
          </div>
        ))}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-600 mb-1.5">Message</label>
          <textarea value={form.message} onChange={set("message")} rows={4} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 resize-none" />
        </div>
      </div>
      <button onClick={() => setSent(true)} className="mt-5 px-10 py-3 rounded-full text-white font-bold text-sm hover:opacity-90 transition hover:scale-105 active:scale-95"
        style={{ background: "linear-gradient(135deg, #c0174c, #8b0f38)" }}>
        Send Enquiry
      </button>
    </div>
  );
}

// ─── Retail Stores ────────────────────────────────────────────────────────────

function RetailStores() {
  return (
    <div className="w-full">
      <p className="text-sm text-gray-600 mb-6 leading-relaxed">
        Visit us at one of our retail stores across Kerala. Our representatives will be happy to assist you.
      </p>
      <div className="border-t border-dashed border-gray-200 mb-6" />
      <div className="grid grid-cols-2 gap-4 w-full">
        {retailStores.map((store, i) => (
          <div key={i} className="p-5 rounded-xl border border-gray-100 hover:border-rose-200 transition-colors" style={{ background: "#fafafa" }}>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "#fff0f4" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#c0174c" strokeWidth="2" className="w-5 h-5">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">{store.city}</h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-2">{store.address}</p>
                <p className="text-xs font-semibold" style={{ color: "#c0174c" }}>📞 {store.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function HelpPage() {
  const [activeTab, setActiveTab] = useState("Contact Us");

  const renderTab = () => {
    switch (activeTab) {
      case "Contact Us":          return <ContactUs />;
      case "Business Enquiries":  return <BusinessEnquiries />;
      case "Feedback":            return <Feedback />;
      case "Our Retail Stores":   return <RetailStores />;
      default:                    return null;
    }
  };

  return (
    <div className="min-h-screen flex justify-center bg-white" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      <div className="w-full max-w-5xl shadow my-10 rounded-md self-start overflow-hidden border border-gray-200">

        {/* Hero Banner */}
        <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #c81a52 0%, #c81a52 50%, #fdf4ff 100%)", minHeight: 160 }}>
          <div className="absolute right-20 top-4 w-28 h-28 rounded-full opacity-60"
            style={{ background: "conic-gradient(#f9a8d4 0deg 140deg, #fde68a 140deg 200deg, #fbcfe8 200deg 360deg)" }} />
          <div className="absolute right-8 top-8 w-20 h-20 rounded-full bg-white/70" />
          <div className="absolute right-36 top-12 w-14 h-14 rounded-full opacity-30" style={{ background: "#fde68a" }} />
          <div className="px-8 py-10">
            <h1 className="text-3xl font-black text-white">Help &amp; Support</h1>
            <p className="text-sm text-white mt-2">We're here to help you find your perfect match</p>
          </div>
        </div>

        {/* Tabs + Content */}
        <div className="px-8 py-8 w-full">
          {/* Tab Bar */}
          <div className="flex gap-1 border-b border-gray-200 mb-8 w-full">
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className="px-5 py-3 text-sm font-semibold relative transition-colors whitespace-nowrap"
                style={{ color: activeTab === tab ? "#c0174c" : "#6b7280" }}>
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t" style={{ background: "#c0174c" }} />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content — always full width */}
          <div className="w-full">
            {renderTab()}
          </div>
        </div>

      </div>
    </div>
  );
}