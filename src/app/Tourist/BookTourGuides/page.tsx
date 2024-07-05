import React from 'react'
import Hero from '@/components/HeroTourGuides';
import Breadcrumb from '@/components/Common/Breadcrumb';
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
