import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Siho Research",
  description: "Siho's official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
        style={{paddingTop : '74px'}}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}