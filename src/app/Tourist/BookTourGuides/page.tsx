import React from 'react'
import CarouselPerDay from "@/components/CarouselPerDay/CarouselPerDay";
import Hero from '@/components/HeroTourGuides';
import TourGuidesPerHourList from '@/components/TourGuidesPerHourList/TourGuidesPerHourList';
import TourGuidesPerDayList from '@/components/TourGuidesPerDayList/TourGuidesPerDayList';

const BookTours = () => {
  return (
    <>
        <Hero />
        <TourGuidesPerHourList />
        <TourGuidesPerDayList />
    </>
  )
}

export default BookTours
