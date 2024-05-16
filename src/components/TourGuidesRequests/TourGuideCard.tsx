// components/TourGuideCard.tsx
import React from 'react';

interface TourGuideCardProps {
  image: string;
  name: string;
  description: string;
  onAccept: () => void;
  onRefuse: () => void;
}

const TourGuideCard: React.FC<TourGuideCardProps> = ({ image, name, description, onAccept, onRefuse }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        <button
          onClick={onAccept}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Accept
        </button>
        <button
          onClick={onRefuse}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Refuse
        </button>
      </div>
    </div>
  );
};

export default TourGuideCard;
