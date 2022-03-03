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
  <p >Hands of Thambapanni is the second phase of the project See Lanka, launched by the Rotaract Club of Uva Wellassa University - Badulla. It was launched with the aim of assisting  The Small and Medium Enterprises  in the tourism sector in Sri Lanka, which were affected by the pandemic. To make See Lanka all the more impactful, the Sri Lanka Tourism Promotion Bureau (SLTPB) and The Hotels Association of Sri Lanka joined hands with the Rotaract Club of Uva Wellassa University - Badulla. After the successful and award-winning project See Lanka, Hands of Thambapanni was launched to further the help given to SMEs, to help them truly stand up on their own. Hands of Thambapanni helps SMEs with product development and augmenting  market space, by exposing them to online platforms and new demographics.</p>
 </div>
</div>

</div>







 
  );
}


export default EventCarousel;