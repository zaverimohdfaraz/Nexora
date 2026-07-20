"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PROJECTS = [
  {
    name: "Fluxwave",
    category: "Fintech · SaaS Dashboard",
    metric: "+64% activation",
    gradient: "from-primary/30 via-primary/10 to-transparent",
  },
  {
    name: "Cedarline",
    category: "E-commerce · Storefront",
    metric: "2.1x conversion",
    gradient: "from-accent/30 via-accent/10 to-transparent",
  },
  {
    name: "Vertexa",
    category: "AI · Automation Platform",
    metric: "40hrs saved / week",
    gradient: "from-secondary/30 via-secondary/10 to-transparent",
  },
];

export function FeaturedProjects() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Selected work"
            title="Products we've shipped"
            description="A few of the platforms we've designed, built, and scaled with our partners."
          />
          <Link
            href="/portfolio/"
            className="group hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-primary sm:flex"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-border-subtle bg-card shadow-card transition-colors hover:border-primary/30 dark:border-white/10 dark:bg-white/[0.02]"
            >
              <Link href="/portfolio/" className="block">
                <div
                  className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient} bg-surface-dark`}
                >
                  <div className="absolute inset-0 bg-grid-dark opacity-40" />
                  <div className="relative flex h-24 w-40 flex-col justify-center gap-2 rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
                    <div className="h-2 w-2/3 rounded-full bg-white/40" />
                    <div className="h-2 w-full rounded-full bg-white/20" />
                    <div className="h-2 w-1/2 rounded-full bg-white/20" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted">
                    {project.category}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-ink dark:text-white">
                      {project.name}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </div>
                  <p className="mt-2 text-sm font-medium text-success">
                    {project.metric}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
