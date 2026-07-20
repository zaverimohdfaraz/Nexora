"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Cookie } from "lucide-react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("nexora-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2200);
      return () => clearTimeout(timer);
    }
  }, []);

  function respond(value: "accepted" | "declined") {
    localStorage.setItem("nexora-cookie-consent", value);
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4 }}
          className="glass fixed inset-x-4 bottom-6 z-50 mx-auto flex max-w-xl flex-col gap-4 rounded-2xl p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-3">
            <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="text-sm text-muted">
              We use cookies to improve your experience. Read our{" "}
              <Link href="/cookies/" className="font-medium text-primary underline-offset-2 hover:underline">
                Cookies Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              onClick={() => respond("declined")}
              className="rounded-full border border-border-subtle px-4 py-2 text-xs font-semibold text-ink transition-colors hover:bg-black/5 dark:border-white/10 dark:text-white"
            >
              Decline
            </button>
            <button
              onClick={() => respond("accepted")}
              className="rounded-full bg-gradient-brand px-4 py-2 text-xs font-semibold text-white transition-transform hover:scale-105"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
