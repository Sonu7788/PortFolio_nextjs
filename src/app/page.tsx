import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Metrics from '@/components/Metrics';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import EngineeringStrengths from '@/components/EngineeringStrengths';
import ApiPlayground from '@/components/ApiPlayground';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f8fd] text-slate-800 flex flex-col selection:bg-sky-600 selection:text-white">
      <Navbar />
      <Hero />
      <Metrics />
      <About />
      <Skills />
      <Projects />
      <EngineeringStrengths />
      <ApiPlayground />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
