import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import OurTeam from "./pages/OurTeam";
import ServicePages from "./pages/ServicePages";
import { Login } from "./pages/Login";
import { CreatePost } from "./pages/CreatePost";
import { BlogPage } from "./pages/Blog";
import AboutPage from "./pages/About";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Semua halaman di bawah ini akan dibungkus oleh MainLayout (Navbar & Footer tetap) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicePages />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/about" element={<AboutPage/>}/>
      </Route>

      {/* Halaman login dipisahkan di luar layout agar tidak menampilkan Navbar & Footer */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
