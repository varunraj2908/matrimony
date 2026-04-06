"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import CoastHeaderBar from "@/components/layout/CoastHeaderBar";

// ─── Types ────────────────────────────────────────────────────────────────────
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

// ─── Mock Data ────────────────────────────────────────────────────────────────
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

const ALL_MATCHES: Profile[] = [
  {
    id: "a1",
    name: "Nandini S",
    age: 23,
    height: "5'6\"",
    location: "Chennai",
    photo: "https://randomuser.me/api/portraits/women/24.jpg",
  },
  {
    id: "a2",
    name: "Dhanusha Sivarajan",
    age: 25,
    height: "5'2\"",
    location: "Coimbatore",
    photo: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    id: "a3",
    name: "Anusha",
    age: 30,
    height: "5'2\"",
    location: "Bangalore",
    photo: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: "a4",
    name: "Megha Radhakrishnan",
    age: 27,
    height: "5'4\"",
    location: "Kochi",
    photo: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    id: "a5",
    name: "Dr. Keerthi",
    age: 31,
    height: "5'4\"",
    location: "Trivandrum",
    photo: "https://randomuser.me/api/portraits/women/31.jpg",
  },
  {
    id: "a5",
    name: "Dr. Keerthi",
    age: 31,
    height: "5'4\"",
    location: "Trivandrum",
    photo: "https://randomuser.me/api/portraits/women/41.jpg",
  },
  {
    id: "a5",
    name: "Dr. Keerthi",
    age: 31,
    height: "5'4\"",
    location: "Trivandrum",
    photo: "https://randomuser.me/api/portraits/women/40.jpg",
  },
  {
    id: "a5",
    name: "Dr. Keerthi",
    age: 31,
    height: "5'4\"",
    location: "Trivandrum",
    photo: "https://randomuser.me/api/portraits/women/39.jpg",
  },
  {
    id: "a5",
    name: "Dr. Keerthi",
    age: 31,
    
    height: "5'4\"",
    location: "Trivandrum",
    photo: "https://randomuser.me/api/portraits/women/38.jpg",
  },
  {
    id: "a5",
    name: "Dr. Keerthi",
    age: 31,
    height: "5'4\"",
    location: "Trivandrum",
    photo: "https://randomuser.me/api/portraits/women/37.jpg",
  },
  {
    id: "a5",
    name: "Dr. Keerthi",
    age: 31,
    height: "5'4\"",
    location: "Trivandrum",
    photo: "https://randomuser.me/api/portraits/women/36.jpg",
  },
  {
    id: "a5",
    name: "Dr. Keerthi",
    age: 31,
    height: "5'4\"",
    location: "Trivandrum",
    photo: "https://randomuser.me/api/portraits/women/35.jpg",
  },
  {
    id: "a5",
    name: "Dr. Keerthi",
    age: 31,
    height: "5'4\"",
    location: "Trivandrum",
    photo: "https://randomuser.me/api/portraits/women/34.jpg",
  },
  {
    id: "a5",
    name: "Dr. Keerthi",
    age: 31,
    height: "5'4\"",
    location: "Trivandrum",
    photo: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

const NEW_MATCHES: Profile[] = [
  {
    id: "n1",
    name: "Kaveri",
    age: 26,
    height: "5'3\"",
    location: "Mysore",
    photo: "https://picsum.photos/seed/kaveri/120/140",
  },
  {
    id: "n2",
    name: "Shiuli Halder",
    age: 26,
    height: "4'11\"",
    location: "Kolkata",
    photo: "https://picsum.photos/seed/shiuli/120/140",
  },
  {
    id: "n3",
    name: "Jasmin Jena",
    age: 28,
    height: "5'1\"",
    location: "Bhubaneswar",
    photo: "https://picsum.photos/seed/jasmin/120/140",
  },
  {
    id: "n4",
    name: "Subi S",
    age: 24,
    height: "4'11\"",
    location: "Kerala",
    photo: "https://picsum.photos/seed/subi/120/140",
  },
  {
    id: "n5",
    name: "Paromita B",
    age: 23,
    height: "5'5\"",
    location: "West Bengal",
    photo: "https://picsum.photos/seed/paromita/120/140",
  },
];

const WHO_VIEWED_YOU: Profile[] = [
  {
    id: "v1",
    name: "Ganga Raj",
    age: 26,
    height: "5'5\"",
    location: "Kerala",
    photo: "https://picsum.photos/seed/ganga/120/140",
    isPrime: true,
    viewedOn: "27 Mar 2026",
  },
  {
    id: "v2",
    name: "Anu A",
    age: 22,
    height: "5'0\"",
    location: "Kochi",
    photo: "https://picsum.photos/seed/anu/120/140",
    isPrime: true,
    viewedOn: "25 Mar 2026",
  },
  {
    id: "v3",
    name: "Chippy A S",
    age: 30,
    height: "5'2\"",
    location: "Thrissur",
    photo: "https://picsum.photos/seed/chippy/120/140",
    isPrime: true,
    viewedOn: "21 Mar 2026",
  },
  {
    id: "v4",
    name: "Poornima",
    age: 23,
    height: "5'0\"",
    location: "Palakkad",
    photo: "https://picsum.photos/seed/poornima/120/140",
    isPrime: true,
    viewedOn: "20 Mar 2026",
  },
  {
    id: "v5",
    name: "Anakha O",
    age: 27,
    height: "5'3\"",
    location: "Kozhikode",
    photo: "https://picsum.photos/seed/anakha/120/140",
    isPrime: true,
    viewedOn: "20 Mar 2026",
  },
];

const WHO_SHORTLISTED: Profile[] = [
  {
    id: "s1",
    name: "Arathi Viswambharan",
    age: 28,
    height: "5'3\"",
    location: "Kerala",
    photo: "https://picsum.photos/seed/arathi/120/140",
    shortlistedOn: "10 Mar 2026",
  },
  {
    id: "s2",
    name: "Silpamol T R",
    age: 31,
    height: "5'2\"",
    location: "Thrissur",
    photo: "https://picsum.photos/seed/silpamol/120/140",
    isPrime: true,
    shortlistedOn: "17 Sep 2025",
  },
  {
    id: "s3",
    name: "Anusha Suresh",
    age: 32,
    height: "5'2\"",
    location: "Kochi",
    photo: "https://picsum.photos/seed/anushas/120/140",
    shortlistedOn: "09 Aug 2025",
  },
  {
    id: "s4",
    name: "Anu Anirudhan",
    age: 22,
    height: "5'4\"",
    location: "Trivandrum",
    photo: "https://picsum.photos/seed/anuani/120/140",
    shortlistedOn: "11 Jun 2025",
  },
  {
    id: "s5",
    name: "Arya Sabu",
    age: 28,
    height: "5'0\"",
    location: "Ernakulam",
    photo: "https://picsum.photos/seed/arya/120/140",
    shortlistedOn: "01 Jun 2025",
  },
];

const PROFILES_VIEWED: Profile[] = [
  {
    id: "pv1",
    name: "Dimple B",
    age: 22,
    height: "5'4\"",
    location: "Delhi",
    photo: "https://picsum.photos/seed/dimpleb/120/140",
    viewedOn: "28 Mar 2026",
  },
  {
    id: "pv2",
    name: "Anaswara Devarajan",
    age: 27,
    height: "5'3\"",
    location: "Kerala",
    photo: "https://picsum.photos/seed/anaswara/120/140",
    viewedOn: "28 Mar 2026",
  },
  {
    id: "pv3",
    name: "Chethanasahadevan",
    age: 25,
    height: "5'4\"",
    location: "Thrissur",
    photo: "https://picsum.photos/seed/chethana/120/140",
    viewedOn: "28 Mar 2026",
  },
  {
    id: "pv4",
    name: "Vismaya Prasanth Bose",
    age: 27,
    height: "5'5\"",
    location: "Kochi",
    photo: "https://picsum.photos/seed/vismaya/120/140",
    viewedOn: "28 Mar 2026",
  },
  {
    id: "pv5",
    name: "Athira",
    age: 27,
    height: "5'5\"",
    location: "Kozhikode",
    photo: "https://picsum.photos/seed/athira/120/140",
    viewedOn: "28 Mar 2026",
  },
];

const SUCCESS_STORIES = [
  {
    id: "ss1",
    names: "Avinash Purushan & Uma Rohini",
    date: "27 Mar 2026",
    text: "Kerala Matrimony helped us find a matching partner very quickly. Than...",
    photo1: "https://picsum.photos/seed/couple1/160/140",
  },
  {
    id: "ss2",
    names: "Abhijith. S. K & Aparna. B",
    date: "27 Mar 2026",
    text: "Met my soulmate through Kerala Matrimony. I got in touch with Abhiji...",
    photo1: "https://picsum.photos/seed/couple2/160/140",
  },
  {
    id: "ss3",
    names: "Atul Ap & Arsha N",
    date: "27 Mar 2026",
    text: "Thank you Kerala Matrimony! We connected on Kerala Matrimony...",
    photo1: "https://picsum.photos/seed/couple3/160/140",
  },
];

// ─── Icons ────────────────────────────────────────────────────────────────────
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
const EditIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);
const SettingsIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
const HelpIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const HeartIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const MoreIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="19" r="1" />
  </svg>
);
const CheckCircle = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ea580c"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const ClockIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ea580c"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

