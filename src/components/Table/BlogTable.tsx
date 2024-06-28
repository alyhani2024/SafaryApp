"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = "http://safaryapi.runasp.net/api/Blog/GetAll";
const PUT_URL = "http://safaryapi.runasp.net/api/Blog/";
const POST_URL = "http://safaryapi.runasp.net/api/Blog/";

function BlogTable() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [newBlog, setNewBlog] = useState({ id: '', title: '', coverImage: '', description: '', startDate: '', endDate: '', isDeleted: false, content: '', duration: '', tours: [] });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleAddButtonClick = () => {
    setNewBlog({ id: '', title: '', coverImage: '', description: '', startDate: '', endDate: '', isDeleted: false, content: '', duration: '', tours: [] });
    setIsPopupVisible(true);
  };

  const handleEditButtonClick = (blog) => {
    setNewBlog(blog);
    setIsPopupVisible(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const handleSaveBlog = async () => {
    try {
      if (newBlog.id) {
        await axios.put(`${PUT_URL}/${newBlog.id}`, newBlog);
      } else {
        await axios.post(POST_URL, newBlog);
      }
      setIsPopupVisible(false);
      fetchBlogs(); // Refresh the data after adding/editing a blog
    } catch (error) {
      console.error('Error saving blog:', error);
    }
  };

  const handleDeleteBlog = async (blogId) => {
    try {
      // Implement delete logic here
      console.log('Delete blog with ID:', blogId);
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const filteredData = data.filter(blog =>
    blog.title.toLowerCase().includes(search.toLowerCase())
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
                    Title
                  </th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Cover Image
                  </th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Description
                  </th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Start Date
                  </th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    End Date
                  </th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Is Deleted
                  </th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Content
                  </th>
                  <th className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Tours
                  </th>
                  <th className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                {filteredData.map((blog) => (
                  <tr key={blog.id}>
                    <td className="py-3 ps-4">
                      <div className="flex items-center h-5">
                        <input
                          id={`hs-table-checkbox-${blog.id}`}
                          type="checkbox"
                          className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        />
                        <label htmlFor={`hs-table-checkbox-${blog.id}`} className="sr-only">
                          Checkbox
                        </label>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-normal break-words text-sm font-medium text-gray-800 dark:text-neutral-200">
                      {blog.title}
                    </td>
                    <td className="px-6 py-4 whitespace-normal break-words text-sm text-gray-800 dark:text-neutral-200">
                      <img src={blog.coverImage} alt={blog.title} className="h-10 w-10 object-cover rounded-full" />
                    </td>
                    <td className="px-6 py-4 whitespace-normal break-words text-sm text-gray-800 dark:text-neutral-200">
                      {blog.description}
                    </td>
                    <td className="px-6 py-4 whitespace-normal break-words text-sm text-gray-800 dark:text-neutral-200">
                      {new Date(blog.startDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-normal break-words text-sm text-gray-800 dark:text-neutral-200">
                      {new Date(blog.endDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-normal break-words text-sm text-gray-800 dark:text-neutral-200">
                      {blog.isDeleted ? 'Yes' : 'No'}
                    </td>
                    <td className="px-6 py-4 whitespace-normal break-words text-sm text-gray-800 dark:text-neutral-200">
                      {blog.content}
                    </td>
                    <td className="px-6 py-4 whitespace-normal break-words text-sm text-gray-800 dark:text-neutral-200">
                      {blog.duration}
                    </td>
                    <td className="px-6 py-4 whitespace-normal break-words text-sm text-gray-800 dark:text-neutral-200">
                      <ul>
                        {blog.tours.map((tour) => (
                          <li key={tour.id}>{tour.name}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        onClick={() => handleEditButtonClick(blog)}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-400 mx-2"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteBlog(blog.id)}
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
            <h2 className="text-lg font-semibold mb-4">Add/Edit Blog</h2>
            <div className="mb-2">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={newBlog.title}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                name="coverImage"
                placeholder="Cover Image URL"
                value={newBlog.coverImage}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
            </div>
            <div className="mb-2">
              <textarea
                name="description"
                placeholder="Description"
                value={newBlog.description}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1 resize-y min-h-[80px]"
                style={{ minHeight: '80px', maxHeight: '200px', overflowY: 'auto' }}
              />
            </div>
            <div className="mb-2">
              <input
                type="date"
                name="startDate"
                value={newBlog.startDate}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
            </div>
            <div className="mb-2">
              <input
                type="date"
                name="endDate"
                value={newBlog.endDate}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1"
              />
            </div>
            <div className="mb-2">
              <input
                type="checkbox"
                name="isDeleted"
                checked={newBlog.isDeleted}
                onChange={() => setNewBlog({ ...newBlog, isDeleted: !newBlog.isDeleted })}
                className="m-1"
              />
              <label htmlFor="isDeleted" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Is Deleted</label>
            </div>
            <div className="mb-2">
              <textarea
                name="content"
                placeholder="Content"
                value={newBlog.content}
                onChange={handleInputChange}
                className="border rounded px-2 py-1 m-1 resize-y min-h-[80px]"
                style={{ minHeight: '80px', maxHeight: '200px', overflowY: 'auto' }}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="duration"
                placeholder="Duration"
                value={newBlog.duration}
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
                onClick={handleSaveBlog}
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

export default BlogTable;
