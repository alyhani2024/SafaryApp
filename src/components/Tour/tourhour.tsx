"use client";
import React, { useState } from "react";

const TourHourForm = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedAttractions, setSelectedAttractions] = useState([]);
  const [tourHour, setTourHour] = useState("");
  const [startdate, setStartdate] = useState("");

  const cities = ["Cairo", "Alexandria", "Luxor"];
  const attractions = {
    Cairo: [
      {
        name: "Pyramids",
        image: "/images/blog/Pyramids.jpg",
        description: "Ancient burial ground for Egyptian pharaohs",
        checked: false,
      },
      {
        name: "Egyptian Museum",
        image: "/images/blog/Pyramids.jpg",
        description: "Museum showcasing ancient Egyptian artifacts",
        checked: false,
      },
      {
        name: "Khan El Khalili",
        image: "/images/blog/Pyramids.jpg",
        description: "Historic market with traditional crafts and souvenirs",
        checked: false,
      },
    ],
    Alexandria: [
      {
        name: "Library of Alexandria",
        image: "/images/blog/Pyramids.jpg",
        description: "Ancient library and cultural center",
        checked: false,
      },
      {
        name: "Citadel of Qaitbay",
        image: "/images/blog/Pyramids.jpg",
        description: "Medieval fortress on the Mediterranean coast",
        checked: false,
      },
      {
        name: "Montaza Palace",
        image: "/images/blog/Pyramids.jpg",
        description: "Former royal palace and gardens",
        checked: false,
      },
    ],
    Luxor: [
      {
        name: "Valley of the Kings",
        image: "/images/blog/Pyramids.jpg",
        description: "Ancient burial site for Egyptian royalty",
        checked: false,
      },
      {
        name: "Karnak Temple",
        image: "/images/blog/Pyramids.jpg",
        description: "Vast temple complex dedicated to the gods",
        checked: false,
      },
      {
        name: "Luxor Temple",
        image: "/images/blog/Pyramids.jpg",
        description: "Ancient temple complex in the heart of Luxor",
        checked: false,
      },
    ],
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setSelectedAttractions([]); // Reset selected attractions when the city changes
  };

  const handleAttractionChange = (event, attractionName) => {
    const { value } = event.target;
    if (selectedAttractions.includes(value)) {
      setSelectedAttractions(
        selectedAttractions.filter((attraction) => attraction !== value),
      );
    } else {
      setSelectedAttractions([...selectedAttractions, value]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form className="w-full max-w-4xl">
        <div className="mb-8">
          <label
            htmlFor="city"
            className="mb-3 block text-center text-sm font-medium text-dark dark:text-white"
          >
            Select City
          </label>
          <select
            id="city"
            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-center text-base text-body-color outline-none focus:border-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-orange-500 dark:focus:shadow-none"
            value={selectedCity}
            onChange={handleCityChange}
          >
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        {selectedCity && (
          <>
            <div className="mb-8">
              <label className="mb-3 block text-center text-sm font-medium text-dark dark:text-white">
                Select Tourist Attractions
              </label>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {attractions[selectedCity].map((attraction) => (
                  <div
                    key={attraction.name}
                    className="mb-4 flex w-full flex-col items-center rounded-md border border-gray-200 p-4"
                  >
                    <div className="mb-2">
                      <img
                        src={attraction.image}
                        alt={attraction.name}
                        className="h-auto w-full rounded-md"
                      />
                      <p className="text-center">{attraction.name}</p>
                    </div>
                    <p className="mb-2 text-center text-sm text-gray-600">
                      {attraction.description}
                    </p>
                    <label
                      htmlFor={attraction.name}
                      className="flex items-center"
                    >
                      <input
                        type="checkbox"
                        id={attraction.name}
                        value={attraction.name}
                        onChange={(e) =>
                          handleAttractionChange(e, attraction.name)
                        }
                        checked={selectedAttractions.includes(attraction.name)}
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
                className="mb-3 block text-center text-sm font-medium text-dark dark:text-white"
              >
                Enter Tour Hour
              </label>
              <input
                type="number"
                id="tourHour"
                placeholder="Enter tour hour"
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-center text-base text-body-color outline-none focus:border-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-orange-500 dark:focus:shadow-none"
                value={tourHour}
                onChange={(e) => setTourHour(e.target.value)}
              />
              <input
                type="date"
                id="startdate"
                placeholder="Enter Your start date"
                className="border-stroke mt-5 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-center text-base text-body-color outline-none focus:border-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-orange-500 dark:focus:shadow-none"
                value={startdate}
                onChange={(e) => setStartdate(e.target.value)}
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
