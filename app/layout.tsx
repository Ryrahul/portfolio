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
    "subediaakash",
    "void_aakash",
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
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },
  other: {
    "google-site-verification": "", // Add your verification code
  },
};

// Enhanced JSON-LD Structured Data with multiple schemas
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.url}/#person`,
  name: siteConfig.name,
  givenName: "Aakash",
  familyName: "Subedi",
  url: siteConfig.url,
  image: {
    "@type": "ImageObject",
    url: `${siteConfig.url}${siteConfig.ogImage}`,
    width: 400,
    height: 400,
  },
  email: `mailto:${siteConfig.email}`,
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Ainocular",
  },
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Jain University",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "IN",
    },
  },
  sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.twitter],
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
    "Full Stack Development",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  publisher: {
    "@id": `${siteConfig.url}/#person`,
  },
  inLanguage: "en-US",
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteConfig.url}/#profilepage`,
  url: siteConfig.url,
  name: `${siteConfig.name} - Portfolio`,
  description: siteConfig.description,
  mainEntity: {
    "@id": `${siteConfig.url}/#person`,
  },
  dateCreated: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.url,
    },
  ],
};

// Combine all schemas
const jsonLdSchemas = [
  personSchema,
  websiteSchema,
  profilePageSchema,
  breadcrumbSchema,
];

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
        {/* Multiple JSON-LD schemas for rich search results */}
        {jsonLdSchemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
