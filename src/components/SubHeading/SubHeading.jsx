import React from 'react';
import { images } from '../../constants'; // Import image.js file

/* SuHeading Component consists of a title and a spoon image */
const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">
      {title}
    </p>
    <img src={images.spoon} alt="spoon" className='spoon__img'/>
  </div>
);

export default SubHeading;
