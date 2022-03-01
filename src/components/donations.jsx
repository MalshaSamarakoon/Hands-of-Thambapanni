import Login from "./Login";
import {ContactUs} from "./mailer";

import React, { useState } from "react";
import { alpha, makeStyles } from '@material-ui/core/styles';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";
import { auth } from "../database/firebase-config";
import { Header } from "./header";
import { Navigation } from "./navigation";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors'; 

import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink

// import EventCarousel from '../EventCarousel';


export const Donations = (props) => {

  const [modalOpen, setModalOpen] = useState(false);

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

    return (

      
      <div id='donations' >   
          {modalOpen && <Login setOpenModal={setModalOpen} />}
        <Navigation/>
   <div> 

<section id="fh5co-home" data-section="home" >
		<div class="gradient"></div>
		<div class="container">
			<div class="text-wrap">
				<div class="text-inner">
					<div class="row">
						<div class="col-md-8 col-md-offset-2">
           
		    {/* <div><Header/></div> */}

              {/* <div>
<Button variant="contained"  color="success" onClick={() => {
         setModalOpen(true);
       }}><h3>Login</h3></Button>    
</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <div class="slant"></div> */}
	</section>

	<ScrollLink to="mailer" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className='some-class' 
            activeClass='some-active-class'>  
				<div class="fh5co-block to-animate" >
					<div class="overlay-darker"></div>
					<div class="overlay"></div>
					<div class="fh5co-text">
						<i class="fh5co-intro-icon icon-bulb"></i>
						<h2>Plan</h2>
						{/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> */}
						<p>      
    
	                </p>
					</div>
				</div>

</ScrollLink> 

	<section id="fh5co-intro">
		<div class="container">
			<div class="row row-bottom-padded-lg">

			
				<div class="fh5co-block to-animate" >
					<div class="overlay-darker"></div>
					<div class="overlay"></div>
					<div class="fh5co-text">
						<i class="fh5co-intro-icon icon-wrench"></i>
						<h2>Make a Donation</h2>
						<p>Login to make donations.</p>
<div>
<Button class="btn btn-primary btn-lg" onClick={() => {
         setModalOpen(true);
       }}><a>Login</a></Button>    
</div>
					</div>
				</div>

				
			</div>
			{/* <div class="row watch-video text-center to-animate">
				<span>Watch the video</span>

				<a href="https://vimeo.com/channels/staffpicks/93951774" class="popup-vimeo btn-video"><i class="icon-play2"></i></a>
			</div> */}
		</div>
	</section>
	
	<section id="fh5co-about" data-section="about">
		<div class="container">
			<div class="row">
			<div class="col-md-12 section-heading text-left">
				<h2 class=" left-border to-animate">Why we need your donations?</h2>
				<p>Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.

Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.

Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.

Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.

Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
					{/* <div class="row">
						<div class="col-md-8 col-md-offset-2 subtext to-animate">
							<h3>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h3>
						</div>
					</div> */}
				</div>
			</div>


			<div class="row">
				<div class="col-md-4">
					{/* <div class="fh5co-person text-center to-animate">
						<h3>Jean Smith</h3>
						<span class="fh5co-position">Web Designer</span>
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
						<ul class="social social-circle">
							<li><a href="#"><i class="icon-twitter"></i></a></li>
							<li><a href="#"><i class="icon-facebook"></i></a></li>
							<li><a href="#"><i class="icon-dribbble"></i></a></li>
						</ul>
					</div> */}
				</div>
				<div class="col-md-4">
					{/* <div class="fh5co-person text-center to-animate">
						<h3>Rob Smith</h3>
						<span class="fh5co-position">Web Developer</span>
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
						<ul class="social social-circle">
							<li><a href="#"><i class="icon-twitter"></i></a></li>
							<li><a href="#"><i class="icon-facebook"></i></a></li>
							<li><a href="#"><i class="icon-github"></i></a></li>
						</ul>
					</div> */}
				</div>
				<div class="col-md-4">
					{/* <div class="fh5co-person text-center to-animate">
						<h3>Larry Ben</h3>
						<span class="fh5co-position">Web Designer</span>
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
						<ul class="social social-circle">
							<li><a href="#"><i class="icon-twitter"></i></a></li>
							<li><a href="#"><i class="icon-facebook"></i></a></li>
							<li><a href="#"><i class="icon-dribbble"></i></a></li>
						</ul>
					</div> */}
				</div>
			</div>
		</div>
	</section>


	{/* <div id='about'>	 */}
	  <section id="fh5co-about" data-section="about">
		<div class="container">
			<div class="row">
			<div class="col-md-12 section-heading text-left">
				<h2 class=" left-border to-animate" style={{color:'black'}}>What we have done?</h2>
					{/* <div class="row">
						<div class="col-md-8 col-md-offset-2 subtext to-animate">
							<h3>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h3>
						</div>
					</div> */}
				</div>
			</div>

            {/* <div><EventCarousel/></div> */}

			<br/>

			<div class="row" style={aboutStyle1}>
			<div class="row watch-video text-center to-animate">
				<span>Watch the video</span>

				<a href="https://vimeo.com/channels/staffpicks/93951774" class="popup-vimeo btn-video"><i class="icon-play2"></i></a>
			</div>
			</div>

		<br/>	

		</div>
	</section>

{/* </div> */}

<div class="row">
<div id='about'><ContactUs/></div>
</div>	

	<div id='footer'>
                <div className='container text-center'>
                    <p>
                        &copy; A Project By The Rotaract Club Of Uva Wellassa University - Badulla
                    </p>
                </div>
            </div>
              </div>      

    </div>
   
    )
}

const aboutStyle1 = {
  display: 'flex',
  justifycontent: 'space-between',
      }

const wawStyle = {
  // padding: '20px 60px 20px 20px',
  background: 'pink',
}

const paraStyle1 = {
  color: '#f8fcfc',
  marginright: '1.5rem',
  textAlign: 'justify',
}


export default Donations

