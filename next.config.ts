import type { NextConfig } from "next";
import i18n from "./i18n.js";
import nextTranslate from "next-translate-plugin";

const nextConfig: NextConfig = {
  i18n: {
    ...i18n,
    localeDetection: false,
  },
};

export default nextTranslate(nextConfig);
