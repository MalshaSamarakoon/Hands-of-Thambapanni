import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import img1 from "./data/img/image1.jpg";
import img2 from "./data/img/image2.jpg";
import img3 from "./data/img/image3.jpg";

  function EventCarousel() {
 
  return (






<div className='container'  >
<div className='row-car'>
  <div className='col-md-5' >

      <div>
<div class="pic-ctn">
<img className="d-block w-10" src={img2} alt="Second slide" style={{width:'500px', height: '400px'}}/>
<img className="d-block w-10" src={img1} alt="Second slide" style={{width:'500px', height: '400px'}}/>
<img className="d-block w-10" src={img3} alt="Second slide" style={{width:'500px', height: '400px'}}/>
<img className="d-block w-10" src={img2} alt="Second slide" style={{width:'500px', height: '400px'}}/>
<img className="d-block w-10" src={img1} alt="Second slide" style={{width:'500px', height: '400px'}}/>
<img className="d-block w-10" src={img3} alt="Second slide" style={{width:'500px', height: '400px'}}/>
<img className="d-block w-10" src={img2} alt="Second slide" style={{width:'500px', height: '400px'}}/>
<img className="d-block w-10" src={img1} alt="Second slide" style={{width:'500px', height: '400px'}}/>
<img className="d-block w-10" src={img3} alt="Second slide" style={{width:'500px', height: '400px'}}/>


  </div>
</div>

  </div>


  <div className='col-md-2'></div>


  <div className='col-md-5'>
  <p style={{ color: "white", textAlign:"justify" }}>
  These small and medium scale enterprises affiliated with the Sri Lankan tourism industry are comprised of talented, hardworking but unfortunately underpaid brilliant individuals. As the pandemic hit, they had to suffer the most, in turn making Sri Lanka realize how dependent it is on these skillful hands. As they struggle to get back on their feet post-pandemic, let us lend them a hand. Little droplets together make a swift river, likewise each of your little contributions count, and are deeply appreciated by the Team Hands of Thambapanni.
  </p>
 </div>
</div>

</div>







 
  );
}


export default EventCarousel;