"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("nexora-loaded")) {
      setVisible(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 18;
        return next >= 100 ? 100 : next;
      });
    }, 140);

    const timeout = setTimeout(() => {
      setProgress(100);
      sessionStorage.setItem("nexora-loaded", "1");
      setTimeout(() => setVisible(false), 400);
    }, 1400);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-6 bg-surface-dark"
        >
          <motion.svg
            width="56"
            height="56"
            viewBox="0 0 40 40"
            fill="none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <defs>
              <linearGradient id="loadGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#2563EB" />
                <stop offset="1" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
            <motion.path
              d="M12.5 28V12M12.5 12L27.5 28M27.5 28V12"
              stroke="url(#loadGrad)"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            />
          </motion.svg>

          <div className="h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-gradient-brand"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">
            Nexora Solutions
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
