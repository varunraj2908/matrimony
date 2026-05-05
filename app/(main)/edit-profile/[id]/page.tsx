"use client";

import { useRef, useState } from "react";

interface Profile {
  id: string;
  name: string;
  age: number;
  height: string;
  location: string;
  photo: string;
  isPrime?: boolean;
  viewedOn?: string;
  shortlistedOn?: string;
}

const BRAND = "#c0174c";

/* ─── Icons ─────────────────────────────────────────────────────── */
const CheckCircle = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" stroke="#c0174c" strokeWidth="1.5" fill="#fff5f7" />
    <path d="M7 12.5l3.5 3.5 6-7" stroke="#c0174c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const PhoneIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.03 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
  </svg>
);
const WAIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.549 4.106 1.51 5.833L.057 23.054a.75.75 0 00.92.92l5.221-1.453A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.493-5.207-1.357l-.374-.214-3.876 1.079 1.079-3.876-.214-.374A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);
const StarIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const LockIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);
const BackIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 5l-7 7 7 7" />
  </svg>
);
const HeartIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
  </svg>
);

/* ─── Data ───────────────────────────────────────────────────────── */
const PHOTOS = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/women/45.jpg",
  "https://randomuser.me/api/portraits/women/46.jpg",
];

const PERSONAL_INFO = [
  { label: "Age",                value: "29 Years" },
  { label: "Height",             value: "4'11\"" },
  { label: "Weight",             value: "47 Kgs" },
  { label: "Body Type",          value: "Average" },
  { label: "Mother Tongue",      value: "Malayalam" },
  { label: "Spoken Languages",   value: "English, Hindi, Tamil" },
  { label: "Profile Created By", value: "Self" },
  { label: "Marital Status",     value: "Never Married" },
  { label: "Lives In",           value: "South West Region, United Kingdom" },
  { label: "Resident Status",    value: "Temporary Visa" },
  { label: "Citizenship",        value: "Indian Citizen" },
  { label: "Eating Habits",      value: "Non-Vegetarian" },
  { label: "Religion",           value: "Hindu" },
  { label: "Caste",              value: "Thiyya (Caste No Bar)" },
  { label: "Subcaste",           value: "Ezhava" },
  { label: "Gothra(m)",          value: "Not specified" },
  { label: "Dosha(m)",           value: "Don't know" },
  { label: "Date Of Birth",      value: null, locked: true },
  { label: "Star",               value: null, locked: true },
  { label: "Raasi",              value: null, locked: true },
  { label: "Horoscope",          value: null, locked: true },
  { label: "Employment",         value: "Employed in private" },
  { label: "Income",             value: "₹ 20–25 lakhs per annum, GBP 26000" },
  { label: "Education",          value: "M.Sc." },
  { label: "Occupation",         value: "Others" },
  { label: "Works at",           value: null, locked: true },
];

const DAILY_RECOMMENDATIONS: Profile[] = [
  {
    id: "d1",
    name: "Sudipa Howlader",
    age: 28,
    height: "4'11\"",
    location: "West Bengal",
    photo: "https://randomuser.me/api/portraits/women/55.jpg",
    isPrime: true,
  },
  {
    id: "d2",
    name: "Rageshree Sengupta",
    age: 25,
    height: "5'5\"",
    location: "Kolkata",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    isPrime: true,
  },
  {
    id: "d3",
    name: "Arpita Bose",
    age: 33,
    height: "5'4\"",
    location: "Mumbai",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    isPrime: true,
  },
  {
    id: "d4",
    name: "Dimple B",
    age: 33,
    height: "5'4\"",
    location: "Delhi",
    photo: "https://randomuser.me/api/portraits/women/50.jpg",
    isPrime: true,
  },
  {
    id: "d5",
    name: "Akhila Vairan",
    age: 24,
    height: "5'1\"",
    location: "Kerala",
    photo: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    id: "d5",
    name: "Akhila Vairan",
    age: 24,
    height: "5'1\"",
    location: "Kerala",
    photo: "https://randomuser.me/api/portraits/women/77.jpg",
  },
  {
    id: "d5",
    name: "Akhila Vairan",
    age: 24,
    height: "5'1\"",
    location: "Kerala",
    photo: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    id: "d5",
    name: "Akhila Vairan",
    age: 24,
    height: "5'1\"",
    location: "Kerala",
    photo: "https://randomuser.me/api/portraits/women/70.jpg",
  },
];

