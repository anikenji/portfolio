"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import WorkProcess from "@/components/sections/WorkProcess";
import Experience from "@/components/sections/Experience";
// import Testimonials from "@/components/sections/Testimonials"; // Temporarily commented out until real client testimonials are collected
import CTABanner from "@/components/sections/CTABanner";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionDots from "@/components/ui/SectionDots";
import { ParallaxSection } from "@/components/ui/ParallaxSection";
import { LanguageProvider } from "@/lib/language-context";

const SmoothScroll = dynamic(
  () => import("@/components/layout/SmoothScroll"),
  { ssr: false }
);

const CursorGlow = dynamic(
  () => import("@/components/ui/CursorGlow"),
  { ssr: false }
);

export default function Home() {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <CursorGlow />
        <Navbar />
        <SectionDots />
        <main>
          <Hero />
          <ParallaxSection>
            <About />
          </ParallaxSection>
          <ParallaxSection>
            <Services />
          </ParallaxSection>
          <ParallaxSection>
            <Projects />
          </ParallaxSection>
          <ParallaxSection>
            <WorkProcess />
          </ParallaxSection>
          <ParallaxSection>
            <Experience />
          </ParallaxSection>
          {/* <Testimonials /> */}
          <CTABanner />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </LanguageProvider>
  );
}
