"use client";

import Script from "next/script";

const UMAMI_WEBSITE_ID = "e3068cd9-f91a-4e6e-87be-b98ba9081114";

export function Umami() {
  return (
    <Script
      defer
      src="https://cloud.umami.is/script.js"
      data-website-id={UMAMI_WEBSITE_ID}
      strategy="afterInteractive"
    />
  );
}
