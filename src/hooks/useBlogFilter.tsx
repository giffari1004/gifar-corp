import { useState, useMemo } from "react";
import { MOCK_POSTS } from "../constant/blogData";

export const CATEGORIES = ["All Posts", "Technology", "Culture", "Services"];

export const useBlogFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Posts");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

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

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return {
    selectedCategory,
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    filteredPosts,
    handleSelectCategory,
  };
};
