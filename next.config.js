/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    recaptchaSiteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    publicBaseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  },
};

module.exports = nextConfig;
