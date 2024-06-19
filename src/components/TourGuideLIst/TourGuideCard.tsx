"use client";
import Link from 'next/link';
// components/TourGuideCard.tsx
import React from 'react';

interface TourGuideCardProps {
  id: string;
  name: string;
  description: string;
  photo: string;
  pricePerHour: number;
  rate: number;
  reviews: number;
  languages: string[];
}

const TourGuideCard: React.FC<TourGuideCardProps> = ({
  id,
  name,
  description,
  photo,
  pricePerHour,
  rate,
  reviews,
  languages,
}) => {
  return (
    <div className="flex flex-col max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-700">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={photo} alt={name} />
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
          <span className="font-bold text-lg">${pricePerHour}</span>
          <span className="text-sm"> / hour</span>
        </div>
      </div>
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 dark:text-gray-300 text-base">{description}</p>
        </div>
        <div className="mt-4">
          <span className="text-yellow-500">{'★'.repeat(rate)}{'☆'.repeat(5 - rate)}</span>
          <span className="text-gray-600 dark:text-gray-400 ml-2">({reviews} reviews)</span>
        </div>
        <div className="mt-2 text-gray-600 dark:text-gray-400">
          Languages: {languages.join(', ')}
        </div>
      </div>
      <div className="p-6 pt-0">
        <Link href={`/Tourist/BookTourGuides/${id}`} className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-full w-full text-center">
          
            Pick me!
          
        </Link>
      </div>
    </div>
  );
};

export default TourGuideCard;
