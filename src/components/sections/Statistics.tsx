"use client";

import { motion } from "framer-motion";
import { Section, Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";

const STATS = [
  { value: 500, suffix: "+", label: "Projects delivered" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 10, suffix: "+", label: "Years experience" },
  { value: 24, suffix: "/7", label: "Support coverage" },
];

export function Statistics() {
  return (
    <Section className="relative overflow-hidden bg-surface-dark text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid-dark absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[140px]" />
      </div>
      <Container className="relative">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-2 text-center"
            >
              <p className="text-4xl font-bold text-gradient sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
