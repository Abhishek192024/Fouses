"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Instagram, Linkedin, Mail, MapPin, Phone, Sparkles, Twitter } from "lucide-react";

const columns = [
  {
    title: "Services",
    links: ["Web Development", "Cloud Consultancy", "AI & Machine Learning", "SEO", "Google Ads", "Brand Identity"]
  },
  {
    title: "Products",
    links: ["CRM", "ERP", "HRMS", "Inventory Management", "Billing Software", "Business Dashboard"]
  },
  {
    title: "Company",
    links: ["About", "Work", "Careers", "Partners", "Locations", "Contact"]
  },
  {
    title: "Resources",
    links: ["Growth Notes", "Case Studies", "Security", "Privacy", "Terms", "Support"]
  }
];

const socials = [
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com" },
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com" },
  { label: "Twitter", icon: Twitter, href: "https://x.com" },
  { label: "GitHub", icon: Github, href: "https://github.com" }
];

export function Footer() {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      className="relative border-t border-white/10 px-4 py-16"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fouses-red/70 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1.85fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-fouses-red shadow-glow-sm">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="text-lg font-semibold">Fouses</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/48">
              Premium software, marketing, design, finance, and product systems for companies ready to move faster.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/50">
              <a href="mailto:hello@fouses.com" className="flex items-center gap-3 transition hover:text-white">
                <Mail className="h-4 w-4 text-fouses-red" />
                hello@fouses.com
              </a>
              <a href="tel:+919999999999" className="flex items-center gap-3 transition hover:text-white">
                <Phone className="h-4 w-4 text-fouses-red" />
                +91 99999 99999
              </a>
              <span className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-fouses-red" />
                India, UAE, Canada
              </span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((column) => (
              <FooterColumn key={column.title} title={column.title} links={column.links} />
            ))}
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur">
            <h3 className="text-sm font-semibold text-white">Newsletter</h3>
            <p className="mt-3 text-sm leading-6 text-white/48">
              Monthly insight on growth systems, design quality, automation, and digital execution.
            </p>
            <form className="mt-4 flex overflow-hidden rounded-full border border-white/10 bg-black/30 p-1">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/30"
                placeholder="Email address"
                type="email"
              />
              <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-fouses-red text-white transition hover:scale-105">
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <div className="mt-5 flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 transition hover:border-fouses-red/40 hover:bg-fouses-red/12 hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/38 sm:flex-row">
          <p>© 2026 Fouses. All rights reserved.</p>
          <p>Built for India, UAE, Canada, and ambitious global teams.</p>
        </div>
      </div>
    </motion.footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <div className="mt-4 space-y-3">
        {links.map((link) => (
          <a key={link} href="#services" className="block text-sm text-white/45 transition hover:translate-x-1 hover:text-white">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}
