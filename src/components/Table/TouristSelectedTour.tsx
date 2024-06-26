"use client";
import { useState } from 'react';

const initialData = [
  { id: 1, name: 'John Brown', age: 45, address: 'New York No. 1 Lake Park' },
  { id: 2, name: 'Jim Green', age: 27, address: 'London No. 1 Lake Park' },
  { id: 3, name: 'Joe Black', age: 31, address: 'Sidney No. 1 Lake Park' },
  { id: 4, name: 'Edward King', age: 16, address: 'LA No. 1 Lake Park' },
  { id: 5, name: 'Jim Red', age: 45, address: 'Melbourne No. 1 Lake Park' },
];

function TouristSelectedTour() {
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', age: '', address: '' });

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


  const filteredData = data.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
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
                  <th className="py-3 ps-4">
                    <div className="flex items-center h-5">
                      <input
                        id="hs-table-checkbox-all"
                        type="checkbox"
                        className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      />
                      <label htmlFor="hs-table-checkbox-all" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Name
                  </th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Age
                  </th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Address
                  </th>
                  <th className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                {filteredData.map((user) => (
                  <tr key={user.id}>
                    <td className="py-3 ps-4">
                      <div className="flex items-center h-5">
                        <input
                          id={`hs-table-checkbox-${user.id}`}
                          type="checkbox"
                          className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        />
                        <label htmlFor={`hs-table-checkbox-${user.id}`} className="sr-only">
                          Checkbox
                        </label>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {user.age}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {user.address}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 mx-2"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:hover:text-red-400 mx-2"
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
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg z-60">
            <h2 className="text-lg font-semibold mb-4">Add New User</h2>
            <div className="mb-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newUser.name}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                name="age"
                placeholder="Age"
                value={newUser.age}
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

export default TouristSelectedTour;
