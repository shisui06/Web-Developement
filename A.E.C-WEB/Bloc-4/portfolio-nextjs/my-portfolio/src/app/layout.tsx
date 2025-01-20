import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga } from 'next/font/google'

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white antialiased" >{children}</body>
    </html>
  );
}
