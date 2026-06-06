// src/components/sections/LegacySection.tsx (atau sesuaikan dengan letak folder Anda)
import { Globe, Leaf, FlaskConical } from "lucide-react";
import LegacyCard from "../../ui/LegacyCard"; // Import komponen card baru

export default function LegacySection() {
  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">A Legacy of Excellence</h2>
          <p className="mt-6 text-lg text-slate-600">
            Building the infrastructure of tomorrow through precise engineering
            and visionary digital strategy.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-20 grid lg:grid-cols-12 gap-6">
          {/* Card 1: Our Vision */}
          <LegacyCard className="lg:col-span-7 relative overflow-hidden min-h-95">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Vision"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-white/85" />
            <div className="relative z-10 h-full flex items-center p-12">
              <div>
                <h3 className="text-4xl font-bold">Our Vision</h3>
                <p className="mt-6 text-sm text-slate-700 leading-relaxed">
                  We believe in a world where technology serves humanity and the
                  planet. Our operations are grounded in sustainable scalability
                  and ethical innovation.
                </p>
              </div>
            </div>
          </LegacyCard>

          {/* Card 2: Global Reach */}
          <LegacyCard className="lg:col-span-5 bg-[#0B1834] text-white p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-cyan-300/20 flex items-center justify-center">
                <Globe size={25} className="text-cyan-300" />
              </div>
              <h3 className="mt-4 text-4xl font-bold">Global Reach</h3>
              <p className="mt-4 text-slate-300 text-sm">
                Operating across 45 countries, delivering localized solutions on
                a massive scale.
              </p>
            </div>
            <div className="border-t border-white/10 pt-4 flex justify-between">
              <div>
                <h4 className="text-2xl font-bold">500+</h4>
                <p className="text-slate-400 text-sm">Global Clients</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold">98%</h4>
                <p className="text-slate-400 text-sm">Retention Rate</p>
              </div>
            </div>
          </LegacyCard>

          {/* Card 3: Sustainability First */}
          <LegacyCard className="lg:col-span-5 bg-[#DCE7FF] p-8">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center">
              <Leaf size={20} className="text-slate-700" />
            </div>
            <h3 className="mt-8 text-3xl font-bold">Sustainability First</h3>
            <p className="mt-4 text-slate-600 text-sm">
              Net-zero commitments integrated into every digital transformation
              project.
            </p>
          </LegacyCard>

          {/* Card 4: Research & Development */}
          <LegacyCard className="lg:col-span-7 bg-white p-10 flex justify-between items-start">
            <div>
              <h3 className="text-3xl font-bold">Research & Development</h3>
              <p className="mt-5 text-slate-600 text-sm">
                Allocating 15% of annual revenue to pioneering AI and blockchain
                research.
              </p>
            </div>
            <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center ms-15 shrink-0">
              <FlaskConical size={20} />
            </div>
          </LegacyCard>
        </div>
      </div>
    </section>
  );
}