const FAMILY_INFO = [
  { label: "Parents",          value: "Father is Retired, Mother is a Home Maker" },
  { label: "Sisters",          value: "1 sister" },
  { label: "Ancestral Origin", value: "Kerala" },
];

const LIFESTYLE = [
  { label: "Cuisine",          value: "American, Arabic, Chinese, Fast food, North Indian, South Indian, Srilankan, Thai" },
  { label: "Books",            value: "Science Fiction, Thriller / Suspense" },
  { label: "Hobbies",          value: "Cooking, Crosswords, Listening to podcasts, Photography, Sightseeing, Solving Puzzles, Travel" },
  { label: "Movies",           value: "Comedy, Documentaries, Fantasy, Romantic Comedies, Sci-Fi, Thriller / Suspense" },
  { label: "Music",            value: "Country, Disco, Film Songs, Hip-Hop, Indian / Hindustani, Western" },
  { label: "Sports",           value: "Jogging / Walking / Running" },
  { label: "Smoking Habits",   value: "Doesn't Smoke" },
  { label: "Drinking Habits",  value: "Doesn't Drink" },
];

const PARTNER_PREFS = {
  basic: [
    { label: "Preferred Groom's Age",     value: "29–36 yrs",                   match: true },
    { label: "Preferred Height",          value: "5'4\" – 5'9\"",               match: true },
    { label: "Preferred Marital Status",  value: "Never Married",               match: true },
    { label: "Preferred Mother Tongue",   value: "Kannada, Malayalam, Tamil",   match: true },
    { label: "Preferred Physical Status", value: "Normal",                      match: true },
    { label: "Preferred Eating Habits",   value: "Non-Vegetarian, Eggetarian",  match: true },
    { label: "Preferred Smoking Habits",  value: "Never Smokes",                match: true },
    { label: "Preferred Drinking Habits", value: "Never Drinks, Drinks Socially", match: true },
  ],
  religion: [
    { label: "Preferred Religion", value: "Hindu",          match: true },
    { label: "Preferred Caste",    value: "Any",            match: true },
    { label: "Preferred Star",     value: "Any",            match: true },
    { label: "Preferred Dosham",   value: "Doesn't Matter", match: true },
  ],
  professional: [
    { label: "Preferred Education",       value: "Bachelors - Engineering / Computers / Others, Masters - Engin...", match: true },
    { label: "Preferred Employment Type", value: "Any", match: true },
    { label: "Preferred Occupation",      value: "Any", match: true },
    { label: "Preferred Annual Income",   value: "Any", match: true },
  ],
  location: [
    { label: "Preferred Country",        value: "India, United States of America, United Kingdom, Australia, ... more", match: true },
    { label: "Preferred Residing State", value: "Kerala, Lakshwadeep, Alabama, Alaska, Arizona, Arkansas, Cal... more", match: true },
    { label: "Preferred Residing City",  value: "Alappuzha, Ernakulam, Idukki, Kannur, Kasaragod, Kozhikode, ... more", match: true },
    { label: "Preferred Citizenship",    value: "Any", match: true },
  ],
};

const BOTH_LIKE = [
  { label: "Cuisine", value: "Arabic" },
  { label: "Movies",  value: "Comedy" },
];

const ChevronRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
const ChevronLeft = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const CrownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const Dot = () => <span className="w-1.5 h-1.5 rounded-full bg-gray-300 inline-block mx-1.5 shrink-0" />;

function SectionHeader({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-8 h-8 rounded-full flex items-center justify-center text-base shrink-0" style={{ backgroundColor: "#fff0f4" }}>
        {icon}
      </div>
      <h2 className="text-base font-bold text-gray-800">{title}</h2>
      <div className="flex-1 h-px bg-gray-100" />
    </div>
  );
}

