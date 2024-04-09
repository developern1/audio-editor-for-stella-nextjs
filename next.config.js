/** @type {import('next').NextConfig} */
const prefix =
  process.env.NODE_ENV === 'production' ? 'https://developern1.github.io/audio-editor-for-stella-nextjs/' : ''

const nextConfig = {
  output: 'export',
  assetPrefix: prefix,
  }

module.exports = nextConfig
