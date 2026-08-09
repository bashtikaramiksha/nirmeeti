import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nirmiteestudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nirmitee Studio | Web, Mobile & AI Development",
    template: "%s | Nirmitee Studio",
  },
  description:
    "Nirmitee Studio builds modern web applications, mobile apps, AI-powered features and custom software for businesses and startups.",
  keywords: [
    "Nirmitee Studio",
    "Web Development",
    "Mobile App Development",
    "AI Integration",
    "Custom Software",
    "SaaS Development",
    "Digital Products",
    "React Native",
    "Next.js Development",
  ],
  authors: [{ name: "Nirmitee Studio", url: SITE_URL }],
  creator: "Nirmitee Studio",
  publisher: "Nirmitee Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Nirmitee Studio | Web, Mobile & AI Development",
    description:
      "Nirmitee Studio builds modern web applications, mobile apps, AI-powered features and custom software for businesses and startups.",
    url: SITE_URL,
    siteName: "Nirmitee Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nirmitee Studio - Digital Product Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirmitee Studio | Web, Mobile & AI Development",
    description:
      "Nirmitee Studio builds modern web applications, mobile apps, AI-powered features and custom software for businesses and startups.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon.svg" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

// JSON-LD Structured Data for Search Engine Knowledge Graphs
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Nirmitee Studio",
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  image: `${SITE_URL}/og-image.png`,
  description:
    "Nirmitee Studio builds modern web applications, mobile apps, AI-powered features and custom software for businesses and startups.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@nirmiteestudio.com",
    contactType: "customer support",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://instagram.com",
    "https://linkedin.com",
    "https://github.com",
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} bg-slate-50 dark:bg-[#080808] text-slate-900 dark:text-white flex flex-col min-h-screen antialiased transition-colors duration-200`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
