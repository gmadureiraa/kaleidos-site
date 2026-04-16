"use client";

import { motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";
import type { PortfolioCategory } from "@/lib/portfolio-data";

interface PortfolioFiltersProps {
  activeCategory: PortfolioCategory | "all";
  activeClient: string | "all";
  clients: { id: string; name: string }[];
  onCategoryChange: (category: PortfolioCategory | "all") => void;
  onClientChange: (clientId: string | "all") => void;
  totalItems: number;
  filteredCount: number;
  labels: {
    all: string;
    site: string;
    post: string;
    design: string;
    video: string;
    reel: string;
    criativo: string;
    filterByClient: string;
    items: string;
  };
}

const CATEGORIES: (PortfolioCategory | "all")[] = [
  "all",
  "site",
  "design",
  "video",
  "reel",
  "post",
  "criativo",
];

export function PortfolioFilters({
  activeCategory,
  activeClient,
  clients,
  onCategoryChange,
  onClientChange,
  filteredCount,
  labels,
}: PortfolioFiltersProps) {
  const [showClients, setShowClients] = useState(false);

  return (
    <div className="sticky top-16 z-40 bg-black/80 backdrop-blur-md border-b border-white/5 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Category pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className="relative shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-[#7CFF6B] rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  activeCategory === cat
                    ? "text-black"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {labels[cat as keyof typeof labels] ?? cat}
              </span>
            </button>
          ))}

          {/* Client filter toggle */}
          <div className="shrink-0 ml-auto pl-4 border-l border-white/10">
            <button
              onClick={() => setShowClients(!showClients)}
              className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-colors cursor-pointer ${
                activeClient !== "all"
                  ? "bg-[#7CFF6B]/20 text-[#7CFF6B] border border-[#7CFF6B]/40"
                  : "text-white/50 hover:text-white/80 border border-white/10"
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{labels.filterByClient}</span>
            </button>
          </div>
        </div>

        {/* Client pills (collapsible) */}
        {showClients && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-wrap gap-2 pt-3 mt-2 border-t border-white/5"
          >
            <button
              onClick={() => onClientChange("all")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                activeClient === "all"
                  ? "bg-white/15 text-white"
                  : "text-white/40 hover:text-white/70 border border-white/10"
              }`}
            >
              {labels.all}
            </button>
            {clients.map((client) => (
              <button
                key={client.id}
                onClick={() => onClientChange(client.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  activeClient === client.id
                    ? "bg-white/15 text-white"
                    : "text-white/40 hover:text-white/70 border border-white/10"
                }`}
              >
                {client.name}
              </button>
            ))}
          </motion.div>
        )}

        {/* Count + active filter tag */}
        <div className="flex items-center gap-2 mt-2 text-xs text-white/30">
          <span>
            {filteredCount} {labels.items}
          </span>
          {activeClient !== "all" && (
            <button
              onClick={() => onClientChange("all")}
              className="flex items-center gap-1 bg-white/10 text-white/60 px-2 py-0.5 rounded-full hover:bg-white/15 transition-colors cursor-pointer"
            >
              {clients.find((c) => c.id === activeClient)?.name}
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
