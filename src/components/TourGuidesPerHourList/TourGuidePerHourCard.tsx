"use client"
import Link from 'next/link';
// components/TourGuideCard.tsx
import React from 'react';

interface TourGuideCardProps {
  id :string;
  name: string;
  description: string;
  photo: string;
  pricePerHour: number;
  rate: number;
  reviews: number;
  languages: string[];
}

const TourGuideCard: React.FC<TourGuideCardProps> = ({id, name, description, photo, pricePerHour, rate, reviews, languages }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white dark:bg-gray-700">
      <img className="w-full h-48 object-cover" src={photo} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="mt-4">
          <span className="text-lg font-semibold">${pricePerHour}</span> <span className="text-gray-600">/ hour</span>
        </div>
        <div className="mt-2">
          <span className="text-yellow-500">{'★'.repeat(rate)}{'☆'.repeat(5 - rate)}</span>
          <span className="text-gray-600 ml-2">({reviews} reviews)</span>
        </div>
        <div className="mt-2">
          <span className="text-gray-600">Languages: {languages.join(', ')}</span>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link href={`/Tourist/BookTourGuides/${id}`} className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded">
          Pick me!
        </Link>
      </div>
    </div>
  );
}

export default TourGuideCard;
