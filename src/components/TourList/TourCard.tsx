// components/TourCard.tsx
import React from 'react';

interface TourCardProps {
  id: string;
  title: string;
  description: string;
  photo: string;
  price: string;
  duration: string;
  category: string;
  onExplore: (id: string) => void;  // Add this line
}

const TourCard: React.FC<TourCardProps> = ({ id, title, description, photo, price, duration, category, onExplore }) => {
  return (
    <div className="relative bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg my-4">
      <img className="w-full h-72 object-cover" src={photo} alt={title} />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-1 text-sm">{description}</p>
        <div className="mt-2">
          <span className="text-sm ">{duration}</span>
          <span className="text-sm ml-2">{category}</span>
        </div>
        <div className="mt-2 flex justify-end">
          <button onClick={() => onExplore(id)} className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-full">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
