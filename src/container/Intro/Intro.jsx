import React, { useState } from 'react';

/* Import built-in icons from React */
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

/* Import an MP4 video from our constants.js file */
import { meal } from '../../constants';

/* Link our CSS file for this jsx file */
import './Intro.css';

/* IMPORTANT: Might wanna reuse this code for including MP4 videos in future projects */
const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    /* If playVideo is true, then toggle playVideo to false, and vice versa.*/
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)

    if(playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <div className="app__video">
      <video
        src={meal}    
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div 
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30}/>
          ) : <BsFillPlayFill color="#fff" fontSize={30}/>}

        </div>
      </div>
    </div>
  )
};

export default Intro;
