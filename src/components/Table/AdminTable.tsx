"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';

function UserTable() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [newUser, setNewUser] = useState({
    id: null,
    isDeleted: false,
    createdOn: '',
    adminAccepted: false,
    cvUrl: '',
    imageUrl: '',
    description: '',
    rate: 0,
    dayPrice: 0,
    hourPrice: 0,
    age: 0,
    bio: '',
    languageSpoken: [],
    firstName: '',
    lastName: '',
    fullName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phoneNumber: ''
  });

  useEffect(() => {
    axios.get('http://safariapi.runasp.net/api/Account/GetAllUsers')
      .then(response => {
        const users = response.data.map((user, index) => ({
          id: index + 1,
          isDeleted: user.isDeleted,
          createdOn: user.createdOn,
          adminAccepted: user.adminAccepted,
          cvUrl: user.cvUrl,
          imageUrl: user.imageUrl,
          description: user.description,
          rate: user.rate,
          dayPrice: user.dayPrice,
          hourPrice: user.hourPrice,
          age: user.age,
          bio: user.bio,
          languageSpoken: user.languageSpoken,
          firstName: user.firstName,
          lastName: user.lastName,
          fullName: user.fullName,
          userName: user.userName,
          email: user.email,
          password: user.password,
          confirmPassword: user.confirmPassword,
          address: user.address,
          phoneNumber: user.phoneNumber
        }));
        setData(users);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleAddButtonClick = () => {
    setNewUser({
      id: null,
      isDeleted: false,
      createdOn: '',
      adminAccepted: false,
      cvUrl: '',
      imageUrl: '',
      description: '',
      rate: 0,
      dayPrice: 0,
      hourPrice: 0,
      age: 0,
      bio: '',
      languageSpoken: [],
      firstName: '',
      lastName: '',
      fullName: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      address: '',
      phoneNumber: ''
    });
    setIsPopupVisible(true);
  };

  const handleEditButtonClick = (user) => {
    setNewUser(user);
    setIsPopupVisible(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: name === 'age' || name === 'rate' || name === 'dayPrice' || name === 'hourPrice' ? parseInt(value, 10) : value });
  };

  const handleSave = () => {
    if (newUser.id === null) {
      setData([...data, { ...newUser, id: data.length + 1 }]);
    } else {
      setData(data.map(user => (user.id === newUser.id ? newUser : user)));
    }
    setIsPopupVisible(false);
  };

  const filteredData = data.filter(user =>
    `${user.firstName} ${user.lastName}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg overflow-hidden dark:border-neutral-700">
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
                className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-400 m-1"
              >
                Add
              </button>
            </div>
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead className="bg-gray-50 dark:bg-neutral-700">
                <tr>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">ID</th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Is Deleted</th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Created On</th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Admin Accepted</th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">CV URL</th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Image URL</th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Description</th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Rate</th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Day Price</th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Hour Price</th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Age</th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Bio</th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Language Spoken</th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">First Name</th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Last Name</th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Full Name</th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Username</th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Email</th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Password</th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Confirm Password</th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Address</th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Phone Number</th>
                  <th className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                {filteredData.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{user.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.isDeleted.toString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{new Date(user.createdOn).toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.adminAccepted.toString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.cvUrl || 'N/A'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.imageUrl || 'N/A'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.description || 'N/A'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.rate}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.dayPrice}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.hourPrice}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.age}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.bio || 'N/A'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.languageSpoken.join(', ') || 'N/A'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.firstName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.lastName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.fullName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.userName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.password || 'N/A'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.confirmPassword || 'N/A'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.address}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.phoneNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-end">
                      <button
                        type="button"
                        onClick={() => handleEditButtonClick(user)}
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-400"
                      >
                        Edit
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={newUser.firstName}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={newUser.lastName}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="userName"
                placeholder="Username"
                value={newUser.userName}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={newUser.email}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={newUser.age}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={newUser.phoneNumber}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={newUser.address}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
              <input
                type="text"
                name="bio"
                placeholder="Bio"
                value={newUser.bio}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="languageSpoken"
                placeholder="Languages Spoken"
                value={newUser.languageSpoken.join(', ')}
                onChange={(e) => handleInputChange({ target: { name: 'languageSpoken', value: e.target.value.split(', ') } })}
                className="border rounded px-2 py-1 m-1"
              />
              <input
                type="text"
                name="cvUrl"
                placeholder="CV URL"
                value={newUser.cvUrl}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="imageUrl"
                placeholder="Image URL"
                value={newUser.imageUrl}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={newUser.description}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                name="rate"
                placeholder="Rate"
                value={newUser.rate}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
              <input
                type="number"
                name="dayPrice"
                placeholder="Day Price"
                value={newUser.dayPrice}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                name="hourPrice"
                placeholder="Hour Price"
                value={newUser.hourPrice}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={newUser.password}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={newUser.confirmPassword}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setIsPopupVisible(false)}
                className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-600 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-400 m-1"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-orange-600 hover:text-orange-800 dark:text-orange-500 dark:hover:text-orange-400 m-1"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserTable;
