"use client";

import { motion } from "framer-motion";
import { Rocket, ShieldCheck, Users, LineChart } from "lucide-react";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const REASONS = [
  {
    icon: Rocket,
    title: "Ship faster",
    desc: "Lean, senior teams and a proven process mean you're live in weeks, not quarters.",
  },
  {
    icon: ShieldCheck,
    title: "Built to last",
    desc: "Clean architecture, test coverage, and documentation — no shortcuts, no tech debt.",
  },
  {
    icon: Users,
    title: "Real partnership",
    desc: "A dedicated team that speaks your language, not a rotating cast of contractors.",
  },
  {
    icon: LineChart,
    title: "Outcomes over output",
    desc: "We measure success in the metrics that move your business, not lines of code.",
  },
];

export function WhyChooseUs() {
  return (
    <Section className="bg-card dark:bg-white/[0.015]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Nexora"
              title="Software agencies are common. Real partners aren't."
              description="We embed with your team, own outcomes, and build things that hold up under real-world scale."
            />

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {REASONS.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex flex-col gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <reason.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-ink dark:text-white">
                    {reason.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {reason.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-brand opacity-10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-white p-8 shadow-card dark:border-white/10 dark:bg-white/[0.03]">
              <div className="space-y-5">
                {[
                  { label: "Code review", value: 96 },
                  { label: "Test coverage", value: 92 },
                  { label: "Performance score", value: 98 },
                  { label: "Accessibility", value: 100 },
                ].map((row, i) => (
                  <div key={row.label}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium text-ink dark:text-white">
                        {row.label}
                      </span>
                      <span className="text-muted">{row.value}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-primary/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${row.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-brand"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
