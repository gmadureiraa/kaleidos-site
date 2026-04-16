"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import type { PortfolioItem } from "@/lib/portfolio-data";

interface PortfolioLightboxProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
  viewCaseLabel: string;
}

export function PortfolioLightbox({
  item,
  items,
  currentIndex,
  onClose,
  onNavigate,
  viewCaseLabel,
}: PortfolioLightboxProps) {
  const goNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onNavigate(currentIndex + 1);
    }
  }, [currentIndex, items.length, onNavigate]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  }, [currentIndex, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!item) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose, goNext, goPrev]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Previous */}
          {currentIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
          )}

          {/* Next */}
          {currentIndex < items.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Proximo"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          )}

          {/* Content */}
          <motion.div
            key={item.id}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                className="max-w-full max-h-[75vh] rounded-lg object-contain"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <Image
                src={item.src}
                alt={item.alt || item.clientName}
                width={1200}
                height={900}
                className="max-w-full max-h-[75vh] rounded-lg object-contain"
                priority
              />
            )}

            {/* Metadata bar */}
            <div className="flex items-center justify-between gap-4 mt-4 w-full max-w-xl px-2">
              <div className="flex items-center gap-3">
                <span className="text-white/90 text-sm font-display">
                  {item.clientName}
                </span>
                <span className="text-white/30 text-xs">
                  {currentIndex + 1} / {items.length}
                </span>
              </div>
              <Link
                href={`/cases/${item.clientId}`}
                className="flex items-center gap-1.5 text-[#7CFF6B] text-xs hover:text-[#7CFF6B]/80 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {viewCaseLabel}
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
