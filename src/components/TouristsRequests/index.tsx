// pages/TouristRequests.tsx
"use client";

import React from "react";
import TouristCard from "./TouristCard";
import SectionTitle from "../Common/SectionTitle";

interface TouristRequest {
  image: string;
  name: string;
  description: string;
}

const TouristRequests: React.FC = () => {
  const TouristRequests: TouristRequest[] = [
    {
      image: "https://via.placeholder.com/150",
      name: "John Doe",
      description:
        "Experienced Tourist with 10 years of experience in the industry.",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Jane Smith",
      description:
        "Specialist in historical tours with a passion for storytelling.",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Michael Brown",
      description: "Nature and wildlife expert with a keen eye for adventure.",
    },
  ];

  const handleAccept = (name: string) => {
    console.log(`Accepted: ${name}`);
  };

  const handleRefuse = (name: string) => {
    console.log(`Refused: ${name}`);
  };

  const handleDetails = (name: string) => {
    console.log(`Details for: ${name}`);
  };

  return (
    <section className="relative z-10 bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Tourist Requests"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="flex min-h-screen flex-wrap items-center justify-center bg-gray-100">
          {TouristRequests.map((request, index) => (
            <TouristCard
              key={index}
              image={request.image}
              name={request.name}
              description={request.description}
              onAccept={() => handleAccept(request.name)}
              onRefuse={() => handleRefuse(request.name)}
              onDetails={() => handleDetails(request.name)} // Pass the handleDetails function
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TouristRequests;

