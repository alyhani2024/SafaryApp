// src/components/TouristList.tsx
"use client"
import React, { useEffect, useState } from 'react';
import { fetchTourists, Tourist } from '@/app/api/Tours/tourService';

const TouristList: React.FC = () => {
  const [tourists, setTourists] = useState<Tourist[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTourists = async () => {
      try {
        const touristsData = await fetchTourists();
        setTourists(touristsData);
      } catch (error) {
        console.error('Error fetching tourists:', error);
        setError('Failed to fetch tourists');
      } finally {
        setLoading(false);
      }
    };

    getTourists();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Tourist List</h1>
      <ul>
        {tourists.map(tourist => (
          <li key={tourist.userName}>
            <h2>{tourist.fullName}</h2>
            <p>Email: {tourist.email}</p>
            <p>Address: {tourist.address}</p>
            <p>Phone: {tourist.phoneNumber}</p>
            <p>Age: {tourist.age}</p>
            {tourist.imageUrl && <img src={tourist.imageUrl} alt={`${tourist.fullName}'s image`} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TouristList;
