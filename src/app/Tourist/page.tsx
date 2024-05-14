"use client"
import Blog from "@/components/Blog";
import BookBlogs from "@/components/BookBlogs/BookBlogs";
import BookTourGuides from "@/components/BookTourGuides/BookTourGuide";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";




export default function HomeTourist() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Testimonials />
      <BookTourGuides />
      <BookBlogs/>
      <Pricing />
      <Blog />
      <Contact />

    </>
  );
}


