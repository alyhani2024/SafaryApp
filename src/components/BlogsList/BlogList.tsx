"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

interface Blog {
  id: number;
  title: string;
  coverImage: string;
  description: string;
}

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://safaryapi.runasp.net/api/Blog/GetAll');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} id={blog.id} title={blog.title} coverImage={blog.coverImage} description={blog.description} />
      ))}
    </div>
  );
};

export default BlogList;
