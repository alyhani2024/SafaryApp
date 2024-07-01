"use client";
import Link from 'next/link';
import React from 'react';

interface BlogCardProps {
  id: number;
  title: string;
  coverImage: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, coverImage, description }) => {
  return (
    <div className="flex flex-col max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-700 m-4">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={coverImage} alt={title} />
      </div>
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 dark:text-gray-300 text-base">{description}</p>
        </div>
      </div>
      <div className="p-6 pt-0">
        <Link href={`/TourGuide/blog/${id}`} className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-full w-full text-center">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
