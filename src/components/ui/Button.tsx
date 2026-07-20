"use client";

import { ReactNode, useRef, MouseEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  icon?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  icon = true,
  onClick,
  type = "button",
  className,
}: ButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLSpanElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    const span = inner.current;
    if (!el || !span) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`;
    span.style.transform = `translate(${x * 0.08}px, ${y * 0.15}px)`;
  }

  function handleMouseLeave() {
    const el = ref.current;
    const span = inner.current;
    if (!el || !span) return;
    el.style.transform = "translate(0px, 0px)";
    span.style.transform = "translate(0px, 0px)";
  }

  const base = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out will-change-transform",
    size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm",
    variant === "primary" &&
      "bg-gradient-brand text-white shadow-[0_8px_24px_-8px_rgba(37,99,235,0.55)] hover:shadow-[0_12px_32px_-6px_rgba(37,99,235,0.65)] hover:-translate-y-0.5",
    variant === "secondary" &&
      "bg-ink text-white dark:bg-white dark:text-ink hover:-translate-y-0.5 shadow-soft",
    variant === "ghost" &&
      "border border-border-subtle bg-transparent text-ink dark:text-white hover:border-primary/40 hover:bg-primary/5",
    className
  );

  const content = (
    <span ref={inner} className="relative z-10 inline-flex items-center gap-2 transition-transform duration-300">
      {children}
      {icon && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </span>
  );

  const wrapperProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: "inline-block transition-transform duration-200 ease-out",
  };

  if (href) {
    return (
      <motion.div {...wrapperProps}>
        <Link href={href} className={base}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div {...wrapperProps}>
      <button type={type} onClick={onClick} className={base}>
        {content}
      </button>
    </motion.div>
  );
}
