import React from "react";
import { teamStats } from "../../../constant/teamData";

export default function TeamHeader(): React.JSX.Element {
  return (
    <div className="w-full pt-16 pb-8 px-6 lg:px-16 bg-base-100">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <span className="badge badge-sm py-3 px-4 bg-teal-50 border-none text-teal-700 font-semibold tracking-wide mb-4">
          Our Collective Genius
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-base-content mb-6">
          The Architects of Innovation
        </h1>
        <p className="text-base text-gray-600 leading-relaxed">
          GifarCorp brings together a diverse group of visionary thinkers and
          precise executors. Our team is dedicated to redefining the boundaries
          of corporate efficiency through technology and human-centric design.
        </p>
      </div>

      {/* Divisions & Stats Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-base-200 pb-6 gap-6">
        <div>
          <h2 className="text-2xl font-bold text-base-content">
            {teamStats.title}
          </h2>
          <p className="text-sm text-gray-500 mt-1">{teamStats.description}</p>
        </div>

        <div className="flex items-center gap-8 self-end md:self-auto">
          {teamStats.metrics.map((stat, index) => (
            <div key={index} className="flex items-center gap-8">
              <div className="text-center md:text-right">
                <div className="text-3xl font-bold text-base-content">
                  {stat.value}
                </div>
                <div className="text-xs tracking-wider text-gray-500 font-semibold uppercase">
                  {stat.label}
                </div>
              </div>
              {index < teamStats.metrics.length - 1 && (
                <div className="h-10 w-px bg-gray-300 hidden sm:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
