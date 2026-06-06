// src/pages/OurTeamPage.tsx
import React from "react";
import TeamHeader from "../components/sections/ourTeam/TeamHeader";
import { teamMembers } from "../constant/teamData";
import TeamCard from "../components/sections/ourTeam/TeamCard";
import TeamCTA from "../components/sections/ourTeam/TeamCTA";

export default function OurTeamPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-base-100 antialiased font-sans">

      <main className="max-w-7xl mx-auto">
        <TeamHeader />

        {/* Grid Anggota Tim */}
        <div className="px-6 lg:px-16 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        <TeamCTA />
      </main>
    </div>
  );
}
