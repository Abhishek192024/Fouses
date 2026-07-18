"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { useSession } from "next-auth/react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Boxes,
  BrainCircuit,
  Building2,
  ChevronDown,
  CircleDollarSign,
  Cloud,
  Code2,
  Cpu,
  CreditCard,
  Database,
  FileCheck2,
  Film,
  Globe2,
  GraduationCap,
  HeartPulse,
  Instagram,
  Layers3,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  Moon,
  Paintbrush,
  Palette,
  PenTool,
  ReceiptText,
  Search,
  ServerCog,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Sun,
  TrendingUp,
  Tv,
  UserRound,
  Users,
  Workflow,
  X,
  type LucideIcon
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { openAuthModal } from "./AuthModal";

type MenuItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type MenuCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: MenuItem[];
};

const menuCategories: MenuCategory[] = [
  {
    title: "IT Solutions",
    icon: Code2,
    description: "Engineering systems for digital products, infrastructure, automation, and security.",
    items: [
      { title: "Web Development", description: "Fast marketing sites, portals, and web apps built on modern stacks.", icon: Globe2 },
      { title: "Mobile App Development", description: "iOS, Android, and cross-platform apps with polished product UX.", icon: Cpu },
      { title: "Cloud Consultancy", description: "Cloud architecture, migration, cost control, and deployment planning.", icon: Cloud },
      { title: "DevOps", description: "CI/CD, release pipelines, observability, and infrastructure automation.", icon: ServerCog },
      { title: "AI & Machine Learning", description: "Prediction, automation, and intelligent workflows for operations.", icon: BrainCircuit },
      { title: "Custom Software", description: "Internal tools and workflow platforms tailored to business process.", icon: Workflow },
      { title: "API Development", description: "Secure integrations, partner APIs, and scalable backend contracts.", icon: Code2 },
      { title: "Cyber Security", description: "Risk hardening, access control, audits, and secure-by-design systems.", icon: LockKeyhole },
      { title: "Data Engineering", description: "Pipelines, warehouses, dashboards, and clean reporting foundations.", icon: Database },
      { title: "SaaS Development", description: "Multi-tenant products, billing flows, dashboards, and admin surfaces.", icon: Layers3 }
    ]
  },
  {
    title: "Marketing",
    icon: BarChart3,
    description: "Demand generation across search, paid media, content, and performance channels.",
    items: [
      { title: "SEO", description: "Technical, local, and content SEO for compounding organic visibility.", icon: Search },
      { title: "Google Ads", description: "Search and display campaigns structured for measurable conversions.", icon: TrendingUp },
      { title: "Facebook Ads", description: "Audience strategy, campaign setup, and conversion-led optimization.", icon: Users },
      { title: "Instagram Marketing", description: "Creative social campaigns for discovery, engagement, and trust.", icon: Instagram },
      { title: "YouTube Marketing", description: "Video strategy, channel growth, and paid YouTube acquisition.", icon: Film },
      { title: "Hotstar Ads", description: "Premium OTT placements for high-reach brand and performance campaigns.", icon: Tv },
      { title: "OTT Advertising", description: "Streaming media campaigns across entertainment and connected audiences.", icon: Tv },
      { title: "Email Marketing", description: "Lifecycle campaigns, newsletters, nurture flows, and retention systems.", icon: Mail },
      { title: "Performance Marketing", description: "Full-funnel paid growth with testing, tracking, and optimization.", icon: BarChart3 },
      { title: "Content Marketing", description: "Strategic content systems for authority, demand, and long-term search.", icon: PenTool }
    ]
  },
  {
    title: "Designing",
    icon: Palette,
    description: "Brand, interface, motion, and content design for premium digital experiences.",
    items: [
      { title: "Logo Design", description: "Distinct marks and visual systems that work across every channel.", icon: Paintbrush },
      { title: "Brand Identity", description: "Color, type, voice, and design systems for recognizable brands.", icon: ShieldCheck },
      { title: "UI UX Design", description: "Product interfaces designed for clarity, conversion, and repeated use.", icon: Layers3 },
      { title: "Website Design", description: "High-impact websites with polished layouts and responsive interaction.", icon: Globe2 },
      { title: "Product Design", description: "User journeys, prototypes, design systems, and product experience strategy.", icon: Boxes },
      { title: "Motion Graphics", description: "Animated assets for launches, explainers, social, and product storytelling.", icon: Film },
      { title: "Video Editing", description: "Clean cuts, branded edits, ad creatives, and campaign-ready videos.", icon: Film },
      { title: "3D Design", description: "Product visuals, spatial assets, and dimensional brand moments.", icon: Cpu },
      { title: "Packaging Design", description: "Retail-ready packaging that aligns brand, shelf impact, and clarity.", icon: ShoppingBag },
      { title: "Social Media Design", description: "Reusable social templates and campaign creatives for consistent posting.", icon: Instagram }
    ]
  },
  {
    title: "Finance",
    icon: CircleDollarSign,
    description: "Finance, compliance, and advisory services for growing companies.",
    items: [
      { title: "Accounting", description: "Reliable bookkeeping and reporting workflows for daily finance control.", icon: ReceiptText },
      { title: "GST Services", description: "GST registration, filing, reconciliation, and compliance support.", icon: FileCheck2 },
      { title: "Tax Consultancy", description: "Tax planning and advisory for founders, companies, and campaigns.", icon: CircleDollarSign },
      { title: "Payroll", description: "Payroll processing, compliance, salary workflows, and employee records.", icon: Users },
      { title: "Financial Planning", description: "Budgeting, forecasting, and structured plans for sustainable growth.", icon: BarChart3 },
      { title: "Company Registration", description: "Company setup, filings, documentation, and launch readiness.", icon: Building2 },
      { title: "Audit", description: "Process reviews, financial checks, and compliance documentation.", icon: ShieldCheck },
      { title: "Investment Advisory", description: "Capital planning and investment guidance for business owners.", icon: TrendingUp },
      { title: "Startup Consultancy", description: "Founder support for formation, finance, decks, and market planning.", icon: Sparkles }
    ]
  },
  {
    title: "Products",
    icon: Boxes,
    description: "Ready-to-customize business software for operations, sales, and reporting.",
    items: [
      { title: "CRM", description: "Lead tracking, pipeline views, customer history, and sales workflows.", icon: Users },
      { title: "ERP", description: "Integrated business operations across finance, inventory, and teams.", icon: Workflow },
      { title: "HRMS", description: "Employee records, attendance, payroll support, and HR workflows.", icon: UserRound },
      { title: "Inventory Management", description: "Stock visibility, purchase flows, warehouse control, and alerts.", icon: Boxes },
      { title: "POS", description: "Fast billing, inventory sync, customer records, and retail reporting.", icon: CreditCard },
      { title: "Billing Software", description: "Invoices, payments, ledgers, and automated billing operations.", icon: ReceiptText },
      { title: "School ERP", description: "Admissions, fees, attendance, academics, and parent communication.", icon: GraduationCap },
      { title: "Hospital Management", description: "Appointments, records, billing, departments, and patient workflows.", icon: HeartPulse },
      { title: "AI Chatbot", description: "Automated sales, support, lead capture, and knowledge responses.", icon: BrainCircuit },
      { title: "Business Dashboard", description: "Real-time KPIs, analytics, and executive reporting interfaces.", icon: BarChart3 }
    ]
  },
  {
    title: "Location",
    icon: MapPin,
    description: "Market-aware growth support for regional and global expansion.",
    items: [
      { title: "India", description: "Digital growth, software, finance, and media execution across India.", icon: MapPin },
      { title: "USA", description: "SaaS-style product, marketing, and remote growth operations for US teams.", icon: MapPin },
      { title: "UK", description: "Premium brand, product, and campaign support for UK businesses.", icon: MapPin },
      { title: "Canada", description: "Digital operations and expansion support for Canadian companies.", icon: MapPin },
      { title: "Australia", description: "Modern web, paid media, and brand systems for Australian markets.", icon: MapPin },
      { title: "Dubai", description: "UAE-focused digital growth, advertising, and business software delivery.", icon: MapPin },
      { title: "Singapore", description: "Regional tech and performance systems for Southeast Asian growth.", icon: MapPin },
      { title: "Germany", description: "Structured digital experiences for European B2B and product teams.", icon: MapPin }
    ]
  }
];

