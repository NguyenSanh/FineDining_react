import React from "react";

/* Import images and data needed */
import { images, data } from "../../constants";
/* Import some components */
import { SubHeading } from "../../components";
import "./Laurels.css";

/* Create a brand new component called AwardCard 
that will only be used in this file */
/* Takes imgUrl, title & subtitle from awards data as props */
const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    {/* Image that takes in award.imgUrl prop as its source  */}
    <img src={imgUrl} alt="award image" />
    <div className="app__laurels_awards-card_content">
      {/* Inline style for text color, then pass in title prop as the text content */}
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      {/* This paragraph element renders the subtitle prop */}
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    {/*This Div holds the info on the left*/}
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Laurels!</h1>

      {/* Contains the four awards */}
      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>

    {/*This Div holds the img on the right*/}
    <div className="app__wrapper_img">
      {/* Image content takes images.laurels as source */}
      <img src={images.laurels} alt="laurels image" />
    </div>
  </div>
);

export default Laurels;
