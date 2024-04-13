
import Footer from "@/components/Footer";
import "../../app/globals.css";
import Header from "@/components/Header";


export default function RoutesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <main className="max-w-screen-2xl  mx-auto">
                    <Header />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
