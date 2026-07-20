"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-surface-dark px-8 py-20 text-center"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="bg-grid-dark absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />
            <div className="animate-blob absolute left-[20%] top-[10%] h-64 w-64 rounded-full bg-primary/30 blur-[100px]" />
            <div className="animate-blob absolute right-[15%] bottom-[10%] h-64 w-64 rounded-full bg-accent/30 blur-[100px] [animation-delay:3s]" />
          </div>

          <div className="relative mx-auto flex max-w-xl flex-col items-center gap-6">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Have a project in mind? Let&apos;s build something great.
            </h2>
            <p className="text-white/60">
              Tell us about your goals and we&apos;ll get back to you within
              one business day with next steps.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/quote/" size="lg">
                Get a Free Quote
              </Button>
              <Button href="/contact/" size="lg" variant="ghost" className="border-white/20 text-white hover:bg-white/10">
                Talk to Us
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
