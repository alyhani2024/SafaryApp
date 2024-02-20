"use client"
import React, { useState } from 'react';
const TourDayForm = () => {
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedAttractions, setSelectedAttractions] = useState([]);
  const [tourDuration, setTourDuration] = useState('');

  const cities = ['Cairo', 'Alexandria', 'Luxor'];
  const attractions = {
    Cairo: ['Pyramids', 'Egyptian Museum', 'Khan El Khalili'],
    Alexandria: ['Library of Alexandria', 'Citadel of Qaitbay', 'Montaza Palace'],
    Luxor: ['Valley of the Kings', 'Karnak Temple', 'Luxor Temple'],
  };

  const handleCityChange = (event) => {
    const { value } = event.target;
    const index = selectedCities.indexOf(value);
    if (index === -1) {
      setSelectedCities([...selectedCities, value]);
    } else {
      setSelectedCities(selectedCities.filter(city => city !== value));
    }
    setSelectedAttractions([]); // Reset selected attractions when the city changes
  };

  const handleAttractionChange = (event) => {
    const { value } = event.target;
    const index = selectedAttractions.indexOf(value);
    if (index === -1) {
      setSelectedAttractions([...selectedAttractions, value]);
    } else {
      setSelectedAttractions(selectedAttractions.filter(attraction => attraction !== value));
    }
  };

  return (
    <>
      <form>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-8">
              <label
                htmlFor="cities"
                className="mb-3 block text-sm font-medium text-dark dark:text-white"
              >
                Select Cities
              </label>
              <select
                multiple
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                value={selectedCities}
                onChange={handleCityChange}
              >
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>
          {selectedCities.map((city) => (
            <div className="w-full px-4" key={city}>
              <div className="mb-8">
                <label
                  htmlFor={city}
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Select Tourist Attractions in {city}
                </label>
                {attractions[city].map((attraction) => (
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
          ))}
          <div className="w-full px-4">
            <div className="mb-8">
              <label
                htmlFor="tourDuration"
                className="mb-3 block text-sm font-medium text-dark dark:text-white"
              >
                Enter Tour Duration (in days)
              </label>
              <input
                type="number"
                id="tourDuration"
                placeholder="Enter tour duration"
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                value={tourDuration}
                onChange={(e) => setTourDuration(e.target.value)}
              />
            </div>
          </div>
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

export default TourDayForm;
