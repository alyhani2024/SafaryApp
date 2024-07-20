"use client";

import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "/src/styles/index.css";
import Footer from "@/components/Footer";
import TourGuideHeader from "@/components/TourGuideHeader";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const role = localStorage.getItem("Role");
    if (role !== "TourGuide") {
      window.location.href = "/";
    }
  }, );
  return (
    <>
      <TourGuideHeader />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}
