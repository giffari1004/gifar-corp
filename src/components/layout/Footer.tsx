import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-8 px-6 md:px-16 text-xs text-gray-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-1 items-center md:items-start">
          <span className="text-base font-bold text-gray-900 tracking-tight">
            GifarCorp
          </span>
          <span>© 2026 GifarCorp Industries. All rights reserved.</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#privacy" className="hover:text-black transition-colors">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-black transition-colors">
            Terms of Service
          </a>
          <a href="#contact" className="hover:text-black transition-colors">
            Contact Us
          </a>
          <a href="#careers" className="hover:text-black transition-colors">
            Careers
          </a>
        </div>
        {/* Social Icons Placeholder matches screenshot */}
        <div className="flex gap-4 text-gray-400 text-base">
          <button className="hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </button>
          <button className="hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 4a2 2 0 114 0v1a2 2 0 002 2h3a2 2 0 012 2v3a2 2 0 002 2v3a2 2 0 01-2 2h-3a2 2 0 00-2 2v1a2 2 0 11-4 0v-1a2 2 0 00-2-2H7a2 2 0 01-2-2v-3a2 2 0 00-2-2V7a2 2 0 012-2h3a2 2 0 002-2V4z"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
