import React from "react";
import type { BlogPost } from "../../../types/Blog";


interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="card bg-white rounded-none border border-gray-100 shadow-sm flex flex-col justify-between h-full group">
      <div>
        {/* Image Container */}
        <div className="overflow-hidden aspect-16/10 bg-gray-100">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content Box */}
        <div className="p-6 pb-0">
          <div className="flex justify-between items-center text-[11px] font-bold tracking-widest uppercase mb-3">
            <span className="text-teal-600">{post.category}</span>
            <span className="text-gray-400 font-medium">{post.date}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-teal-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6">
            {post.description}
          </p>
        </div>
      </div>

      {/* Card Footer (Author & Action) */}
      <div className="p-6 pt-0 border-t border-gray-50 flex justify-between items-center mt-auto">
        <div className="flex items-center gap-3">
          <div
            className={`avatar placeholder w-8 h-8 rounded-full ${post.avatarBg} text-gray-800 text-xs font-bold flex items-center justify-center`}
          >
            {post.authorInitials}
          </div>
          <span className="text-xs font-medium text-gray-700">
            {post.author}
          </span>
        </div>
        <a
          href={`#post-${post.id}`}
          className="text-xs font-bold text-teal-600 flex items-center gap-1 hover:gap-2 transition-all"
        >
          Read More <span className="text-sm">→</span>
        </a>
      </div>
    </div>
  );
};
