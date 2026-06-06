import React from "react";

export const AccessAlert: React.FC = () => {
  return (
    <div className="flex items-start gap-4 bg-[#e0eafd] border border-[#b9d2fe] text-[#3b66c4] p-4 rounded-none mb-8 shadow-sm">
      <div className="mt-0.5">
        {/* Lock Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div>
        <h4 className="text-sm font-bold tracking-wide">
          Authorized Access Only
        </h4>
        <p className="text-xs text-[#5676bd] mt-0.5 font-medium">
          This administrative interface is restricted to NexusCorp Editorial
          Staff and authorized administrators.
        </p>
      </div>
    </div>
  );
};
