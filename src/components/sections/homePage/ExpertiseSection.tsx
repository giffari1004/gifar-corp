import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../../../constant/servicesData";
import { ExpertiseCard } from "../../ui/ExpertiseCard"; // Sesuaikan jalur folder komponen Anda

export const ExpertiseSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 font-sans text-slate-900">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider block mb-3">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
              Comprehensive Solutions for the Digital Age
            </h2>
          </div>
          <div>
            <Link
              to="/services"
              className="text-sm font-bold text-black border-b-2 border-black pb-1 hover:text-slate-600 hover:border-slate-600 transition-colors inline-block whitespace-nowrap"
            >
              View All Services
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <ExpertiseCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
