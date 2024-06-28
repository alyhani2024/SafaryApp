"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = "http://safaryapi.runasp.net/api/Reviews/TourGuideReviews";
const DELETE_URL = "http://safaryapi.runasp.net/api/Reviews/TourGuideReviews/";

function TourguideReviewsTable() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [newReview, setNewReview] = useState({ comment: '', rating: '', tourguideId: '' });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleAddButtonClick = () => {
    setIsPopupVisible(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${DELETE_URL}${id}`);
      fetchReviews();  // Refresh the data after deleting a review
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  const handleSave = async () => {
    try {
      await axios.post(API_URL, newReview);
      setIsPopupVisible(false);
      fetchReviews();  // Refresh the data after adding a new review
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  const filteredData = data.filter(review =>
    review.comment.toLowerCase().includes(search.toLowerCase())
  );

  const renderStars = (rating) => {
    if (rating === 0) {
      return '☆☆☆☆☆';
    }
    const filledStars = '★'.repeat(rating);
    const emptyStars = '☆'.repeat(5 - rating);
    return filledStars + emptyStars;
  };

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
                    Comment
                  </th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Rating
                  </th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Tourguide ID
                  </th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Created On
                  </th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Last Updated On
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
                {filteredData.map((review) => (
                  <tr key={review.id}>
                    <td className="py-3 ps-4">
                      <div className="flex items-center h-5">
                        <input
                          id={`hs-table-checkbox-${review.id}`}
                          type="checkbox"
                          className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        />
                        <label htmlFor={`hs-table-checkbox-${review.id}`} className="sr-only">
                          Checkbox
                        </label>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                      {review.comment}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {renderStars(review.rating)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {review.tourguideId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {review.createdOn ? new Date(review.createdOn).toLocaleString() : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {review.lastUpdatedOn ? new Date(review.lastUpdatedOn).toLocaleString() : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {review.isDeleted ? 'Yes' : 'No'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        onClick={() => handleDelete(review.id)}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400 mx-2"
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
            <h2 className="text-lg font-semibold mb-4">Add New Review</h2>
            <div className="mb-2">
              <input
                type="text"
                name="comment"
                placeholder="Comment"
                value={newReview.comment}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
            </div>
            <div className="mb-2">
              <input
                type="number"
                name="rating"
                placeholder="Rating (1-5)"
                value={newReview.rating}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="tourguideId"
                placeholder="Tourguide ID"
                value={newReview.tourguideId}
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

export default TourguideReviewsTable;
