import { Geist, Geist_Mono } from "next/font/google";
import { NavTabs } from "@/app/ui/nav-tabs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = { title: "Tindahan Ledger" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <header className="flex gap-8 border-b border-neutral-200 px-16">
          <NavTabs />
        </header>
        {children}
      </body>
    </html>
  );
}
