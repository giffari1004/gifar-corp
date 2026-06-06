// src/components/TeamCard.tsx
import React from "react";
import type { TeamMember } from "../../../types/team.types";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps): React.JSX.Element {
  return (
    <div className="card rounded-none border border-gray-200 bg-base-100 shadow-none overflow-hidden group">
      <figure className="relative pt-[110%] w-full bg-gray-100">
        <img
          src={member.image}
          alt={member.name}
          className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 transition-all duration-300 group-hover:grayscale-0"
        />
      </figure>

      <div className="p-5 flex flex-col justify-between grow min-h-45">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-gray-900 block mb-1">
            {member.role}
          </span>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            {member.name}
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed font-light">
            {member.bio}
          </p>
        </div>

        {/* Action Social Icons */}
        <div className="flex gap-4 items-center mt-4 text-gray-600">
          <a
            href={`mailto:${member.email}`}
            className="hover:text-neutral transition-colors cursor-pointer"
            aria-label={`Email ${member.name}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
              />
            </svg>
          </a>
          <button
            className="hover:text-neutral transition-colors cursor-pointer"
            aria-label="Share profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
