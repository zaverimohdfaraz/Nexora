"use client";

import { motion } from "framer-motion";
import { Section, Container } from "@/components/ui/Container";

export function Story() {
  return (
    <Section className="pt-0">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-brand opacity-10 blur-2xl" />
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 h-40 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 dark:from-primary/15 dark:to-accent/5" />
              <div className="h-32 rounded-2xl bg-card shadow-soft dark:bg-white/[0.03]" />
              <div className="h-32 rounded-2xl bg-gradient-to-br from-secondary/20 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Our story
            </span>
            <h2 className="text-3xl font-bold text-ink dark:text-white sm:text-4xl">
              From a shared laptop to a team our clients call first.
            </h2>
            <p className="text-base leading-relaxed text-muted">
              Nexora Solutions was founded on a simple frustration: too many
              software agencies optimize for billable hours instead of
              outcomes. We set out to build a studio that operates like an
              in-house team — accountable, transparent, and obsessed with the
              craft of software.
            </p>
            <p className="text-base leading-relaxed text-muted">
              A decade later, that founding principle hasn&apos;t changed.
              We&apos;ve grown into a team spanning engineering, design, and
              product strategy, but every project still gets the same level
              of care as our very first client.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
