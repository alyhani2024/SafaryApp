// components/TourGuidesList.tsx
"use client"
import React, { useEffect, useState } from 'react';
import TourGuideCard from './TourGuideCard';

const TourGuidesList: React.FC = () => {
  const [tourGuides, setTourGuides] = useState([]);

  useEffect(() => {
    const fetchTourGuides = async () => {
      try {
        const response = await fetch('http://safaryapi.runasp.net/api/TourGuides/GetAll');
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {tourGuides.map(guide => (
        <TourGuideCard 
          key={guide.id}
          id={guide.id}
          fullName={guide.fullName}
          photo={guide.imageUrl}
          hourPrice={guide.hourPrice}
          rate={guide.rate}
          reviewsNumber={guide.reviewsNumber}
          languageSpoken={guide.languageSpoken}
          hasCar={guide.hasCar}
        />
      ))}
    </div>
  );
};

export default TourGuidesList;
