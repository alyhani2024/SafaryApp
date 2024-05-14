// components/TourGuideCard.tsx
import React from 'react';

interface TourGuideCardProps {
  name: string;
  description: string;
  photo: string;
  pricePerHour: number;
}

const TourGuideCard: React.FC<TourGuideCardProps> = ({ name, description, photo, pricePerHour }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white dark:bg-gray-700">
      <img className="w-full h-48 object-cover" src={photo} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="mt-4">
          <span className="text-lg font-semibold">${pricePerHour}</span> <span className="text-gray-600">/ hour</span>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default TourGuideCard;
