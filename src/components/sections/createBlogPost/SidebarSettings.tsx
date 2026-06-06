import React from "react";

export const SidebarSettings: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Main Settings Card */}
      <div className="bg-[#f8f9fa] border border-gray-200 p-6 shadow-sm rounded-none">
        <h3 className="text-base font-bold text-gray-900 mb-5">
          Post Settings
        </h3>

        {/* Publishing Status */}
        <div className="mb-5">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">
            Publishing Status
          </span>
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
            <span className="w-2 h-2 rounded-full bg-red-600 inline-block animate-pulse"></span>
            Draft Mode
          </div>
        </div>

        {/* Featured Image Upload */}
        <div className="mb-5">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
            Featured Image
          </span>
          <div className="w-full aspect-4/3 border-2 border-dashed border-gray-300 bg-[#ebedf0] hover:bg-gray-200 transition-colors cursor-pointer flex flex-col items-center justify-center text-gray-400 gap-2">
            {/* Upload Area Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-xs font-medium text-gray-600">
              Upload High-Res Image
            </span>
          </div>
        </div>

        {/* Read Time Estimate */}
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1.5">
            Read Time Estimate
          </span>
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
            {/* Clock Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            ~ 5 mins
          </div>
        </div>

        {/* Brand Guidelines Text */}
        <div className="pt-4 border-t border-gray-200">
          <p className="text-[11px] text-gray-400 leading-relaxed font-medium">
            Posts are subject to peer review. By clicking publish, you confirm
            this content adheres to NexusCorp Brand Guidelines.
          </p>
        </div>
      </div>

      {/* Author Card Profile */}
      <div className="bg-[#f8f9fa] border border-gray-200 p-4 shadow-sm rounded-none flex items-center gap-3">
        <div className="avatar">
          <div className="w-10 h-10 rounded-lg bg-gray-300 overflow-hidden">
            {/* Sesuai dengan gambar avatar pria jas */}
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80"
              alt="Alexander Thorne"
            />
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold text-gray-900">Alexander Thorne</h4>
          <p className="text-[11px] text-gray-400 font-medium">
            Senior Content Strategist
          </p>
        </div>
      </div>
    </div>
  );
};
