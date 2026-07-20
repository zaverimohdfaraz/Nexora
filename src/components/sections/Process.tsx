"use client";

import { motion } from "framer-motion";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = [
  {
    step: "01",
    title: "Discover",
    desc: "We dig into your goals, users, and constraints to define what success looks like.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Wireframes to high-fidelity prototypes — validated with real users before a line of code is written.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Agile sprints, weekly demos, and a codebase you'll actually want to maintain.",
  },
  {
    step: "04",
    title: "Launch & Scale",
    desc: "Deployment, monitoring, and ongoing support as your product grows.",
  },
];

export function Process() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title="A process built for clarity, not surprises"
          description="Four phases. Weekly check-ins. No black boxes."
        />

        <div className="relative mt-20 grid grid-cols-1 gap-10 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent lg:block" />
          {STEPS.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative flex flex-col gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-sm font-bold text-white shadow-glow">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-ink dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
