import React from 'react';
import { Check } from 'lucide-react';
import { X } from 'lucide-react';

interface TouristCardProps {
  image: string;
  name: string;
  description: string;
  onAccept: () => void;
  onRefuse: () => void;
  onDetails: () => void;
}

const TouristCard: React.FC<TouristCardProps> = ({ image, name, description, onAccept, onRefuse, onDetails }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 relative">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <button
          onClick={onDetails}
          className="text-gray-700 hover:underline font-bold mt-2"
        >
          More Details
        </button>
      </div>
      <div className="px-6 pb-4 flex justify-end space-x-2  bottom-0 right-0 mb-4 mr-4">
        <button
          onClick={onAccept}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
           <Check />
        </button>
        <button
          onClick={onRefuse}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          <X />
        </button>
      </div>
    </div>
  );
};

export default TouristCard;
