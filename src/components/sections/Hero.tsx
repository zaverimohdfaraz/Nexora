"use client";

import { motion } from "framer-motion";
import { Sparkles, Layers, Activity, GitBranch } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const FLOATING_CARDS = [
  {
    icon: Activity,
    title: "Deploy status",
    value: "Live in 12s",
    className: "left-[-4%] top-[8%]",
    delay: 0.9,
  },
  {
    icon: GitBranch,
    title: "Build pipeline",
    value: "42 commits shipped",
    className: "right-[-6%] top-[38%]",
    delay: 1.1,
  },
  {
    icon: Layers,
    title: "Uptime",
    value: "99.98%",
    className: "left-[2%] bottom-[4%]",
    delay: 1.3,
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-28 pt-16 lg:pb-40 lg:pt-24">
      {/* Background layer */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-grid-light dark:bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute left-1/2 top-[-10%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/20 blur-[130px]" />
        <div className="animate-blob absolute right-[10%] top-[20%] h-72 w-72 rounded-full bg-accent/25 blur-[100px]" />
        <div className="animate-blob absolute left-[8%] top-[35%] h-64 w-64 rounded-full bg-secondary/20 blur-[100px] [animation-delay:4s]" />
      </div>

      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-white/70 px-4 py-1.5 text-xs font-semibold text-primary shadow-soft backdrop-blur dark:bg-white/5"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Trusted by 120+ growing companies
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-bold leading-[1.05] tracking-tight text-ink dark:text-white sm:text-6xl lg:text-7xl"
          >
            Building digital experiences that{" "}
            <span className="text-gradient">grow businesses.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl text-lg leading-relaxed text-muted"
          >
            Nexora Solutions partners with ambitious teams to design, build,
            and scale premium web, SaaS, and AI products — engineered for
            speed, built to last.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/quote/" size="lg">
              Get Started
            </Button>
            <Button href="/portfolio/" size="lg" variant="ghost">
              View Portfolio
            </Button>
          </motion.div>
        </div>

        {/* Product visual */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="relative mx-auto mt-20 max-w-4xl"
        >
          <div className="relative rounded-3xl border border-border-subtle bg-white/60 p-2 shadow-card backdrop-blur dark:border-white/10 dark:bg-white/[0.03]">
            <div className="flex items-center gap-1.5 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-white to-accent/10 dark:from-primary/10 dark:via-surface-dark dark:to-accent/10">
              <div className="grid grid-cols-3 gap-4 p-8">
                <div className="col-span-2 space-y-4">
                  <div className="h-28 rounded-xl bg-white/80 shadow-soft dark:bg-white/[0.06]" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 rounded-xl bg-white/70 shadow-soft dark:bg-white/[0.05]" />
                    <div className="h-20 rounded-xl bg-white/70 shadow-soft dark:bg-white/[0.05]" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-16 rounded-xl bg-gradient-brand opacity-90" />
                  <div className="h-28 rounded-xl bg-white/70 shadow-soft dark:bg-white/[0.05]" />
                </div>
              </div>
            </div>
          </div>

          {FLOATING_CARDS.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: card.delay }}
              className={`glass animate-float absolute hidden w-52 rounded-2xl p-4 shadow-soft sm:block ${card.className}`}
              style={{ animationDelay: `${card.delay}s` }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand text-white">
                  <card.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] text-muted">{card.title}</p>
                  <p className="text-sm font-semibold text-ink dark:text-white">
                    {card.value}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
