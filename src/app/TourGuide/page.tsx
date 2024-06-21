"use client"
import AppointmentsTable from "@/components/AppointmentsTable/AppointmentsTable";
import Blog from "@/components/Blog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";


export default function HomeTourGuide() {
  return (
    <>

      <ScrollUp />
      
      <Hero />
      <Features />
      <Breadcrumb
        pageName="Appointments"
        description="Table OF your Tour Appointments ."
      />
      <AppointmentsTable/>
      <Blog />
    </>
  );
}


