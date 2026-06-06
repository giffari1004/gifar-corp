import React from "react";
import type { ServiceItem } from "../../../types/service";
import {
  StrategyIcon,
  SoftwareIcon,
  AnalyticsIcon,
  ManagedIcon,
} from "./Icons";

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const renderIcon = () => {
    switch (service.icon) {
      case "strategy":
        return <StrategyIcon />;
      case "software":
        return <SoftwareIcon />;
      case "analytics":
        return <AnalyticsIcon />;
      case "managed":
        return <ManagedIcon />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white border border-gray-100 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl rounded-none">
      <div>
        <div className="mb-6">{renderIcon()}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          {service.description}
        </p>
      </div>

      <div>
        <div className="border-t border-gray-100 pt-6 mb-4">
          <p className="text-xs text-gray-400 font-medium">Starts From</p>
          <p className="text-lg font-bold text-gray-900">
            {service.price}{" "}
            <span className="text-gray-500 font-normal text-sm">
              / {service.period}
            </span>
          </p>
        </div>
        <button className="btn btn-outline border-gray-300 hover:bg-gray-900 hover:border-gray-900 rounded-none w-full normal-case font-medium">
          Learn More
        </button>
      </div>
    </div>
  );
};
