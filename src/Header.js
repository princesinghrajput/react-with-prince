import React from "react";
import './Header.css'
import avatar from './assets/avatar.jpg'
const Header = () => {
    
  return (
    <div className="header">
      <div className="chatterly">
        <h3>
          Chatterly
          <sup>
            <i className="fa-solid fa-message" />
          </sup>
        </h3>
        <div className="user-container">
          <img src={avatar} alt="img" className="user-icon" />
          <span>
            <h4>Prince Kumar</h4>
          </span>
        </div>
      </div>
      <hr />
      <div className="filter">
        <div className="filter-1">
          <h4 className="filter-text">Filters</h4>
          <div className="div-line" />
          <div className="created">
            <h4>Created by</h4>
            <div className="select-container">
              <select>
                <option className="option-all">All</option>
              </select>
            </div>
          </div>
          <div className="created">
            <h4>Published Date</h4>
            <div className="select-container">
              <select>
                <option className="option-all">Select Date</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <div className="created">
            <h4>Search</h4>
            <div className="header-input">
              <input
                type="text"
                placeholder="Type here"
                className="type-here"
              />
              <span className="material-symbols-outlined search-icon">
                search
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
