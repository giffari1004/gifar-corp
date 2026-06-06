// src/components/TeamCTA.tsx
import React from "react";

export default function TeamCTA(): React.JSX.Element {
  return (
    <div className="w-full py-16 px-6 lg:px-16 bg-base-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Kolom Kiri - Teks & Tombol */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
            Ready to work with the best?
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-8">
            Our teams are ready to scale with your project. Whether it's
            high-level strategy or granular development, NexusCorp has the
            talent to deliver excellence.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-neutral rounded-none px-6 normal-case font-semibold flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 17.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              Hire a Team
            </button>
            <button className="btn btn-outline border-gray-300 hover:bg-gray-100 hover:text-gray-900 rounded-none px-6 normal-case font-semibold">
              View Careers
            </button>
          </div>
        </div>

        {/* Kolom Kanan - Gambar Mockup Office */}
        <div className="p-2 border border-teal-50 bg-teal-50/30 rounded-none w-full shadow-sm">
          <div className="relative pt-[60%] w-full">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" // Referensi gambar di image_7750aa.jpg
              alt="NexusCorp Meeting Room"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
