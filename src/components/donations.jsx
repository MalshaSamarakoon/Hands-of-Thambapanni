import Login from "./Login";
import Signup from "./Signup";

import { ContactUs } from "./mailer";

import React, { useState } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../database/firebase-config";
import { Header } from "./header";
import { Navigation_log } from "./navigation_log";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

import Scroll from "react-scroll";
import { Link } from "react-scroll";

import EventCarousel from "../EventCarousel";

const ScrollLink = Scroll.ScrollLink;

const Donations = (props) => {
  const [modalOpen, setModalOpen] = useState(false);


  return (
    <div id="donations">
      {modalOpen && <Login setOpenModal={setModalOpen} />}

      <Navigation_log />
      <div>
        <section id="fh5co-home" data-section="home">
          <div class="gradient"></div>
          <div class="container">
            <div class="text-wrap">
              <div class="text-inner">
                <div class="row">
                  <div class="col-md-8 col-md-offset-2"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {modalOpen && <Signup setOpenModal={setModalOpen} />}



        <section id="fh5co-about" data-section="about">
          <div class="container">
            <div class="row-why">
              <div class="col-md-12 section-heading text-left">
                <h2 class=" left-border to-animate">
                  Why we need your donations?
                </h2>
                <p>
                  Affert laboramus repudiandae nec et. Inciderint efficiantur
                  his ad. Eum no molestiae voluptatibus. Some text to enable
                  scrolling.. Lorem ipsum dolor sit amet, illum definitiones no
                  quo, maluisset concludaturque et eum, altera fabulas ut quo.
                  Atqui causae gloriatur ius te, id agam omnis evertitur eum.
                  Affert laboramus repudiandae nec et. Inciderint efficiantur
                  his ad. Eum no molestiae voluptatibus. Some text to enable
                  scrolling.. Lorem ipsum dolor sit amet, illum definitiones no
                  quo, maluisset concludaturque et eum, altera fabulas ut quo.
                  Atqui causae gloriatur ius te, id agam omnis evertitur eum.
                  Affert laboramus repudiandae nec et. Inciderint efficiantur
                  his ad. Eum no molestiae voluptatibus. Some text to enable
                  scrolling.. Lorem ipsum dolor sit amet, illum definitiones no
                  quo, maluisset concludaturque et eum, altera fabulas ut quo.
                  Atqui causae gloriatur ius te, id agam omnis evertitur eum.
                  Affert laboramus repudiandae nec et. Inciderint efficiantur
                  his ad. Eum no molestiae voluptatibus. Some text to enable
                  scrolling.. Lorem ipsum dolor sit amet, illum definitiones no
                  quo, maluisset concludaturque et eum, altera fabulas ut quo.
                  Atqui causae gloriatur ius te, id agam omnis evertitur eum.
                  Affert laboramus repudiandae nec et. Inciderint efficiantur
                  his ad. Eum no molestiae voluptatibus.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div id="about">
          <section id="fh5co-about" data-section="about">
            <div class="container">
              <div class="row">
                <div class="col-md-12 section-heading text-left">
                  <h2
                    class=" left-border to-animate"
                    style={{ color: "white" }}
                  >
                  Our work so far
                  </h2>
                </div>
              </div>

              <div>
                <EventCarousel />
              </div>

              <br/>

              {/* <div class="row" style={aboutStyle1}>
                <div class="row watch-video text-center to-animate">
                  <span>Watch the video</span>

                  <a
                    href="https://vimeo.com/channels/staffpicks/93951774"
                    class="popup-vimeo btn-video"
                  >
                    <i class="icon-play2"></i>
                  </a>
                </div>
              </div> */}
            </div>
          </section>
        </div>
        <div id="mailer">
          <div class="row">
            <ContactUs />
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; A Project By The Rotaract Club Of Uva Wellassa University -
              Badulla
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const aboutStyle1 = {
  display: "flex",
  justifycontent: "space-between",
};

const wawStyle = {
  // padding: '20px 60px 20px 20px',
  background: "pink",
};

const paraStyle1 = {
  color: "#f8fcfc",
  marginright: "1.5rem",
  textAlign: "justify",
};

export default Donations;
