
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
                <main>
                    <Header />
                    {children}
                </main>
            </body>
        </html>
    );
}
