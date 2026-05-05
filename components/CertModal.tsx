"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type CertModalProps = {
  isOpen: boolean;
  onClose: () => void;
  image: string | null;
  title: string;
};

export default function CertModal({
  isOpen,
  onClose,
  image,
  title,
}: CertModalProps) {
  return (
    <AnimatePresence>
      {isOpen && image && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            aria-label="Close certificate preview"
            onClick={onClose}
            className="absolute inset-0 cursor-default"
          />

          <motion.div
            className="relative z-10 w-full max-w-4xl rounded-3xl border border-[var(--border)] bg-white p-5 shadow-[0_30px_90px_rgba(0,0,0,0.25)]"
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 20 }}
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-[var(--text)]">
                {title}
              </p>

              <button
                onClick={onClose}
                className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-sm hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Close
              </button>
            </div>

            <div className="relative h-[70vh] w-full overflow-hidden rounded-2xl bg-[var(--bg)]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}