import type { Metadata } from "next";
import { Bebas_Neue, Roboto } from "next/font/google";
import { Nav } from "@/components";
import "./globals.css";

const ROBOTO = Roboto();

export const metadata: Metadata = {
  title: "Request It Again Music",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="request-it-again">
      <body
        className={`${ROBOTO.className} antialiased flex flex-row min-h-screen bg-white w-full`}
      >
        <header>
          <Nav></Nav>
        </header>
        <main className="shrink-0 h-full flex-1 bg-white">{children}</main>
      </body>
    </html>
  );
}
