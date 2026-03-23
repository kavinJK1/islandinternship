import type { NextConfig } from "next";

// Dutch SEO Architecture (future)
// When ready to target Dutch-language search (stage bali, stage buitenland, internationale stage):
// 1. Create app/nl/page.tsx with Dutch-language homepage variant
// 2. Add hreflang alternates to layout.tsx: languages: { "nl": "/nl/" }
// 3. Create app/nl/stage-bali/page.tsx for highest-volume Dutch keyword cluster
// Target keywords: stage bali, stage in het buitenland, stageplek bali, internationale stage

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
