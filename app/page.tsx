"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionDots from "@/components/ui/SectionDots";
import { ParallaxSection } from "@/components/ui/ParallaxSection";

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
          <Skills />
        </ParallaxSection>
        <ParallaxSection>
          <Projects />
        </ParallaxSection>
        <ParallaxSection>
          <Experience />
        </ParallaxSection>
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
