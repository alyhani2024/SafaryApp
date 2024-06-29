"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

interface Tourist {
  fullName: string;
  phoneNumber: string;
}

const AppointmentsTable = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [tourists, setTourists] = useState<{ [key: string]: Tourist }>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const guideId = localStorage.getItem('guideId');
        if (!guideId) {
          setError('Guide ID not found in local storage');
          return;
        }

        const response = await axios.get(`http://safaryapi.runasp.net/api/TourGuides/TourGuideTableById/${guideId}`);
        const appointmentsData = response.data;

        setAppointments(appointmentsData);

        const touristDetails: { [key: string]: Tourist } = {};
        await Promise.all(
          appointmentsData.map(async (appt: Appointment) => {
            if (!touristDetails[appt.touristId]) {
              const touristResponse = await axios.get(`http://safaryapi.runasp.net/api/Tourist/${appt.touristId}`);
              const touristData = touristResponse.data;
              touristDetails[appt.touristId] = {
                fullName: touristData.fullName,
                phoneNumber: touristData.phoneNumber,
              };
            }
          })
        );

        setTourists(touristDetails);
      } catch (err) {
        setError('Failed to fetch appointments');
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="overflow-x-auto">
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-orange-500 tracking-wider">Tourist Name</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-orange-500 tracking-wider">Tourist Phone</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-orange-500 tracking-wider">Date</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-orange-500 tracking-wider">Time</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-orange-500 tracking-wider">Adults</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-orange-500 tracking-wider">Tour Name</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-orange-500 tracking-wider">Confirmed</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {appointments.map((appt) => (
              <tr key={appt.id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{tourists[appt.touristId]?.fullName || 'Loading...'}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{tourists[appt.touristId]?.phoneNumber || 'Loading...'}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{new Date(appt.selectedDate).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{appt.selectedTime}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{appt.adults}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{appt.tourName ?? 'N/A'}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{appt.isConfirmed ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AppointmentsTable;
