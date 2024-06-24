// components/TourGuideProfile.tsx
import React, { useState, useEffect } from 'react';
import { Car } from 'lucide-react';
import Link from 'next/link';

const tourGuides = [
  { 
    id: "1",
    name: 'John Doe', 
    description: 'Experienced tour guide with knowledge in local history.', 
    photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg', 
    pricePerHour: 50,
    rate: 5,
    reviews: 120,
    languages: ['English', 'Arabic'],
    hascar: true
  },
  { 
    id: "2",
    name: 'Jane Smith', 
    description: 'Friendly and enthusiastic guide for all ages.', 
    photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg', 
    pricePerHour: 45,
    rate: 4,
    reviews: 98,
    languages: ['English', 'French'],
    hascar: false
  },
  { 
    id: "3",
    name: 'Michael Brown', 
    description: 'Specializes in food and cultural tours.', 
    photo: '/images/blog/post-03.jpg', 
    pricePerHour: 60,
    rate: 5,
    reviews: 110,
    languages: ['English', 'Spanish'],
    hascar: true
  },
];

const TourGuideProfile = ({ GuideId }: { GuideId: string }) => {
  const guide = tourGuides.find(t => t.id === GuideId);
  const [adults, setAdults] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [rate, setRate] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<{name: string, photo: string, rate: number, comment: string}[]>([]);

  useEffect(() => {
    // Save to local storage whenever inputs change
    const bookingDetails = { date, time, adults };
    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
  }, [date, time, adults]);

  const handleCommentSubmit = () => {
    if (rate !== null && comment !== '') {
      const newComment = { name: 'Current User', photo: '/images/user.png', rate, comment };
      setComments([...comments, newComment]);
      setRate(null);
      setComment('');
    }
  };

  if (!guide) {
    return null; // Return null if the tour or guide is not found
  }
  const isDisabled = date === '' || time === '';
  return (
    <>
    <div className="flex flex-col md:flex-row items-start p-6 space-y-4 md:space-y-0 md:space-x-6">
      <div className="rounded-lg overflow-hidden md:w-2/3">
        <div className="flex items-center">
          <img src={guide.photo} alt={guide.name} className="w-24 h-24 rounded-full object-cover mr-6" />
          <div>
            <h2 className="text-2xl font-bold">{guide.name}</h2>
            <p className="text-gray-600">{guide.description}</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="mb-2">
            <span className="text-gray-800 font-semibold">Price per Hour: </span>${guide.pricePerHour}
          </div>
          <div className="mb-2">
            <span className="text-gray-800 font-semibold">Rating: </span>{'★'.repeat(guide.rate)}{'☆'.repeat(5 - guide.rate)} ({guide.reviews} reviews)
          </div>
          <div className="mb-2">
            <span className="text-gray-800 font-semibold">Languages: </span>{guide.languages.join(', ')}
          </div>
          <div>
            <span className="text-gray-800 font-semibold"><Car className='inline'/> {guide.hascar ? 'car available' : 'No car available'}</span>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-white p-6 shadow-md md:w-1/3">
        <div className="mt-4">
          <label htmlFor="date" className="block text-gray-700">Select date</label>
          <input required
            type="date" 
            id="date" 
            className="w-full mt-1 p-2 border rounded" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="time" className="block text-gray-700">Select time</label>
          <input required
            type="time" 
            id="time" 
            className="w-full mt-1 p-2 border rounded" 
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">People</label>
          <div className="flex items-center justify-between mt-1 p-2 border rounded">
            <div className="flex items-center">
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
        </div>
        <Link href={isDisabled ? '#' : `/Tourist/BookTour`} passHref
        className={`mt-4 w-full block text-center py-2 rounded transition duration-300 ${
            isDisabled ? 'bg-orange-300 cursor-not-allowed' : 'bg-orange-500 text-white hover:bg-orange-600'
          }`}
          onClick={(e) => {
            if (isDisabled) {
              e.preventDefault();
            }
          }}
        >
          Book Now
        </Link>
      </div>

      
    </div>
    {/* Rating and Comment Section */}
    <div className="mt-6 w-full rounded-lg  p-6 shadow-md">
        <h3 className="text-xl font-semibold">Rate This Tour Guide</h3>
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
              className="w-1/2 mt-1 p-2 border rounded-full"
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

export default TourGuideProfile;
