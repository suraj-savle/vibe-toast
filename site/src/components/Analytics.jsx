import Script from "next/script";


export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

  if (!id) return null;

  return (
    <Script
      src="https://cloud.umami.is/script.js"
      data-website-id={id}
      strategy="afterInteractive"
    />
  );
}

