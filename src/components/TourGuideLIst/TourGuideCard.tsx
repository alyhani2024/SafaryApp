"use client";
import Link from 'next/link';
import React from 'react';
import { Car } from 'lucide-react';

interface TourGuideCardProps {
  id: string;
  fullName: string;
  description?: string;
  photo?: string;
  hourPrice: number;
  rate: number;
  reviewsNumber: number;
  languageSpoken: string[];
  hasCar: boolean;
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const TourGuideCard: React.FC<TourGuideCardProps> = ({
  id,
  fullName,
  photo = '/default-photo.jpg', // default photo if none provided
  hourPrice,
  rate,
  reviewsNumber,
  languageSpoken,
  hasCar,
}) => {
  return (
    <div className="flex flex-col max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-700">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={photo
    ? (photo.startsWith("http://") || photo.startsWith("https://")
      ? photo
      : `${apiUrl}/images/tourguides/${photo}`)
    : '/images/placeholder.jpg'} alt={fullName} />
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
          <span className="font-bold text-lg">${hourPrice}</span>
          <span className="text-sm"> / hour</span>
        </div>
      </div>
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="font-bold text-xl mb-2">{fullName}</div>
        </div>
        <div className="mt-4">
          <span className="text-yellow-500">{'★'.repeat(rate)}{'☆'.repeat(5 - rate)}</span>
          <span className="text-gray-600 dark:text-gray-400 ml-2">{hasCar && <Car className='inline'/>}</span>
        </div>
        <div className="mt-2 text-gray-600 dark:text-gray-400">
          Languages: {languageSpoken.join(', ')}
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
