"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';


const apiUrl = process.env.NEXT_PUBLIC_API_URL;

interface Blog {
  id: number;
  title: string;
  coverImage: string;
  description: string;
  content: string;
  tours: Tour[];
}

interface Tour {
  id: number;
  name: string;
  coverImage: string;
  description: string;
}

const SingleBlogDetails = ({ Id }: { Id: number }) => {
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await axios.get(`${apiUrl}/Blog/${Id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog details:', error);
      }
    };

    fetchBlogDetails();
  }, [Id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <Link href={`/Tourist/payment`} className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 px-9 rounded-full text-lg whitespace-nowrap">
          Join In
        </Link>
      </div>
      <div>
        <img className="w-full h-64 object-cover" src={blog.coverImage} alt={blog.title} />
      </div>
      <div className="mt-4">
        <p className="text-gray-700 dark:text-gray-300 text-base">{blog.description}</p>
        <div className="mt-4 text-gray-700 dark:text-gray-300 text-base">
          {blog.content}
        </div>
      </div>
      {blog.tours.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Tours</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {blog.tours.map((tour) => (
              <div key={tour.id} className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-700">
                <img className="w-full h-32 object-cover" src={tour.coverImage} alt={tour.name} />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{tour.name}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base">{tour.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBlogDetails;
