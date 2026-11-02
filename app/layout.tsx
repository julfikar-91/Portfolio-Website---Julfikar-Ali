import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF9" },
    { media: "(prefers-color-scheme: dark)", color: "#0C0C0D" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://julfikarali.dev"),
  title: "Julfikar Ali — Full-Stack Developer | AI & ML Engineer",
  description:
    "Portfolio of Julfikar Ali, a B.Tech CSE (AI & ML) student and full-stack developer based in Kolkata, India. Building AI-powered applications and scalable software.",
  keywords: [
    "Julfikar Ali",
    "Full-Stack Developer",
    "AI & ML Engineer",
    "Full-Stack Developer",
    "Narula Institute of Technology",
    "Kolkata",
    "Portfolio",
    "Machine Learning",
    "GrowUp AI",
    "PubMed AI Semantic Search Engine",
    "School Management System",
    "Causal AI Advisory Pipeline",
  ],
  authors: [{ name: "Julfikar Ali", url: "https://github.com/julfikar-ali" }],
  creator: "Julfikar Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://julfikarali.dev",
    title: "Julfikar Ali — Full-Stack Developer | AI & ML Engineer",
    description:
      "Explore AI-powered applications, full-stack products, and final-year research by Julfikar Ali.",
    siteName: "Julfikar Ali Portfolio",
    images: [
      {
        url: "/assets/julfikar_Ali.png",
        width: 1200,
        height: 630,
        alt: "Julfikar Ali — Full-Stack Developer | AI & ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julfikar Ali — Full-Stack Developer | AI & ML Engineer",
    description:
      "Full-stack developer and AI/ML engineer building AI-powered applications and intelligent systems.",
    creator: "@julfikar_ali",
    images: ["/assets/julfikar_Ali.png"],
  },
  icons: {
    icon: [
      { url: "/favicons/favicon.ico" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png" },
    ],
  },
  manifest: "/favicons/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300..800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Julfikar Ali",
              jobTitle: "Full-Stack Developer | AI & ML Engineer",
              alumniOf: "Narula Institute of Technology",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kolkata",
                addressCountry: "India",
              },
              url: "https://github.com/julfikar-ali",
              sameAs: [
                "https://github.com/julfikar-ali",
                "https://linkedin.com/in/julfikar-ali",
                "https://youtube.com/@julfikar-ali",
                "https://x.com/julfikar_ali",
              ],
            }),
          }}
        />
      </head>
      <body
        className="font-sans antialiased bg-background text-foreground transition-colors duration-300 min-h-screen selection:bg-royal-500 selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
