import type { Metadata } from "next";
import { Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ssravi.com.np"),
  title: "Ravi Shankar Sah — UI/UX Designer, Developer & Researcher",
  description:
    "Ravi Shankar Sah is a UI/UX designer, web developer, and AI/ML researcher from Nepal. Explore projects, research, and services.",
  keywords: [
    "Ravi Shankar Sah",
    "UI/UX Designer",
    "Web Designer",
    "Web Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "HTML",
    "CSS",
    "Figma",
    "Machine Learning",
    "AI Research",
    "Nepal",
  ],
  alternates: {
    canonical: "https://ssravi.com.np",
  },
  openGraph: {
    title: "Ravi Shankar Sah — UI/UX Designer, Developer & Researcher",
    description:
      "Portfolio of Ravi Shankar Sah featuring UI/UX design, web development, and AI/ML research.",
    url: "https://ssravi.com.np",
    siteName: "Ravi Shankar Sah",
    images: [
      {
        url: "/pp.jpg",
        width: 1200,
        height: 630,
        alt: "Ravi Shankar Sah",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravi Shankar Sah — UI/UX Designer, Developer & Researcher",
    description:
      "Portfolio of Ravi Shankar Sah featuring UI/UX design, web development, and AI/ML research.",
    images: ["/pp.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
