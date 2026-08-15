export interface PhoneContact {
  number: string;
  display: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  phones: PhoneContact[];
  whatsappNumber: string;
  whatsappDisplay: string;
  location: string;
  instagram: string;
  linkedin: string;
  github: string;
  defaultMessage: string;
}

export const contactInfo: ContactInfo = {
  email: "nirmiteestudio16@gmail.com",
  phone: "+91 93250 21315",
  phones: [
    { number: "919325021315", display: "+91 93250 21315" },
    { number: "917820875885", display: "+91 78208 75885" },
  ],
  whatsappNumber: "919325021315",
  whatsappDisplay: "+91 93250 21315 / +91 78208 75885",
  location: "Maharashtra, India",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  defaultMessage: "Hi Nirmitee Studio, I would like to discuss a project.",
};

export function getWhatsAppUrl(message: string = contactInfo.defaultMessage): string {
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${contactInfo.whatsappNumber}?text=${encodedMsg}`;
}

export const PROJECT_TYPE_OPTIONS = [
  "Website",
  "Web Application",
  "Android App",
  "iOS App",
  "Cross-Platform Mobile App",
  "AI Integration",
  "Custom Software",
  "Other",
] as const;

export type ProjectType = (typeof PROJECT_TYPE_OPTIONS)[number];
