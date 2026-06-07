import React from "react";
import { useAboutData } from "../hooks/useAboutData";
import { HeroSection } from "../components/sections/aboutUs/HeroSection";
import { MissionVisionSection } from "../components/sections/aboutUs/MissionVisionSection";
import { LegacySection } from "../components/sections/aboutUs/LegacySection";
import { CultureSection } from "../components/sections/aboutUs/CultureSection";
import { CTASection } from "../components/sections/aboutUs/CTASection";

const AboutPage: React.FC = () => {
  const { companyInfo, timelineItems, cultureValues } = useAboutData();

  return (
    <main className="min-h-screen bg-base-100 font-sans antialiased">
      {/* Hero */}
      <HeroSection
        established={companyInfo.established}
        title={companyInfo.heroTitle}
        description={companyInfo.heroDescription}
      />

      {/* Mission & Vision */}
      <MissionVisionSection
        mission={companyInfo.mission}
        vision={companyInfo.vision}
        quote={companyInfo.ceoQuote}
        ceoName={companyInfo.ceoName}
      />

      {/* Legacy / Timeline Slider */}
      <LegacySection items={timelineItems} />

      {/* Culture Values Grid */}
      <CultureSection values={cultureValues} />

      {/* CTA Section */}
      <CTASection />
    </main>
  );
};

export default AboutPage;
