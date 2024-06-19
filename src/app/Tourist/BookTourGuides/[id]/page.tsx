// pages/Guidepage.tsx
"use client"
import React, { useState } from 'react';
import Breadcrumb from '@/components/Common/Breadcrumb';
import BookTour from '@/components/BookTour';
import TourList from '@/components/TourList/TourList';

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
        pageName="Book your Tour & TourGuide "
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <TourList onExplore={handleExplore} />
      {selectedTourId && <BookTour TourId={selectedTourId} GuideId={params.id}/>}
    </>
  );
};

export default Guidepage;
