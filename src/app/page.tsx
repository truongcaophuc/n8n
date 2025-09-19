"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Workflows from "@/components/Workflows";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialMediaFloat from "@/components/SocialMediaFloat";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <div className="px-[100px]">
        <Features />
        <Workflows />
        <Pricing />
        <Contact />
      </div>
      <Footer />
      <SocialMediaFloat />
    </div>
  );
}
