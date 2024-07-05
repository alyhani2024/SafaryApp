"use client";
import AppointmentsTable from "@/components/AppointmentsTable/AppointmentsTable";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import GuideBlogList from "@/components/GuideBlogsList/BlogList";
import Hero from "@/components/Hero";
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
      <AppointmentsTable />
      <Breadcrumb pageName="Blog List" description="" />
      <GuideBlogList />
    </>
  );
}
