import React from 'react';

import { images } from '../../constants'; // Import image.js file
import './Header.css';
import { SubHeading } from '../../components'; // Import SubHeading component

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title='Maruchan Instant Noodles'/>
      <h1 className='app__header-h1'>The Key to Fine Cancer</h1>
      <p className='p__opensans' style = {{ margin: '2rem 0' }}>Maruchan noodles will save you plenty of cash!</p>
      <button type="button" className='custom__button'>Explore our menu of noodles!</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header image" />
        
    </div>
  </div>
);

export default Header;
