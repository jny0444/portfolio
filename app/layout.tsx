import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";

const appleGaramond = localFont({
  src: "../public/font/AppleGaramond.ttf",
  variable: "--font-apple-garamond",
  display: "swap",
});

const iosevkaMono = localFont({
  src: "../public/font/IosevkaNerdFontMono.ttf",
  variable: "--font-iosevka-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio of my work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${appleGaramond.variable} ${iosevkaMono.variable} antialiased`}
      >
        <div className="p-10">
        <Navbar />
        {children}

        </div>
      </body>
    </html>
  );
}
