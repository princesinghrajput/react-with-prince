import React from "react";
import "./Body.css";
import BlogCard from "./BlogCard";

const Body = () => {
  return (
    <div className="main">
      <h2>Blog Posts</h2>
      <div className="blog-container">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Body;
