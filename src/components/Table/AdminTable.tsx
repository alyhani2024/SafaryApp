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
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phoneNumber: "",
    image: null,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://safaryapi.runasp.net/api/Admin")
      .then((response) => {
        const users = response.data.map((user, index) => ({
          id: user.id,
          isDeleted: user.isDeleted ? "Yes":"No" ,
          fullName: user.fullName,
          email: user.email,
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
      .post("http://safaryapi.runasp.net/api/Account/Register-As-Admin", {
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

  const handleDelete = (userId) => {
    axios
      .delete(`http://safaryapi.runasp.net/api/Admin/${userId}`)
      .then(() => {
        console.log("User deleted successfully!");
        fetchData(); // Refresh data after deleting user
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
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
                  {Object.keys(filteredData[0] || {}).map((key, index) => (
                    <th
                      key={index}
                      className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500"
                    >
                      {key}
                    </th>
                  ))}
                  <th className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredData.map((user, index) => (
                  <tr key={index}>
                    {Object.keys(user).map((key, index) => (
                      <td
                        key={index}
                        className="whitespace-nowrap px-6 py-4 text-sm text-gray-800"
                      >
                        {user[key]}
                      </td>
                    ))}
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-700"
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
