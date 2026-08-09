import { Target, Workflow, Blocks, MessageCircle, LucideIcon } from "lucide-react";

export interface TrustPointItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const trustPointsData: TrustPointItem[] = [
  {
    id: "product-focused",
    title: "Product-Focused Development",
    description:
      "Development decisions are based on the product's users, workflows and business requirements rather than technology alone.",
    icon: Target,
  },
  {
    id: "clear-process",
    title: "Structured Development",
    description:
      "Projects are broken into clear stages and manageable deliverables so progress remains easier to understand and review.",
    icon: Workflow,
  },
  {
    id: "practical-development",
    title: "Build What Matters",
    description:
      "We prioritize the features required to make the product useful before adding unnecessary complexity.",
    icon: Blocks,
  },
  {
    id: "communication",
    title: "Transparent Communication",
    description:
      "Project progress, decisions and changes should remain visible throughout development instead of appearing only at final delivery.",
    icon: MessageCircle,
  },
];
