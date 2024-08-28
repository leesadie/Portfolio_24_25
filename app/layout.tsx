import type { Metadata } from "next";
import "./globals.css";

import { font_reg } from "./fonts";
import { font_med } from "./fonts";
import { font_bold } from "./fonts";

import Navbar from "./components/nav/Navbar";
import Footer from "./components/nav/Footer";

export const metadata: Metadata = {
  title: "Sadie Lee",
  description: "Sadie Lee Portfolio 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font_reg.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
