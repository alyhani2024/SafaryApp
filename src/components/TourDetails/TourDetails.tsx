"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

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

const tours = [
  {
    id: '1',
    title: 'Off the Beaten Track in Cairo',
    location: 'Cairo',
    description: 'Connect with Ramses XII or one of other local hosts',
    photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    duration: 3,
    category: 'City highlight tour',
    plan : [
      { title: 'Meeting point', description: 'At the statue - Cairo', icon: '📍' },
      { title: '10 Tastings', description: 'This tour includes 10 food and drink tastings. Your local host has hand-picked each one of the tastings based on their love for food, and knowledge of the city. Enjoy only the most authentic bites the city has to offer!', icon: '🍽️' },
      { title: 'The Classics', description: 'A food tour in Cairo would not be complete without the most typical and beloved dishes in town. Enjoy a bite of the ultimate classics Koshary and Ful Medames and taste them in their true local flavor!', icon: '🌟' },
      { title: 'Locals’ Favorites', description: 'Discover more of the local cuisine by trying some of the ultimate locals’ favorites food treats. Try unique food, typical of Cairo picked by your local host and hear why they love it so much!', icon: '🍲' },
      { title: 'Typical Drinks', description: 'With drinks included as part of the tastings this real experience comes with a real local spirit! Your local host will quench your thirst with a selection of drinks like coffee, unique beverages, and alcoholic (or non-alcoholic) cocktails, wine and beer.', icon: '🥤' },
      { title: 'City Highlights', description: 'This tour is more than just food, it’s a cultural experience! In between food stops, discover city highlights for a well-rounded experience that will satisfy your appetite for Cairo. From food, drinks, must-sees and local hot spots; this tour has everything on the menu!', icon: '🏙️' },
      { title: 'Vegetarian Alternative', description: 'Looking for a vegetarian alternative? It’s possible! The tour has been created with alternative tastings to fit your preferences. Just let your host know!', icon: '🥗' },
      { title: 'Special Diet or Allergies?', description: 'If you follow a special diet or have an allergy to a specific food, let your host know! They’ll make sure to take that into consideration so you can have an enjoyable and safe experience.', icon: '🚫' }
    ]
  },
  {
    id: '2',
    title: 'Full Coverage Cairo City Tour',
    location: 'Alex',
    description: 'Connect with Withlocals or one of other local hosts',
    photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    duration: 4,
    category: 'City highlight tour',
    plan : [
      { title: 'Meeting point', description: 'At the main square - Alex', icon: '📍' },
      { title: 'City Walk', description: 'Walk through the historical streets and discover hidden gems of the city.', icon: '🚶' },
      { title: 'Visit Museums', description: 'Explore the local museums and learn about the rich history and culture.', icon: '🏛️' },
      { title: 'Lunch at Local Cafe', description: 'Enjoy a delicious lunch at a popular local cafe.', icon: '🍴' },
      { title: 'Shopping Spree', description: 'Shop at the best local markets and stores.', icon: '🛍️' }
    ]
  },
  {
    id: '3',
    title: 'Full Coverage Cairo City Tour',
    location: 'El Dweka',
    description: 'Connect with Withlocals or one of other local hosts',
    photo: '/images/Home/pexels-omar-elsharawy-5609738.jpg',
    duration: 5,
    category: 'City highlight tour',
    plan : [
      { title: 'Meeting point', description: 'At the park entrance - El Dweka', icon: '📍' },
      { title: 'Park Tour', description: 'Enjoy a guided tour through the beautiful park.', icon: '🌳' },
      { title: 'Bird Watching', description: 'Spot and learn about different bird species.', icon: '🦜' },
      { title: 'Picnic Lunch', description: 'Have a relaxing picnic lunch with great views.', icon: '🍱' },
      { title: 'Local Market Visit', description: 'Visit the bustling local market and experience the local lifestyle.', icon: '🛒' },
      { title: 'Cultural Show', description: 'End the day with a cultural show.', icon: '🎭' }
    ]
  },
  // Add more tours here...
];

const TourDetails = ({ TourId }: { TourId: string }) => {
  const [guideId, setGuideId] = useState('');
  const [rate, setRate] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<{name: string, photo: string, rate: number, comment: string}[]>([]);
  useEffect(() => {
    const storedGuideId = localStorage.getItem('guideId');
    if (storedGuideId) {
      setGuideId(storedGuideId);
    }
  }, []);

  const [bookingDetails, setBookingDetails] = useState({ date: '', time: '', adults: 1 });

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

  const tour = tours.find(t => t.id === TourId);
  const guide = tourGuides.find(t => t.id === guideId);

  if (!tour || !guide) {
    return null; // Return null if the tour or guide is not found
  }

  return (<>
  
    <div className="max-w-4xl mx-auto p-4 rounded-lg">
      <img
        src={tour.photo}
        alt="Tour"
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{tour.title}</h2>
        <p className="text-gray-600 mb-4">{tour.description}</p>
        {/* Confirm Button (Top Right) */}
        <span className="flex justify-end ">
          <Link className="transition duration-1500 rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white ease-in-out hover:bg-orange-500/80" href={`/Tourist/payment`}>
            Confirm
          </Link>
        </span>
        <span className="flex items-center mb-4">
          <img
            src={guide.photo}
            alt={guide.name}
            className="w-14 h-14 object-cover rounded-full mr-4"
          />
          <span className="text-xl font-semibold">{guide.name} (Your Tour Guide)</span>
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
            <span className="text-gray-800 font-medium"> {guide.hascar ? '🚗 Car available' : '🚶 Walking tour'}</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-800 font-medium">💰 ${guide.pricePerHour * tour.duration}</span>
          </div>
        </div>
        
        {/* New Section: Dynamic Tour Highlights */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Tour Plan</h3>
          <div className="relative">
            {/* <div className="absolute left-5 h-full border-l-4 border-orange-500"></div>*/}
            <div className="space-y-8 pl-10"> 
              {tour.plan.map((highlight, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-[-25px] mt-2 w-3 h-3 bg-orange-500 rounded-full"></div>
                  <h4 className="text-lg font-semibold">{highlight.icon} {highlight.title}</h4>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
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
          <Link className="transition duration-1500 rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white ease-in-out hover:bg-orange-500/80" href={`/Tourist/payment`}>
            Confirm
          </Link>
        </div>
      </div>
    </div>
    {/* Rating and Comment Section */}
    <div className="mt-6 ml-7 w-1/2 rounded-lg  p-6 ">
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
