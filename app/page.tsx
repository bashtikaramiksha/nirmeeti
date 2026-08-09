import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { AboutProcess } from "@/components/sections/AboutProcess";
import { Contact } from "@/components/sections/Contact";
import { FloatingContact } from "@/components/contact/FloatingContact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#080808]">
      {/* Sticky Header Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION - Slice 2 */}
        <Hero />

        {/* SERVICES SECTION - Slice 3 */}
        <Services />

        {/* SELECTED PROJECTS SECTION - Slice 4 */}
        <Projects />

        {/* ABOUT + DEVELOPMENT PROCESS SECTION - Slice 5 */}
        <AboutProcess />

        {/* CONTACT + LEAD GENERATION SECTION - Slice 6 */}
        <Contact />
      </main>

      {/* Floating Sticky Contact CTA */}
      <FloatingContact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

