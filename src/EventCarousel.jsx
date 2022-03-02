import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import img1 from "./data/img/image1.jpg";
import img2 from "./data/img/image2.jpg";
import img3 from "./data/img/image3.jpg";

    function EventCarousel() {
        const [index, setIndex] = useState(0);
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
      
        return (

<div>
<div class="pic-ctn">
<img className="d-block w-10" src={img1} alt="First slide" style={{height:'400px', width:'600px'}}/>   
<img className="d-block w-10" src={img2} alt="Second slide" style={{height:'400px', width:'600px'}}/>     
<img className="d-block w-10" src={img3} alt="Third slide" style={{height:'400px', width:'600px'}}/>  
<img className="d-block w-10" src={img3} alt="Third slide" style={{height:'400px', width:'600px'}}/>  
<img className="d-block w-10" src={img1} alt="First slide" style={{height:'400px', width:'600px'}}/>   
<img className="d-block w-10" src={img2} alt="Second slide" style={{height:'400px', width:'600px'}}/>      
<img className="d-block w-10" src={img3} alt="Third slide" style={{height:'400px', width:'600px'}}/>  
<img className="d-block w-10" src={img1} alt="Third slide" style={{height:'400px', width:'600px'}}/>  
</div>


     </div>
    
        );
        
      }
      
      
      export default EventCarousel;
