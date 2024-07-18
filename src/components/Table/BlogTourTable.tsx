"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';


const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const GET_ALL_URL = `${apiUrl}/TourBlogs/GetAll`;
const POST_URL = `${apiUrl}/TourBlogs`;
const PUT_URL = `${apiUrl}/TourBlogs/`;
const TOGGLE_STATUS_URL = `${apiUrl}/TourBlogs/ToggleStatus/`;
function BlogTourTable() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(GET_ALL_URL);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleAddButtonClick = () => {
    setSelectedBlog(null);
    setIsPopupVisible(true);
  };

  const handleEditButtonClick = (blog) => {
    setSelectedBlog(blog);
    setIsPopupVisible(true);
  };

  const handleToggleDelete = async (id) => {
    try {
      await axios.post(`${TOGGLE_STATUS_URL}${id}`);
      fetchBlogs();
    } catch (error) {
      console.error('Error toggling delete status:', error);
    }
  };

  const handleSaveBlog = async (formData) => {
    try {
      if (formData.id) {
        await axios.put(`${PUT_URL}${formData.id}`, formData);
      } else {
        await axios.post(POST_URL, formData);
      }
      setIsPopupVisible(false);
      fetchBlogs();
    } catch (error) {
      console.error('Error saving blog:', error);
    }
  };

  const filteredData = data.filter(blog =>
    blog.name.toLowerCase().includes(search.toLowerCase())
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
                    Cover Image
                  </th>
                  <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Blog ID
                  </th>
                  <th className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                    Is Deleted
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                      {blog.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {blog.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      <img src={blog.coverImage} alt={blog.name} className="h-10 w-10 object-cover rounded-full" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {blog.blogId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                      {blog.isDeleted ? 'Yes' : 'No'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        onClick={() => handleEditButtonClick(blog)}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 mx-2"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleToggleDelete(blog.id)}
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:hover:text-red-400 mx-2"
                      >
                        {blog.isDeleted ? 'Restore' : 'Delete'}
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
            <h2 className="text-lg font-semibold mb-4">{selectedBlog ? 'Edit Tour Blog' : 'Add Tour Blog'}</h2>
            <div className="mb-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={selectedBlog?.name || ''}
                onChange={(e) => setSelectedBlog({ ...selectedBlog, name: e.target.value })}
                className="border rounded px-2 py-1 m-1"
              />
            </div>
            <div className="mb-2">
              <textarea
                name="description"
                placeholder="Description"
                value={selectedBlog?.description || ''}
                onChange={(e) => setSelectedBlog({ ...selectedBlog, description: e.target.value })}
                className="border rounded px-2 py-1 m-1 resize-y min-h-[80px]"
                style={{ minHeight: '80px', maxHeight: '200px', overflowY: 'auto' }}
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                name="coverImage"
                placeholder="Cover Image URL"
                value={selectedBlog?.coverImage || ''}
                onChange={(e) => setSelectedBlog({ ...selectedBlog, coverImage: e.target.value })}
                className="border rounded px-2 py-1 m-1"
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                name="blogId"
                placeholder="Blog ID"
                value={selectedBlog?.blogId || ''}
                onChange={(e) => setSelectedBlog({ ...selectedBlog, blogId: e.target.value })}
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
                onClick={() => handleSaveBlog(selectedBlog)}
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

export default BlogTourTable;
