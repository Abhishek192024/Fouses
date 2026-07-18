"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Boxes,
  BrainCircuit,
  Building2,
  Cloud,
  Code2,
  Cpu,
  Database,
  FileCheck2,
  Film,
  Globe2,
  Layers3,
  LockKeyhole,
  Palette,
  ReceiptText,
  Search,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  Tv,
  Users,
  Workflow,
  type LucideIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

type ServiceCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  className: string;
};

const serviceCards: ServiceCard[] = [
  { title: "Cloud Consultancy", description: "Cloud architecture, migration strategy, cost control, and resilient deployment planning.", icon: Cloud, className: "lg:col-span-4 lg:row-span-2" },
  { title: "Web Development", description: "High-performance websites, portals, and web apps built for speed, accessibility, and conversion.", icon: Globe2, className: "lg:col-span-5" },
  { title: "AI", description: "Applied AI workflows for support, research, content operations, and lead qualification.", icon: BrainCircuit, className: "lg:col-span-3" },
  { title: "Machine Learning", description: "Prediction models and classification systems that turn business data into action.", icon: Cpu, className: "lg:col-span-3" },
  { title: "SEO", description: "Technical and content SEO systems designed for durable organic growth.", icon: Search, className: "lg:col-span-5" },
  { title: "Google Ads", description: "Search and display campaigns with clean tracking, testing, and conversion optimization.", icon: TrendingUp, className: "lg:col-span-4" },
  { title: "Facebook Ads", description: "Audience-led Meta campaigns with creative testing and full-funnel retargeting.", icon: Users, className: "lg:col-span-4" },
  { title: "Hotstar Ads", description: "Premium OTT media placements for high-reach launches and regional campaigns.", icon: Tv, className: "lg:col-span-4" },
  { title: "OTT Ads", description: "Streaming inventory planning for brands that need attention at scale.", icon: Film, className: "lg:col-span-4" },
  { title: "Logo Design", description: "Distinctive marks and visual signatures built for digital and offline consistency.", icon: Palette, className: "lg:col-span-3" },
  { title: "UI UX", description: "Interfaces, flows, and design systems for products people can understand immediately.", icon: Layers3, className: "lg:col-span-6 lg:row-span-2" },
  { title: "Brand Identity", description: "Color, type, voice, and system rules that make your brand easier to remember.", icon: ShieldCheck, className: "lg:col-span-3" },
  { title: "Mobile Apps", description: "Native and cross-platform experiences with responsive interaction and reliable delivery.", icon: Smartphone, className: "lg:col-span-4" },
  { title: "DevOps", description: "CI/CD, release automation, monitoring, and infrastructure workflows for faster shipping.", icon: ServerCog, className: "lg:col-span-4" },
  { title: "Cyber Security", description: "Access control, risk reviews, hardening, and security-first implementation practices.", icon: LockKeyhole, className: "lg:col-span-4" },
  { title: "API Development", description: "Secure backend contracts and integrations that make products and partners connect cleanly.", icon: Code2, className: "lg:col-span-4" },
  { title: "CRM", description: "Lead pipelines, contact history, sales automation, and customer lifecycle visibility.", icon: Users, className: "lg:col-span-4" },
  { title: "ERP", description: "Centralized operations for finance, teams, inventory, process, and reporting.", icon: Workflow, className: "lg:col-span-4" },
  { title: "HRMS", description: "Employee records, attendance, payroll workflows, and HR operations in one place.", icon: Building2, className: "lg:col-span-3" },
  { title: "Inventory", description: "Stock tracking, warehouse visibility, reorder alerts, and purchase control.", icon: Boxes, className: "lg:col-span-3" },
  { title: "Billing Software", description: "Invoices, ledgers, payments, tax records, and automated customer billing.", icon: ReceiptText, className: "lg:col-span-3" },
  { title: "Business Dashboard", description: "Executive KPI views, analytics, reports, and real-time decision surfaces.", icon: BarChart3, className: "lg:col-span-3" },
  { title: "Custom Software", description: "Purpose-built tools for workflows that off-the-shelf software cannot handle.", icon: Sparkles, className: "lg:col-span-4" },
  { title: "Cloud Migration", description: "Move workloads to modern infrastructure without losing visibility or momentum.", icon: Cloud, className: "lg:col-span-4" },
  { title: "Data Analytics", description: "Dashboards, reports, pipelines, and metrics that make performance legible.", icon: Database, className: "lg:col-span-4" },
  { title: "Video Editing", description: "Branded campaign videos, explainers, edits, and launch-ready creative assets.", icon: Film, className: "lg:col-span-3" },
  { title: "3D Design", description: "Dimensional product visuals and immersive assets for premium brand moments.", icon: Cpu, className: "lg:col-span-3" },
  { title: "Company Registration", description: "Company formation, documentation, and founder launch readiness support.", icon: FileCheck2, className: "lg:col-span-3" },
  { title: "GST Services", description: "Registration, filings, reconciliation, and compliance workflows for Indian businesses.", icon: ReceiptText, className: "lg:col-span-3" },
  { title: "Financial Planning", description: "Budgeting, forecasting, and financial models that support controlled growth.", icon: BarChart3, className: "lg:col-span-6" },
  { title: "Startup Consultancy", description: "Strategy, formation, pitch readiness, finance support, and growth advisory for founders.", icon: Building2, className: "lg:col-span-6" }
];

export function BentoGrid() {
  return (
    <section id="services" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-fouses-red">What we do</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
              A full-stack growth grid for modern companies.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/52">
            Software, marketing, design, data, finance, and operations built as one connected growth system.
          </p>
        </div>

        <div className="grid auto-rows-[210px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          {serviceCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: Math.min(index * 0.015, 0.18), duration: 0.35 }}
              whileHover={{ y: -7, rotateX: 1.2, rotateY: -1.2 }}
              className={cn(
                "group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.035] to-fouses-red/[0.065] p-px",
                "before:absolute before:inset-[-2px] before:rounded-[30px] before:bg-[conic-gradient(from_180deg,transparent,rgba(206,0,0,0.58),transparent_32%)] before:opacity-0 before:blur-sm before:transition before:duration-300 hover:before:opacity-100",
                card.className
              )}
            >
              <div className="relative z-10 flex h-full flex-col justify-between overflow-hidden rounded-[27px] bg-[#08080a]/88 p-6 backdrop-blur">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-fouses-red/0 blur-3xl transition duration-300 group-hover:bg-fouses-red/26" />
                <div className="relative flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.055] text-fouses-red">
                    <card.icon className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-white/24 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-fouses-red" />
                </div>
                <div className="relative">
                  <h3 className="text-xl font-semibold tracking-tight">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/52">{card.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
