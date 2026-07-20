"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-20 lg:pb-24 lg:pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="bg-grid-light dark:bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute left-1/2 top-[-20%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      </div>
      <Container className="max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary"
        >
          Services
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-4xl font-bold leading-[1.1] text-ink dark:text-white sm:text-6xl"
        >
          Every capability you need, <span className="text-gradient">under one roof.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-lg text-muted"
        >
          From first sketch to global scale — design, engineering, AI, and
          cloud infrastructure, delivered by one accountable team.
        </motion.p>
      </Container>
    </section>
  );
}
