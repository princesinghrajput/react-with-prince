import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="training">
          <div className="training-blog">
            <span>
              <h3>Training</h3>
            </span>
            <span>
              <h3 className="blog-text">Blog</h3>
            </span>
          </div>
          <p>
            Welcome to our technical blog, where we delve into the world of
            cutting-edge technologies and explore their practical applications.
          </p>
        </div>
        <div className="category">
          <h3 className="category-text">CATEGORY</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React Js</li>
          </ul>
        </div>
        <div className="touch-container">
          <h3 className="category-text">GET IN TOUCH</h3>
          <ul>
            <li>+91-8XXX-XXX-XX</li>
            <li>psr8084@gmail.com</li>
          </ul>
        </div>
        <div className="follow-container">
          <h3>FOLLOW US ON</h3>
          <div className="icon-container">
            <i className="fa-brands fa-twitter" />
            <i className="fa-brands fa-square-instagram" />
            <i className="fa-brands fa-linkedin" />
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-end">
        <p>© 2024 REACT-WITH-PRINCE</p>
        <p>MADE WITH ❤️ By Prince</p>
      </div>
    </>
  );
};

export default Footer;
