"use client"
// components/TourGuidesList.tsx
import React, { useState } from 'react';
import TourGuideCard from './TourGuidePerHourCard';

const tourGuides = [
  { 
    id : "1",
    name: 'John Doe', 
    description: 'Experienced tour guide with knowledge in local history.', 
    photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg', 
    pricePerHour: 50,
    rate: 5,
    reviews: 120,
    languages: ['English', 'Arabic']
  },
  { 
    id : "2",
    name: 'Jane Smith', 
    description: 'Friendly and enthusiastic guide for all ages.', 
    photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg', 
    pricePerHour: 45,
    rate: 4,
    reviews: 98,
    languages: ['English', 'French']
  },
  { 
    id : "3",
    name: 'Michael Brown', 
    description: 'Specializes in food and cultural tours.', 
    photo: '/images/blog/post-03.jpg', 
    pricePerHour: 60,
    rate: 5,
    reviews: 110,
    languages: ['English', 'Spanish']
  },
  { 
    id : "4",
    name: 'Emily Davis', 
    description: 'Nature and wildlife expert.', 
    photo: '/images/blog/Pyramids.jpg', 
    pricePerHour: 55,
    rate: 4,
    reviews: 87,
    languages: ['English', 'German']
  },

  // Add more guides as needed
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
    <div className="p-6 ee" id='ee'>
      {/* <h6 className='mb-5 text-2xl font-bold leading-tight text-dark sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight'>Tour Guides Per Hour </h6> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((guide, index) => (
          <TourGuideCard
            key={index}
            id={guide.id}
            name={guide.name}
            description={guide.description}
            photo={guide.photo}
            pricePerHour={guide.pricePerHour}
            rate={guide.rate}
            reviews={guide.reviews}
            languages={guide.languages}
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
