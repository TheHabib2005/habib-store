import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HABIB-STORE",
  description: "NEXT.JS E-COMARCES APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) {
    return null
  }
  return (
    <html lang="en">
      <body className={`${inter.className} dark bg-primary`}>

        {children}

      </body>
    </html>
  );
}
