import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import BeforeFooter from "@/components/Footer/BeforeFooter";
import Navbar from "@/components/Navbar/Navbar";

const font = Exo({
  subsets: ["latin"],
  style: "normal",
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata = {
  title: "Nasza Firma Budowlana",
  description:
    "Nasza firma specjalizuje się w kompleksowej realizacji projektów budowlanych, od planowania po finalizację. Oferujemy szeroki zakres usług dostosowanych do potrzeb naszych klientów.",
  keywords:
    "budownictwo, budowa domów, budowa obiektów komercyjnych, remonty, modernizacje",
  author: "Daniel Kowalski",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <BeforeFooter />
        <Footer />
      </body>
    </html>
  );
}
