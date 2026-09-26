import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Velnora — The Modern Commerce Platform", description: "A modern commerce platform for customers, sellers, and operations." };

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
