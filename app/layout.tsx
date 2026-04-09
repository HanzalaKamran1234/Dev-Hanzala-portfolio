import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hanzala Dev | Python Developer & Automation Expert",
  description: "Senior Python developer building scalable, automation-driven, and client-ready applications. Precision-engineered solutions for modern businesses.",
  keywords: ["Python Developer", "Automation", "SaaS", "Backend Developer", "Hanzala Dev", "Freelance Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0D0D0D] text-white selection:bg-accent/30">
        {children}
      </body>
    </html>
  );
}
