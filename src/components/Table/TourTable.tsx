"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';

const GET_TOURS_API = "http://safaryapi.runasp.net/api/Tours/GetAll";
const ADD_TOUR_API = "http://safaryapi.runasp.net/api/Tours";
const TOGGLE_STATUS_API = "http://safaryapi.runasp.net/api/Tours/ToggleStatus/";
const ADD_TOUR_IMAGES_API = "http://safaryapi.runasp.net/api/Tours/AddTourImages";

function TourTable() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [newTour, setNewTour] = useState({ name: '', description: '', location: '', duration: 0 });
  const [editTourId, setEditTourId] = useState(null);
  const [imagePopup, setImagePopup] = useState({ isVisible: false, tourName: '', imageUrl: '' });

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const response = await axios.get(GET_TOURS_API);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching tours:', error);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleAddButtonClick = () => {
    setIsPopupVisible(true);
    setEditTourId(null);
    setNewTour({ name: '', description: '', location: '', duration: 0 });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTour({ ...newTour, [name]: value });
  };

  const handleSave = async () => {
    try {
      await axios.post(ADD_TOUR_API, newTour);
      fetchTours();
      setIsPopupVisible(false);
    } catch (error) {
      console.error('Error saving tour:', error);
    }
  };

  const handleToggleStatus = async (name) => {
    try {
      await axios.post(`${TOGGLE_STATUS_API}${name}`);
      fetchTours();
    } catch (error) {
      console.error('Error toggling status:', error);
    }
  };

  const handleImageInputChange = (e) => {
    const { value } = e.target;
    setImagePopup({ ...imagePopup, imageUrl: value });
  };

  const handleAddImage = async () => {
    try {
      await axios.post(ADD_TOUR_IMAGES_API, {
        tourName: imagePopup.tourName,
        imageUrls: [imagePopup.imageUrl],
      });
      fetchTours();
      setImagePopup({ isVisible: false, tourName: '', imageUrl: '' });
    } catch (error) {
      console.error('Error adding image:', error);
    }
  };

  const filteredData = data.filter(tour =>
    tour.name.toLowerCase().includes(search.toLowerCase())
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
                    Description
                  </th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Location
                  </th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Images
                  </th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Is Deleted
                  </th>
                  <th className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                {filteredData.map((tour) => (
                  <tr key={tour.id}>
                    <td className="py-3 ps-4">
                      <div className="flex items-center h-5">
                        <input
                          id={`hs-table-checkbox-${tour.id}`}
                          type="checkbox"
                          className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        />
                        <label htmlFor={`hs-table-checkbox-${tour.id}`} className="sr-only">
                          Checkbox
                        </label>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                      {tour.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {tour.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {tour.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {tour.duration}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {tour.tourImages.map(image => (
                        <div key={image.imageUrl}>{image.imageUrl}</div>
                      ))}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {tour.isDeleted ? 'Yes' : 'No'}
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
                        onClick={() => handleToggleStatus(tour.name)}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:hover:text-red-400 mx-2"
                      >
                        {tour.isDeleted ? 'Restore' : 'Delete'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setImagePopup({ isVisible: true, tourName: tour.name, imageUrl: '' })}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-green-600 hover:text-green-800 disabled:opacity-50 disabled:pointer-events-none dark:text-green-500 dark:hover:text-green-400 mx-2"
                      >
                        Add Image
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
            <h2 className="text-lg font-semibold mb-4">{editTourId ? 'Edit Tour' : 'Add New Tour'}</h2>
            <div className="mb-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newTour.name}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={newTour.description}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={newTour.location}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
            </div>
            <div className="mb-2">
              <input
                type="number"
                name="duration"
                placeholder="Duration"
                value={newTour.duration}
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
      {imagePopup.isVisible && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg z-60">
            <h2 className="text-lg font-semibold mb-4">Add Image for {imagePopup.tourName}</h2>
            <div className="mb-2">
              <input
                type="text"
                name="imageUrl"
                placeholder="Image URL"
                value={imagePopup.imageUrl}
                onChange={handleImageInputChange}
                className="border rounded px-2 py-1 m-1"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setImagePopup({ isVisible: false, tourName: '', imageUrl: '' })}
                className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-600 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-400 m-1"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleAddImage}
                className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-green-600 hover:text-green-800 dark:text-green-500 dark:hover:text-green-400 m-1"
              >
                Add Image
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TourTable;
