"use client"
import React, { useEffect, useState } from 'react';
import { Car } from 'lucide-react';
const tourGuides = [
    { 
      id: "1",
      name: 'John Doe', 
      description: 'Experienced tour guide with knowledge in local history.', 
      photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg', 
      pricePerHour: 50,
      rate: 5,
      reviews: 120,
      languages: ['English', 'Arabic'],
      hascar: true
    },
    { 
      id: "2",
      name: 'Jane Smith', 
      description: 'Friendly and enthusiastic guide for all ages.', 
      photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg', 
      pricePerHour: 45,
      rate: 4,
      reviews: 98,
      languages: ['English', 'French'],
      hascar: false
    },
    { 
      id: "3",
      name: 'Michael Brown', 
      description: 'Specializes in food and cultural tours.', 
      photo: '/images/blog/post-03.jpg', 
      pricePerHour: 60,
      rate: 5,
      reviews: 110,
      languages: ['English', 'Spanish'],
      hascar: true
    },
  ];

const tours = [
  {
    id: '1',
    title: 'Off the Beaten Track in Cairo',
    description: 'Connect with Ramses XII or one of other local hosts',
    photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    duration: '4 hours',
    category: 'City highlight tour',
  },
  {
    id: '2',
    title: 'Full Coverage Cairo City Tour',
    description: 'Connect with Withlocals or one of other local hosts',
    photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    duration: '5 hours',
    category: 'City highlight tour',
  },
  {
    id: '3',
    title: 'Full Coverage Cairo City Tour',
    description: 'Connect with Withlocals or one of other local hosts',
    photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    duration: '5 hours',
    category: 'City highlight tour',
  },
  // Add more tours here...
];

const TourDetails = ({ TourId }: { TourId: string }) => {
    const [guideId, setGuideId] = useState('');

  useEffect(() => {
    const storedGuideId = localStorage.getItem('guideId');
    if (storedGuideId) {
      setGuideId(storedGuideId);
    }
  }, []);

    const [bookingDetails, setBookingDetails] = useState({ date: '', time: '', adults: 1 });

  useEffect(() => {
    const savedBookingDetails = localStorage.getItem('bookingDetails');
    if (savedBookingDetails) {
      setBookingDetails(JSON.parse(savedBookingDetails));
    }
  }, []);

  const tour = tours.find(t => t.id === TourId);
  const guide = tourGuides.find(t => t.id === guideId);

  if (!tour || !guide) {
    return null; // Return null if the tour is not found
  }

  return (
    <div className="max-w-4xl ml-5  p-6">
      <div className="flex  mb-6">
        <img src={tour.photo} alt={tour.title} className="w-32 h-32 rounded-full object-cover mr-6" />
        <div>
          <h2 className="text-2xl font-bold">{tour.title}</h2>
          <p className="text-gray-600">Friendly and enthusiastic guide for all ages.</p>
        </div>
      </div>
      <div className="space-y-4">
      <div className="text-gray-800">
          <span className="font-semibold"> <img src={guide.photo} alt={guide.name} className="w-9 h-9 rounded-full object-cover mr-1 inline" /> </span>{guide.name} (Your Guide)
        </div>
        <div className="text-gray-800">
          <span className="font-semibold">Category : </span>{tour.category}
        </div>
        <div className="text-gray-800">
          <span className="font-semibold">people : </span>{bookingDetails.adults}
        </div>
        <div className="text-gray-800">
          <span className="font-semibold">date : </span>{bookingDetails.date}
        </div>
        <div className="text-gray-800">
          <span className="font-semibold">time : </span>{bookingDetails.time}
        </div>
        <div className="text-gray-800">
          <span className="font-semibold">Duration : </span>{tour.duration}
        </div>
        
        <div className="text-gray-800">
          <span className="font-semibold"><Car className='inline'/> : </span> {guide.hascar ? 'car available' : 'No car available'}
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
