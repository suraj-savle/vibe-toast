export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://vibetoast.vercel.app/sitemap.xml",
  };
}