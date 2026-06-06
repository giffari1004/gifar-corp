import React, { useState, useMemo } from "react";
import { BlogCard } from "../components/sections/blog/BlogCard";
import { Newsletter } from "../components/sections/blog/NewsLetter";
import { MOCK_POSTS } from "../constant/blogData";

// Mock Data Berdasarkan Gambar yang Diberikan


export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Posts");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categories = ["All Posts", "Technology", "Culture", "Services"];

  // Logika Filter dan Search Konten
  const filteredPosts = useMemo(() => {
    return MOCK_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All Posts" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">

      {/* BLOG CONTENT CONTAINER */}
      <main className="max-w-7xl w-full mx-auto px-6 py-12 grow">
        {/* Page Title Header */}
        <div className="mb-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Insights & Perspectives
          </h1>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Exploring the intersection of enterprise technology, corporate
            culture, and professional services.
          </p>
        </div>

        {/* Toolbar: Category Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-4 mb-8">
          {/* Tabs Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 text-xs font-semibold tracking-wide transition-colors ${
                  selectedCategory === cat
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input Custom Style matched with image */}
          <div className="relative w-full md:w-72">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white text-gray-800 border-b border-gray-300 focus:outline-none focus:border-black placeholder-gray-400 transition-colors"
            />
          </div>
        </div>

        {/* Blog Grid Layout */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400 text-sm">
            No insights found matching your criteria.
          </div>
        )}

        {/* Pagination Controls */}
        <div className="flex justify-center mt-12">
          <div className="join gap-1">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="join-item btn btn-sm bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-600 font-normal rounded-none px-3"
            >
              ‹
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`join-item btn btn-sm border border-gray-200 rounded-none px-4 text-xs font-medium ${
                  currentPage === page
                    ? "bg-black text-white border-black hover:bg-black"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, 3))}
              className="join-item btn btn-sm bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-600 font-normal rounded-none px-3"
            >
              ›
            </button>
          </div>
        </div>
      </main>

      {/* NEWSLETTER BANNER */}
      <Newsletter />
      
    </div>
  );
};
