"use client"
import Blog from "@/components/Blog";
import CarouselPerHour from "@/components/CarouselPerHour/CarouselPerHour";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";



const tourGuidesPerHour = [
  {
    name: 'John Doe',
    description: 'Experienced tour guide with a passion for history.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  pricePerHour: 100
  },
  {
    name: 'Jane Smith',
    description: 'Friendly and knowledgeable guide specializing in outdoor adventures.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  pricePerHour: 100
  },
  {
    name: 'John Doe',
    description: 'Experienced tour guide with a passion for history.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  pricePerHour: 100
  },
  {
    name: 'Jane Smith',
    description: 'Friendly and knowledgeable guide specializing in outdoor adventures.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  pricePerHour: 100
  },
  {
    name: 'John Doe',
    description: 'Experienced tour guide with a passion for history.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  pricePerHour: 100
  },
  {
    name: 'Jane Smith',
    description: 'Friendly and knowledgeable guide specializing in outdoor adventures.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  pricePerHour: 100
  },
  {
    name: 'John Doe',
    description: 'Experienced tour guide with a passion for history.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  pricePerHour: 100
  },
  {
    name: 'Jane Smith',
    description: 'Friendly and knowledgeable guide specializing in outdoor adventures.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  pricePerHour: 100
  },
  // Add more tour guides as needed
];
export default function HomeTourist() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Testimonials />
      <CarouselPerHour tourGuides={tourGuidesPerHour} />
      <Pricing />
      <Blog />
      <Contact />

    </>
  );
}


