import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import LenisProvider from "@/components/LenisProvider";

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
        <LenisProvider>
          <div className="p-10">
            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
              <defs>
                <filter id="ink-bleed">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="1.5"
                    result="blur"
                  />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="10" intercept="-2.9" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>
            <Navbar />
            {children}
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
