import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  markOnly = false,
}: {
  className?: string;
  markOnly?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Nexora Solutions — Home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <svg
        width="38"
        height="38"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="navGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#2563EB" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="navGradSoft" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#2563EB" stopOpacity="0.14" />
            <stop offset="1" stopColor="#06B6D4" stopOpacity="0.14" />
          </linearGradient>
        </defs>
        <rect
          x="0.5"
          y="0.5"
          width="39"
          height="39"
          rx="11.5"
          fill="url(#navGradSoft)"
          stroke="url(#navGrad)"
          strokeOpacity="0.3"
          className="transition-all duration-300 group-hover:stroke-opacity-70"
        />
        <path
          d="M12.5 28V12M12.5 12L27.5 28M27.5 28V12"
          stroke="url(#navGrad)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {!markOnly && (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-bold tracking-tight text-ink dark:text-white">
            Nexora
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted">
            Solutions
          </span>
        </span>
      )}
    </Link>
  );
}
