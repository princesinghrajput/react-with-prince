import React from "react";
import "./BlogCard.css";
import avatar from "./assets/avatar.jpg";
import img1 from "./assets/Article_Image (1).png";
const BlogCard = () => {
  return (
    <div className="blog-data">
      <img src={img1} alt="img" />
      <h2>How to make GUI in Java with Example Example</h2>
      <hr />
      <div className="blog-footer">
        <div>
          <img src={avatar} alt="img" className="blog-data-img" />
        </div>
        <div className="blog-footer-p">
          <p className="p-name">Prince Kumar</p>
          <p className="p-date">Jan 10, 2022</p>
        </div>
        <div className="heart">
          <i className="fa-solid fa-heart" /> 03
        </div>
        <div className="comment">
          <i className="fa-solid fa-comment" /> 12
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
