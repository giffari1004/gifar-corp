import React, { useState } from "react";
import { InputField } from "../components/sections/login/InputField";


export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Jalankan logika integrasi API login di sini nanti
    console.log({ email, password });
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-gray-100 font-sans overflow-hidden">
      {/* Background Decorative Blur Elements (Sesuai siluet di belakang card gambar) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none opacity-20 scale-110">
        <div className="w-100 h-20 bg-white rounded-lg shadow-md mb-4 border border-gray-200"></div>
        <div className="w-100 h-20 bg-white rounded-lg shadow-md mb-4 border border-gray-200"></div>
        <div className="w-100 h-20 bg-white rounded-lg shadow-md border border-gray-200"></div>
      </div>

      {/* Main Login Card Container */}
      <div className="grow flex items-center justify-center px-4 z-10">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg border border-gray-100 p-10 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
              GifarCorp
            </h2>
            <p className="text-xs text-gray-500 mt-1 tracking-wide">
              Precision. Trust. Innovation.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <InputField
              id="email"
              label="Email"
              type="email"
              placeholder="name@nexuscorp.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <InputField
              id="password"
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              rightElement={
                <a
                  href="#forgot"
                  className="text-xs font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Forgot Password?
                </a>
              }
            />

            {/* Login Button */}
            <button
              type="submit"
              className="w-full mt-4 bg-black text-white py-3 rounded-md font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-900 active:scale-[0.99] transition-all duration-150"
            >
              Login
              <span className="text-base">→</span>
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex py-6 items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <span className="relative px-3 bg-white text-xs text-gray-400 font-medium tracking-wide">
              Secure Authentication
            </span>
          </div>

          {/* Footer Card */}
          <div className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a
              href="#signup"
              className="font-semibold text-teal-600 hover:text-teal-700 transition-colors"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>

      {/* Global Footer Page */}
      <footer className="w-full py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 border-t border-gray-200 bg-white z-10 gap-2 md:gap-0">
        <div>© 2026 GifarCorp Industries. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#privacy" className="hover:text-gray-800 transition-colors">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-gray-800 transition-colors">
            Terms of Service
          </a>
          <a href="#contact" className="hover:text-gray-800 transition-colors">
            Contact Us
          </a>
        </div>
      </footer>
    </div>
  );
};
