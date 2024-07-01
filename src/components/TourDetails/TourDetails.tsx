"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import CarouselComp from '../Carousel/carousel';

interface Tour {
  id: string;
  name: string;
  description: string;
  location: string;
  duration: number;
  tourImages: { imageUrl: string }[];
}

interface Guide {
  fullName: string;
  imageUrl: string | null;
  description: string;
  rate: number;
  hourPrice: number;
  age: number;
  bio: string;
  languageSpoken: string[];
  hasCar: boolean;
  reviewsNumber: number;
  tourGuideSelectedDTO: {
    tourGuideId: string;
    selectedDate: string;
    timeToCast: string | null;
    adults: number;
  };
  reviews: any[];
  averageRating: number;
  email: string;
}

const TourDetails = ({ TourId }: { TourId: string }) => {
  const [guide, setGuide] = useState<Guide | null>(null);
  const [tour, setTour] = useState<Tour | null>(null);
  const [rate, setRate] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [coverImage, setcoverImage] = useState();
  const [comments, setComments] = useState<{ name: string; photo: string; rate: number; comment: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [bookingDetails, setBookingDetails] = useState({ date: '', time: '', adults: 1 });
  const router = useRouter();

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const toursResponse = await fetch('http://safaryapi.runasp.net/api/Tours/GetAll');
        const toursData = await toursResponse.json();

        const selectedTour = toursData.find((tour: { id: string }) => tour.id == TourId);
        setcoverImage(selectedTour.tourImages[0]?.imageUrl || '/default-photo.jpg')
        if (selectedTour) {
          const tourDetailsResponse = await fetch(`http://safaryapi.runasp.net/api/Tours/GetTourDetails?name=${selectedTour.name}`);
          const tourDetailsData = await tourDetailsResponse.json();
          setTour(tourDetailsData);
        } else {
          setError('Tour not found');
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch tour details');
        setLoading(false);
      }
    };

    const fetchGuide = async () => {
      const storedGuideId = localStorage.getItem('SelectedTourGuide');
      if (storedGuideId) {
        try {
          const response = await fetch(`http://safaryapi.runasp.net/api/TourGuides/GetDetails?id=${storedGuideId}`);
          const data = await response.json();
          setGuide(data);
        } catch (err) {
          console.error('Error fetching tour guide:', err);
        }
      }
    };

    fetchTour();
    fetchGuide();
  }, [TourId]);

  useEffect(() => {
    const savedBookingDetails = localStorage.getItem('bookingDetails');
    if (savedBookingDetails) {
      setBookingDetails(JSON.parse(savedBookingDetails));
    }
  }, []);

  const handleCommentSubmit = () => {
    if (rate !== null && comment !== '') {
      const newComment = { name: 'Current User', photo: '/images/user.png', rate, comment };
      setComments([...comments, newComment]);
      setRate(null);
      setComment('');
    }
  };

  const handleConfirmClick = async () => {
    if (!tour) return;

    const authToken = localStorage.getItem('token'); // Retrieve the token from local storage

    try {
      const response = await fetch('http://safaryapi.runasp.net/api/Tours/SelectTourAndUpdateInSelectTourGuideTable', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify(tour.name),
      });

      if (response.ok) {
        router.push('/Tourist/paymentTour');
      } else {
        const responseData = await response.json();
        console.error('Error confirming tour:', responseData);
        alert('Error confirming tour. Please try again.');
      }
    } catch (error) {
      console.error('Error confirming tour:', error);
      alert('An error occurred. Please try again.');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!tour || !guide) {
    return null;
  }

  return (
    <>
      <div className="max-w-4xl mx-auto p-4 rounded-lg">

        <CarouselComp images={[]}  />
        <img
          src={coverImage}
          alt="Tour"
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{tour.name}</h2>
          <p className="text-gray-600 mb-4">{tour.description}</p>
          <span className="flex justify-end">
            <button
              className="transition duration-1500 rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white ease-in-out hover:bg-orange-500/80"
              onClick={handleConfirmClick}
            >
              Confirm
            </button>
          </span>
          <span className="flex items-center mb-4">
            <img
              src={guide.imageUrl || '/default-photo.jpg'}
              alt={guide.fullName}
              className="w-14 h-14 object-cover rounded-full mr-4"
            />
            <span className="text-xl font-semibold">{guide.fullName} (Your Tour Guide)</span>
          </span>
          
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center">
              <span className="text-gray-800 font-medium">📍 {tour.location}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-800 font-medium">📅 {bookingDetails.date}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-800 font-medium">⏰ {bookingDetails.time} - {tour.duration} hours</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-800 font-medium">👫 {bookingDetails.adults} adults</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-800 font-medium"> {guide.hasCar ? '🚗 Car available' : '🚶 Walking tour'}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-800 font-medium">💰 ${guide.hourPrice}</span>
            </div>
          </div>
          
          {/* New Section: Dynamic Tour Highlights */}
          
          <br /><br />
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Including:</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Private Guide</li>
              <li>10 Local Food & Drink Tastings</li>
              <li>Vegetarian Options Available</li>
              <li>All Withlocals Tours are Carbon Neutral</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">6 reasons to book this tour</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Can be 100% customized to your food wishes</li>
              <li>Taste the best of the cuisine</li>
              <li>Try classic Koshary & Ful Medames at real local hotspots</li>
              <li>10 local tastings</li>
              <li>Stop to see highlights of the city along the way</li>
              <li>It’s not just food; it’s local culture</li>
            </ul>
          </div>

          {/* Confirm Button (End of Component) */}
          <div className="flex justify-center mt-8">
            <button
              className="transition duration-1500 rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white ease-in-out hover:bg-orange-500/80"
              onClick={handleConfirmClick}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
      {/* Rating and Comment Section */}
      <div className="mt-6 ml-7 w-1/2 rounded-lg p-6">
        <h3 className="text-xl font-semibold">Rate This Tour</h3>
        <div className="flex space-x-2 mt-2">
          {[1, 2, 3, 4, 5].map(star => (
            <button
              key={star}
              className={`text-2xl ${rate >= star ? 'text-yellow-500' : 'text-gray-400'}`}
              onClick={() => setRate(star)}
            >
              ★
            </button>
          ))}
        </div>
        {rate !== null && (
          <div className="mt-4">
            <textarea
              id="comment"
              className="w-full mt-1 p-2 border rounded-full"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <br />
            <button
              onClick={handleCommentSubmit}
              className="mt-2 px-4 py-2 bg-orange-500 text-white rounded mb-5"
            >
              Submit
            </button>
          </div>
        )}
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Comments</h3>
          {comments.map((c, index) => (
            <div key={index} className="mt-4 flex items-start space-x-4">
              <img src={c.photo} alt={c.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="text-lg font-semibold">{c.name}</h4>
                <div className="text-yellow-500">
                  {'★'.repeat(c.rate)}{'☆'.repeat(5 - c.rate)}
                </div>
                <p className="text-gray-600">{c.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TourDetails;
