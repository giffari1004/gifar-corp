import React from "react";

export const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-base-100 text-center border-t border-base-200">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold text-base-content mb-10 tracking-tight">
          Ready to Build the Future with Us?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="btn btn-neutral rounded-none px-8 py-3 w-full sm:w-auto h-auto min-h-0 text-sm tracking-wide">
            View Careers
          </button>
          <button className="btn btn-outline rounded-none px-8 py-3 w-full sm:w-auto h-auto min-h-0 text-sm tracking-wide">
            Contact Leadership
          </button>
        </div>
      </div>
    </section>
  );
};
