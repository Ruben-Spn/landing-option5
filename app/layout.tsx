import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Welcome to Option5",
  description:
    "Professional web development services tailored to your business needs. We create responsive, high-performance websites and apps that drive results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/icons/favicon.png" sizes="any" />
      </head>
      <body
        className={`${roboto.variable} bg-gradient-to-r from-redSoft to-red antialiased px-[10%] py-[10%] h-screen w-screen overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
