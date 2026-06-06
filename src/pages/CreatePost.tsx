import React, { useState } from "react";
import { AccessAlert } from "../components/sections/createBlogPost/AccessAlert";
import { RichTextEditor } from "../components/sections/createBlogPost/RichTextEditor";
import { TagManager } from "../components/sections/createBlogPost/TagManager";
import { SidebarSettings } from "../components/sections/createBlogPost/SidebarSettings";

export const CreatePost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>(["Corporate", "Technology"]);

  const handleAddTag = (newTag: string) => setTags([...tags, newTag]);
  const handleRemoveTag = (tagToRemove: string) =>
    setTags(tags.filter((t) => t !== tagToRemove));

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
      
      {/* DASHBOARD GRID CONTAINER */}
      <main className="max-w-7xl w-full mx-auto px-6 py-10 grow">
        {/* Security / Alert Section */}
        <AccessAlert />

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Create New Post
          </h1>
          <p className="text-xs text-gray-400 font-medium mt-1">
            Draft your next industry-leading insight.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left Side: Forms & Editors */}
          <div className="lg:col-span-2">
            <form onSubmit={(e) => e.preventDefault()}>
              {/* Rich Text Editor */}
              <RichTextEditor
                title={title}
                setTitle={setTitle}
                content={content}
                setContent={setContent}
              />

              {/* Tag Input Field */}
              <TagManager
                tags={tags}
                onAddTag={handleAddTag}
                onRemoveTag={handleRemoveTag}
              />

              {/* Bottom Action Footer Bar */}
              <div className="flex justify-between items-center border-t border-gray-100 pt-6 mt-4">
                {/* Preview Link */}
                <button
                  type="button"
                  className="flex items-center gap-2 text-xs font-bold text-gray-700 hover:text-black transition-colors"
                >
                  {/* Eye Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  Preview Post
                </button>

                {/* Save and Publish Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="btn btn-sm bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 rounded-none px-5 text-xs font-bold tracking-wide normal-case shadow-sm h-10"
                  >
                    Save as Draft
                  </button>
                  <button
                    type="submit"
                    className="btn btn-sm bg-black hover:bg-gray-900 text-white border-none rounded-none px-6 text-xs font-bold tracking-wide normal-case shadow-md h-10"
                  >
                    Publish Post
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Right Side: Sidebar Settings & Meta */}
          <div className="lg:col-span-1 lg:sticky lg:top-24">
            <SidebarSettings />
          </div>
        </div>
      </main>
    </div>
  );
};
