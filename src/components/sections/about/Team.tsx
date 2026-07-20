"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const TEAM = [
  { name: "Elena Marsh", role: "Founder & CEO", initials: "EM" },
  { name: "Rohan Kapoor", role: "Head of Engineering", initials: "RK" },
  { name: "Sofia Lindgren", role: "Head of Design", initials: "SL" },
  { name: "Marcus Webb", role: "Lead Backend Engineer", initials: "MW" },
  { name: "Aiko Tanaka", role: "Product Strategist", initials: "AT" },
  { name: "Jonas Weber", role: "DevOps Lead", initials: "JW" },
  { name: "Isabella Cruz", role: "Senior Frontend Engineer", initials: "IC" },
  { name: "Tariq Osman", role: "AI Engineer", initials: "TO" },
];

export function Team() {
  return (
    <Section className="bg-card dark:bg-white/[0.015]">
      <Container>
        <SectionHeading
          eyebrow="Meet the team"
          title="The people behind the pixels"
          description="A distributed team of senior engineers, designers, and strategists."
        />

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col items-center gap-4 rounded-2xl border border-border-subtle bg-white p-6 text-center shadow-card transition-colors hover:border-primary/30 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand text-lg font-bold text-white shadow-glow">
                {member.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-ink dark:text-white">
                  {member.name}
                </p>
                <p className="mt-0.5 text-xs text-muted">{member.role}</p>
              </div>
              <div className="flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Linkedin className="h-3.5 w-3.5" />
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Twitter className="h-3.5 w-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
