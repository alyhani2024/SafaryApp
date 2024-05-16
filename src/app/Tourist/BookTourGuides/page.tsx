import React from 'react'
import CarouselPerDay from "@/components/CarouselPerDay/CarouselPerDay";
import Hero from '@/components/HeroTourGuides';
import TourGuidesPerHourList from '@/components/TourGuidesPerHourList/TourGuidesPerHourList';
import TourGuidesPerDayList from '@/components/TourGuidesPerDayList/TourGuidesPerDayList';
import Breadcrumb from '@/components/Common/Breadcrumb';

const BookTours = () => {
  return (
    <>
        <Hero />
        <Breadcrumb
        pageName="Book TourGiude ( Per Hour)"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
        <TourGuidesPerHourList />
        <Breadcrumb
        pageName="Book TourGiude ( Per day)"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
        <TourGuidesPerDayList />
    </>
  )
}

export default BookTours
