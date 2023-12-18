import createMDX from "@next/mdx";
import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["ts", "tsx", "mdx"],
  basePath: process.env.BASE_PATH ?? "/rex",
};

const withMDX = createMDX({});

export default withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })(withMDX(nextConfig));