// ─── Profile Card ─────────────────────────────────────────────────────────────
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

// ─── Section Row ──────────────────────────────────────────────────────────────
const SectionRow = ({
  title,
  subtitle,
  count,
  profiles,
  subTextKey,
}: {
  title: string;
  subtitle: string;
  count?: number;
  profiles: Profile[];
  subTextKey?: "viewedOn" | "shortlistedOn";
}) => (
  <div className="">
    <div className="flex items-center justify-between mb-3 bg-[#b22234] p-4">
      <div>
        <h2 className="text-base font-bold text-white">
          {title}{" "}
          {count !== undefined && (
            <span className="text-white font-normal">
              ({count.toLocaleString()})
            </span>
          )}
        </h2>
        <p className="text-xs text-white">{subtitle}</p>
      </div>
      <button className="flex items-center gap-1 text-xs text-[white] font-semibold hover:underline border border-[white] px-3 py-1.5 rounded-full transition-colors hover:bg-orange-50">
        View all <ChevronRight />
      </button>
    </div>
    <div className="flex gap-3 overflow-x-auto  scrollbar-hide p-4">
      {profiles.map((p) => (
        <ProfileCard
          key={p.id}
          profile={p}
          subText={
            subTextKey
              ? subTextKey === "viewedOn"
                ? `Viewed on : ${p.viewedOn}`
                : `Shortlisted on : ${p.shortlistedOn}`
              : undefined
          }
        />
      ))}
      {/* Arrow */}
      <div className="shrink-0 w-8 flex items-center justify-center">
        <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#ea580c] hover:text-[#ea580c] transition-colors bg-white shadow-sm">
          <ChevronRight />
        </button>
      </div>
    </div>
  </div>
);

