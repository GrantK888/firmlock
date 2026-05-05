import type { Metadata } from "next";
import { Libre_Baskerville, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const serif = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FirmLock — The client portal for independent consultants",
  description:
    "FirmLock gives independent consultants and small agencies a white-labeled portal for proposals, contracts, retainers, deliverables, and payments — with AI-powered workflows built in.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
