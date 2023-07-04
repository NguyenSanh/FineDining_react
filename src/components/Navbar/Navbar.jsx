import React from 'react';

/* Import simple hamburger button from React library */
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

/* Import all images from the images.js file */
import images from '../../constants/images'; // '../' is used to move up a directory

/* Import the CSS file used to style Navbar.jsx */
import './Navbar.css';

const Navbar = () => (
  <div className="app__navbar">
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className='app__navbar-links'>
      <li className="p__opensans"> <a href="#home">Home</a></li>
      <li className="p__opensans"> <a href="#about">About</a></li>
      <li className="p__opensans"> <a href="#menu">Menu</a></li>
      <li className="p__opensans"> <a href="#awards">Awards</a></li>
      <li className="p__opensans"> <a href="#contact">Contact</a></li>
    </ul>
    <div className="app__navbar-login">
      <a href="#login" className="p__opensans">Log In / Register</a>
      <div/>
      <a href="/" className='p__opensans'> Book Table </a>
    </div>
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color= "#FFF " fontSize={27} onClick={() => {}} />
    </div>
  </div>
);

export default Navbar;
