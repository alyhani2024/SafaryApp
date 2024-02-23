"use client"
import React, { useState } from 'react';

const TourDayForm = () => {
  const [selectedCities, setSelectedCities] = useState([]); // Selected cities
  const [selectedAttractions, setSelectedAttractions] = useState([]); // Selected attractions
  const [tourDuration, setTourDuration] = useState(''); // Tour duration

  const cities = ['Cairo', 'Alexandria', 'Menoufia', 'Aswan', 'Luxor']; // List of cities
  const attractions = { // Tourist attractions for each city
    Cairo: ['Pyramids', 'Egyptian Museum', 'Khan El Khalili'],
    Alexandria: ['Library of Alexandria', 'Citadel of Qaitbay', 'Montaza Palace'],
    Menoufia: ['Shohada Park', 'Shebin El Koum', 'Ashmoun'],
    Aswan: ['Philae Temple', 'Abu Simbel', 'Nubian Museum'],
    Luxor: ['Valley of the Kings', 'Karnak Temple', 'Luxor Temple'],
  };

  // Function to handle city selection
  const handleCityChange = (event, city) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedCities([...selectedCities, city]);
    } else {
      setSelectedCities(selectedCities.filter(selectedCity => selectedCity !== city));
    }
  };

  // Function to handle attraction selection
  const handleAttractionChange = (event, attraction) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedAttractions([...selectedAttractions, attraction]);
    } else {
      setSelectedAttractions(selectedAttractions.filter(selectedAttraction => selectedAttraction !== attraction));
    }
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Selected cities:', selectedCities);
    console.log('Selected attractions:', selectedAttractions);
    console.log('Tour duration:', tourDuration);
  };

  // Function to handle change in tour duration
  const handleTourDurationChange = (event) => {
    setTourDuration(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '80%', margin: '0 auto' }}>
      <div className="flex flex-wrap justify-between">
        {cities.map((city) => (
          <div key={city} className="flex items-center mr-8">
            <input
              type="checkbox"
              id={city}
              value={city}
              onChange={(event) => handleCityChange(event, city)}
            />
            <label htmlFor={city} className="ml-2">{city}</label>
          </div>
        ))}
      </div>
      {selectedCities.map((city) => (
        <div key={city} className="mt-4">
          <h3 className="text-lg font-medium text-dark dark:text-white">{city}</h3>
          <div className="flex flex-wrap">
            {attractions[city].map((attraction) => (
              <div key={attraction} className="flex items-center mt-2 mr-8">
                <input
                  type="checkbox"
                  id={`${city}-${attraction}`}
                  value={attraction}
                  onChange={(event) => handleAttractionChange(event, attraction)}
                />
                <label htmlFor={`${city}-${attraction}`} className="ml-2">{attraction}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="mt-8" style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="number"
          id="tourDuration"
          placeholder="Enter total tour duration"
          className="border-stroke  rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-orange-500 dark:focus:shadow-none mr-4"
          value={tourDuration}
          onChange={handleTourDurationChange}
        />
        <button type="submit" className="rounded-sm bg-orange-500 px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-orange-500/90 dark:shadow-submit-dark">Submit Ticket</button>
      </div>
    </form>
  );
};

export default TourDayForm;
