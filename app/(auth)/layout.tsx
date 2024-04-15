import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "../../app/globals.css";


const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HABIB-STORE LOGIN",
  description: "Generated by create next app",
  icons: "@/app/favicon.ico",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>{/* <link rel="icon" href="./favicon.ico" /> */}</head>
      <body className={inter.className}>
        {children}

      </body>
    </html>
  );
}