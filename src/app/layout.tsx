import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: [], weight: "400" });
// const inter = Inter({ subsets: [], weight: "400" });

export const metadata: Metadata = {
  title: "Al Quran App",
  description: "Al Quran App",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${roboto.className}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
