import React from "react";
import type { CultureValue } from "../../../types/about";

interface CultureSectionProps {
  values: CultureValue[];
}

export const CultureSection: React.FC<CultureSectionProps> = ({ values }) => {
  // Fungsi helper untuk mapping variasi warna box dan ukuran grid berdasarkan 12-kolom standar
  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case "dark":
        // Menggunakan 3 dari 12 kolom (25% lebar)
        return "bg-neutral text-neutral-content p-8 md:col-span-3";
      case "accent":
        // Menggunakan 6 dari 12 kolom (50% lebar)
        return "bg-accent text-accent-content p-8 md:col-span-6";
      case "light":
        // Box atas (Uncompromising Quality) menggunakan 6 kolom
        return "bg-base-100 border border-base-200 text-base-content p-10 md:col-span-6";
      default:
        // Intellectual Rigor menggunakan 3 dari 12 kolom (25% lebar) agar pas berpasangan dengan "dark"
        return "bg-base-100 border border-base-200 text-base-content p-8 md:col-span-3";
    }
  };

  // Kita pisah item pertama untuk dipasangkan berdampingan dengan gambar
  const firstValue = values[0];
  const restValues = values.slice(1);

  return (
    <section className="py-20 bg-base-200/50">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-2">
            Our Culture
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built on Values, Driven by People.
          </h2>
          <p className="text-sm text-base-content/70 leading-relaxed">
            We foster an environment where intellectual curiosity and
            professional excellence thrive. Our workspace is designed for
            collaboration, deep work, and continuous learning.
          </p>
        </div>

        {/* Row 1: Top Row (Card Besar + Gambar Kantor) - Menggunakan Grid 12 Kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          <div
            className={`${getVariantStyles(firstValue.variant)} flex flex-col justify-center rounded-none shadow-sm`}
          >
            <div className="p-2 bg-success/10 text-success rounded-lg w-fit mb-4">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">{firstValue.title}</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              {firstValue.description}
            </p>
          </div>

          <div className="lg:col-span-6 rounded-none overflow-hidden h-75 lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
              alt="Office Workspace"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Row 2: Bottom Row - Diubah ke grid-cols-12 standar Tailwind agar tidak bergantung config kustom */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {restValues.map((val, idx) => (
            <div
              key={idx}
              className={`${getVariantStyles(val.variant)} flex flex-col justify-between rounded-none shadow-sm min-h-45`}
            >
              <div>
                {val.variant === "accent" && (
                  <div className="mb-4 text-accent-content opacity-90">
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                <p className="text-sm opacity-75 leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
