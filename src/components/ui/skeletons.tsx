"use client";

import { motion } from "framer-motion";

// Skeleton para cards de cases
export function CaseCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <div className="relative h-32 overflow-hidden">
        <motion.div
          className="w-full h-full bg-gray-200"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
      <div className="p-4 space-y-3">
        <motion.div
          className="h-6 bg-gray-200 rounded"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
        />
        <div className="flex gap-2">
          <motion.div
            className="h-4 w-16 bg-gray-200 rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          />
          <motion.div
            className="h-4 w-20 bg-gray-200 rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
          />
        </div>
        <motion.div
          className="h-4 w-3/4 bg-gray-200 rounded"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
        />
      </div>
    </div>
  );
}

// Skeleton para carrossel de cases
export function CasesCarouselSkeleton() {
  return (
    <div className="w-full flex justify-center py-6 sm:py-8 lg:py-12 bg-black">
      <div className="w-full max-w-7xl px-4">
        <div className="text-center mb-8 sm:mb-12">
          <motion.div
            className="h-12 bg-gray-700 rounded mx-auto mb-4 max-w-md"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        
        <div className="flex gap-4 overflow-hidden">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-shrink-0 w-80">
              <motion.div
                className="h-[400px] bg-gray-800 rounded-2xl"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Skeleton para bento grid
export function BentoGridSkeleton() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="h-16 bg-gray-200 rounded mb-8 sm:mb-12 max-w-md"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        
        <div className="grid gap-4 sm:gap-6">
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            <motion.div
              className="md:col-span-1 h-64 bg-gray-100 rounded-xl"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className="md:col-span-2 h-64 bg-gray-100 rounded-xl"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <motion.div
              className="md:col-span-1 h-64 bg-gray-100 rounded-xl"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
            />
            <motion.div
              className="md:col-span-1 h-64 bg-gray-100 rounded-xl"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Skeleton para hero
export function HeroSkeleton() {
  return (
    <section className="relative h-[85vh] flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden bg-black">
      <div className="text-center max-w-4xl mx-auto px-4 space-y-6">
        <motion.div
          className="h-16 bg-gray-700 rounded mx-auto max-w-md"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.div
          className="h-6 bg-gray-600 rounded mx-auto max-w-lg"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
        />
        <motion.div
          className="h-4 bg-gray-600 rounded mx-auto max-w-xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
        />
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-8">
          <motion.div
            className="h-12 w-48 bg-gray-600 rounded"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
          />
          <motion.div
            className="h-12 w-48 bg-gray-600 rounded"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
}

// Skeleton genérico para texto
export function TextSkeleton({ lines = 3, className = "" }: { lines?: number; className?: string }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <motion.div
          key={i}
          className="h-4 bg-gray-200 rounded"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
        />
      ))}
    </div>
  );
}
