import { ArrowRight, Settings } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
      relative
      min-h-[calc(100vh-96px)]
      bg-cover
      bg-center
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-10 flex items-center min-h-[calc(100vh-96px)]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-slate-700 px-2 py-2 rounded-full font-semibold">
            <Settings size={16} />
            Leading Global Innovation
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight">
            Empowering Innovation for a
            <br />
            <span className="text-teal-500">Sustainable Future</span>
          </h1>

          <p className="mt-8 text-1xl text-gray-600 leading-relaxed max-w-4xl">
            At GifarCorp, we integrate cutting-edge technology with strategic
            expertise to drive meaningful growth. We don't just solve problems
            we redefine what's possible for global enterprises.
          </p>

          <div className="mt-10 flex gap-6">
            <button className="bg-black text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-gray-900 transition">
              Explore Solutions
            </button>

            <button className="border border-gray-400 px-4 py-3 rounded-lg text-sm font-semibold flex items-center gap-3 hover:bg-white transition">
              View Case Studies
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
