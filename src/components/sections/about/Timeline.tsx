"use client";

import { motion } from "framer-motion";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const MILESTONES = [
  {
    year: "2016",
    title: "Nexora is founded",
    desc: "Two engineers, one laptop, and a first client project delivered in six weeks.",
  },
  {
    year: "2018",
    title: "First 50 projects shipped",
    desc: "Grew to a team of eight and opened our first studio space.",
  },
  {
    year: "2021",
    title: "AI practice launched",
    desc: "Built our first machine-learning powered product for a fintech client.",
  },
  {
    year: "2023",
    title: "500+ projects milestone",
    desc: "Crossed 500 shipped projects across 20+ countries.",
  },
  {
    year: "2026",
    title: "Today",
    desc: "A full-stack team of designers, engineers, and strategists serving clients worldwide.",
  },
];

export function Timeline() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="Our journey" title="A decade of shipping" />

        <div className="relative mt-16 flex flex-col gap-10">
          <div className="absolute bottom-0 left-[15px] top-0 w-px bg-border-subtle dark:bg-white/10" />
          {MILESTONES.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex gap-6 pl-10"
            >
              <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand text-[10px] font-bold text-white shadow-glow">
                {item.year.slice(2)}
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {item.year}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-ink dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
