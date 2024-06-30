import Breadcrumb from '@/components/Common/Breadcrumb';
import SingleBlogDetails from '@/components/SingleBlogDetails/BlogDetails';
import React from 'react'

interface IProps {
    params: {
      id: number;
    };
  }

const BlogDetails = ({ params }: IProps) => {
  return (
    <>
    <Breadcrumb pageName="Blogs Details" description="" />
    <SingleBlogDetails Id={params.id} /> 
     </>
  )
}

export default BlogDetails