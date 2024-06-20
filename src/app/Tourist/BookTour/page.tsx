import Breadcrumb from '@/components/Common/Breadcrumb'
import TourList from '@/components/TourList/TourList'
import React from 'react'

const BookTourpage = () => {
  return (
    <>
    <Breadcrumb
        pageName="Book your Tour"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
    <TourList />
    </>
  )
}

export default BookTourpage