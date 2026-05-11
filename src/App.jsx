import { Header } from "./Header.jsx";
import { Hero } from "./Hero.jsx";
import { TrustBar } from "./TrustBar.jsx";
import { CredibilitySection } from "./Credibility.jsx";
import { DashboardSection } from "./Dashboard.jsx";
import { BentoSection } from "./Bento.jsx";
import { BlogSection } from "./Blog.jsx";
import { FinalCTA } from "./FinalCTA.jsx";
import { Footer } from "./Footer.jsx";

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
