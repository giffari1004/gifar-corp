import Hero from "../components/sections/homePage/Hero";
import LegacySection from "../components/sections/homePage/LegacySection";
import ExpertiseSection from "../components/sections/homePage/ExpertiseSection";
import TestimonialSection from "../components/sections/homePage/TestimonialSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <LegacySection />
      <ExpertiseSection />
      <TestimonialSection />
    </main>
  );
}
