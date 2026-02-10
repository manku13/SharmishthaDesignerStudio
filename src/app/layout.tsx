import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Sharmishtha Designer Studio — Bespoke Bridal & Couture | Jabalpur",
  description:
    "Sharmishtha Designer Studio is a luxury bespoke couture atelier in Jabalpur specialising in custom bridal lehengas, gowns & couture. Appointments & worldwide shipping.",
  keywords: [
    "bridal couture",
    "bespoke bridal",
    "designer studio Jabalpur",
    "custom lehenga",
    "luxury bridal gowns",
    "Sharmishtha Designer Studio",
  ],
  openGraph: {
    title: "Sharmishtha Designer Studio — Bespoke Bridal & Couture",
    description:
      "Custom bridal & couture made in Jabalpur. Appointments & shipping worldwide.",
    type: "website",
    locale: "en_IN",
    siteName: "Sharmishtha Designer Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharmishtha Designer Studio — Bespoke Bridal & Couture",
    description:
      "Custom bridal & couture made in Jabalpur. Appointments & shipping worldwide.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sharmishtha Designer Studio",
    description:
      "Bespoke couture atelier specialising in custom bridal wear, couture editing and made-to-order luxury gowns.",
    telephone: "+917987306459",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Koushalya Vatika, Gorakhpur",
      addressLocality: "Jabalpur",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    openingHours: "Mo-Su 11:00-20:30",
    priceRange: "₹₹₹",
    image: "/hero-bridal.jpg",
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="84525116-6d7c-4b6f-84cf-d184af1374ea"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#C59A4B] focus:text-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