function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setDark((value) => !value)}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:bg-white/10 hover:text-white"
    >
      {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
}

export function ModernNavbar() {
  const { data: session, status } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const initials = useMemo(() => {
    const name = session?.user?.name || session?.user?.email || "F";
    return name.charAt(0).toUpperCase();
  }, [session]);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 24);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <header className="sticky left-0 right-0 top-4 z-40 px-4">
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          "relative mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-white/10 px-4 shadow-2xl shadow-black/35 backdrop-blur-md transition-all duration-300",
          scrolled ? "bg-black/78 shadow-fouses-red/10 backdrop-blur-2xl" : "bg-black/46"
        )}
      >
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-fouses-red shadow-glow-sm">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-lg font-semibold tracking-tight">Fouses</span>
        </a>

        <NavigationMenu.Root className="relative hidden md:block">
          <NavigationMenu.List className="flex items-center gap-1">
            {menuCategories.map((category) => (
              <NavigationMenu.Item key={category.title}>
                <NavigationMenu.Trigger className="group flex items-center gap-1 rounded-full px-3 py-2 text-sm text-white/64 outline-none transition hover:bg-white/[0.08] hover:text-white data-[state=open]:bg-white/[0.08] data-[state=open]:text-white">
                  {category.title}
                  <ChevronDown className="h-3.5 w-3.5 transition group-data-[state=open]:rotate-180" />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content asChild>
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-1/2 top-[calc(100%+14px)] w-[900px] -translate-x-1/2 overflow-hidden rounded-[28px] border border-white/12 bg-[#08080a]/90 p-4 shadow-2xl shadow-black/60 backdrop-blur-2xl"
                  >
                    <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-fouses-red/20 blur-3xl" />
                    <div className="relative grid grid-cols-[0.72fr_1.45fr] gap-3">
                      <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
                        <category.icon className="h-10 w-10 text-fouses-red" />
                        <h3 className="mt-5 text-2xl font-semibold tracking-tight">{category.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-white/50">{category.description}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {category.items.map((item) => (
                          <NavigationMenu.Link key={item.title} asChild>
                            <a
                              href="#services"
                              className="group/item rounded-2xl border border-white/8 bg-white/[0.035] p-3 transition hover:border-fouses-red/45 hover:bg-fouses-red/12"
                            >
                              <span className="flex items-start gap-3">
                                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-fouses-red">
                                  <item.icon className="h-4 w-4" />
                                </span>
                                <span>
                                  <span className="block text-sm font-medium text-white/86">{item.title}</span>
                                  <span className="mt-1 block text-xs leading-5 text-white/45">{item.description}</span>
                                </span>
                              </span>
                            </a>
                          </NavigationMenu.Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <div className="hidden items-center gap-2 md:flex">
          <button
            aria-label="Search Fouses services"
            onClick={() => setSearchOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            <Search className="h-4 w-4" />
          </button>
          <ThemeToggle />
          {status === "authenticated" ? (
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white text-sm font-semibold text-black">
              {initials}
            </div>
          ) : (
            <button onClick={openAuthModal} className="rounded-full px-4 py-2 text-sm text-white/62 transition hover:text-white">
              Sign In
            </button>
          )}
          <button
            onClick={openAuthModal}
            className="rounded-full bg-fouses-red px-5 py-2.5 text-sm font-semibold text-white shadow-glow-sm transition hover:scale-[1.02] hover:bg-red-700"
          >
            Get Started
          </button>
        </div>

        <button onClick={() => setMobileOpen(true)} className="rounded-full border border-white/10 p-2 text-white/80 md:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </motion.nav>

      <AnimatePresence>
        {searchOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 pt-28 backdrop-blur-xl"
          >
            <motion.div
              initial={{ y: -12, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -12, scale: 0.98 }}
              className="w-full max-w-2xl overflow-hidden rounded-3xl border border-white/12 bg-[#09090b]/92 p-3 shadow-2xl"
            >
              <div className="flex items-center gap-3 rounded-2xl bg-white/[0.06] px-4 py-3">
                <Search className="h-5 w-5 text-fouses-red" />
                <input
                  autoFocus
                  placeholder="Search Web Development, SEO, CRM, GST Services..."
                  className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/34"
                />
                <button onClick={() => setSearchOpen(false)} className="rounded-full p-1 text-white/55 hover:text-white">
                  <X className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 bg-black/82 p-4 backdrop-blur-xl md:hidden">
          <div className="max-h-[calc(100vh-32px)] overflow-y-auto rounded-3xl border border-white/10 bg-[#09090b]/92 p-4">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-lg font-semibold">Fouses</span>
              <button onClick={() => setMobileOpen(false)} className="rounded-full border border-white/10 p-2">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-5">
              {menuCategories.map((category) => (
                <div key={category.title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <category.icon className="h-4 w-4 text-fouses-red" />
                    <p className="text-sm font-semibold text-white">{category.title}</p>
                  </div>
                  <div className="grid gap-2">
                    {category.items.map((item) => (
                      <a
                        key={item.title}
                        href="#services"
                        onClick={() => setMobileOpen(false)}
                        className="rounded-2xl border border-white/8 bg-black/20 px-3 py-2"
                      >
                        <span className="flex items-center gap-2 text-sm text-white/78">
                          <item.icon className="h-4 w-4 text-fouses-red" />
                          {item.title}
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-white/42">{item.description}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  openAuthModal();
                }}
                className={cn("w-full rounded-full bg-fouses-red px-5 py-3 text-sm font-semibold text-white shadow-glow-sm")}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
