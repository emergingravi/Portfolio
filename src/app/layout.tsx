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
  title: "Ravi Shankar Sah — Full-Stack Developer, UI/UX Designer & AI/ML Researcher",
  description:
    "Ravi Shankar Sah is a full-stack developer, UI/UX designer, and AI/ML researcher from Nepal, building web, AI, and IoT products with React, Next.js, and Python. Explore projects, research, and services.",
  keywords: [
    "Ravi Shankar Sah",
    "Full-Stack Developer",
    "UI/UX Designer",
    "Web Designer",
    "Web Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "HTML",
    "CSS",
    "Figma",
    "Supabase",
    "Firebase",
    "Machine Learning",
    "AI Research",
    "IoT",
    "Arduino",
    "Nepal",
    "Nepal Developer",
  ],
  alternates: {
    canonical: "https://ssravi.com.np",
  },
  openGraph: {
    title: "Ravi Shankar Sah — Full-Stack Developer, UI/UX Designer & AI/ML Researcher",
    description:
      "Portfolio of Ravi Shankar Sah — full-stack development, UI/UX design, and AI/ML research, with projects spanning web, machine learning, and IoT.",
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
    title: "Ravi Shankar Sah — Full-Stack Developer, UI/UX Designer & AI/ML Researcher",
    description:
      "Portfolio of Ravi Shankar Sah — full-stack development, UI/UX design, and AI/ML research, with projects spanning web, machine learning, and IoT.",
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
