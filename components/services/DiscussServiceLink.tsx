"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface DiscussServiceLinkProps {
  serviceId: string;
  title: string;
}

const SERVICE_TO_PROJECT_TYPE_MAP: Record<string, string> = {
  "web-development": "Web Application",
  "mobile-app-development": "Cross-Platform Mobile App",
  "ai-integrations": "AI Integration",
  "custom-software": "Custom Software",
};

export const DiscussServiceLink: React.FC<DiscussServiceLinkProps> = ({
  serviceId,
  title,
}) => {
  const handleDiscussClick = () => {
    trackEvent("service_contact_click", { serviceId });

    const mappedType = SERVICE_TO_PROJECT_TYPE_MAP[serviceId];
    if (mappedType && typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("select-service-type", {
          detail: { projectType: mappedType },
        })
      );
    }
  };

  return (
    <Link
      href="#contact"
      data-service-id={serviceId}
      onClick={handleDiscussClick}
      className="inline-flex items-center text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] rounded-sm py-0.5"
      aria-label={`Discuss ${title} service with Nirmitee Studio`}
    >
      <span>Discuss This Service</span>
      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
};
