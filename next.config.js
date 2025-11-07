/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Base path for GitHub Pages (update this if your repo name is different)
  // For user/org pages (username.github.io), leave basePath empty
  // For project pages, set basePath: '/your-repo-name'
  basePath: '',

  // Trailing slash for GitHub Pages compatibility
  trailingSlash: true,

  // React strict mode for better development experience
  reactStrictMode: true,
}

module.exports = nextConfig
