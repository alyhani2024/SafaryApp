"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

function UserTable() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    fullName: "",
    userName: "",
    email: "user@example.com",
    password: "",
    confirmPassword: "",
    address: "",
    phoneNumber: "01060102694",
    image: null,
  });

  useEffect(() => {
    fetchData();
  }, []);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const fetchData = () => {
    axios
      .get(`${apiUrl}/Admin`)
      .then((response) => {
        const users = response.data.map((user) => ({
          id: user.id,
          isDeleted: user.isDeleted,
          fullName: user.fullName,
          email: user.email,
          adminAccepted: user.adminAccepted,
        }));
        setData(users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleAddButtonClick = () => {
    setIsPopupVisible(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSave = () => {
    axios
      .post(`${apiUrl}/Account/Register-As-Admin`, {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        fullName: newUser.fullName,
        userName: newUser.userName,
        email: newUser.email,
        address: newUser.address,
        phoneNumber: newUser.phoneNumber,
        password: newUser.password,
        confirmPassword: newUser.confirmPassword,
      })
      .then((response) => {
        console.log("User added successfully!", response.data);
        fetchData(); // Refresh data after adding user
        setIsPopupVisible(false); // Close popup after adding user
      })
      .catch((error) => {
        console.error("Error adding user:", error.response.data);
        // Handle specific field errors here
        // Example: you can display error messages related to specific fields
      });
  };

  const toggleDeleteStatus = (userId, isDeleted) => {
    axios
      .post(`${apiUrl}/Admin/ToggleStatus/${userId}`)
      .then(() => {
        console.log("User delete status toggled successfully!");
        fetchData(); // Refresh data after toggling status
      })
      .catch((error) => {
        console.error("Error toggling delete status:", error);
      });
  };

  const toggleAcceptedStatus = (userId) => {
    axios
      .post(`${apiUrl}/Admin/AccepdedToggleStatus/${userId}`)
      .then(() => {
        console.log("User accepted status toggled successfully!");
        fetchData(); // Refresh data after toggling status
      })
      .catch((error) => {
        console.error("Error toggling accepted status:", error);
      });
  };

  const filteredData = data.filter((user) =>
    `${user.fullName}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="inline-block min-w-full p-1.5 align-middle">
          <div className="overflow-hidden rounded-lg border">
            <div className="flex items-center justify-between p-4">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleSearch}
                className="rounded border px-2 py-1"
              />
              <button
                type="button"
                onClick={handleAddButtonClick}
                className="m-1 inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                Add
              </button>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500">
                    ID
                  </th>
                  <th className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500">
                    Full Name
                  </th>
                  <th className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500">
                    Email
                  </th>
                  <th className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500">
                    Is Deleted
                  </th>
                  
                  <th className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500">
                    Toggle Delete 
                  </th>
                  <th className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500">
                    Is Accepted
                  </th>
                  <th className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500">
                    Toggle Is Accepted
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredData.map((user, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                      {user.id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                      {user.fullName}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                      {user.email}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                      {user.isDeleted ? "Yes" : "No"}
                    </td>
                    
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                      <button
                        onClick={() => toggleDeleteStatus(user.id, user.isDeleted)}
                        className={`inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent ${
                          user.isDeleted
                            ? "text-green-600 bg-green-200 hover:bg-green-300"
                            : "text-red-600 bg-red-200 hover:bg-red-300"
                        }`}
                      >
                        {user.isDeleted ? 'Restore' : 'Delete'}
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                      {user.adminAccepted ? "Yes" : "No"}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                      <button
                        onClick={() => toggleAcceptedStatus(user.id)}
                        className={`inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent ${
                          user.adminAccepted
                            ? "text-red-600 bg-red-200 hover:bg-red-300"
                            : "text-green-600 bg-green-200 hover:bg-green-300"
                        }`}
                      >
                        {user.adminAccepted ? 'Unaccept' : 'Accept'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add User Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-white bg-opacity-50">
          <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-lg font-semibold">Add User</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  "email",
                  "address",
                  "fullName",
                  "lastName",
                  "password",
                  "userName",
                  "firstName",
                  "phoneNumber",
                  "confirmPassword",
                ].map((key, index) => (
                  <input
                    key={index}
                    type={key.includes("password") ? "password" : "text"}
                    placeholder={key
                      .replace(/([A-Z])/g, " $1")
                      .toLowerCase()
                      .replace(/^./, function (str) {
                        return str.toUpperCase();
                      })}
                    name={key}
                    value={newUser[key]}
                    onChange={handleInputChange}
                    className="w-full rounded border px-3 py-2"
                  />
                ))}
              </div>
              <button
                onClick={handleSave}
                className="rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
              >
                Save
              </button>
              <button
                onClick={() => setIsPopupVisible(false)}
                className="rounded-lg bg-gray-300 px-4 py-2 font-semibold text-gray-800 hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserTable;
