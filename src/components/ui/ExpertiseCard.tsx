import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

// Definisi Interface untuk Type-Safety TypeScript
interface ServiceItem {
  id: string | number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  isHighlighted?: boolean;
}

interface ExpertiseCardProps {
  service: ServiceItem;
}

export const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ service }) => {
  const IconComponent = service.icon;

  return (
    <div
      className={`flex flex-col justify-between p-8 rounded-lg bg-white border border-teal-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
        service.isHighlighted ? "shadow-sm" : ""
      }`}
    >
      {/* Bagian Atas Konten */}
      <div>
        {/* Pembungkus Ikon */}
        <div
          // text-blue-600 diletakkan di luar agar semua ikon otomatis berwarna biru
          className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-blue-600 ${
            service.isHighlighted ? "bg-blue-50" : "bg-slate-100"
          }`}
        >
          <IconComponent className="w-6 h-6" />
        </div>

        {/* Judul & Deskripsi */}
        <h3 className="text-2xl font-bold mb-4 text-black">{service.title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Daftar Fitur */}
        <ul className="space-y-3 mb-8">
          {service.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-sm font-medium text-slate-800"
            >
              {/* Ikon Ceklis Kustom */}
              <svg
                className="w-4 h-4 text-teal-500 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Tautan Navigasi */}
      <div>
        <Link
          to={`/services/${service.id}`}
          className={`inline-flex items-center gap-1.5 text-sm font-bold transition-colors ${
            service.isHighlighted
              ? "text-teal-600 hover:text-teal-700"
              : "text-black hover:text-slate-600"
          }`}
        >
          Learn More
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