// ─── Timer Component ──────────────────────────────────────────────────────────
const Timer = () => {
  return (
    <div className="flex items-center gap-1 bg-gray-800 border text-white text-[10px] px-2.5 py-1.5 rounded-full font-mono">
      <ClockIcon />
      <span>13:03:56s</span>
    </div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"Regular" | "Prime">("Regular");

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
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CoastHeaderBar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
        {/* ── Left Sidebar ── */}
        <aside className="w-52 shrink-0 space-y-4">
          {/* Profile Card */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 text-center">
            <div className="relative w-20 h-20 mx-auto mb-3">
              <img
                src="https://i.pravatar.cc/300?img=33"
                alt="Varun"
                className="w-20 h-20 rounded-full object-cover border-3 border-white shadow-md"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://ui-avatars.com/api/?name=Varun&background=ea580c&color=fff&size=80";
                }}
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="none"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <h3 className="font-bold text-gray-800 text-sm">Varun</h3>
            <div className="flex items-center justify-center gap-1 text-[10px] text-[#b22234] font-medium mb-1">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#b22234">
                <path
                  d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                  fill="none"
                  stroke="#b22234"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              KeralaMatrimony
            </div>
            <p className="text-[11px] text-gray-500 font-mono mb-1">E7086341</p>
            <span className="inline-block text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
              Free member
            </span>

            <div className="mt-3 bg-orange-50 border border-orange-200 rounded-lg p-2.5 text-center">
              <p className="text-[10px] text-gray-600 mb-1.5 leading-snug">
                Upgrade membership to call or message with matches
              </p>
              <button className="bg-[#b22234] text-white text-[10px] font-bold px-4 py-1.5 rounded-full w-full hover:bg-orange-600 transition-colors">
                Upgrade now
              </button>
            </div>

            {/* Switch Account */}
            <div className="mt-3 flex items-center justify-between text-xs text-gray-600 border-t pt-3">
              <span>Switch account</span>
              <div className="flex items-center gap-1">
                <span className="w-5 h-5 bg-[#ea580c] text-white text-[9px] rounded-full flex items-center justify-center font-bold">
                  6
                </span>
                <ChevronRight />
              </div>
            </div>
          </div>

          {/* Menu Links */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            {[
              { icon: <EditIcon />, label: "Edit profile" },
              { icon: <SettingsIcon />, label: "Edit preferences" },
            ].map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ea580c] transition-colors border-b border-gray-50 last:border-0"
              >
                <span className="text-gray-400">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>

          {/* Support */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <p className="text-[11px] text-gray-400 font-semibold px-4 pt-3 pb-1 uppercase tracking-wider">
              Support & feedback
            </p>
            {[
              { icon: <SettingsIcon />, label: "Settings" },
              { icon: <HelpIcon />, label: "Help" },
              { icon: <HeartIcon />, label: "Success stories" },
              { icon: <MoreIcon />, label: "More" },
            ].map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ea580c] transition-colors border-b border-gray-50 last:border-0"
              >
                <span className="text-gray-400">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>

          {/* Other Services */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
            <p className="text-[11px] text-gray-400 font-semibold mb-2 uppercase tracking-wider">
              Matrimony.com - Other Services
            </p>
            {["AstroFreeChat.com", "WeddingBazaar.com", "Mandap.com"].map(
              (s) => (
                <a
                  key={s}
                  href="#"
                  className="flex items-center gap-2 text-xs text-[#ea580c] hover:underline py-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
                  {s}
                </a>
              ),
            )}
          </div>
        </aside>

        {/* ── Main Content ── */}
        <div className="flex-1 min-w-0">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 mb-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-gray-800">
                Complete Your Profile
              </h3>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs text-gray-500">
                Profile completeness score
              </span>
              <span className="text-xs font-bold text-[#ea580c]">90%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div
                className="bg-[#ea580c] h-2 rounded-full"
                style={{ width: "90%" }}
              />
            </div>
            <button className="flex items-center gap-2 border border-[#ea580c] text-[#ea580c] text-xs font-semibold px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ea580c"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
              Add Horoscope
            </button>
          </div>

          {/* ── Daily Recommendations ── */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden  mb-5">
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
                {/* LEFT BUTTON */}
                <button
                  onClick={scrollLeft}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#ea580c] hover:text-[#ea580c] bg-white shadow-sm"
                >
                  <ChevronLeft />
                </button>

                {/* RIGHT BUTTON */}
                <button
                  onClick={scrollRight}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[white] hover:text-[#ea580c] bg-white shadow-sm"
                >
                  <ChevronRight />
                </button>

                <Timer />
                <button className="flex items-center gap-1 text-xs text-[white] font-semibold hover:underline border border-[white] px-3 py-1.5 rounded-full hover:bg-orange-50 transition-colors">
                  View all <ChevronRight />
                </button>
              </div>
            </div>

            {/* SCROLL CONTAINER */}
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
          {/* ── All Matches ── */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden  mb-5">
            <SectionRow
              title="All Matches"
              subtitle="Members who match your partner preferences"
              count={41429}
              profiles={ALL_MATCHES}
            />
          </div>

          {/* ── Paid Member Banner ── */}

          {/* ── New Matches ── */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-5">
            <SectionRow
              title="New Matches"
              subtitle="Members who match your preferences and have joined in the last 30 days"
              count={4737}
              profiles={NEW_MATCHES}
            />
          </div>

          {/* ── Assisted Service Banner ── */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-5 flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 bg-[#ea580c] rounded-full flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <span className="text-xs text-[#ea580c] font-semibold">
                  Assisted service
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-2">
                Personalised matchmaking service
              </p>
              <h3 className="text-base font-bold text-gray-800 mb-2">
                Find your match{" "}
                <span className="text-[#ea580c]">10x faster</span>
              </h3>
              <p className="text-xs text-gray-600 mb-3">
                Personalized matchmaking service through expert Relationship
                Manager
              </p>
              <div className="space-y-1 mb-4">
                {[
                  "Guaranteed matches",
                  "Better response",
                  "Save time & effort",
                ].map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2 text-xs text-gray-700"
                  >
                    <CheckCircle />
                    {f}
                  </div>
                ))}
              </div>
              <button className="bg-[#ea580c] text-white text-xs font-bold px-5 py-2 rounded-full hover:bg-orange-600 transition-colors">
                Know more
              </button>
            </div>
            <div className="w-28 shrink-0 ml-4">
              <img
                src="https://picsum.photos/seed/assisted/112/140"
                alt="Assisted Service"
                className="w-full h-36 object-cover rounded-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://ui-avatars.com/api/?name=A&background=ea580c&color=fff&size=112";
                }}
              />
            </div>
          
          </div>

          {/* ── Who Viewed You ── */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-5">
            <SectionRow
              title="Who Viewed You"
              subtitle="Members who have viewed your profile"
              count={1193}
              profiles={WHO_VIEWED_YOU}
              subTextKey="viewedOn"
            />
          </div>

          {/* ── Who Shortlisted You ── */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-5">
            <SectionRow
              title="Who Shortlisted You"
              subtitle="Members who have shortlisted your profile"
              count={6}
              profiles={WHO_SHORTLISTED}
              subTextKey="shortlistedOn"
            />
          </div>

          {/* ── Photo/Horoscope Requests ── */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 mb-5">
            <h2 className="text-base font-bold text-gray-800 mb-1">
              Photo/Horoscope Requests
            </h2>
            <div className="flex gap-4 border-b border-gray-200 mb-4">
              <button className="text-xs font-semibold text-[#ea580c] border-b-2 border-[#ea580c] pb-2 px-1">
                Requests received (3)
              </button>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["hr1", "hr2", "hr3"].map((seed) => (
                    <img
                      key={seed}
                      src={`https://picsum.photos/seed/${seed}/32/32`}
                      alt=""
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://ui-avatars.com/api/?name=?&background=ea580c&color=fff&size=32";
                      }}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-700 font-medium">
                  Horoscope requests received
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-500 mb-2">
                  3 members have requested you to add Horoscope to your profile
                </p>
                <button className="bg-[#ea580c] text-white text-xs font-bold px-4 py-1.5 rounded-full hover:bg-orange-600 transition-colors">
                  Add Horoscope
                </button>
              </div>
            </div>
          </div>

          {/* ── Profiles You Shortlisted ── */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 mb-5">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-base font-bold text-gray-800">
                  Profiles You Shortlisted{" "}
                  <span className="text-gray-500 font-normal">(1)</span>
                </h2>
                <p className="text-xs text-gray-500">
                  Members that you have shortlisted
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="shrink-0 w-36 cursor-pointer group">
                <div className="relative w-36 h-44 rounded-lg overflow-hidden mb-1.5 border border-gray-200 group-hover:border-[#ea580c] transition-colors">
                  <img
                    src="https://picsum.photos/seed/pallavi/144/176"
                    alt="Pallavi Madanan"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://ui-avatars.com/api/?name=Pallavi&background=ea580c&color=fff&size=144";
                    }}
                  />
                </div>
                <p className="text-xs font-semibold text-gray-800">
                  Pallavi Madanan
                </p>
                <p className="text-[10px] text-gray-500">
                  30 Yrs, 5 ft 6 in, M.S.(Engg.), Not Working, United States of
                  America
                </p>
              </div>
            </div>
          </div>

          {/* ── Profiles You Viewed ── */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-5">
            <SectionRow
              title="Profiles You Viewed"
              subtitle="Members that you have viewed"
              count={1173}
              profiles={PROFILES_VIEWED}
              subTextKey="viewedOn"
            />
          </div>

          {/* ── Profiles Marked Don't Show ── */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 mb-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["ds1", "ds2", "ds3"].map((seed) => (
                    <img
                      key={seed}
                      src={`https://picsum.photos/seed/${seed}/32/32`}
                      alt=""
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://ui-avatars.com/api/?name=?&background=gray&color=fff&size=32";
                      }}
                    />
                  ))}
                </div>
                <p className="text-sm font-semibold text-gray-700">
                  Profiles You Marked As "Don't show" (3)
                </p>
              </div>
              <button className="flex items-center gap-1 text-xs text-[#ea580c] font-semibold hover:underline border border-[#ea580c] px-3 py-1.5 rounded-full hover:bg-orange-50 transition-colors">
                View all <ChevronRight />
              </button>
            </div>
          </div>

          {/* ── Success Stories ── */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 mb-5">
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-base font-bold text-[#ea580c]">
                Lakhs of Happy Marriages!
              </h2>
              <div className="flex items-center gap-2">
                <img
                  src="https://picsum.photos/seed/limca/60/40"
                  alt="Limca Book of Records"
                  className="h-10 w-16 object-cover rounded"
                />
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Featured in the Limca Book of Records for highest number of
              documented marriages online
            </p>

            <div className="flex gap-3 overflow-x-auto pb-2 mb-4">
              {SUCCESS_STORIES.map((story) => (
                <div
                  key={story.id}
                  className="shrink-0 w-44 border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                >
                  <img
                    src={story.photo1}
                    alt={story.names}
                    className="w-full h-32 object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        `https://ui-avatars.com/api/?name=${story.names}&background=ea580c&color=fff&size=160`;
                    }}
                  />
                  <div className="p-2">
                    <p className="text-[11px] font-semibold text-gray-800 leading-tight mb-0.5">
                      {story.names}
                    </p>
                    <p className="text-[9px] text-gray-400 mb-1">
                      Posted on: {story.date}
                    </p>
                    <p className="text-[10px] text-gray-600 leading-snug">
                      {story.text}
                    </p>
                    <button className="text-[10px] text-[#ea580c] font-semibold mt-1 hover:underline">
                      Read more...
                    </button>
                  </div>
                </div>
              ))}
              <div className="shrink-0 w-8 flex items-center justify-center">
                <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#ea580c] hover:text-[#ea580c] transition-colors bg-white shadow-sm">
                  <ChevronRight />
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="flex items-center gap-2 border border-[#ea580c] text-[#ea580c] text-xs font-semibold px-6 py-2 rounded-full hover:bg-orange-50 transition-colors">
                View success stories <ChevronRight />
              </button>
            </div>
          </div>

          {/* ── Other Services ── */}
          <div className="mb-5">
            <h2 className="text-base font-bold text-gray-800 mb-3">
              Matrimony.com - Other Services
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  name: "AstroFreeChat",
                  sub: "From Matrimony.com Group",
                  desc: "Looking for astrology guidance in love, relationships, career, or health?",
                  features: [
                    "Instant Astrology Insights",
                    "Chat Anytime, Anywhere",
                    "First 5 Minutes FREE",
                  ],
                  cta: "Download AstroFreeChat",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  name: "weddingbazaar",
                  sub: "from Matrimony.com group",
                  desc: "India's Largest Wedding Planning Platform",
                  features: [
                    "Photographers, Makeup artists, Caterers and more. Hire best vendors!",
                    "Trusted wedding market place from matrimony.com group",
                    "2.8 Lakh+ trusted vendors across 40+ cities",
                  ],
                  cta: "Know more",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  name: "mandap",
                  sub: "from Matrim...",
                  desc: "India's Lar... Platform",
                  features: ["Fr...", "100%...", "40,00...", "Servic..."],
                  cta: "Know more",
                  color: "bg-blue-50 border-blue-200",
                },
              ].map((svc) => (
                <div
                  key={svc.name}
                  className={`border rounded-xl p-4 ${svc.color}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-200">
                      <span className="text-[10px] font-bold text-[#ea580c]">
                        {svc.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-800">
                        {svc.name}
                      </p>
                      <p className="text-[9px] text-gray-500">{svc.sub}</p>
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-gray-700 mb-2 leading-tight">
                    {svc.desc}
                  </p>
                  <div className="space-y-1 mb-3">
                    {svc.features.map((f) => (
                      <div
                        key={f}
                        className="flex items-start gap-1.5 text-[10px] text-gray-600"
                      >
                        <CheckCircle />
                        <span className="leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-[#ea580c] text-white text-[10px] font-bold py-2 rounded-full hover:bg-orange-600 transition-colors">
                    {svc.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Help Bar ── */}
      <div className="bg-white border-t border-gray-200 py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-700">
              Need help in using KeralaMatrimony?
            </p>
            <p className="text-xs text-gray-500">
              Reach out to us on this number or chat with us
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 border border-gray-300 text-gray-700 text-xs font-semibold px-4 py-2 rounded-full hover:border-[#ea580c] hover:text-[#ea580c] transition-colors">
              <PhoneIcon /> Call now
            </button>
            <button className="flex items-center gap-2 bg-[#ea580c] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
              <ChatIcon /> Chat with us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const PhoneIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ChatIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
