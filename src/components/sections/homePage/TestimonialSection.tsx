import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTestimonial } from "../../../hooks/useTestimonial";

export const TestimonialSection: React.FC = () => {
  const { visibleTestimonials, handlePrev, handleNext } = useTestimonial();

  return (
    <section className="bg-[#0f172a] text-white py-24 px-6 md:px-12 lg:px-24 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16 text-slate-100">
          Trusted by Industry Leaders
        </h2>

        {/* Container Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full min-h-85">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#1e293b]/40 border border-slate-800/60 rounded-2xl p-8 md:p-10 flex flex-col items-center justify-between text-center transition-all duration-500 ease-in-out transform hover:scale-[1.01] hover:bg-[#1e293b]/60"
            >
              {/* Avatar Area */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-xl overflow-hidden p-0.5 bg-linear-to-tr from-teal-500 to-emerald-400">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-[10px]"
                  />
                </div>
              </div>

              {/* Quote Area */}
              <p className="text-slate-300 text-base md:text-lg italic font-light leading-relaxed mb-8 max-w-md">
                {testimonial.quote}
              </p>

              {/* Identity Area */}
              <div>
                <h4 className="text-teal-400 font-bold text-lg md:text-xl tracking-wide">
                  {testimonial.name}
                </h4>
                <p className="text-slate-400 text-xs md:text-sm uppercase font-semibold tracking-wider mt-1">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows Buttons */}
        <div className="flex items-center gap-4 mt-12">
          <button
            onClick={handlePrev}
            className="p-3 rounded-lg border border-slate-800 bg-[#0f172a] text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="p-3 rounded-lg border border-slate-800 bg-[#0f172a] text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
