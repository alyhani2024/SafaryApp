"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

const TouristProfile = () => {
  const [touristData, setTouristData] = useState(null);

  useEffect(() => {
    const touristId = localStorage.getItem("touristloggedId");
    if (touristId) {
      axios
        .get(`http://safaryapi.runasp.net/api/Tourist/${touristId}`)
        .then((response) => {
          setTouristData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching the tourist data:", error);
        });
    }
  }, []);

  if (!touristData) {
    return <div>Loading...</div>;
  }

  const imageUrl = touristData.imageUrl
    ? touristData.imageUrl.startsWith("http") || touristData.imageUrl.startsWith("/")
      ? touristData.imageUrl
      : `/${touristData.imageUrl}`
    : '/images/placeholder.jpg'; // Replace with your placeholder image path

  return (
    <div className="py-12 lg:py-24" style={{ marginTop: "100px" }}>
      <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 text-center">
        <div className="space-y-2">
          <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto">
            <Image
              src={imageUrl}
              alt="Avatar"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{touristData.fullName}</h1>
            <p className="text-gray-500 dark:text-gray-400">{touristData.email}</p>
          </div>
        </div>
        <div className="max-w-[600px] space-y-4 mx-auto">
          <p className="text-gray-600/strong dark:text-gray-400/strong">{touristData.bio || "No bio available"}</p>
        </div>
        <div className="grid w-full grid-cols-3 gap-2 max-w-xs items-center justify-center mx-auto">
          {/* Add any other dynamic content here */}
        </div>
      </div>
    </div>
  );
};

export default TouristProfile;
