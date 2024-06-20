// components/TourGuideProfile.tsx
import React from 'react';

import { Car } from 'lucide-react';
const tourGuides = [
    { 
        id : "1",
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
        id : "2",
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
        id : "3",
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

const TourGuideProfile = ({ GuideId }: { GuideId: string;})=> {
    const guide = tourGuides.find(t => t.id === GuideId);
  
    if ( !guide) {
      return null; // Return null if the tour or guide is not found
    }
    return (
        <div className=" ml-5 rounded-lg overflow-hidden">
        <div className="flex items-center p-6">
            <img src={guide.photo} alt={guide.name} className="w-24 h-24 rounded-full object-cover mr-6" />
            <div>
                <h2 className="text-2xl font-bold">{guide.name}</h2>
                <p className="text-gray-600">{guide.description}</p>
            </div>
        </div>
        <div className="px-6 py-4">
            <div className="mb-4">
                <span className="text-gray-800 font-semibold">Price per Hour: </span>${guide.pricePerHour}
            </div>
            <div className="mb-4">
                <span className="text-gray-800 font-semibold">Rating: </span>{'★'.repeat(guide.rate)}{'☆'.repeat(5 - guide.rate)} ({guide.reviews} reviews)
            </div>
            <div className="mb-4">
                <span className="text-gray-800 font-semibold">Languages: </span>{guide.languages.join(', ')}
            </div>
            <div>
                <span className="text-gray-800 font-semibold"><Car className='inline'/> {guide.hascar ? 'car available' : 'No car available'}</span>
            </div>
        </div>
    </div>
    );
};

export default TourGuideProfile;
