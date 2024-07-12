"use client"
import React, { useState } from 'react';
import TouristForm from './TouristForm';
import TourGuideForm from './TourGuideForm';


const RegistrationForm = () => {
  const [role, setRole] = useState('tourist'); // Default role is tourist
  

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Registration Form</h2>
        <div className="flex justify-center mb-6">
          <label className="block mr-4">
            <input
              type="radio"
              value="tourist"
              checked={role === 'tourist'}
              onChange={handleRoleChange}
              className="hidden"
            />
            <button
              className={`${
                role === 'tourist'
                  ? 'bg-orange-500 text-white hover:bg-orange-600'
                  : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
              } py-2 px-4 rounded-md focus:outline-none`}
              onClick={() => setRole('tourist')}
            >
              Tourist
            </button>
          </label>
          <label className="block">
            <input
              type="radio"
              value="tourguide"
              checked={role === 'tourguide'}
              onChange={handleRoleChange}
              className="hidden"
            />
            <button
              className={`${
                role === 'tourguide'
                  ? 'bg-orange-500 text-white hover:bg-orange-600'
                  : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
              } py-2 px-4 rounded-md focus:outline-none`}
              onClick={() => setRole('tourguide')}
            >
              Tour Guide
            </button>
          </label>
        </div>
        {role === 'tourist' ? <TouristForm /> : <TourGuideForm />}
      </div>
    </div>
  );
};

export default RegistrationForm;
