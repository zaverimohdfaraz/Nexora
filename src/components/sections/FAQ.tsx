"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Section, Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Most projects range from 6 to 16 weeks depending on scope. We'll give you a clear timeline after our discovery phase, broken down by milestone.",
  },
  {
    q: "Do you work with startups or only enterprise clients?",
    a: "Both. We have dedicated packages for early-stage startups (MVP-focused, fast iteration) as well as ongoing partnerships with enterprise teams.",
  },
  {
    q: "What does the pricing structure look like?",
    a: "We offer fixed-scope packages for defined projects and monthly retainers for ongoing work. Every quote includes a detailed breakdown before you commit.",
  },
  {
    q: "Will I own the code and design files?",
    a: "Yes — 100%. Full source code, design files, and documentation are handed over at project completion with no licensing restrictions.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Every project includes a post-launch support window, and we offer ongoing maintenance retainers for ongoing bug fixes, updates, and improvements.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />

        <div className="mt-14 flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-border-subtle bg-card dark:border-white/10 dark:bg-white/[0.02]"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-ink dark:text-white sm:text-base">
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300",
                      isOpen && "rotate-45"
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
