export interface ContactInfo {
  email: string;
  phone: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  location: string;
  instagram: string;
  linkedin: string;
  github: string;
  defaultMessage: string;
}

export const contactInfo: ContactInfo = {
  email: "contact@nirmiteestudio.com",
  phone: "+91 98765 43210",
  whatsappNumber: "919876543210",
  whatsappDisplay: "+91 98765 43210",
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
