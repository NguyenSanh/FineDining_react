import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="app_aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter image" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img
          src={images.spoon}
          alt="about spoon image"
          className="spoon__img"
        />
        <p className="p__opensans">
          Come stop by Sanh's noodles shop! Lorem ipsum dolor Aliquid ipsum
          accusantium in officiis eligendi!
        </p>
        <button type="button" className="custom__button">
          Know More!{" "}
        </button>
      </div>

      <div class="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about knife img" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img
          src={images.spoon}
          alt="about spoon image"
          className="spoon__img"
        />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          blanditiis ducimus quis magnam fugit, aliquam quo laudantium alias
          labore, incidunt omnis reiciendis rem molestiae asperiores nesciunt
          ipsa, consectetur distinctio dolorem.
        </p>
        <button type="button" className="custom__button">
          Know More!{" "}
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
