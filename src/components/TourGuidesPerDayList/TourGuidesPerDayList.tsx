"use client"
// components/TourGuidesList.tsx
// components/TourGuidesList.tsx
import React, { useState } from 'react';
import TourGuideCard from './TourGuidePerDayCard';

const tourGuides = [
    { name: 'John Doe', description: 'Experienced tour guide with knowledge in local history.', photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg', pricePerDay: 50 },
    { name: 'Jane Smith', description: 'Friendly and enthusiastic guide for all ages.', photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg', pricePerDay: 45 },
    { name: 'Michael Brown', description: 'Specializes in food and cultural tours.', photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg', pricePerDay: 60 },
    { name: 'Emily Davis', description: 'Nature and wildlife expert.', photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg', pricePerDay: 55 },
    { name: 'David Wilson', description: 'Local history and architecture specialist.', photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg', pricePerDay: 50 },
    { name: 'Alice Johnson', description: 'Expert in local flora and fauna.', photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg', pricePerDay: 40 },
    { name: 'Chris Evans', description: 'Knowledgeable in city tours and night excursions.', photo: '/images/chris.jpg', pricePerDay: 52 },
    { name: 'Nancy Drew', description: 'Great with kids and family tours.', photo: '/images/nancy.jpg', pricePerDay: 48 },
    { name: 'Tom Holland', description: 'Adventure and sports enthusiast.', photo: '/images/tom.jpg', pricePerDay: 65 },
    { name: 'Robert Downey', description: 'High-end and exclusive tours.', photo: '/images/robert.jpg', pricePerDay: 80 },
    { name: 'Clark Kent', description: 'Superb tour of Metropolis.', photo: '/images/clark.jpg', pricePerDay: 70 },
    { name: 'Bruce Wayne', description: 'Exclusive Gotham tours.', photo: '/images/bruce.jpg', pricePerDay: 100 },
    { name: 'Diana Prince', description: 'Amazonian and historical tours.', photo: '/images/diana.jpg', pricePerDay: 90 },
    { name: 'Barry Allen', description: 'Fast-paced city tours.', photo: '/images/barry.jpg', pricePerDay: 60 },
    { name: 'Arthur Curry', description: 'Aquatic adventures.', photo: '/images/arthur.jpg', pricePerDay: 75 },
    { name: 'Hal Jordan', description: 'Space and planetary tours.', photo: '/images/hal.jpg', pricePerDay: 85 },
    { name: 'Oliver Queen', description: 'Archery and survival tours.', photo: '/images/oliver.jpg', pricePerDay: 55 },
    { name: 'Dinah Lance', description: 'Music and performance tours.', photo: '/images/dinah.jpg', pricePerDay: 65 },
    { name: 'Victor Stone', description: 'Technology and innovation tours.', photo: '/images/victor.jpg', pricePerDay: 80 },
    { name: 'Billy Batson', description: 'Youthful and fun tours.', photo: '/images/billy.jpg', pricePerDay: 50 },{ name: 'John Doe', description: 'Experienced tour guide with knowledge in local history.', photo: '/images/john.jpg', pricePerDay: 50 },
    { name: 'Jane Smith', description: 'Friendly and enthusiastic guide for all ages.', photo: '/images/jane.jpg', pricePerDay: 45 },
    { name: 'Michael Brown', description: 'Specializes in food and cultural tours.', photo: '/images/michael.jpg', pricePerDay: 60 },
    { name: 'Emily Davis', description: 'Nature and wildlife expert.', photo: '/images/emily.jpg', pricePerDay: 55 },
    { name: 'David Wilson', description: 'Local history and architecture specialist.', photo: '/images/david.jpg', pricePerDay: 50 },
    { name: 'Alice Johnson', description: 'Expert in local flora and fauna.', photo: '/images/alice.jpg', pricePerDay: 40 },
    { name: 'Chris Evans', description: 'Knowledgeable in city tours and night excursions.', photo: '/images/chris.jpg', pricePerDay: 52 },
    { name: 'Nancy Drew', description: 'Great with kids and family tours.', photo: '/images/nancy.jpg', pricePerDay: 48 },
    { name: 'Tom Holland', description: 'Adventure and sports enthusiast.', photo: '/images/tom.jpg', pricePerDay: 65 },
    { name: 'Robert Downey', description: 'High-end and exclusive tours.', photo: '/images/robert.jpg', pricePerDay: 80 },
    { name: 'Clark Kent', description: 'Superb tour of Metropolis.', photo: '/images/clark.jpg', pricePerDay: 70 },
    { name: 'Bruce Wayne', description: 'Exclusive Gotham tours.', photo: '/images/bruce.jpg', pricePerDay: 100 },
    { name: 'Diana Prince', description: 'Amazonian and historical tours.', photo: '/images/diana.jpg', pricePerDay: 90 },
    { name: 'Barry Allen', description: 'Fast-paced city tours.', photo: '/images/barry.jpg', pricePerDay: 60 },
    { name: 'Arthur Curry', description: 'Aquatic adventures.', photo: '/images/arthur.jpg', pricePerDay: 75 },
    { name: 'Hal Jordan', description: 'Space and planetary tours.', photo: '/images/hal.jpg', pricePerDay: 85 },
    { name: 'Oliver Queen', description: 'Archery and survival tours.', photo: '/images/oliver.jpg', pricePerDay: 55 },
    { name: 'Dinah Lance', description: 'Music and performance tours.', photo: '/images/dinah.jpg', pricePerDay: 65 },
    { name: 'Victor Stone', description: 'Technology and innovation tours.', photo: '/images/victor.jpg', pricePerDay: 80 },
    { name: 'Billy Batson', description: 'Youthful and fun tours.', photo: '/images/billy.jpg', pricePerDay: 50 },
];

const TourGuidesList: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isShowMoreClicked, setIsShowMoreClicked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const handleShowMore = () => {
    setVisibleCount(itemsPerPage);
    setIsShowMoreClicked(true);
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalPages = Math.ceil((tourGuides.length - 6) / itemsPerPage);
  const startIndex = 6 + (currentPage - 1) * itemsPerPage;
  const currentItems = isShowMoreClicked
    ? tourGuides.slice(0, 6).concat(tourGuides.slice(startIndex, startIndex + itemsPerPage))
    : tourGuides.slice(0, visibleCount);

  return (
    <div className="p-6">
      {/* <h6 className='mb-5 text-2xl font-bold leading-tight text-dark sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight'>Tour Guides Per Day </h6> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((guide, index) => (
          <TourGuideCard
            key={index}
            name={guide.name}
            description={guide.description}
            photo={guide.photo}
            pricePerDay={guide.pricePerDay}
          />
        ))}
      </div>
      {!isShowMoreClicked && visibleCount < tourGuides.length && (
        <div className="flex justify-center mt-6">
          <button
            className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
      {isShowMoreClicked && totalPages > 0 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`${
                currentPage === index + 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'
              } font-bold py-2 px-4 rounded`}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TourGuidesList;