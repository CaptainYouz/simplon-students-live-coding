import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src="https://i.pinimg.com/originals/17/f8/68/17f868d99a93d9aeff9643912c67c1ad.jpg" alt="logo" />
        </Link>
      </div>
      <div className="text">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};
export default NavBar;
