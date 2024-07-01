"use client"
import React from 'react'

import HeroBlogs from '@/components/HeroBlog'
import Blog from "@/components/Blog";

import Breadcrumb from '@/components/Common/Breadcrumb';
import GuideBlogList from '@/components/GuideBlogsList/BlogList';
const GuideBlogPage = () => {
  return (
    <>
    <HeroBlogs/>
    <Breadcrumb pageName="Blogs List" description="" />
    <GuideBlogList/>
     
    </>
  )
}

export default GuideBlogPage