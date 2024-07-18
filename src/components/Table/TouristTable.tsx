"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TouristTable() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`${apiUrl}/Tourist/GetAllTourist`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter(tourist =>
    `${tourist.firstName} ${tourist.lastName}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg overflow-hidden">
            <div className="p-4 flex justify-between items-center">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleSearch}
                className="border rounded px-2 py-1"
              />
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">First Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Username</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone Number</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredData.map((tourist, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{tourist.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{tourist.firstName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{tourist.lastName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{tourist.userName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{tourist.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{tourist.phoneNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TouristTable;
