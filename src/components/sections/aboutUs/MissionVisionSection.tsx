import React from "react";

interface MissionVisionProps {
  mission: string;
  vision: string;
  quote: string;
  ceoName: string;
}

export const MissionVisionSection: React.FC<MissionVisionProps> = ({
  mission,
  vision,
  quote,
  ceoName,
}) => {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Kolon Kiri: Misi & Visi */}
        <div className="lg:col-span-5 space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-base-content">
            Purpose Driven by Precision.
          </h2>
          <p className="text-base-content/70 leading-relaxed">
            We operate at the intersection of traditional stability and radical
            innovation. Every decision we make is anchored in a long-term vision
            to create value that transcends quarterly reports.
          </p>

          {/* Misi */}
          <div className="flex gap-4">
            <div className="p-3 bg-neutral text-neutral-content rounded-xl h-fit">
              {/* Rocket Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-base-content/60 text-sm leading-relaxed">
                {mission}
              </p>
            </div>
          </div>

          {/* Visi */}
          <div className="flex gap-4">
            <div className="p-3 bg-accent text-accent-content rounded-xl h-fit">
              {/* Eye Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-base-content/60 text-sm leading-relaxed">
                {vision}
              </p>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Gambar & Quote */}
        <div className="lg:col-span-7 relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1000&q=80"
              alt="Boardroom Meeting"
              className="w-full h-112.5 object-cover opacity-80"
            />
          </div>

          {/* Quote Card Floating */}
          <div className="absolute -bottom-10 left-6 right-6 md:left-10 md:right-12 bg-base-100 border border-base-200 shadow-xl p-6 rounded-none max-w-md">
            <p className="text-sm italic font-medium text-base-content/80 mb-4">
              "{quote}"
            </p>
            <span className="text-xs font-bold uppercase tracking-wider text-base-content">
              — {ceoName}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
