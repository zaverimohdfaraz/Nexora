"use client";

import { motion } from "framer-motion";
import { Landmark, HeartPulse, ShoppingBag, GraduationCap, Building2, Plane } from "lucide-react";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const INDUSTRIES = [
  { icon: Landmark, label: "Fintech" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: ShoppingBag, label: "E-commerce" },
  { icon: GraduationCap, label: "EdTech" },
  { icon: Building2, label: "Real Estate" },
  { icon: Plane, label: "Travel" },
];

export function Industries() {
  return (
    <Section className="bg-card dark:bg-white/[0.015]">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Domain experience that shortens the learning curve"
        />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {INDUSTRIES.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border-subtle bg-white px-4 py-8 text-center transition-colors hover:border-primary/30 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <item.icon className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium text-ink dark:text-white">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