function InfoRow({ label, value, locked }: { label: string; value?: string | null; locked?: boolean }) {
  return (
    <div className="flex items-start py-2.5 border-b border-gray-50 last:border-0">
      <span className="text-sm text-gray-500 w-48 shrink-0">{label}</span>
      <span className="text-gray-300 mr-3 text-sm">:</span>
      {locked ? (
        <button className="flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-75" style={{ color: BRAND }}>
          <LockIcon /> Upgrade to view
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      ) : (
        <span className="text-sm font-medium text-gray-800 leading-relaxed">{value}</span>
      )}
    </div>
  );
}

function PrefRow({ label, value, match }: { label: string; value: string; match: boolean }) {
  return (
    <div className="flex items-center py-2.5 border-b border-gray-50 last:border-0 gap-3">
      <span className="text-sm text-gray-500 w-52 shrink-0">{label}</span>
      <span className="text-sm text-gray-800 flex-1">{value}</span>
      {match && <CheckCircle />}
    </div>
  );
}

function PrefGroup({ title, rows }: { title: string; rows: { label: string; value: string; match: boolean }[] }) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide">{title}</h3>
        <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: BRAND }}>
          You match <CheckCircle />
        </span>
      </div>
      <div className="bg-gray-50 rounded-xl px-4 divide-y divide-gray-100">
        {rows.map((r) => <PrefRow key={r.label} {...r} />)}
      </div>
    </div>
  );
}

const ActionButtons = () => (
  <div className="flex items-center gap-3">
    <button className="flex items-center gap-2 border border-gray-300 text-gray-600 text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-gray-50 transition-colors">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" strokeLinecap="round"/><line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round"/></svg>
      Don't Show
    </button>
    <button className="flex items-center gap-2 border text-sm font-semibold px-5 py-2.5 rounded-full transition-colors hover:bg-amber-50" style={{ borderColor: "#f59e0b", color: "#f59e0b" }}>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
      Skip
    </button>
    <button className="flex items-center gap-2 text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-sm transition-all hover:opacity-90" style={{ backgroundColor: BRAND }}>
      <HeartIcon /> Send Interest
    </button>
  </div>
);

const ProfileCard = ({
  profile,
  subText,
}: {
  profile: Profile;
  subText?: string;
}) => (
  <div className="shrink-0 w-32 cursor-pointer group">
    <div className="relative w-32 h-32 rounded-lg overflow-hidden mb-1.5 border border-gray-200 group-hover:border-[#ea580c] transition-colors">
      <img
        src={profile.photo}
        alt={profile.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            `https://ui-avatars.com/api/?name=${profile.name}&background=ea580c&color=fff&size=120`;
        }}
      />
      {profile.isPrime && (
        <div className="absolute top-1.5 left-1.5 bg-amber-400 rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
          <CrownIcon />
        </div>
      )}
    </div>
    <p className="text-xs font-semibold text-gray-800 truncate leading-tight">
      {profile.name}
    </p>
    <p className="text-[10px] text-gray-500">
      {profile.age} Yrs, {profile.height}
    </p>
    {subText && <p className="text-[9px] text-gray-400 mt-0.5">{subText}</p>}
  </div>
);

