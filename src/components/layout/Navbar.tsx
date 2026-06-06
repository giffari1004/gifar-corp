import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  // Fungsi utilitas untuk memberikan kelas aktif/tidak aktif secara dinamis
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-black font-semibold border-b-2 border-black pb-1 transition-all"
      : "text-gray-600 hover:text-black transition-colors";

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Menggunakan Link agar logo kembali ke beranda tanpa reload */}
        <Link to="/" className="text-xl font-bold tracking-tight text-black">
          GifarCorp
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-xs font-medium">
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={getLinkClass}>
            About Us
          </NavLink>
          <NavLink to="/services" className={getLinkClass}>
            Services
          </NavLink>
          <NavLink to="/team" className={getLinkClass}>
            Teams
          </NavLink>
          <NavLink to="/blog" className={getLinkClass}>
            Blog
          </NavLink>
        </nav>

        <div className="flex items-center gap-4 text-xs font-medium">
          <Link to="/login" className="text-gray-600 hover:text-black">
            Login
          </Link>
          <button className="btn btn-sm bg-black hover:bg-gray-900 text-white border-none rounded-none px-4 normal-case font-medium">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
