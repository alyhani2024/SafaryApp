// components/TourGuideProfile.tsx
import React, { useState, useEffect } from 'react';
import { Car } from 'lucide-react';
import Link from 'next/link';

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

const TourGuideProfile = ({ GuideId }: { GuideId: string }) => {
  const guide = tourGuides.find(t => t.id === GuideId);
  const [adults, setAdults] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    // Save to local storage whenever inputs change
    const bookingDetails = { date, time, adults };
    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
  }, [date, time, adults]);

  if (!guide) {
    return null; // Return null if the tour or guide is not found
  }
  const isDisabled = date === '' || time === '';
  return (
    <div className="flex flex-col md:flex-row items-start p-6 space-y-4 md:space-y-0 md:space-x-6">
      <div className="rounded-lg overflow-hidden md:w-2/3">
        <div className="flex items-center">
          <img src={guide.photo} alt={guide.name} className="w-24 h-24 rounded-full object-cover mr-6" />
          <div>
            <h2 className="text-2xl font-bold">{guide.name}</h2>
            <p className="text-gray-600">{guide.description}</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="mb-2">
            <span className="text-gray-800 font-semibold">Price per Hour: </span>${guide.pricePerHour}
          </div>
          <div className="mb-2">
            <span className="text-gray-800 font-semibold">Rating: </span>{'★'.repeat(guide.rate)}{'☆'.repeat(5 - guide.rate)} ({guide.reviews} reviews)
          </div>
          <div className="mb-2">
            <span className="text-gray-800 font-semibold">Languages: </span>{guide.languages.join(', ')}
          </div>
          <div>
            <span className="text-gray-800 font-semibold"><Car className='inline'/> {guide.hascar ? 'car available' : 'No car available'}</span>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-white p-6 shadow-md md:w-1/3">
        <div className="mt-4">
          <label htmlFor="date" className="block text-gray-700">Select date</label>
          <input required
            type="date" 
            id="date" 
            className="w-full mt-1 p-2 border rounded" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="time" className="block text-gray-700">Select time</label>
          <input required
            type="time" 
            id="time" 
            className="w-full mt-1 p-2 border rounded" 
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">People</label>
          <div className="flex items-center justify-between mt-1 p-2 border rounded">
            <div className="flex items-center">
              <button
                onClick={() => setAdults(adults - 1)}
                disabled={adults <= 1}
                className="px-2 py-1 border rounded bg-gray-200"
              >-</button>
              <span className="mx-2">{adults}</span>
              <button
                onClick={() => setAdults(adults + 1)}
                className="px-2 py-1 border rounded bg-gray-200"
              >+</button>
            </div>
          </div>
        </div>
        <Link href={isDisabled ? '#' : `/Tourist/BookTour`} passHref
        className={`mt-4 w-full block text-center py-2 rounded transition duration-300 ${
            isDisabled ? 'bg-orange-300 cursor-not-allowed' : 'bg-orange-500 text-white hover:bg-orange-600'
          }`}
          onClick={(e) => {
            if (isDisabled) {
              e.preventDefault();
            }
          }}
        >
          
            
            Book Now
        </Link>
      </div>
    </div>
  );
};

export default TourGuideProfile;
