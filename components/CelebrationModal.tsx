"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

interface CelebrationModalProps {
  open: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

export function CelebrationModal({ open, title, message, onClose }: CelebrationModalProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/35 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 12, opacity: 0 }}
            className="glass-card relative w-full max-w-md overflow-hidden rounded-[2rem] p-6 text-center"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-amber-200/80 to-transparent" />
            <div className="relative z-10 mb-4 flex justify-center">
              <div className="animate-pulse-soft rounded-full bg-white p-4 shadow-lg">
                <Sparkles className="h-8 w-8 text-amber-500" />
              </div>
            </div>
            <h3 className="section-title text-3xl text-slate-800">{title}</h3>
            <p className="mt-3 text-base font-bold text-slate-600">{message}</p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white"
            >
              Continuar
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}