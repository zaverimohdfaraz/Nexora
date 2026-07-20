"use client";

import { motion } from "framer-motion";
import { Award, Globe2, Users2, Sparkles } from "lucide-react";
import { Section, Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";

const ACHIEVEMENTS = [
  { icon: Award, value: 12, suffix: "", label: "Industry awards" },
  { icon: Globe2, value: 20, suffix: "+", label: "Countries served" },
  { icon: Users2, value: 45, suffix: "", label: "Team members" },
  { icon: Sparkles, value: 500, suffix: "+", label: "Projects delivered" },
];

export function Achievements() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {ACHIEVEMENTS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border-subtle bg-card p-8 text-center shadow-card dark:border-white/10 dark:bg-white/[0.02]"
            >
              <item.icon className="h-6 w-6 text-primary" />
              <p className="text-3xl font-bold text-ink dark:text-white">
                <Counter value={item.value} suffix={item.suffix} />
              </p>
              <p className="text-sm text-muted">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
