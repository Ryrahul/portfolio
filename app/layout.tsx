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
  name: "Aakash Subedi",
  title: "Aakash Subedi - Software Engineer",
  description:
    "I'm Aakash Subedi, a Software Engineer specializing in TypeScript, Python, Go, AWS, and PostgreSQL. Explore my projects, experience, and blog.",
  url: "https://www.aksh.work",
  ogImage: "/me.jpg",
  twitterHandle: "@void_aakash",
  email: "contact.aakash77@gmail.com",
  location: "Bengaluru, India",
  github: "https://github.com/subediaakash",
  linkedin: "https://www.linkedin.com/in/aakash-subedi-a9986625a/",
  twitter: "https://x.com/void_aakash",
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
    "Aakash Subedi",
    "subediaakash",
    "Software Engineer",
    "TypeScript",
    "Python",
    "Go",
    "AWS",
    "PostgreSQL",
    "Full Stack Developer",
    "Bengaluru",
    "India",
    "aksh.work",
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
    firstName: "Aakash",
    lastName: "Subedi",
    username: "subediaakash",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Software Engineer`,
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
  givenName: "Aakash",
  familyName: "Subedi",
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  email: `mailto:${siteConfig.email}`,
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Nihin Media K.K.",
  },
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
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
