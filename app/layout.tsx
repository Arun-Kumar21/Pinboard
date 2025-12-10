import type { Metadata } from "next";
import {Open_Sans} from 'next/font/google';
import "./globals.css";


const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: "Pinboard",
  description: "Pinboard is a web app for managing your tasks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${opensans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
