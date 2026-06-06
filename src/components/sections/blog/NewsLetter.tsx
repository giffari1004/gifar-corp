import React from "react";

export const Newsletter: React.FC = () => {
  return (
    <section className="bg-[#0f172a] text-white py-16 px-6 md:px-16 my-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Stay ahead of the curve.
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Subscribe to our monthly newsletter for curated industry insights,
            exclusive reports, and the latest NexusCorp updates.
          </p>
        </div>
        <div className="w-full lg:max-w-md">
          <form
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="work-email@company.com"
              className="input bg-[#1e293b] border-none text-white placeholder-gray-500 rounded-none w-full focus:outline-none focus:ring-1 focus:ring-teal-500 text-sm"
              required
            />
            <button
              type="submit"
              className="btn bg-white hover:bg-gray-100 text-black border-none rounded-none px-8 font-semibold normal-case text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