export default function ProfilePreviewPage() {
  const [activePhoto, setActivePhoto] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollLeft = () => {
      scrollRef.current?.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    };
  
    const scrollRight = () => {
      scrollRef.current?.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full flex justify-center pt-7">
             <div className="bg-white  rounded-xl max-w-[61.5%] border border-gray-200 shadow-sm overflow-hidden  ">
            <div className="flex items-center justify-between mb-3 bg-[#b22234] p-4">
              <div>
                <h2 className="text-base font-bold text-white">
                  Daily Recommendations
                </h2>
                <p className="text-xs text-white">
                  Recommended matches for today
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={scrollLeft}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#ea580c] hover:text-[#ea580c] bg-white shadow-sm"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={scrollRight}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[white] hover:text-[#ea580c] bg-white shadow-sm"
                >
                  <ChevronRight />
                </button>
                <button className="flex items-center gap-1 text-xs text-[white] font-semibold hover:underline border border-[white] px-3 py-1.5 rounded-full hover:bg-orange-50 transition-colors">
                  View all <ChevronRight />
                </button>
              </div>
            </div>
             <div className="p-4">
            <div
              ref={scrollRef}
              className="flex gap-3 overflow-hidden scroll-smooth"
            >
              {DAILY_RECOMMENDATIONS.map((p) => (
                <ProfileCard key={p.id} profile={p} />
              ))}
            </div>
             </div>
          </div>
          </div>

      <div className="max-w-5xl mx-auto px-4 py-6 space-y-4">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-3">
          <div className="flex">
            <div className="shrink-0 w-56 relative">
              <div className="absolute top-3 left-3 z-10 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm" style={{ backgroundColor: BRAND }}>
                NEWLY JOINED
              </div>
              <img
                src={PHOTOS[activePhoto]}
                alt="Anju Krishna"
                className="w-56 object-cover rounded-lg overflow-hidden"
                style={{ height: "280px" }}
                onError={(e) => { (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Anju+Krishna&background=c0174c&color=fff&size=224"; }}
              />
              <div className="absolute bottom-0 rounded-lg left-0 right-0 bg-linear-to-t from-black/50 to-transparent p-3 flex items-center justify-between">
                <button onClick={() => setActivePhoto((p) => (p - 1 + PHOTOS.length) % PHOTOS.length)} className="text-white/80 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <span className="text-white text-xs font-medium bg-black/30 rounded-full px-2.5 py-0.5">{activePhoto + 1}/{PHOTOS.length}</span>
                <button onClick={() => setActivePhoto((p) => (p + 1) % PHOTOS.length)} className="text-white/80 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
            <div className="flex-1 p-5 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-3 py-1">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    Verified
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold text-white rounded-full px-3 py-1" style={{ backgroundColor: "#f59e0b" }}>
                    <StarIcon /> Paid Member
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 border border-gray-200 rounded-full px-3 py-1.5 hover:border-gray-400 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Shortlist
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
                  </button>
                </div>
              </div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-0.5">Anju Krishna</h1>
                  <p className="text-xs text-gray-400">E12101948 &nbsp;·&nbsp; Last seen few hours ago</p>
                </div>
                <div className="flex gap-2">
                  <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-gray-400 transition-colors">
                    <PhoneIcon />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-white transition-colors">
                    <WAIcon />
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap items-center text-sm text-gray-600 mb-2">
                {["Never Married", "Profile created by self", "29 yrs", "4'11\"", "Thiyya (Caste No Bar)", "M.Sc."].map((item, i, arr) => (
                  <span key={i} className="flex items-center">
                    {item}{i < arr.length - 1 && <Dot />}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center text-sm text-gray-600 mb-5">
                {["Others", "₹ 20–25 lakhs per annum", "United Kingdom"].map((item, i, arr) => (
                  <span key={i} className="flex items-center">
                    {item}{i < arr.length - 1 && <Dot />}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <ActionButtons />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <SectionHeader icon="👤" title="Personal Information" />
          {PERSONAL_INFO.map((r) => <InfoRow key={r.label} {...r} />)}
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <SectionHeader icon="👨‍👩‍👧" title="Family Information" />
          {FAMILY_INFO.map((r) => <InfoRow key={r.label} {...r} />)}
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <SectionHeader icon="📞" title="Contact Information" />
          <div className="flex items-center py-2">
            <span className="text-sm text-gray-500 w-48 shrink-0">Mobile Number</span>
            <span className="text-gray-300 mr-3 text-sm">:</span>
            <button className="flex items-center gap-1.5 text-sm font-medium hover:opacity-75 transition-opacity" style={{ color: BRAND }}>
              <LockIcon /> +44 77×××××××× &nbsp; Upgrade to view
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <SectionHeader icon="💬" title="About Myself" />
          <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
            {[
              {
                title: "About Anju Krishna",
                text: "Hi thanks for viewing my profile. I am Anju Krishna currently residing in the UK. I have obtained a master's degree in Marine Conservation from the University of Plymouth. I am working in the care sector. I would describe myself as friendly, caring and confident. Moreover I always try to support and put others first. I value mutual respect, honesty and family. If you think we could be a good match, I would be happy to hear from you.",
              },
              {
                title: "About her family",
                text: "We are a close knit family of five. My father is a retired Sub-Inspector from the Kerala Police Department. My mother is a homemaker. I have a younger sister who is currently preparing for the military exams. We also live with my grandmother.",
              },
              {
                title: "What we are looking for",
                text: "I am looking for someone who shares similar values like kindness, care, mutual understanding and mutual respect. I would appreciate a partner who values his partner's opinions and believes in building a strong and supportive relationship. I am currently settled in the UK so my first preference is for someone from the UK. However I also welcome proposals from other preferred locations.",
              },
            ].map((s) => (
              <div key={s.title}>
                <h3 className="font-bold text-gray-800 mb-1.5">{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <SectionHeader icon="🌿" title="Lifestyle" />
          {LIFESTYLE.map((r) => <InfoRow key={r.label} {...r} />)}
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <SectionHeader icon="✨" title="Her Partner Preferences" />
          <div className="flex items-center gap-4 p-4 rounded-xl mb-6 border border-pink-100" style={{ backgroundColor: "#fff5f7" }}>
            <img src={PHOTOS[0]} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" alt=""
              onError={(e) => { (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=A&background=c0174c&color=fff"; }} />
            <div className="flex-1">
              <p className="text-sm font-bold text-gray-800 mb-2">
                You match <span style={{ color: BRAND }}>20/20</span> of her preferences
              </p>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all" style={{ width: "100%", backgroundColor: BRAND }} />
              </div>
            </div>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" alt="" />
          </div>

          <PrefGroup title="Basic Preferences"        rows={PARTNER_PREFS.basic} />
          <PrefGroup title="Religious Preferences"    rows={PARTNER_PREFS.religion} />
          <PrefGroup title="Professional Preferences" rows={PARTNER_PREFS.professional} />
          <PrefGroup title="Location Preferences"     rows={PARTNER_PREFS.location} />
        </div>

        {/* ── Both of you like ── */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-gray-200 to-gray-200" />
            <span className="text-sm font-bold text-gray-700 flex items-center gap-2 whitespace-nowrap">
              <span style={{ color: BRAND }}>✦</span> Both of you like <span style={{ color: BRAND }}>✦</span>
            </span>
            <div className="h-px flex-1 bg-linear-to-l from-transparent via-gray-200 to-gray-200" />
          </div>
          {BOTH_LIKE.map((r) => <InfoRow key={r.label} {...r} />)}
        </div>

        {/* ── Assisted Service Banner ── */}
        <div className="rounded-2xl border border-green-100 bg-linear-to-br from-green-50 to-emerald-50 p-5 flex items-center gap-5">
          <div className="flex-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-xl shadow-sm">🤝</div>
              <div>
                <p className="font-bold text-gray-800">Assisted service</p>
                <p className="text-xs text-gray-500">Personalised matchmaking service</p>
              </div>
            </div>
            <p className="text-lg font-bold text-gray-800 mb-1">
              Find your match <span className="text-green-600">10x faster</span>
            </p>
            <p className="text-xs text-gray-500 mb-3">Personalized matchmaking service through expert Relationship Manager</p>
            {["Guaranteed matches", "Better response", "Save time & effort"].map((f) => (
              <p key={f} className="flex items-center gap-2 text-sm text-gray-700 font-medium mb-1">
                <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {f}
              </p>
            ))}
            <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-5 py-2 rounded-full transition-colors shadow-sm">
              Know more
            </button>
          </div>
          <img src="https://randomuser.me/api/portraits/women/68.jpg" className="w-32 h-32 rounded-2xl object-cover shrink-0 shadow-sm" alt="" />
        </div>

        {/* ── Sticky bottom action bar ── */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-4 sticky bottom-4">
          <div className="flex items-center justify-center gap-3">
            <ActionButtons />
          </div>
        </div>

      </div>
    </div>
  );
}