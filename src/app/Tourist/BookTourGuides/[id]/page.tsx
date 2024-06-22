"use client";
import React, { useState, useEffect } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import BookTour from "@/components/BookTour";
import TourList from "@/components/TourList/TourList";
import TourGuideProfile from "@/components/TourGuideProfile/TourGuideProfile";
import Link from "next/link";

interface IProps {
  params: {
    id: string;
  };
}

const Guidepage = ({ params }: IProps) => {
  // const [selectedTourId, setSelectedTourId] = useState<string | null>(null);

  useEffect(() => {
    // Store the Guide ID in local storage
    localStorage.setItem("guideId", params.id);
  }, [params.id]);

  // const handleExplore = (id: string) => {
  //   setSelectedTourId(id);
  // };

  return (
    <>
      <Breadcrumb pageName="Tour Guide Details" description="" />
      <TourGuideProfile GuideId={params.id} />
   
    </>
  );
};

export default Guidepage;
