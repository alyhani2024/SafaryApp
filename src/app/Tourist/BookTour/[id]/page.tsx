import Breadcrumb from '@/components/Common/Breadcrumb';
import TourDetails from '@/components/TourDetails/TourDetails';
import React, { useState } from 'react'
interface IProps {
    params: {
      id: string;
    };
  }

const Tourpage = ({ params }: IProps) => {
    
return (
    <>
    <Breadcrumb pageName="Tour Details" description="" />
    <TourDetails TourId={params.id}/>
    </>
  )
}

export default Tourpage