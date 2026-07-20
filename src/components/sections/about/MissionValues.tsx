"use client";

import { motion } from "framer-motion";
import { Target, Eye, Gem } from "lucide-react";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PILLARS = [
  {
    icon: Target,
    title: "Mission",
    desc: "To give ambitious teams the engineering and design leverage of an in-house product team, without the overhead.",
  },
  {
    icon: Eye,
    title: "Vision",
    desc: "A world where every great idea has access to world-class software craftsmanship — not just the well-funded ones.",
  },
  {
    icon: Gem,
    title: "Values",
    desc: "Radical transparency, obsessive craft, and outcomes over optics — in every engagement, every time.",
  },
];

export function MissionValues() {
  return (
    <Section className="bg-card dark:bg-white/[0.015]">
      <Container>
        <SectionHeading eyebrow="What drives us" title="Our compass" />
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="rounded-2xl border border-border-subtle bg-white p-8 shadow-card dark:border-white/10 dark:bg-white/[0.03]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-ink dark:text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
