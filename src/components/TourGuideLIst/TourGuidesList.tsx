"use client"
import React, { useEffect, useState } from 'react';
import TourGuideCard from './TourGuideCard';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const TourGuidesList: React.FC = () => {
  const [tourGuides, setTourGuides] = useState([]);

  useEffect(() => {
    const fetchTourGuides = async () => {
      try {
        const response = await fetch(`${apiUrl}/TourGuides/GetAll`);
        const data = await response.json();
        const filteredGuides = data.filter((guide: any) => !guide.isDeleted);
        setTourGuides(filteredGuides);
      } catch (error) {
        console.error('Error fetching tour guides:', error);
      }
    };

    fetchTourGuides();
  }, []);

  return (
    <div className="flex justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tourGuides.map(guide => (
          <TourGuideCard 
            key={guide.id}
            id={guide.id}
            fullName={guide.fullName}
            photo={guide.imageUrl}
            hourPrice={guide.hourPrice}
            rate={guide.averageRating}
            reviewsNumber={guide.reviewsNumber}
            languageSpoken={guide.languageSpoken}
            hasCar={guide.hasCar}
          />
        ))}
      </div>
    </div>
  );
};

export default TourGuidesList;
