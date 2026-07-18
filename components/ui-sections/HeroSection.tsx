"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, BrainCircuit, CheckCircle2, Cloud, Sparkles, Zap } from "lucide-react";
import { openAuthModal } from "./AuthModal";

const floatingCards = [
  { title: "Launch Velocity", value: "4x", detail: "faster go-to-market", icon: Zap, className: "left-0 top-24" },
  { title: "AI Operations", value: "24/7", detail: "automated lead response", icon: BrainCircuit, className: "right-0 top-36" },
  { title: "Growth Stack", value: "100 Cr+", detail: "campaign reach planned", icon: BarChart3, className: "bottom-10 left-20" },
  { title: "Cloud Ready", value: "99.9%", detail: "resilient delivery mindset", icon: Cloud, className: "bottom-8 right-24" }
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-[94vh] items-center px-4 pt-24">
      <div className="mesh-bg absolute inset-0 animate-pulse-glow" />
      <div className="grid-mask absolute inset-0 opacity-40" />
      <div className="absolute left-1/2 top-36 h-80 w-80 -translate-x-1/2 rounded-full border border-fouses-red/20 bg-fouses-red/10 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-fouses-ink to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {floatingCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
              transition={{ delay: 0.45 + index * 0.08, y: { duration: 5 + index, repeat: Infinity, ease: "easeInOut" } }}
              className={`absolute ${card.className} w-56 rounded-3xl border border-white/10 bg-white/[0.055] p-4 shadow-2xl shadow-black/30 backdrop-blur-xl`}
            >
              <div className="flex items-center justify-between">
                <card.icon className="h-5 w-5 text-fouses-red" />
                <CheckCircle2 className="h-4 w-4 text-white/28" />
              </div>
              <p className="mt-5 text-sm text-white/48">{card.title}</p>
              <p className="mt-1 text-3xl font-semibold tracking-tight">{card.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/34">{card.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/70 backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-fouses-red" />
            Enterprise-grade digital growth, built beautifully
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.75 }}
            className="mx-auto bg-gradient-to-br from-white via-white to-fouses-red bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-7xl lg:text-8xl"
          >
            From Idea to Online — Seamless & Stunning
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.7 }}
            className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/62 sm:text-xl"
          >
            We build fast, responsive, and beautifully designed digital experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.7 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button onClick={openAuthModal} className="animated-border animate-border-spin rounded-full p-px">
              <span className="flex h-[52px] items-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-semibold text-white">
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>
            <a
              href="#services"
              className="rounded-full border border-white/12 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white/82 backdrop-blur transition hover:bg-white/10 hover:text-white"
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
