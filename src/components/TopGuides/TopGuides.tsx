"use client"
import React, { useEffect, useState } from 'react';
import TourGuideCard from './GuideCard';

const TopGuides: React.FC = () => {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    const fetchTopGuides = async () => {
      try {
        const response = await fetch('http://safaryapi.runasp.net/api/TourGuides/GetAll');
        const data = await response.json();
        const sortedGuides = data.sort((a: any, b: any) => b.rate - a.rate);
        const topGuides = sortedGuides.slice(0, 3); // Get top 3 guides
        setGuides(topGuides);
      } catch (error) {
        console.error('Error fetching top tour guides:', error);
      }
    };

    fetchTopGuides();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {guides.map((guide: any) => (
        <TourGuideCard
          key={guide.id}
          id={guide.id}
          fullName={guide.fullName}
          description={guide.description}
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

export default TopGuides;
