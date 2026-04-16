"use client";

import Image from "next/image";

// MacBook-style frame for desktop screenshots
export function MacBookMockup({ src, alt }: { src: string; alt?: string }) {
  return (
    <div className="relative mx-auto max-w-[700px]">
      {/* MacBook top bar */}
      <div className="bg-[#2a2a2e] rounded-t-xl px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 mx-8">
          <div className="bg-[#1a1a1e] rounded-md h-5 flex items-center justify-center">
            <span className="text-[10px] text-white/30 truncate px-3">{alt || ""}</span>
          </div>
        </div>
      </div>
      {/* Screen */}
      <div className="bg-[#1a1a1e] overflow-hidden rounded-b-xl">
        <Image
          src={src}
          alt={alt || ""}
          width={1440}
          height={900}
          className="w-full h-auto"
          unoptimized
        />
      </div>
      {/* Base */}
      <div className="mx-auto w-[40%] h-3 bg-[#2a2a2e] rounded-b-lg" />
    </div>
  );
}

// iPhone-style frame for mobile screenshots
export function IPhoneMockup({ src, alt }: { src: string; alt?: string }) {
  return (
    <div className="relative mx-auto w-[220px]">
      {/* Phone frame */}
      <div className="bg-[#1a1a1e] rounded-[32px] p-2 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-[#1a1a1e] rounded-b-2xl z-10" />
        {/* Screen */}
        <div className="rounded-[24px] overflow-hidden bg-black">
          <Image
            src={src}
            alt={alt || ""}
            width={390}
            height={844}
            className="w-full h-auto"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
