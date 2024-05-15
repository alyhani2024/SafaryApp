"use client"
import React, { useState } from "react";

const PasswordUpdateForm = () => {
  // State for password fields
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Function to handle current password change
  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  // Function to handle new password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Function to handle confirmation password change
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here
    if (password === confirmPassword) {
      // Handle submit action (e.g., update password)
      console.log("Password updated:", password);
      // Clear password fields
      setCurrentPassword("");
      setPassword("");
      setConfirmPassword("");
    } else {
      // Handle password mismatch error
      console.log("Passwords do not match");
    }
  };

  // Function to handle cancel action
  const handleCancel = () => {
    // Handle cancel action (e.g., close modal)
    console.log("Password update canceled");
    // Clear password fields
    setCurrentPassword("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
      <div className="max-w-md w-full p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="currentPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            placeholder="Enter current password"
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            New Password
          </label>
          <input
            type="password"
            id="password"
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            placeholder="Enter new password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleCancel}
            className="border border-gray-300 px-4 py-2 rounded-md text-gray-700 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default PasswordUpdateForm;
