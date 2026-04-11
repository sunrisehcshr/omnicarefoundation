"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Layers, Code, Sparkles, Cpu } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-[#00f0ff]" />,
    title: "Lightning Fast",
    description: "Built on Next.js App Router for optimal performance and edge rendering."
  },
  {
    icon: <Shield className="w-6 h-6 text-[#00f0ff]" />,
    title: "Type Safe",
    description: "End-to-end type safety with TypeScript, catching errors before they hit production."
  },
  {
    icon: <Layers className="w-6 h-6 text-[#00f0ff]" />,
    title: "Modern UI",
    description: "Styled with Tailwind CSS and animated using Framer Motion for a premium feel."
  },
  {
    icon: <Code className="w-6 h-6 text-[#00f0ff]" />,
    title: "Developer First",
    description: "Configured with ESLint and Prettier out of the box for a smooth DX."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-[#00f0ff]" />,
    title: "Aesthetic",
    description: "Brutalist-inspired minimalism with high contrast and refined typography."
  },
  {
    icon: <Cpu className="w-6 h-6 text-[#00f0ff]" />,
    title: "Edge Ready",
    description: "Deploy globally to the Edge for sub-millisecond response times."
  }
];

export default function Home() {
  return (
    <div className="relative w-full">
      {/* Background noise/grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#00f0ff] animate-pulse" />
          <span className="text-sm font-medium tracking-wide text-gray-300">v1.0 is now live</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
        >
          Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">faster.</span>
          <br />
          Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-blue-500">better.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 font-sans leading-relaxed"
        >
          A production-ready Next.js starter template designed to solve the blank canvas problem with exceptional, non-generic aesthetics out of the box.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="#features"
            className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium transition-transform hover:scale-105 active:scale-95"
          >
            Explore Features
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors"
          >
            View Source
          </a>
        </motion.div>
      </section>

      {/* Features Grid Section */}
      <section id="features" className="py-24 px-6 bg-black relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Everything you need.
              <br />
              <span className="text-gray-500">Nothing you don't.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 font-sans leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00f0ff] opacity-20 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Ready to start building?
          </h2>
          <button className="bg-[#00f0ff] text-black px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_40px_-10px_#00f0ff] transition-shadow hover:scale-105 active:scale-95">
            Clone Repository
          </button>
        </div>
      </section>
      
      <footer className="py-8 border-t border-white/10 text-center text-gray-500 font-sans text-sm">
        <p>© {new Date().getFullYear()} Next.js Modern Starter. MIT License.</p>
      </footer>
    </div>
  );
}
