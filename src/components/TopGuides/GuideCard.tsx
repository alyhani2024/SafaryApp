// components/GuideCard.tsx
import React from 'react';

interface GuideCardProps {
  name: string;
  title: string;
  languages: string;
  reviews: number;
  rate:number;
  image: string;
}

const GuideCard: React.FC<GuideCardProps> = ({ name, title, languages, reviews, image ,rate }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 border border-gray-300 relative flex flex-col">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-1">Hello I am</div>
        <div className="font-bold text-xl mb-2 text-orange-600">{name}, {title}</div>
        <p className="text-gray-700 text-base mb-2">I speak: {languages}</p>
        <div className="flex items-center mb-4">
          <span className="text-orange-600 text-sm font-semibold">
            {Array(rate).fill('⭐').join('')}
          </span>
          <span className="ml-2 text-gray-600 text-sm">{reviews} reviews</span>
        </div>
      </div>
      <br />
      <br />
      <button className="absolute bottom-4 right-4 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-full ">
        Pick me!
      </button>
    </div>
  );
};

export default GuideCard;
