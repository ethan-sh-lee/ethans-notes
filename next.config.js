const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  env: {
    GISCUS_REPO_USERNAME: process.env.GISCUS_REPO_USERNAME,
    GISCUS_REPO_NAME: process.env.GISCUS_REPO_NAME,
    GISCUS_REPO_ID: process.env.GISCUS_REPO_ID,
    GISCUS_CATEGORY_ID: process.env.GISCUS_CATEGORY_ID,
  },
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.aladin.co.kr",
        port: "",
        pathname: "/product/**",
      },
    ],
  },
});
