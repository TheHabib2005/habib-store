
import Footer from "@/components/Footer";
import "../../app/globals.css";
import Header from "@/components/Header";

import toast, { Toaster } from 'react-hot-toast';
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "HABIB-STORE-routes",
    description: "NEXT.JS E-COMARCES APP",
};

export default function RoutesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} dark bg-primary`}>
                <main className="max-w-screen-2xl  mx-auto">
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                        gutter={8}
                        containerClassName=""
                        containerStyle={{}}
                        toastOptions={{
                            // Define default options
                            className: '',
                            duration: 5000,
                            style: {
                                background: '#363636',
                                color: '#fff',
                            },

                            // Default options for specific types
                            success: {
                                duration: 1000,
                            },
                        }}
                    />
                    <Header />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
