"use client";

import { motion } from "framer-motion";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STACK = [
  "React", "Next.js", "TypeScript", "Node.js", "Express",
  "MongoDB", "PostgreSQL", "GraphQL", "Tailwind CSS", "AWS",
  "Docker", "Redis", "Python", "Firebase", "OpenAI API", "Kubernetes",
];

export function TechStack() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Our stack"
          title="Modern tools. Production-grade craft."
          description="We pick technology that fits the problem — proven, well-documented, and built for teams that will maintain it long after launch."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {STACK.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex items-center justify-center gap-3 rounded-xl border border-border-subtle bg-card px-5 py-5 text-center transition-colors hover:border-primary/30 dark:border-white/10 dark:bg-white/[0.02]"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-brand" />
              <span className="text-sm font-semibold text-ink dark:text-white">
                {tech}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
