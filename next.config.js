/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep production verification separate from an already-running dev server.
  distDir: process.env.PORTFOLIO_BUILD_DIR || '.next',
};
module.exports = nextConfig;
