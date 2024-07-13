"use client"
// components/TourList.tsx
import React, { useEffect, useState } from 'react';
import TourCard from './TourCard';

interface Tour {
  id: string;
  name: string;
  description: string;
  location: string;
  duration: number;
  isDeleted: boolean;
  tourImages: { imageUrl: string }[];
}
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const TourList: React.FC = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch(`${apiUrl}/Tours/GetAll`);
        const data = await response.json();
        const filteredTours = data.filter((tour: Tour) => !tour.isDeleted); // Filter out deleted tours
        setTours(filteredTours);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch tours');
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <TourCard
            key={tour.id}
            id={tour.id}
            title={tour.name}
            description={tour.description}
            photo={tour.tourImages[0]?.imageUrl || '/default-photo.jpg'}
            duration={`${tour.duration} hours`}
            category={tour.location}
          />
        ))}
      </div>
    </div>
  );
};

export default TourList;
