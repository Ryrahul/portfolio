import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aakash Subedi",
  description: "Portfolio of Aakash Subedi",
  icons: {
    icon: "/me.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
