"use client"
// components/TastingTour.tsx
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { tours } from './data';

const BookTour = ({
  GuideId

}: {
  GuideId: string;
}) => {
  const [adults, setAdults] = useState(4);
  const [children, setChildren] = useState(1);
  const tour = tours[GuideId]; // Assuming you want to display the first tour, adjust as needed

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3">
          <img
            src={tour.image}
            alt={tour.name}
            className="w-full rounded"
          />
          <h1 className="text-3xl font-bold my-4">{tour.name}</h1>
          <p className="text-gray-700">
            This private tour can be 100% personalized for you
          </p>
          <div className="flex my-4">
            <img
              src={tour.guideImage}
              alt="Guide"
              className="w-10 h-10 rounded-full mr-2"
            />
            <div className="flex flex-col justify-center">
              <p className="text-gray-700">{tour.guideName}</p>
              <p className="text-gray-500">{tour.guideDescription}</p>
            </div>
          </div>
          <p className="text-gray-700 mt-4">{tour.description}</p>
          <div className="flex mt-4">
            <div className="flex items-center text-gray-700 mr-8">
              <span>{tour.details.city}</span>
            </div>
            <div className="flex items-center text-gray-700 mr-8">
              <span>{tour.details.type}</span>
            </div>
            <div className="flex items-center text-gray-700 mr-8">
              <span>{tour.details.duration}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <span>{tour.details.tourType}</span>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            {tour.details.included}
          </p>

          <h2 className="text-2xl font-bold mt-8">reasons to book this tour</h2>
          <ul className="list-disc pl-5 mt-4 text-gray-700">
            {tour.reasons.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/3 md:ml-8 mt-8 md:mt-0">
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <p className="text-2xl font-bold text-orange-500">€{tour.pricePerHour.toFixed(2)} per Hour</p>
            <div className="flex items-center my-2">
              {Array(tour.rate)
                .fill('')
                .map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              <span className="ml-2 text-sm text-gray-500">{tour.reviews} reviews</span>
            </div>
            <div className="mt-4">
              <label htmlFor="date" className="block text-gray-700">Select date</label>
              <input type="date" id="date" className="w-full mt-1 p-2 border rounded" />
            </div>
            <div className="mt-4">
              <label htmlFor="time" className="block text-gray-700">Select time</label>
              <input type="time" id="time" className="w-full mt-1 p-2 border rounded" />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">People</label>
              <div className="flex items-center justify-between mt-1 p-2 border rounded">
                <div>
                  <label className="block text-gray-700">Adults</label>
                  <div className="flex items-center mt-1">
                    <button
                      onClick={() => setAdults(adults - 1)}
                      disabled={adults <= 1}
                      className="px-2 py-1 border rounded bg-gray-200"
                    >-</button>
                    <span className="mx-2">{adults}</span>
                    <button
                      onClick={() => setAdults(adults + 1)}
                      className="px-2 py-1 border rounded bg-gray-200"
                    >+</button>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700">Children</label>
                  <div className="flex items-center mt-1">
                    <button
                      onClick={() => setChildren(children - 1)}
                      disabled={children <= 0}
                      className="px-2 py-1 border rounded bg-gray-200"
                    >-</button>
                    <span className="mx-2">{children}</span>
                    <button
                      onClick={() => setChildren(children + 1)}
                      className="px-2 py-1 border rounded bg-gray-200"
                    >+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-gray-700">Total: €{(tour.pricePerHour * (adults + (children / 2))).toFixed(2)}</span>
              {/* <button className="bg-orange-500 text-white px-4 py-2 rounded">Apply</button> */}
            </div>
            <button className="mt-4 w-full bg-orange-500 text-white p-2 rounded">Apply</button>
          </div>

          <div className="bg-orange-100 p-4 rounded-lg mt-8">
            <h3 className="text-lg font-semibold text-orange-500">All Withlocals experiences are:</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>Private: No strangers. Just you and your local host</li>
              <li>Personalized: Let your local host tailor this for you</li>
              <li>Handpicked by locals: Verified by Withlocals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTour;
