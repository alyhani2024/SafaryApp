"use client"

import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "/src/styles/index.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
 
      <Header/>
      {children}
      <Footer/>
          <ScrollToTop />
    </>
  );
}

