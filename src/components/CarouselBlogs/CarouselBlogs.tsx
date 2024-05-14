"use client"

import { useState, useEffect } from 'react';

type TourGuide = {
  name: string;
  description: string;
  photoUrl: string;
  rate: number;
  priceBlog: number;
};

type CarouselProps = {
  tourGuides: TourGuide[];
};

const CarouselBlog: React.FC<CarouselProps> = ({ tourGuides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === tourGuides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [tourGuides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? tourGuides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === tourGuides.length - 1 ? 0 : prev + 1));
  };

  const handleBook = (tourGuideName: string) => {
    // Handle booking logic here
    alert(`Booking tour guide: ${tourGuideName}`);
  };

  return (
    <div className='mt-5'>
      <h2 className="text-2xl font-bold mb-4 mt-4 ml-4">Blogs </h2>
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <div className="relative h-auto w-full flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * (100 / tourGuides.length)}%)` }}>
          {tourGuides.map((tourGuide, index) => (
            <div
              key={index}
              className={`w-full px-2`}
              style={{ minWidth: '0', flex: `0 0 33.33%` }}
            >
              <div className="h-full bg-white p-4 rounded-lg flex flex-col justify-between dark:bg-gray-700">
                <div>
                  <img
                    src={tourGuide.photoUrl}
                    alt={tourGuide.name}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{tourGuide.name}</h3>
                    <p className="text-gray-600 mb-2">{tourGuide.description}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-700">{`Rate: ${tourGuide.rate}/5`}</p>
                    <p className="text-gray-700">{`$${tourGuide.priceBlog.toFixed(2)} Blog`}</p>
                  </div>
                  <button
                    onClick={() => handleBook(tourGuide.name)}
                    className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md z-10"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md z-10"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CarouselBlog;
