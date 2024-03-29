"use client"
import React, { useState } from 'react';

const TourHourForm = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedAttractions, setSelectedAttractions] = useState([]);
  const [tourHour, setTourHour] = useState('');

  const cities = ['Cairo', 'Alexandria', 'Luxor'];
  const attractions = {
    Cairo: [
      { name: 'Pyramids', image: '/images/blog/Pyramids.jpg', description: 'Ancient burial ground for Egyptian pharaohs', checked: false },
      { name: 'Egyptian Museum', image: '/images/blog/Pyramids.jpg', description: 'Museum showcasing ancient Egyptian artifacts', checked: false },
      { name: 'Khan El Khalili', image: '/images/blog/Pyramids.jpg', description: 'Historic market with traditional crafts and souvenirs', checked: false }
    ],
    Alexandria: [
      { name: 'Library of Alexandria', image: '/images/blog/Pyramids.jpg', description: 'Ancient library and cultural center', checked: false },
      { name: 'Citadel of Qaitbay', image: '/images/blog/Pyramids.jpg', description: 'Medieval fortress on the Mediterranean coast', checked: false },
      { name: 'Montaza Palace', image: '/images/blog/Pyramids.jpg', description: 'Former royal palace and gardens', checked: false }
    ],
    Luxor: [
      { name: 'Valley of the Kings', image: '/images/blog/Pyramids.jpg', description: 'Ancient burial site for Egyptian royalty', checked: false },
      { name: 'Karnak Temple', image: '/images/blog/Pyramids.jpg', description: 'Vast temple complex dedicated to the gods', checked: false },
      { name: 'Luxor Temple', image: '/images/blog/Pyramids.jpg', description: 'Ancient temple complex in the heart of Luxor', checked: false }
    ],
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setSelectedAttractions([]); // Reset selected attractions when the city changes
  };

  const handleAttractionChange = (event, attractionName) => {
    const isChecked = event.target.checked;
    const updatedAttractions = selectedAttractions.includes(attractionName)
      ? selectedAttractions.filter(attraction => attraction !== attractionName)
      : [...selectedAttractions, attractionName];

    setSelectedAttractions(updatedAttractions);
    attractions[selectedCity].find(attraction => attraction.name === attractionName).checked = isChecked;
  };



  return (
    <div className="flex flex-col items-center justify-center">
      <form className="w-full max-w-4xl">
        <div className="mb-8">
          <label
            htmlFor="city"
            className="mb-3 block text-sm font-medium text-dark dark:text-white text-center"
          >
            Select City
          </label>
          <select
            id="city"
            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-orange-500 dark:focus:shadow-none text-center"
            value={selectedCity}
            onChange={handleCityChange}
          >
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
        {selectedCity && (
          <>
            <div className="mb-8">
              <label
                className="mb-3 block text-sm font-medium text-dark dark:text-white text-center"
              >
                Select Tourist Attractions
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {attractions[selectedCity].map((attraction) => (
                  <div key={attraction.name} className="flex flex-col items-center mb-4 border border-gray-200 rounded-md p-4 w-full">
                    <div className="mb-2">
                      <img src={attraction.image} alt={attraction.name} className="w-full h-auto rounded-md" />
                      <p className="text-center">{attraction.name}</p>
                    </div>
                    <p className="text-sm text-center text-gray-600 mb-2">{attraction.description}</p>
                    <label htmlFor={attraction.name} className="flex items-center">
                      <input
                        type="checkbox"
                        id={attraction.name}
                        value={attraction.name}
                        onChange={(e) => handleAttractionChange(e, attraction.name)}
                        checked={attraction.checked}
                        className="mr-2"
                      />
                      <span>Select</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <label
                htmlFor="tourHour"
                className="mb-3 block text-sm font-medium text-dark dark:text-white text-center"
              >
                Enter Tour Hour
              </label>
              <input
                type="number"
                id="tourHour"
                placeholder="Enter tour hour"
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-orange-500 dark:focus:shadow-none text-center"
                value={tourHour}
                onChange={(e) => setTourHour(e.target.value)}
              />
            </div>
          </>
        )}
      
        <div className="mb-8 flex justify-center">
          <button className="rounded-sm bg-orange-500 px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-orange-500/90 dark:shadow-submit-dark">
            Submit Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default TourHourForm;
