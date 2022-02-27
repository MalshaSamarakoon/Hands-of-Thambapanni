import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import img1 from "./data/img/image1.jpg";
import img2 from "./data/img/image2.jpg";
import img3 from "./data/img/image3.jpg";

const data = [
  {
    image: img1,
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: img2,
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: img3,
    caption: "Caption",
    description: "Description Here",
  },
];

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade>
      <Carousel.Item interval={2000} fade={true}>
        <img className="d-block w-100" src={img1} alt="First slide" style={{height:'650px'}}/>
        <Carousel.Caption>
          <h3>Hands of Thambapanni</h3>
          <p>Strengthening the hands that drive Sri Lanka</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} fade={true}>
        <img className="d-block w-100" src={img2} alt="Second slide" style={{height:'650px'}}/>
        <Carousel.Caption>
          <h3>Hands of Thambapanni</h3>
          <p>Strengthening the hands that drive Sri Lanka</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} fade={true}>
        <img className="d-block w-100" src={img3} alt="Third slide" style={{height:'650px'}}/>
        <Carousel.Caption>
          <h3>Hands of Thambapanni</h3>
          <p>Strengthening the hands that drive Sri Lanka</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


export default HomeCarousel;