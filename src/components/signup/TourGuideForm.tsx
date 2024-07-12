import React, { useState } from 'react';
import axios from 'axios';

const TourGuideForm = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fullName: '', // Ensure fullName is included here
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phoneNumber: '',
    cv: null, // For file upload
    description: '',
    hourPrice: '',
    age: '',
    bio: '',
    languageSpoken: '',
    hasCar: false,
  });
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      cv: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataForApi = new FormData();
    formDataForApi.append('firstName', formData.firstName);
    formDataForApi.append('lastName', formData.lastName);
    formDataForApi.append('fullName', formData.fullName); // Append the FullName field
    formDataForApi.append('userName', formData.userName);
    formDataForApi.append('email', formData.email);
    formDataForApi.append('password', formData.password);
    formDataForApi.append('confirmPassword', formData.confirmPassword);
    formDataForApi.append('address', formData.address);
    formDataForApi.append('phoneNumber', formData.phoneNumber);
    formDataForApi.append('cv', formData.cv); // Append the CV file
    formDataForApi.append('description', formData.description);
    formDataForApi.append('hourPrice', formData.hourPrice);
    formDataForApi.append('age', formData.age);
    formDataForApi.append('bio', formData.bio);
    formDataForApi.append('languageSpoken', formData.languageSpoken); // Ensure this is a comma-separated string
    formDataForApi.append('hasCar', formData.hasCar.toString()); // Convert boolean to string

    try {
      const response = await axios.post(
        `${apiUrl}/Account/Register-As-TourGuide`,
        formDataForApi,
        {
          headers: {
            'Content-Type': 'multipart/form-data'  // Set Content-Type header
          },
        }
      );

      if (response.status === 200) {
        setSuccessMessage("Tour guide registered successfully!");
        setErrorMessage('');
        setTimeout(() => {
          window.location.href = "/"; // Redirect after successful registration
        }, 2000);
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    } catch (error) {
      console.error('Error response:', error.response);
      if (error.response && error.response.data) {
        const { errors } = error.response.data;
        if (errors) {
          for (const key in errors) {
            if (errors.hasOwnProperty(key)) {
              console.error(`${key}: ${errors[key]}`);
            }
          }
        }
        setErrorMessage(error.response.data.title || 'An error occurred. Please try again later.');
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-5">
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> {successMessage}</span>
        </div>
      )}
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {errorMessage}</span>
        </div>
      )}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Username:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="cv" className="block text-sm font-medium text-gray-700">CV:</label>
          <input
            type="file"
            id="cv"
            name="cv"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="hourPrice" className="block text-sm font-medium text-gray-700">Hour Price:</label>
          <input
            type="number"
            id="hourPrice"
            name="hourPrice"
            value={formData.hourPrice}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="languageSpoken" className="block text-sm font-medium text-gray-700">Language Spoken:</label>
          <input
            type="text"
            id="languageSpoken"
            name="languageSpoken"
            value={formData.languageSpoken}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="hasCar" className="block text-sm font-medium text-gray-700">Has Car:</label>
          <input
            type="checkbox"
            id="hasCar"
            name="hasCar"
            checked={formData.hasCar}
            onChange={handleInputChange}
            className="mt-1"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default TourGuideForm;
