"use client"
import React, { useState } from 'react';

const TourHourForm = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedAttractions, setSelectedAttractions] = useState([]);
  const [tourHour, setTourHour] = useState('');

  const cities = ['Cairo', 'Alexandria', 'Luxor'];
  const attractions = {
    Cairo: ['Pyramids', 'Egyptian Museum', 'Khan El Khalili'],
    Alexandria: ['Library of Alexandria', 'Citadel of Qaitbay', 'Montaza Palace'],
    Luxor: ['Valley of the Kings', 'Karnak Temple', 'Luxor Temple'],
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
                  {attractions[selectedCity].map((attraction) => (
                    <div key={attraction} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id={attraction}
                        value={attraction}
                        onChange={handleAttractionChange}
                        checked={selectedAttractions.includes(attraction)}
                        className="mr-2"
                      />
                      <label htmlFor={attraction}>{attraction}</label>
                    </div>
                  ))}
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
