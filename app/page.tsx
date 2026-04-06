"use client";
import StatusBar from "@/components/sections/StatsBar";
import BannerQuote from "@/components/sections/BannerQuote";
import SearchSection from "@/components/sections/SearchSection";
import SuccessStories from "@/components/sections/SuccessStories";
import BeginLoveStory from "@/components/sections/BeginLoveStory";
import BrowseBySection from "@/components/sections/BrowseBySection";
import MembershipPlans from "@/components/sections/MembershipPlans";
import FeaturedProfiles from "@/components/sections/FeaturedProfiles";
import HeroRegistration from "@/components/sections/HeroRegistration";
import CTARegisterBanner from "@/components/sections/CTARegisterBanner";
import MarriageQuoteBanner from "@/components/sections/MarriageQuoteBanner";
import RegisterNowButton from "@/components/ui/RegisterNowButton";
import { useState } from "react";
import RegisterModal from "@/components/modals/RegisterModal";
import ProfileCards from "@/components/sections/ProfileCards";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQSection from "@/components/sections/FAQSection";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white font-sans text-sm">
      {/* ── Hero / Registration Section ── */}
      <HeroRegistration />
      {/* ── Search Section ── */}
      <SearchSection />
      {/* ── BannerQuote ── */}
      <BannerQuote onClick={() => setOpen(true)} />
      {/* ── SCREEN 4 — Featured Profiles (Modern Cards) ── */}
      <FeaturedProfiles />
      {/* ── SCREEN 3 — Marriages Made in Heaven ── */}
      <MarriageQuoteBanner onClick={() => setOpen(true)} />
      {/* ── Success Stories ── */}
      <SuccessStories />
      {/* ── Stats Bar ── */}
      <StatusBar />
      {/* ── CTA Register Banner ── */}
      <CTARegisterBanner onClick={() => setOpen(true)} />
      {/* ── SCREEN 2 — Membership Plans ── */}
      <MembershipPlans />
      {/* ── Begin Love Story ── */}
      <BeginLoveStory onClick={() => setOpen(true)} />
      {/*--------How It works--------*/}
      <HowItWorks />
      {/* ── FAQSections ── */}
      <FAQSection/>
      {/* ── Browse Matrimonial Profiles By ── */}
      <BrowseBySection />
      {/* ✅ Sticky Left Button */}
      <RegisterNowButton onClick={() => setOpen(true)} />
      {/* Modal */}
      <RegisterModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

// "use client"
// import Header from "@/components/layout/Header";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
// import StatusBar from "@/components/sections/StatsBar";
// import BannerQuote from "@/components/sections/BannerQuote";
// import SearchSection from "@/components/sections/SearchSection";
// import SuccessStories from "@/components/sections/SuccessStories";
// import BeginLoveStory from "@/components/sections/BeginLoveStory";
// import BrowseBySection from "@/components/sections/BrowseBySection";
// import MembershipPlans from "@/components/sections/MembershipPlans";
// import FeaturedProfiles from "@/components/sections/FeaturedProfiles";
// import HeroRegistration from "@/components/sections/HeroRegistration";
// import CTARegisterBanner from "@/components/sections/CTARegisterBanner";
// import MarriageQuoteBanner from "@/components/sections/MarriageQuoteBanner";
// import RegisterNowButton from "@/components/ui/RegisterNowButton";
// import { useState } from "react";
// import RegisterModal from "@/components/modals/RegisterModal";
// import ProfileCards from "@/components/sections/ProfileCards";
// import Chat from "@/components/sections/Chat";

// export default function Home() {
//    const [open, setOpen] = useState(false);
//   return (

//     <div className="min-h-screen bg-white font-sans text-sm">

//       <Chat/>
//     </div>
//   );
// }
