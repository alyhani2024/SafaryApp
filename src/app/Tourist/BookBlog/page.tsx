"use client"
import BlogsList from '@/components/BlogsList/BlogList'
import HeroBlogs from '@/components/HeroBlog'
import React from 'react'
import Breadcrumb from '@/components/Common/Breadcrumb';

const BookTours = () => {
  return (
    <>
    <HeroBlogs/>
    <Breadcrumb pageName="Blogs List" description="" />
    <BlogsList/>
     
    </>
  )
}

export default BookTours
