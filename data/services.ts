import { Monitor, Smartphone, BrainCircuit, Blocks, LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  compactLabel: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development",
    description:
      "Modern websites and web applications designed around real business requirements, user experience and performance.",
    capabilities: [
      "Business Websites",
      "Web Applications",
      "Admin Dashboards",
      "SaaS Platforms",
      "Responsive Interfaces",
      "API Integration",
    ],
    compactLabel: "Web Apps • SaaS • Dashboards",
  },
  {
    id: "mobile-app-development",
    number: "02",
    title: "Mobile App Development",
    description:
      "Android and iOS applications built for smooth user experiences, reliable workflows and real-world business use.",
    capabilities: [
      "Android Apps",
      "iOS Apps",
      "Cross-Platform Apps",
      "Offline Applications",
      "Business Apps",
      "API-Connected Apps",
    ],
    compactLabel: "Android • iOS • Cross-Platform",
  },
  {
    id: "ai-integration",
    number: "03",
    title: "AI Integration",
    description:
      "Practical AI features integrated into digital products to automate workflows, improve experiences and support smarter decisions.",
    capabilities: [
      "AI Assistants",
      "Computer Vision",
      "Document Processing",
      "AI Search",
      "Workflow Automation",
      "LLM Integration",
    ],
    compactLabel: "AI • Automation • Computer Vision",
  },
  {
    id: "custom-software",
    number: "04",
    title: "Custom Software",
    description:
      "Business-specific software designed around unique workflows, internal operations and operational requirements.",
    capabilities: [
      "Business Dashboards",
      "Internal Tools",
      "Management Systems",
      "Automation",
      "ERP Extensions",
      "Custom Workflows",
    ],
    compactLabel: "Dashboards • Internal Tools • Automation",
  },
];
