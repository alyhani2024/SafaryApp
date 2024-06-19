// components/TopGuides.tsx
import React from 'react';
import GuideCard from './GuideCard';

const TopGuides: React.FC = () => {
  const guides = [
    { 
      id : "1",
      name: 'John Doe', 
      description: 'Experienced tour guide with knowledge in local history.', 
      photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg', 
      pricePerHour: 50,
      rate: 5,
      reviews: 120,
      languages: ['English', 'Arabic'],
      hascar:true
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
      hascar:false
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
      hascar:true
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {guides.map(guide => (
        <GuideCard key={guide.id} {...guide} />
      ))}
    </div>
  );
};

export default TopGuides;
