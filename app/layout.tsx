import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SlashCursor from "@/components/slash-cursor";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

const siteConfig = {
  name: "Rahul Raj Yadav",
  title: "Rahul Raj Yadav - Tech Lead & Backend Engineer",
  description:
    "I'm Rahul Raj Yadav, a Tech Lead & Backend Engineer specializing in TypeScript, Node.js, NestJS, GraphQL, Vendure, and PostgreSQL. Core contributor to Vendure with 27-30+ merged PRs. Explore my projects, open source work, and blog.",
  url: "https://rahulrajyadav.dev",
  ogImage: "/me.png",
  twitterHandle: "@ry_rahull",
  email: "rahul.yadav@idefforts.com",
  location: "Nepal",
  github: "https://github.com/Ryrahul",
  linkedin: "https://www.linkedin.com/in/rahul-raj-yadav-03b06b258/",
  twitter: "https://x.com/ry_rahull",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Rahul Raj Yadav",
    "Ryrahul",
    "Tech Lead",
    "Backend Engineer",
    "TypeScript",
    "Node.js",
    "NestJS",
    "GraphQL",
    "Vendure",
    "PostgreSQL",
    "Open Source",
    "Nepal",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    firstName: "Rahul",
    lastName: "Yadav",
    username: "Ryrahul",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Tech Lead & Backend Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: "technology",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.url}/#person`,
  name: siteConfig.name,
  givenName: "Rahul",
  familyName: "Yadav",
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  email: `mailto:${siteConfig.email}`,
  jobTitle: "Tech Lead - Backend Engineering",
  worksFor: {
    "@type": "Organization",
    name: "IDEfforts",
  },
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressCountry: "NP",
  },
  sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.twitter],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body>
        <SlashCursor />
        {children}
      </body>
    </html>
  );
}
