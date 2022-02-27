import React from "react";
//import {Navigation} from "./components/navigation";
import { Navigation } from "../navigation";
import "./bathik.css";
import bathikImg from "../../data/img/b1.jpg"
function Bathik() {
  return (
    <div>
      <div>
        <Navigation />
      </div>

      <section style={{ backgroundImage: `url(${bathikImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize:"cover"} } id="header " class="jumbotron text-center">
        {/* <img src={bathikImg} alt="" srcset="" /> */}
        <h1 class="display-3">BATIK </h1>
        <p class="lead">Slogan on batik.</p>
      </section>
      <section id="gallery">
  <div class="container">
    <div class="row">
    <div class="col-lg-4 mb-3">
    <div class="card">
      <img src="/img/bl7.jpg" alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Sunset</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p>
       <a href="" class="btn btn-outline-success btn-lg me-2 ">Read More</a>
        <a href="" class="btn btn-outline-danger btn-lg me-2 "><i class="fa fa-heart-o "></i></a>
      </div>
     </div>
    </div>
  <div class="col-lg-4 mb-3">
  <div class="card">
      <img src="/img/bl7.jpg" alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Sunset</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p>
       <a href="" class="btn btn-outline-success btn-lg me-2">Read More</a>
        <a href="" class="btn btn-outline-danger btn-lg me-2"><i class="fa fa-heart-o"></i></a>
      </div>
      </div>
    </div>
    <div class="col-lg-4 mb-3">
    <div class="card">
      <img src="/img/bl7.jpg" alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Sunset</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p>
       <a href="" class="btn btn-outline-success btn-lg me-2">Read More</a> 
        <a href="" class="btn btn-outline-danger btn-lg me-2"><i class="fa fa-heart-o "></i></a>
      </div>
     </div>
    </div>
    <div class="col-lg-4 mb-3">
    <div class="card">
      <img src="/img/bl7.jpg" alt="" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Sunset</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p>
       <a href="" class="btn btn-outline-success btn-lg me-2">Read More</a>
        <a href="" class="btn btn-outline-danger btn-lg me-2"><i class="fa fa-heart-o "></i></a>
      </div>
     </div>
    </div>
  </div>
</div>
</section>
    </div>
  );
}

export default Bathik;
