// components/TourList.tsx
import React from 'react';
import TourCard from './TourCard';

const tours = [
  {
    id: '1',
    title: 'Off the Beaten Track in Cairo',
    description: 'Connect with Ramses XII or one of other local hosts',
    photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    price: '40€ pp',
    duration: '4 hours',
    category: 'City highlight tour',
  },
  {
    id: '2',
    title: 'Full Coverage Cairo City Tour',
    description: 'Connect with Withlocals or one of other local hosts',
    photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    price: '€140 pp',
    duration: '5 hours',
    category: 'City highlight tour',
  },{
    id: '3',
    title: 'Full Coverage Cairo City Tour',
    description: 'Connect with Withlocals or one of other local hosts',
    photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    price: '€140 pp',
    duration: '5 hours',
    category: 'City highlight tour',
  },
  // Add more tours here...
];

const TourList: React.FC<{ onExplore: (id: string) => void }> = ({ onExplore }) => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Top 5 English Things to do in Cairo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <TourCard key={tour.id} {...tour} onExplore={onExplore} />
        ))}
      </div>
    </div>
  );
};

export default TourList;
