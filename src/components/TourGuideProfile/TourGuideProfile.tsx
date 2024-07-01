// components/TourGuideProfile.tsx
import React, { useState, useEffect } from 'react';
import { Car } from 'lucide-react';
import Link from 'next/link';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/navigation';

interface TourGuide {
  id: string;
  fullName: string;
  description: string;
  imageUrl: string;
  hourPrice: number;
  rate: number;
  reviewsNumber: number;
  languageSpoken: string[];
  hasCar: boolean;
  bio: string;
}

interface Appointment {
  id: number;
  touristId: string;
  tourguideId: string;
  selectedDate: string;
  selectedTime: string;
  adults: number;
  isConfirmed: boolean;
  tourName: string | null;
}

const TourGuideProfile = ({ GuideId }: { GuideId: string }) => {
  const [guide, setGuide] = useState<TourGuide | null>(null);
  const [adults, setAdults] = useState(1);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState('');
  const [rate, setRate] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<{ name: string, photo: string, rate: number, comment: string }[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchGuide = async () => {
      try {
        const response = await fetch(`http://safaryapi.runasp.net/api/TourGuides/${GuideId}`);
        const data = await response.json();
        setGuide(data);
      } catch (error) {
        console.error('Error fetching tour guide:', error);
      }
    };

    const fetchAppointments = async () => {
      try {
        const response = await fetch(`http://safaryapi.runasp.net/api/TourGuides/TourGuideTableById/${GuideId}`);
        const data = await response.json();
        localStorage.setItem('SelectedTourGuide', (`${GuideId}`));
        setAppointments(data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchGuide();
    fetchAppointments();
  }, [GuideId]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !time) return;

    const selectedDate = date.toISOString();
    const payload = {
      TourGuideId: GuideId,
      SelectedDate: selectedDate,
      TimeToCast: time,
      Adults: adults
    };
    const authToken = localStorage.getItem('token'); // Replace with your actual token
    console.log(authToken);
    console.log('Submitting payload:', payload);

    try {
      const response = await fetch('http://safaryapi.runasp.net/api/TourGuides/AddTourGuideSelected', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();
      console.log('Response text:', responseText);

      if (response.ok) {
        alert('Booking successful!');
        router.push('/Tourist/BookTour'); // Redirect to the booking page
      } else {
        console.error('Booking failed:', responseText);
        alert('Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Error booking tour guide:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const isDisabled = !date || time === '';

  const getDisabledDates = () => {
    return appointments.map(app => new Date(app.selectedDate));
  };

  const disabledDates = getDisabledDates();

  if (!guide) {
    return <p>Loading...</p>; // Return a loading message while fetching data
  }

  return (
    <>
      <div className="flex flex-col md:flex-row items-start p-6 space-y-4 md:space-y-0 md:space-x-6">
        <div className="rounded-lg overflow-hidden md:w-2/3">
          <div className="flex items-center">
            <img src={guide.imageUrl || '/default-photo.jpg'} alt={guide.fullName} className="w-24 h-24 rounded-full object-cover mr-6" />
            <div>
              <h2 className="text-2xl font-bold">{guide.fullName}</h2>
              <p className="text-gray-600">{guide.description || 'No description provided.'}</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="mb-2">
              <span className="text-gray-800 font-semibold">Price per Hour: </span>${guide.hourPrice}
            </div>
            <div className="mb-2">
              <span className="text-gray-800 font-semibold">Rating: </span>{'★'.repeat(guide.rate)}{'☆'.repeat(5 - guide.rate)} ({guide.reviewsNumber} reviews)
            </div>
            <div className="mb-2">
              <span className="text-gray-800 font-semibold">Languages: </span>{guide.languageSpoken.join(', ')}
            </div>
            <div>
              <span className="text-gray-800 font-semibold"><Car className='inline' /> {guide.hasCar ? 'Car available' : 'No car available'}</span>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6 shadow-md md:w-1/3">
          <div className="mt-4">
            <label htmlFor="date" className="block text-gray-700">Select date</label>
            <DatePicker
              selected={date}
              onChange={(date: Date) => setDate(date)}
              minDate={new Date()}
              excludeDates={disabledDates}
              className="w-full mt-1 p-2 border rounded"
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
                  type="button"
                  onClick={() => setAdults(adults - 1)}
                  disabled={adults <= 1}
                  className="px-2 py-1 border rounded bg-gray-200"
                >-</button>
                <span className="mx-2">{adults}</span>
                <button
                  type="button"
                  onClick={() => setAdults(adults + 1)}
                  className="px-2 py-1 border rounded bg-gray-200"
                >+</button>
              </div>
            </div>
          </div>
          <button type="submit" className={`mt-4 w-full block text-center py-2 rounded transition duration-300 ${isDisabled ? 'bg-orange-300 cursor-not-allowed' : 'bg-orange-500 text-white hover:bg-orange-600'}`} disabled={isDisabled}>
            Book Now
          </button>
        </form>
      </div>
      {/* Rating and Comment Section */}
      <div className="mt-6 w-full rounded-lg p-6 shadow-md">
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
