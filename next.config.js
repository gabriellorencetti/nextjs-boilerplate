const isProd = process.env.NODE_ENV === "production"

const withPWA = require("next-pwa")({
  dest: "public",
  disable: !isProd
})

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true
  }
}

module.exports = withPWA(nextConfig)
