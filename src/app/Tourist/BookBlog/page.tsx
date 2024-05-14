import React from 'react'
import CarouselPerHour from "@/components/CarouselPerHour/CarouselPerHour";
import CarouselBlog from "@/components/CarouselBlogs/CarouselBlogs";

const tourGuidesBlog = [
  {
    name: 'John Doe',
    description: 'Experienced tour guide with a passion for history.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  priceBlog: 100
  },
  {
    name: 'Jane Smith',
    description: 'Friendly and knowledgeable guide specializing in outdoor adventures.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  priceBlog: 100
  },{
    name: 'John Doe',
    description: 'Experienced tour guide with a passion for history.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  priceBlog: 100
  },
  {
    name: 'Jane Smith',
    description: 'Friendly and knowledgeable guide specializing in outdoor adventures.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  priceBlog: 100
  },{
    name: 'John Doe',
    description: 'Experienced tour guide with a passion for history.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  priceBlog: 100
  },
  {
    name: 'Jane Smith',
    description: 'Friendly and knowledgeable guide specializing in outdoor adventures.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  priceBlog: 100
  },{
    name: 'John Doe',
    description: 'Experienced tour guide with a passion for history.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  priceBlog: 100
  },
  {
    name: 'Jane Smith',
    description: 'Friendly and knowledgeable guide specializing in outdoor adventures.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  priceBlog: 100
  },
];
const BookTours = () => {
  return (
    <>
          <CarouselBlog tourGuides={tourGuidesBlog}/>
          
    </>
  )
}

export default BookTours
