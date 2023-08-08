import React, { useState } from 'react';

/* Import built-in icons from React */
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

/* Import an MP4 video from our constants.js file */
import { meal } from '../../constants';

/* Link our CSS file for this jsx file */
import './Intro.css';

/*Includes an MP4 dining video */
const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = React.useRef();

  // const handleVideo = () => {
  //   setPlayVideo(())
  // }

  return (
    <div className="app__video">
      <video
        src={meal}    
        ref={vidRef}
        type="video/mp4"
        Loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div 
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >

          </div>
      </div>
    </div>
  )
};

export default Intro;
