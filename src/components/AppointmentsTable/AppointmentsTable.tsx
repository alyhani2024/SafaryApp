// components/AppointmentsTable.tsx
import React from 'react';
import { appointment } from '@/types/appointment';

const appointments: appointment[] = [
    { id: 1, touristName: 'John Doe', date: '2023-06-20', time: '10:00 AM', location: 'Beach' },
    { id: 2, touristName: 'Jane Smith', date: '2023-06-21', time: '11:00 AM', location: 'Museum' },
    // Add more appointments as needed
];
const AppointmentsTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-orange-500 tracking-wider">Tourist Name</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-orange-500 tracking-wider">Date</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-orange-500 tracking-wider">Time</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-orange-500 tracking-wider">Location</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {appointments.map((appt) => (
                        <tr key={appt.id}>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{appt.touristName}</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{appt.date}</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{appt.time}</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{appt.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentsTable;
