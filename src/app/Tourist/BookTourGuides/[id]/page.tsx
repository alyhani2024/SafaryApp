// pages/Guidepage.tsx
"use client"
import React, { useState } from 'react';
import Breadcrumb from '@/components/Common/Breadcrumb';
import BookTour from '@/components/BookTour';
import TourList from '@/components/TourList/TourList';
import TourGuideProfile from '@/components/TourGuideProfile/TourGuideProfile';

interface IProps {
  params: {
    id: string;
  };
}

const Guidepage = ({ params }: IProps) => {
  const [selectedTourId, setSelectedTourId] = useState<string | null>(null);

  const handleExplore = (id: string) => {
    setSelectedTourId(id);
  };

  return (
    <>
    <Breadcrumb
        pageName="Tour Guide Details  "
        description=""
      />
    <TourGuideProfile GuideId={params.id} />
      <Breadcrumb
        pageName="Book your Tour  "
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <TourList onExplore={handleExplore} />
      {selectedTourId && <BookTour TourId={selectedTourId} GuideId={params.id}/>}
    </>
  );
};

export default Guidepage;
