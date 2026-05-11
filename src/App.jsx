import React from "react";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { TrustBar } from "./components/TrustBar.jsx";
import { CredibilitySection } from "./components/Credibility.jsx";
import { DashboardSection } from "./components/Dashboard.jsx";
import { BentoSection } from "./components/Bento.jsx";
import { BlogSection } from "./components/Blog.jsx";
import { FinalCTA } from "./components/FinalCTA.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="bt-page">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <CredibilitySection />
        <DashboardSection />
        <BentoSection />
        <BlogSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
