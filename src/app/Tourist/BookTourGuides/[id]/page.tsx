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
      {/* <Breadcrumb
        pageName="Book your Tour"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <Link
        href={`/Tourist/BookTour`}
        className="duration-1500 rounded-full  bg-orange-500 px-8 py-4 text-base font-semibold text-white transition  ease-in-out hover:bg-orange-500/80 "
      >
        <span>
          Choose your tour 
        </span>
      </Link> */}
      {/* <TourList onExplore={handleExplore} />
      {selectedTourId && <BookTour TourId={selectedTourId} GuideId={params.id} />} */}
    </>
  );
};

export default Guidepage;
