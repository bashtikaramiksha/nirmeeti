export interface Project {
  id: string;
  slug: string;
  title: string;
  name?: string; // Backwards compatibility helper
  category: "Web Application" | "Mobile Application" | "AI / Computer Vision" | "Business Software" | "SaaS Platform";
  type: "web" | "mobile";
  description: string;
  image: string;
  mobileImage?: string;
  technologies: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
  imageAlt: string;
}

export const PROJECTS: Project[] = [
  {
    id: "project-01",
    slug: "devpulse-developer-portfolio",
    title: "DevPulse",
    name: "DevPulse - Real-Time Developer Portfolio",
    category: "Web Application",
    type: "web",
    description: "Build your developer identity in real time. Instantly transform dynamic GitHub telemetry, LeetCode milestones, and service deployments into an elegant, recruiter-ready profile built to impress.",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Docker", "PostgreSQL", "GitHub API"],
    image: "/projects/devpulse/cover.png",
    liveUrl: "https://realtime-developer-portfolio-a97g.vercel.app/",
    caseStudyUrl: "https://realtime-developer-portfolio-a97g.vercel.app/",
    featured: true,
    metrics: [
      { label: "Connected Devs", value: "10K+" },
      { label: "Portfolio Views", value: "50K+" },
      { label: "Monitored Uptime", value: "99.9%" },
    ],
    imageAlt: "DevPulse Real-Time Developer Portfolio platform interface displaying telemetry and developer stats",
  },
  {
    id: "project-02",
    slug: "aura-architecture",
    title: "Aura Architecture",
    name: "Aura Studios - Architectural Firm",
    category: "Web Application",
    type: "web",
    description: "Spaces drawn from light. A studio for considered, enduring space. Residential architecture, interior spatial direction, and quietly resolved material systems designed for high-end client experiences.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: "/projects/aura-architecture/cover.png",
    liveUrl: "https://architecturalfirmdemo.vercel.app/",
    caseStudyUrl: "https://architecturalfirmdemo.vercel.app/",
    featured: true,
    metrics: [
      { label: "Spatial Design", value: "Minimalist" },
      { label: "Portfolio", value: "Architectural" },
      { label: "Performance", value: "0.4s Load" },
    ],
    imageAlt: "Aura Studios Architectural Firm web experience showcasing lighting and interior architecture",
  },
  {
    id: "project-03",
    slug: "kamgati-worker-marketplace",
    title: "Kamgati",
    name: "Kaamgati - Local Worker Marketplace",
    category: "Web Application",
    type: "web",
    description: "Find trusted local workers near you. Kaamgati connects customers, skilled workers, local shop owners, and verified vendors in one simple local jobs marketplace with area-based verification.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/projects/kamgati/cover.jpg",
    liveUrl: "https://kaam-lemon.vercel.app/",
    caseStudyUrl: "https://kaam-lemon.vercel.app/",
    featured: true,
    metrics: [
      { label: "Verification", value: "Area-Based" },
      { label: "Marketplace", value: "Local Jobs" },
      { label: "User Base", value: "Verified Vendors" },
    ],
    imageAlt: "Kaamgati trusted local worker marketplace web platform for local services and shop owners",
  },
  {
    id: "project-04",
    slug: "jewellery-management-system",
    title: "Jewellery Management System",
    name: "Lumina Jewellery Management System",
    category: "Web Application",
    type: "web",
    description: "Lumina Jewellery luxury portal and management system featuring live precious metal rates (Gold, Silver, Diamond), catalog showcases, custom order tracking, and client account management.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST API", "Vercel"],
    image: "/projects/jewellery-management/cover.jpg",
    liveUrl: "https://lumina-jewellery1.vercel.app/",
    caseStudyUrl: "https://lumina-jewellery1.vercel.app/",
    featured: true,
    metrics: [
      { label: "Live Metal Rates", value: "Gold & Silver" },
      { label: "Luxury Catalog", value: "1,000+ Items" },
      { label: "Management", value: "Real-Time POS" },
    ],
    imageAlt: "Lumina Jewellery Management System interface showing live gold prices and luxury catalog",
  },
  {
    id: "project-05",
    slug: "face-attendance-kiosk",
    title: "AI Face Recognition Attendance System",
    name: "AI Face Recognition Attendance System",
    category: "AI / Computer Vision",
    type: "mobile",
    description: "A local kiosk-style attendance application designed to identify multiple employees through face recognition and record attendance without requiring individual login.",
    technologies: ["React Native", "SQLite", "ONNX Runtime", "ArcFace", "Swift"],
    image: "/projects/face-attendance/cover.png",
    mobileImage: "/projects/face-attendance/cover.png",
    liveUrl: "https://faceattendance.demo.nirmiteestudio.com",
    caseStudyUrl: "/projects/face-attendance-kiosk",
    featured: true,
    metrics: [
      { label: "Recognition Speed", value: "< 250ms" },
      { label: "Daily Active Users", value: "15,000+" },
      { label: "Offline Accuracy", value: "99.4%" },
    ],
    imageAlt: "Nirmitee Studio employee attendance mobile application kiosk interface showcasing facial landmark detection",
  },
];

