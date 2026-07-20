"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const TESTIMONIALS = [
  {
    quote:
      "Nexora didn't just build what we asked for — they challenged our assumptions and shipped something better. Our activation rate nearly doubled in the first quarter.",
    name: "Priya Nair",
    role: "VP Product, Fluxwave",
    initials: "PN",
  },
  {
    quote:
      "The team felt like an extension of ours from day one. Weekly demos, honest timelines, and code quality that made our own engineers ask who wrote it.",
    name: "Daniel Ostrowski",
    role: "CTO, Cedarline",
    initials: "DO",
  },
  {
    quote:
      "We went from a rough idea to a production AI feature in six weeks. Nexora's process removed every bit of ambiguity along the way.",
    name: "Amara Chen",
    role: "Founder, Vertexa",
    initials: "AC",
  },
];

export function Testimonials() {
  return (
    <Section className="bg-card dark:bg-white/[0.015]">
      <Container>
        <SectionHeading
          eyebrow="Client stories"
          title="Don't take our word for it"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="glass-card flex flex-col gap-5 rounded-2xl p-8 shadow-soft"
            >
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-ink dark:text-white/90">
                “{t.quote}”
              </p>
              <div className="mt-auto flex items-center gap-3 pt-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand text-xs font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
