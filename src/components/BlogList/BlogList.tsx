"use client"
// components/BlogsList.tsx
// components/BlogsList.tsx
import React, { useState } from 'react';
import BlogCard from './BlogCard';

const Blogs = [
  { name: 'John Doe', description: 'Experienced Blog with knowledge in local history.', photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg', price : 50 },
  { name: 'Jane Smith', description: 'Friendly and enthusiastic guide for all ages.', photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg', price : 45 },
  { name: 'Michael Brown', description: 'Specializes in food and cultural tours.', photo: '/images/blog/post-03.jpg', price : 60 },
  { name: 'Emily Davis', description: 'Nature and wildlife expert.', photo: '/images/blog/Pyramids.jpg', price : 55 },
  { name: 'David Wilson', description: 'Local history and architecture specialist.', photo: '/images/blog/post-03.jpg', price : 50 },
  { name: 'Alice Johnson', description: 'Expert in local flora and fauna.', photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg', price : 40 },
  { name: 'Chris Evans', description: 'Knowledgeable in city tours and night excursions.', photo: '/images/blog/post-03.jpg', price : 52 },    { name: 'John Doe', description: 'Experienced Blog with knowledge in local history.', photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg', price : 50 },
  { name: 'Jane Smith', description: 'Friendly and enthusiastic guide for all ages.', photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg', price : 45 },
  { name: 'Michael Brown', description: 'Specializes in food and cultural tours.', photo: '/images/blog/post-03.jpg', price : 60 },
  { name: 'Emily Davis', description: 'Nature and wildlife expert.', photo: '/images/blog/Pyramids.jpg', price : 55 },
  { name: 'David Wilson', description: 'Local history and architecture specialist.', photo: '/images/blog/post-03.jpg', price : 50 },
  { name: 'Alice Johnson', description: 'Expert in local flora and fauna.', photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg', price : 40 },
  { name: 'Chris Evans', description: 'Knowledgeable in city tours and night excursions.', photo: '/images/blog/post-03.jpg', price : 52 },    { name: 'John Doe', description: 'Experienced Blog with knowledge in local history.', photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg', price : 50 },
  { name: 'Jane Smith', description: 'Friendly and enthusiastic guide for all ages.', photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg', price : 45 },
  { name: 'Michael Brown', description: 'Specializes in food and cultural tours.', photo: '/images/blog/post-03.jpg', price : 60 },
  { name: 'Emily Davis', description: 'Nature and wildlife expert.', photo: '/images/blog/Pyramids.jpg', price : 55 },
  { name: 'David Wilson', description: 'Local history and architecture specialist.', photo: '/images/blog/post-03.jpg', price : 50 },
  { name: 'Alice Johnson', description: 'Expert in local flora and fauna.', photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg', price : 40 },
  { name: 'Chris Evans', description: 'Knowledgeable in city tours and night excursions.', photo: '/images/blog/post-03.jpg', price : 52 },    { name: 'John Doe', description: 'Experienced Blog with knowledge in local history.', photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg', price : 50 },
  { name: 'Jane Smith', description: 'Friendly and enthusiastic guide for all ages.', photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg', price : 45 },
  { name: 'Michael Brown', description: 'Specializes in food and cultural tours.', photo: '/images/blog/post-03.jpg', price : 60 },
  { name: 'Emily Davis', description: 'Nature and wildlife expert.', photo: '/images/blog/Pyramids.jpg', price : 55 },
  { name: 'Alice Johnson', description: 'Expert in local flora and fauna.', photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg', price : 40 },
  { name: 'Chris Evans', description: 'Knowledgeable in city tours and night excursions.', photo: '/images/blog/post-03.jpg', price : 52 },];

const BlogsList: React.FC = () => {
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

  const totalPages = Math.ceil((Blogs.length - 6) / itemsPerPage);
  const startIndex = 6 + (currentPage - 1) * itemsPerPage;
  const currentItems = isShowMoreClicked
    ? Blogs.slice(0, 6).concat(Blogs.slice(startIndex, startIndex + itemsPerPage))
    : Blogs.slice(0, visibleCount);

  return (
    <div className="p-6 eei" id='eei'>
      {/* <h6 className='mb-5 text-2xl font-bold leading-tight text-dark sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight'>Blogs   </h6> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((guide, index) => (
          <BlogCard
            key={index}
            name={guide.name}
            description={guide.description}
            photo={guide.photo}
            price ={guide.price }
          />
        ))}
      </div>
      {!isShowMoreClicked && visibleCount < Blogs.length && (
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

export default BlogsList;