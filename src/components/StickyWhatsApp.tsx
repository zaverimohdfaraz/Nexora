"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function StickyWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/10000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.6, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-8 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-success text-white shadow-[0_10px_30px_-8px_rgba(16,185,129,0.6)] sm:left-8"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-success/40" />
      <MessageCircle className="relative h-6 w-6" />
    </motion.a>
  );
}
