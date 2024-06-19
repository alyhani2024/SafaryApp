import React from 'react'
import CarouselPerDay from "@/components/CarouselPerDay/CarouselPerDay";
import Hero from '@/components/HeroTourGuides';
import TourGuidesPerHourList from '@/components/TourGuidesPerHourList/TourGuidesPerHourList';
import TourGuidesPerDayList from '@/components/TourGuidesPerDayList/TourGuidesPerDayList';
import Breadcrumb from '@/components/Common/Breadcrumb';
import TastingTour from '@/components/BookTour';
import TourGuidesList from '@/components/TourGuideLIst/TourGuidesList';

const BookTours = () => {
  return (
    <>
        <Hero />
        
        <Breadcrumb
        pageName="Book TourGiude "
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
        <TourGuidesList/>
        
    </>
  )
}

export default BookTours
