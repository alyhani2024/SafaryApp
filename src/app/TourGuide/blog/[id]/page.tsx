import React from 'react'
import Breadcrumb from '@/components/Common/Breadcrumb';
import GuideSingleBlogDetails from '@/components/GuideSingleBlogDetails/BlogDetails';
interface IProps {
    params: {
      id: number;
    };
  }

const GuideBlogDetails  = ({ params }: IProps) => {
  return (
    <>
    <Breadcrumb pageName="Blogs Details" description="" />
    <GuideSingleBlogDetails Id={params.id} /> 
     </>
  )
}

export default GuideBlogDetails