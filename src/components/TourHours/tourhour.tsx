"use client"
import React, { useState } from 'react';

const TourHourForm = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedAttraction, setSelectedAttraction] = useState('');
  const [tourHour, setTourHour] = useState('');

  const cities = ['Cairo', 'Alexandria', 'Luxor'];
  const attractions = {
    Cairo: ['Pyramids', 'Egyptian Museum', 'Khan El Khalili'],
    Alexandria: ['Library of Alexandria', 'Citadel of Qaitbay', 'Montaza Palace'],
    Luxor: ['Valley of the Kings', 'Karnak Temple', 'Luxor Temple'],
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setSelectedAttraction(''); // Reset selected attraction when the city changes
  };

  return (
    <>
      <form>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8">
              <label
                htmlFor="city"
                className="mb-3 block text-sm font-medium text-dark dark:text-white"
              >
                Select City
              </label>
              <select
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
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
                    htmlFor="attraction"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Select Tourist Attraction
                  </label>
                  <select
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    value={selectedAttraction}
                    onChange={(e) => setSelectedAttraction(e.target.value)}
                  >
                    <option value="">Select a tourist attraction</option>
                    {attractions[selectedCity].map((attraction) => (
                      <option key={attraction} value={attraction}>{attraction}</option>
                    ))}
                  </select>
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
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    value={tourHour}
                    onChange={(e) => setTourHour(e.target.value)}
                  />
                </div>
              </div>
            </>
          )}
          <div className="w-full px-4">
            <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
              Submit Ticket
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default TourHourForm;
