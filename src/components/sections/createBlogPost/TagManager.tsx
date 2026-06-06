import React, { useState } from "react";

interface TagManagerProps {
  tags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
}

export const TagManager: React.FC<TagManagerProps> = ({
  tags,
  onAddTag,
  onRemoveTag,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        onAddTag(inputValue.trim());
      }
      setInputValue("");
    }
  };

  return (
    <div className="w-full mb-8">
      <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
        Tags
      </label>

      {/* Tags Wrapper */}
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <div
            key={tag}
            className="flex items-center gap-1.5 bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-none border border-gray-200"
          >
            <span>{tag}</span>
            <button
              type="button"
              onClick={() => onRemoveTag(tag)}
              className="hover:text-black font-bold ml-1 text-gray-400 transition-colors"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {/* Input Field */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add a tag and press enter..."
        className="w-full py-2 bg-white text-xs text-gray-800 border-b border-gray-200 placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
      />
    </div>
  );
};
