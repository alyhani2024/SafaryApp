import React from 'react'
import TourGuidesPerHourList from '@/components/TourGuidesPerHourList/TourGuidesPerHourList';
import TourGuidesPerDayList from '@/components/TourGuidesPerDayList/TourGuidesPerDayList';
import Breadcrumb from '@/components/Common/Breadcrumb';
import BookTour from '@/components/BookTour';
interface IProps {
    // ** Fitch data from Link
    params: {
      id: string;
    };
  }
const Guidepage = ({ params }: IProps) => {
  return (
    <>
    <Breadcrumb
        pageName="Book TourGiude ( Per Hour)"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
        <BookTour GuideId={params.id}
        />
        </>
  )
}

export default Guidepage