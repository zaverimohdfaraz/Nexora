"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle2, Loader2,
} from "lucide-react";
import { Section, Container } from "@/components/ui/Container";

type Status = "idle" | "loading" | "success" | "error";

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "hello@nexorasolutions.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 010-0000" },
  { icon: MapPin, label: "Office", value: "148 Market Street, San Francisco, CA" },
  { icon: Clock, label: "Business Hours", value: "Mon–Fri, 9:00 AM – 6:00 PM PST" },
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    const newErrors: Record<string, string> = {};
    if (name.length < 2) newErrors.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Please enter a valid email address.";
    if (message.length < 10) newErrors.message = "Tell us a bit more (10+ characters).";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus("loading");
    // Wire this up to your email handler of choice (Web3Forms / EmailJS)
    // once you have an access key — see the README for setup notes.
    setTimeout(() => {
      setStatus("success");
      e.currentTarget?.reset();
    }, 1200);
  }

  return (
    <Section className="pt-0">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border-subtle bg-card p-8 shadow-card dark:border-white/10 dark:bg-white/[0.02] sm:p-10"
          >
            {status === "success" ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center gap-4 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 14 }}
                >
                  <CheckCircle2 className="h-14 w-14 text-success" />
                </motion.div>
                <h3 className="text-xl font-bold text-ink dark:text-white">
                  Message sent!
                </h3>
                <p className="max-w-xs text-sm text-muted">
                  Thanks for reaching out — we&apos;ll be in touch within one
                  business day.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm font-semibold text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" placeholder="Jane Cooper" error={errors.name} />
                  <Field label="Email address" name="email" type="email" placeholder="jane@company.com" error={errors.email} />
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Company" name="company" placeholder="Company Inc." optional />
                  <Field label="Phone" name="phone" placeholder="+1 (555) 000-0000" optional />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-ink dark:text-white">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-xl border border-border-subtle bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary dark:border-white/10 dark:bg-white/[0.03]"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(37,99,235,0.55)] transition-all hover:-translate-y-0.5 disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {CONTACT_INFO.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border-subtle bg-card p-5 dark:border-white/10 dark:bg-white/[0.02]"
                >
                  <item.icon className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-ink dark:text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-2xl border border-border-subtle bg-card dark:border-white/10 dark:bg-white/[0.02]">
              <div className="bg-grid-light dark:bg-grid-dark absolute inset-0 opacity-70" />
              <div className="relative flex flex-col items-center gap-2 text-center">
                <MapPin className="h-8 w-8 text-primary" />
                <p className="text-sm font-medium text-ink dark:text-white">
                  148 Market Street, San Francisco
                </p>
                <p className="text-xs text-muted">Map preview — connect Google Maps API</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
  optional,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-ink dark:text-white">
        {label} {optional && <span className="text-muted">(optional)</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border-subtle bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary dark:border-white/10 dark:bg-white/[0.03]"
      />
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}
