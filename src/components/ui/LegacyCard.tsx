// src/components/ui/LegacyCard.tsx
import React from "react";

interface LegacyCardProps {
  className?: string;
  children: React.ReactNode;
}

export default function LegacyCard({
  className = "",
  children,
}: LegacyCardProps) {
  return (
    <div
      className={`rounded-3xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}
