import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Fira_Code } from "next/font/google";
import "./globals.css";

// Configure distinctive fonts - Space Grotesk for headings, clean geometric feel
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
  weight: ["400", "500"],
});

const siteConfig = {
  name: "Aakash Subedi",
  title: "Aakash Subedi - Full Stack Developer | React, Next.js, Node.js",
  description:
    "I'm Aakash Subedi, a Full Stack Developer specializing in React, Next.js, Express.js, and PostgreSQL. Explore my projects, experience, and skills in modern web development and AI integration.",
  url: "https://aksh.work",
  ogImage: "/me.jpg",
  twitterHandle: "@void_aakash",
  email: "contact.aakash77@gmail.com",
  location: "Bengaluru, India",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    { media: "(prefers-color-scheme: light)", color: "#18181b" },
  ],
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
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript",
    "JavaScript",
    "PostgreSQL",
    "Web Developer",
    "Software Engineer",
    "Bengaluru",
    "India",
    "Frontend Developer",
    "Backend Developer",
    "AI Integration",
    "Express.js",
    "Portfolio",
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
    icon: "/me.jpg",
    apple: "/me.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Full Stack Developer Portfolio`,
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

// JSON-LD Structured Data for Person
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  email: `mailto:${siteConfig.email}`,
  jobTitle: "Full Stack Developer",
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressCountry: "India",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Jain University",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "India",
    },
  },
  sameAs: [
    "https://github.com/subediaakash",
    "https://www.linkedin.com/in/aakash-subedi-a9986625a/",
    "https://x.com/void_aakash",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "TypeScript",
    "JavaScript",
    "Python",
    "Docker",
    "AWS",
    "AI Integration",
    "Web Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{
        scrollBehavior: "smooth",
        backgroundColor: "#09090b",
      }}
      className={`${spaceGrotesk.variable} ${firaCode.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
