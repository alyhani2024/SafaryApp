"use client"
import React, { useState } from 'react';

const TourHourForm = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedAttractions, setSelectedAttractions] = useState([]);
  const [tourHour, setTourHour] = useState('');

  const cities = ['Cairo', 'Alexandria', 'Luxor'];
  const attractions = {
    Cairo: [
      { name: 'Pyramids', image: '/images/blog/Pyramids.jpg', description: 'Ancient burial ground for Egyptian pharaohs' },
      { name: 'Egyptian Museum', image: 'egyptian-museum.jpg', description: 'Museum showcasing ancient Egyptian artifacts' },
      { name: 'Khan El Khalili', image: 'khan-el-khalili.jpg', description: 'Historic market with traditional crafts and souvenirs' }
    ],
    Alexandria: [
      { name: 'Library of Alexandria', image: 'library-of-alexandria.jpg', description: 'Ancient library and cultural center' },
      { name: 'Citadel of Qaitbay', image: 'citadel-of-qaitbay.jpg', description: 'Medieval fortress on the Mediterranean coast' },
      { name: 'Montaza Palace', image: 'montaza-palace.jpg', description: 'Former royal palace and gardens' }
    ],
    Luxor: [
      { name: 'Valley of the Kings', image: 'valley-of-the-kings.jpg', description: 'Ancient burial site for Egyptian royalty' },
      { name: 'Karnak Temple', image: 'karnak-temple.jpg', description: 'Vast temple complex dedicated to the gods' },
      { name: 'Luxor Temple', image: 'luxor-temple.jpg', description: 'Ancient temple complex in the heart of Luxor' }
    ],
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setSelectedAttractions([]); // Reset selected attractions when the city changes
  };

  const handleAttractionChange = (event) => {
    const { value } = event.target;
    if (selectedAttractions.includes(value)) {
      setSelectedAttractions(selectedAttractions.filter(attraction => attraction !== value));
    } else {
      setSelectedAttractions([...selectedAttractions, value]);
    }
  };

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <form>
        <div className="-mx-4 ml-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8">
              <label
                htmlFor="city"
                className="mb-3 block text-sm font-medium text-dark dark:text-white"
              >
                Select City
              </label>
              <select
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-orange-500 dark:focus:shadow-none"
                value={selectedCity}
                onChange={handleCityChange}
              >
                <option value="">Select a city</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>
          {selectedCity && (
            <>
              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <label
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Select Tourist Attractions
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {attractions[selectedCity].map((attraction) => (
                      <div key={attraction.name} className="flex flex-col items-center mb-4 border border-gray-200 rounded-md p-4">
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
                            onChange={handleAttractionChange}
                            checked={selectedAttractions.includes(attraction.name)}
                            className="mr-2"
                          />
                          <span>Select</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <label
                    htmlFor="tourHour"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Enter Tour Hour
                  </label>
                  <input
                    type="number"
                    id="tourHour"
                    placeholder="Enter tour hour"
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-orange-500 dark:focus:shadow-none"
                    value={tourHour}
                    onChange={(e) => setTourHour(e.target.value)}
                  />
                </div>
              </div>
            </>
          )}
          <div className="w-full px-4">
            <button className="rounded-sm bg-orange-500 px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-orange-500/90 dark:shadow-submit-dark">
              Submit Ticket
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TourHourForm;