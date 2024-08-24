import React from "react";
import "./Header.css";
import DarkModeSwitch from "../Components/DarkMode/DarkModeSwitch.jsx";

const Header = () => {
  return (
    <div className="container">
      <section>
        <h2 className="headerText">Social Media Dashboard</h2>
        <span className="tFollowers">Total Followers: 23,004</span>
      </section>
      <div className="dark">
        <span className="darkText">Dark mode</span>
        <DarkModeSwitch />
      </div>
    </div>
  );
};

export default Header;
