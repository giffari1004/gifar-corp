import React from "react";

interface HeroSectionProps {
  established: string;
  title: string;
  description: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  established,
  title,
  description,
}) => {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-base-100 overflow-hidden pt-16">
      {/* Background Image - opacity dinaikkan dan mix-blend dihapus sementara untuk testing */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: `url('/images/danist-soh-cs3BrnkjvBg-unsplash.jpg')`,
        }}
      />

      {/* Gradient Overlay - Diperbaiki menjadi bg-gradient-to-r */}
      <div className="absolute inset-0 bg-gradient-to-r from-base-100 via-base-100/80 to-transparent" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <span className="badge badge-accent text-neutral-content rounded-none font-semibold text-xs tracking-wider px-3 py-2 mb-6">
          {established}
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-base-content max-w-2xl leading-tight mb-6">
          {title}
        </h1>
        <p className="text-base-content/70 text-lg md:text-xl max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};
