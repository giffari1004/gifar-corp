import React from "react";
import type { TestimonialItem } from "../../../types/service";
import { StarIcon } from "./Icons";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
}) => {
  return (
    <div className="bg-white border border-gray-100 p-8 flex flex-col justify-between rounded-none shadow-sm">
      <div>
        <div className="flex gap-1 mb-6">
          {Array.from({ length: testimonial.stars }).map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
        <p className="text-gray-700 italic text-sm leading-relaxed mb-8">
          "{testimonial.content}"
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="avatar">
          <div className="w-12 h-12 rounded-full">
            <img src={testimonial.avatar} alt={testimonial.name} />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-sm">
            {testimonial.name}
          </h4>
          <p className="text-gray-500 text-xs">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};
