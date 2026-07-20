"use client";

import { motion } from "framer-motion";
import {
  Code2, Palette, Server, Brain, ShoppingCart, Boxes,
  Cloud, Database, LayoutTemplate, Wrench, Search, Gauge,
  Check,
} from "lucide-react";
import { Section, Container } from "@/components/ui/Container";

const SERVICES = [
  {
    id: "web-development",
    icon: Code2,
    title: "Web & Full-Stack Development",
    desc: "Custom websites and web applications built with React, Next.js, and Node.js — engineered for speed and built to scale.",
    features: [
      "Frontend, backend & full-stack builds",
      "React, Next.js & Node.js expertise",
      "Business, portfolio & landing pages",
      "MERN stack development",
    ],
  },
  {
    id: "design",
    icon: Palette,
    title: "UI/UX Design",
    desc: "Interfaces validated with real users — wireframes, prototypes, and design systems that make products effortless to use.",
    features: [
      "User research & wireframing",
      "High-fidelity prototypes",
      "Design systems & component libraries",
      "Usability testing",
    ],
  },
  {
    id: "ai-solutions",
    icon: Brain,
    title: "AI Solutions & Automation",
    desc: "Practical AI features and workflow automation that save hours and move the metrics that matter to your business.",
    features: [
      "AI-powered product features",
      "Workflow & process automation",
      "LLM integration & tooling",
      "Data pipelines for ML",
    ],
  },
  {
    id: "saas",
    icon: Boxes,
    title: "SaaS Development",
    desc: "From MVP to multi-tenant platform — subscription billing, auth, and infrastructure built for iteration speed.",
    features: [
      "Multi-tenant architecture",
      "Subscription & billing integration",
      "Role-based access control",
      "Usage analytics & dashboards",
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce Development",
    desc: "Conversion-focused storefronts with seamless checkout, inventory, and payment experiences.",
    features: [
      "Custom storefront design",
      "Payment gateway integration",
      "Inventory & order management",
      "Performance-optimized checkout",
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Resilient infrastructure, CI/CD pipelines, and monitoring that scale with your growth.",
    features: [
      "AWS, GCP & Azure deployments",
      "CI/CD pipeline setup",
      "Containerization with Docker",
      "Monitoring & alerting",
    ],
  },
  {
    id: "backend",
    icon: Server,
    title: "API & Database Design",
    desc: "Well-structured APIs and data models that keep your product fast and maintainable as it grows.",
    features: [
      "REST & GraphQL API development",
      "Relational & NoSQL database design",
      "Third-party integrations",
      "API documentation",
    ],
  },
  {
    id: "erp-crm",
    icon: Database,
    title: "ERP & CRM Systems",
    desc: "Custom internal tools that streamline operations, sales pipelines, and cross-team collaboration.",
    features: [
      "Custom ERP development",
      "CRM systems & pipelines",
      "Internal dashboards",
      "Workflow automation",
    ],
  },
  {
    id: "cms",
    icon: LayoutTemplate,
    title: "CMS & Landing Pages",
    desc: "Editable, CMS-ready websites and high-converting landing pages your team can update without a developer.",
    features: [
      "Headless CMS integration",
      "Landing page systems",
      "Reusable content blocks",
      "A/B testing ready",
    ],
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO & Optimization",
    desc: "Technical SEO, structured data, and performance tuning that gets your product found and keeps it fast.",
    features: [
      "Technical SEO audits",
      "Structured data & schema",
      "Core Web Vitals optimization",
      "Content strategy support",
    ],
  },
  {
    id: "performance",
    icon: Gauge,
    title: "Website Optimization",
    desc: "Lazy loading, code splitting, and image optimization tuned for a 95+ Lighthouse score.",
    features: [
      "Lighthouse performance audits",
      "Image & asset optimization",
      "Code splitting & lazy loading",
      "Caching strategy",
    ],
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Ongoing updates, monitoring, and bug fixes so your product stays reliable long after launch.",
    features: [
      "Ongoing feature development",
      "Bug fixes & monitoring",
      "Security patches",
      "SLA-backed support plans",
    ],
  },
];

export function ServicesGrid() {
  return (
    <Section className="pt-0">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group scroll-mt-28 rounded-2xl border border-border-subtle bg-card p-8 shadow-card transition-colors hover:border-primary/30 dark:border-white/10 dark:bg-white/[0.02]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-ink dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.desc}
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink/80 dark:text-white/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
