import type { Metadata } from "next";
import { Roboto } from "next/font/google";
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
    <html
      lang="en"
      data-theme="request-it-again"
      className="scroll-smooth"
      data-scroll-behavior="smooth"
    >
      <body
        className={`${ROBOTO.className} antialiased flex flex-col lg:flex-row min-h-screen bg-white w-full overflow-auto min-w-75`}
      >
        <header className="z-100 fixed lg:sticky top-0 lg:h-dvh w-full lg:w-min">
          <Nav></Nav>
        </header>
        <main className="shrink-0 h-full flex-1 bg-white overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
