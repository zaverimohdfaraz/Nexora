"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Youtube, Mail, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./ui/Container";

const COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about/" },
      { label: "Careers", href: "/careers/" },
      { label: "Blog", href: "/blog/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services/#web-development" },
      { label: "AI Solutions", href: "/services/#ai-solutions" },
      { label: "SaaS Development", href: "/services/#saas" },
      { label: "UI/UX Design", href: "/services/#design" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Portfolio", href: "/portfolio/" },
      { label: "Pricing", href: "/pricing/" },
      { label: "Get a Quote", href: "/quote/" },
      { label: "FAQ", href: "/contact/#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Terms & Conditions", href: "/terms/" },
      { label: "Cookies Policy", href: "/cookies/" },
    ],
  },
];

const SOCIALS = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border-subtle bg-card dark:border-white/10 dark:bg-surface-dark">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <Container className="relative py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.5fr_2fr]">
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              We design and engineer premium digital products for ambitious
              teams — from first line of code to global scale.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex max-w-sm items-center gap-2 rounded-full border border-border-subtle bg-white p-1.5 pl-4 dark:border-white/10 dark:bg-white/5"
            >
              <Mail className="h-4 w-4 shrink-0 text-muted" />
              <input
                type="email"
                required
                placeholder="Your work email"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
              />
              <button
                type="submit"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-white transition-transform hover:scale-105"
                aria-label="Subscribe to newsletter"
              >
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>

            <div className="flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-muted transition-all hover:-translate-y-1 hover:border-primary/40 hover:text-primary dark:border-white/10"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <p className="text-sm font-semibold text-ink dark:text-white">
                  {col.title}
                </p>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-8 text-sm text-muted dark:border-white/10 sm:flex-row">
          <p>© {new Date().getFullYear()} Nexora Solutions. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
            All systems operational
          </p>
        </div>
      </Container>
    </footer>
  );
}
