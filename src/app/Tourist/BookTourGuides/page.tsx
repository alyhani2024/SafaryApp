import React from 'react'
import CarouselPerHour from "@/components/CarouselPerHour/CarouselPerHour";
import CarouselPerDay from "@/components/CarouselPerDay/CarouselPerDay";
const tourGuidesPerHour = [
  {
    name: 'John Doe',
    description: 'Experienced tour guide with a passion for history.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  pricePerHour: 100
  },
  {
    name: 'Jane Smith',
    description: 'Friendly and knowledgeable guide specializing in outdoor adventures.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  pricePerHour: 100
  },
  {
    name: 'John Doe',
    description: 'Experienced tour guide with a passion for history.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  pricePerHour: 100
  },
  {
    name: 'Jane Smith',
    description: 'Friendly and knowledgeable guide specializing in outdoor adventures.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  pricePerHour: 100
  },
  {
    name: 'John Doe',
    description: 'Experienced tour guide with a passion for history.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  pricePerHour: 100
  },
  {
    name: 'Jane Smith',
    description: 'Friendly and knowledgeable guide specializing in outdoor adventures.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  pricePerHour: 100
  },
  {
    name: 'John Doe',
    description: 'Experienced tour guide with a passion for history.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  pricePerHour: 100
  },
  {
    name: 'Jane Smith',
    description: 'Friendly and knowledgeable guide specializing in outdoor adventures.',
    photoUrl: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    rate: 4,
  pricePerHour: 100
  },
  // Add more tour guides as needed
];
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
          <CarouselPerDay tourGuides={tourGuidesPerDay}/>
          <CarouselPerHour tourGuides={tourGuidesPerHour} />
    </>
  )
}

export default BookTours
