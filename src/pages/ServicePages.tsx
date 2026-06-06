import React from "react";
import type { ServiceItem, TestimonialItem } from "../types/service";
import { ServiceCard } from "../components/sections/ourService/ServiceCard";
import { TestimonialCard } from "../components/sections/ourService/TestimonialCard";

// Dummy Data sesuai gambar mockup Anda
const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Strategy Consulting",
    description:
      "Market positioning, risk assessment, and long-range organizational roadmap development for Fortune 500 companies.",
    price: "$15,000",
    period: "Engagement",
    icon: "strategy",
  },
  {
    id: 2,
    title: "Software Development",
    description:
      "Custom enterprise applications built with modern frameworks, focusing on scalability, security, and exceptional user experience.",
    price: "$25,000",
    period: "Sprint",
    icon: "software",
  },
  {
    id: 3,
    title: "Data Analytics",
    description:
      "Harnessing AI and machine learning to transform complex raw data into actionable business intelligence and predictive models.",
    price: "$12,000",
    period: "Month",
    icon: "analytics",
  },
  {
    id: 4,
    title: "IT Managed Services",
    description:
      "Full-spectrum 24/7 technical oversight, cloud infrastructure management, and proactive cybersecurity monitoring.",
    price: "$5,000",
    period: "Month",
    icon: "managed",
  },
];

const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    name: "Marcus Thorne",
    role: "CEO",
    company: "Global Logistics Co.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150",
    stars: 5,
    content:
      "The Strategy Consulting team at NexusCorp identified market shifts six months before our competitors. Their roadmap was instrumental in our record-breaking Q4.",
  },
  {
    id: 2,
    name: "Elena Rodriguez",
    role: "CTO",
    company: "Innovate Solutions",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
    stars: 5,
    content:
      "Their Software Development sprint cycle is the most efficient we've encountered. They delivered a fully functional enterprise portal two weeks ahead of schedule.",
  },
  {
    id: 3,
    name: "Simon Chen",
    role: "VP Marketing",
    company: "Apex Retail",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
    stars: 5,
    content:
      "The Data Analytics models NexusCorp built for us increased our marketing ROI by 40%. The insights were clear, actionable, and truly transformative.",
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 font-sans antialiased">

      {/* HERO SECTION */}
      <section className="relative bg-linear-to-b from-white via-slate-50 to-slate-100 py-24 px-6 overflow-hidden border-b border-gray-100">
        {/* Desain Grid Tipis Latar Belakang */}
        <div className="absolute inset-0 grid grid-cols-6 opacity-[0.03] pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border-r border-gray-900 h-full"></div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block bg-[#0A1128] text-white text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 mb-8">
            Strategic Excellence
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-6">
            Enterprise Solutions for the <br className="hidden md:inline" />{" "}
            Future of Business
          </h1>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We deliver precision-engineered services designed to scale your
            operations, secure your infrastructure, and unlock the power of your
            data.
          </p>
        </div>
      </section>

      {/* CORE CAPABILITIES SECTION */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              Core Capabilities
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Our multidisciplinary approach ensures that every facet of your
              technological and strategic landscape is optimized for long-term
              growth.
            </p>
          </div>
          <div className="text-teal-600 hidden md:block">
            {/* Grid Icon Kanan */}
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-slate-100/60 border-t border-b border-gray-100 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-gray-500 text-sm">
              Validated success stories from across our core service areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION (CTA) */}
      <section className="bg-[#0B132B] text-white py-24 px-6 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Ready to Scale Your Enterprise?
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed mb-10">
            Contact our specialist teams today to discuss a tailored engagement
            model that aligns with your specific goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn bg-[#C9D6DF] hover:bg-white text-slate-950 font-semibold px-8 rounded-none border-none normal-case">
              Book a Consultation
            </button>
            <button className="btn btn-outline text-white hover:bg-white hover:text-slate-950 px-8 rounded-none border-gray-600 normal-case">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
