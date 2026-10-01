import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://yuvrajrajput26.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Yuvraj Singh is an AI/ML Engineer and AI Integration Specialist based in Jaipur, India. B.Tech CSE at Jagannath University. Expert in AI/ML, AI Integration, SEO, AEO, GEO, LLMO, AISEO and EEAT. Agentic browsing score 3/3.",
  keywords: [
    "Yuvraj Singh",
    "AI ML Engineer",
    "AI Integration Specialist",
    "Machine Learning",
    "Portfolio",
    "SEO",
    "AEO",
    "GEO",
    "LLMO",
    "AISEO",
    "EEAT",
    "Next.js Developer",
    "Jagannath University Jaipur",
    "Jaipur Rajasthan",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  applicationName: `${profile.name} Portfolio`,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: `${profile.name} Portfolio`,
    title: `${profile.name} — ${profile.title}`,
    description:
      "AI/ML Engineer and AI Integration Specialist. B.Tech CSE at Jagannath University. Specializing in AI/ML, AI Integration, SEO, AEO, GEO, LLMO, AISEO and EEAT.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description:
      "AI/ML Engineer and AI Integration Specialist. Agentic browsing score 3/3.",
    creator: profile.links.githubUsername,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: profile.name,
    url: siteUrl,
    email: profile.email,
    telephone: profile.phone,
    jobTitle: profile.title,
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "AI Integration",
      "Search Engine Optimization",
      "Answer Engine Optimization",
      "Generative Engine Optimization",
      "LLMO",
      "AISEO",
      "EEAT",
      "Next.js",
      "TypeScript",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profile.university.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: profile.university.city,
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    sameAs: [
      profile.links.linkedin,
      profile.links.github,
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: `${profile.name} Portfolio`,
    description: profile.headline,
    publisher: { "@id": `${siteUrl}/#person` },
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profile`,
    url: siteUrl,
    about: { "@id": `${siteUrl}/#person` },
    mainEntity: { "@id": `${siteUrl}/#person` },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}