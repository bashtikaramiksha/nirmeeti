export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
  output: string;
}

export const processStepsData: ProcessStepItem[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start by understanding the idea, business problem, users, workflows, requirements and expected outcome.",
    output: "Clear project requirements",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "The product is broken into features, user flows and manageable development stages before implementation begins.",
    output: "Project roadmap and development scope",
  },
  {
    number: "03",
    title: "Build",
    description:
      "The product is implemented incrementally so important features can be completed and reviewed without waiting for the entire application.",
    output: "Working product increments",
  },
  {
    number: "04",
    title: "Test",
    description:
      "Important user workflows, responsive behavior, integrations and edge cases are tested before release.",
    output: "Validated product behavior",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Once the agreed scope is ready, the product is prepared for deployment, handover or release to users.",
    output: "Production-ready release",
  },
];
