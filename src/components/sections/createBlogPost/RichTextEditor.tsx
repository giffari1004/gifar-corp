import React from "react";

interface RichTextEditorProps {
  title: string;
  setTitle: (val: string) => void;
  content: string;
  setContent: (val: string) => void;
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  title,
  setTitle,
  content,
  setContent,
}) => {
  return (
    <div className="w-full">
      {/* Post Title Field */}
      <div className="mb-8">
        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
          Post Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a compelling headline..."
          className="w-full py-3 text-2xl font-bold bg-white text-gray-800 border-b border-gray-200 placeholder-gray-300 focus:outline-none focus:border-black transition-colors"
        />
      </div>

      {/* Editor Content Area */}
      <div className="mb-6">
        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
          Content
        </label>
        <div className="border border-gray-200 bg-white">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-1 p-2 bg-gray-50 border-b border-gray-200 text-gray-600">
            <button
              type="button"
              className="btn btn-sm btn-ghost rounded-none font-bold text-sm px-3"
            >
              B
            </button>
            <button
              type="button"
              className="btn btn-sm btn-ghost rounded-none italic font-serif text-sm px-3"
            >
              I
            </button>
            <button
              type="button"
              className="btn btn-sm btn-ghost rounded-none px-2"
            >
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>
            <button
              type="button"
              className="btn btn-sm btn-ghost rounded-none px-2"
            >
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
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </button>
            <button
              type="button"
              className="btn btn-sm btn-ghost rounded-none px-2"
            >
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
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </button>
            <button
              type="button"
              className="btn btn-sm btn-ghost rounded-none font-mono text-xs px-2"
            >
              {"<>"}
            </button>
          </div>

          {/* Text Area */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start writing your expertise..."
            className="w-full min-h-80 p-4 bg-white text-gray-800 placeholder-gray-400 focus:outline-none resize-y text-sm leading-relaxed"
          />
        </div>
      </div>
    </div>
  );
};
