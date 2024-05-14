import React from 'react'
import CarouselPerDay from "@/components/CarouselPerDay/CarouselPerDay";
import Hero from '@/components/HeroTourGuides';
import TourGuidesPerHourList from '@/components/TourGuidesPerHourList/TourGuidesPerHourList';

const tourGuidesPerDay = [
  {
    name: 'John Doe',
    description: 'Experienced tour guide with a passion for history.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  pricePerDay: 100
  },
  {
    name: 'Jane Smith',
    description: 'Friendly and knowledgeable guide specializing in outdoor adventures.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  pricePerDay: 100
  },{
    name: 'John Doe',
    description: 'Experienced tour guide with a passion for history.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  pricePerDay: 100
  },
  {
    name: 'Jane Smith',
    description: 'Friendly and knowledgeable guide specializing in outdoor adventures.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  pricePerDay: 100
  },{
    name: 'John Doe',
    description: 'Experienced tour guide with a passion for history.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  pricePerDay: 100
  },
  {
    name: 'Jane Smith',
    description: 'Friendly and knowledgeable guide specializing in outdoor adventures.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  pricePerDay: 100
  },{
    name: 'John Doe',
    description: 'Experienced tour guide with a passion for history.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  pricePerDay: 100
  },
  {
    name: 'Jane Smith',
    description: 'Friendly and knowledgeable guide specializing in outdoor adventures.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  pricePerDay: 100
  },
];
const BookTours = () => {
  return (
    <>
        <Hero />
        <TourGuidesPerHourList/>
        <CarouselPerDay tourGuides={tourGuidesPerDay}/>
    </>
  )
}

export default BookTours
