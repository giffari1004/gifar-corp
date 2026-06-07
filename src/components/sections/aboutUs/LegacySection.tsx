import React from "react";
import type { TimelineItem } from "../../../types/about";

interface LegacySectionProps {
  items: TimelineItem[];
}

export const LegacySection: React.FC<LegacySectionProps> = ({ items }) => {
  return (
    <section className="py-20 bg-base-100 border-t border-base-200">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header Slider */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-2">
              Our Legacy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-base-content">
              Two Decades of Impact.
            </h2>
          </div>
          {/* Navigasi Button manual opsional */}
          <div className="flex gap-2">
            <button className="btn btn-square btn-outline btn-sm rounded-none">
              ‹
            </button>
            <button className="btn btn-square btn-outline btn-sm rounded-none">
              ›
            </button>
          </div>
        </div>

        {/* Timeline Slider (DaisyUI Carousel) */}
        <div className="carousel carousel-center w-full space-x-6 p-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="carousel-item w-full sm:w-87.5 flex flex-col"
            >
              <div className="border-l-2 border-neutral-content pl-6 py-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-4xl font-extrabold tracking-tight text-base-content block mb-4">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold mb-2 text-base-content">
                    {item.title}
                  </h3>
                  <p className="text-sm text-base-content/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
