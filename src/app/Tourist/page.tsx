"use client";
import BookBlogs from "@/components/BookBlogs/BookBlogs";
import BookTourGuides from "@/components/BookTourGuides/BookTourGuide";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import TopGuides from "@/components/TopGuides/TopGuides";

export default function HomeTourist() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Breadcrumb
        pageName=" Top Three Guides"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <TopGuides />
      <Breadcrumb
        pageName=" BookTourGuides"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <BookTourGuides />
      <Breadcrumb
        pageName=" Book your Blog Now"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <BookBlogs />

      <Contact />
    </>
  );
}
