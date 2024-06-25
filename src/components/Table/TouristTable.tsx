"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TouristTable() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phoneNumber: '',
    createdOn: '',
    imageUrl: '',
    age: 0,
    bio: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://safariapi.runasp.net/api/Tourist/GetAllTourist')
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

  const handleAddButtonClick = () => {
    setNewUser({
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      address: '',
      phoneNumber: '',
      createdOn: '',
      imageUrl: '',
      age: 0,
      bio: ''
    });
    setIsPopupVisible(true);
  };

  const handleEditButtonClick = (tourist) => {
    setNewUser(tourist);
    setIsPopupVisible(true);
  };

  const handleDeleteButtonClick = (id) => {
    axios.delete(`http://safariapi.runasp.net/api/Tourist/${id}`)
      .then(response => {
        fetchData(); // Refresh data after deletion
      })
      .catch(error => {
        console.error(`Error deleting tourist with ID ${id}:`, error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault(); // Prevent default form submission
    axios.post('http://safariapi.runasp.net/api/Tourist', newUser)
      .then(response => {
        fetchData(); // Refresh data after successful addition
        setIsPopupVisible(false);
      })
      .catch(error => {
        console.error("Error adding tourist:", error);
      });
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
              <button
                type="button"
                onClick={handleAddButtonClick}
                className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 m-1"
              >
                Add
              </button>
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleEditButtonClick(tourist)}
                        className="text-blue-600 hover:text-blue-800 mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteButtonClick(tourist.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-secondary-500 rounded-lg p-8 max-w-xl w-full h-1/2">
            <h2 className="text-lg font-semibold mb-4">Add Tourist</h2>
            <form onSubmit={handleSave}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={newUser.firstName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-black rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={newUser.lastName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-black rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Username</label>
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    value={newUser.userName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-black rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-black rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={newUser.password}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-black rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={newUser.confirmPassword}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-black rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={newUser.address}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-black rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={newUser.phoneNumber}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-black rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
                  <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    value={newUser.imageUrl}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-black rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={newUser.age}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-black rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={newUser.bio}
                    onChange={handleInputChange}
                    rows={3}
                    className="mt-1 block w-full border-black rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  ></textarea>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsPopupVisible(false)}
                  className="ml-2 inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TouristTable;
