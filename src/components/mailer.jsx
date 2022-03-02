import React, { useState, useRef, useEffect } from 'react';
import {db} from './../database/firebase-config';
import {collection,getDocs, addDoc } from "@firebase/firestore";


import { Element } from 'react-scroll'

import emailjs from 'emailjs-com';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors'; 
import Login from "./Login";


import { Navigation_log } from "./navigation_log";

export const ContactUs = () => {

  const [doners, setDoners] = useState([]);
  const donersCollectionRef = collection(db, "payments");

  const [doner, setNewDoner] = useState("");
  const [amount, setNewAmount] = useState(0);
  const [email, setNewEmail] = useState("");

  const createDoner = async () => {
   await addDoc(donersCollectionRef, { doner: doner, amount: amount,email:email });
  };

  useEffect(() => {
    const getDoners = async () => {
      const data=await getDocs(donersCollectionRef)
      // console.log(data);
      getDoners(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
     
      getDoners();
    }, [] );
  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ukg9fte', 'template_uh9yzgf', form.current, 'user_CaVgj9aXnYjHxUjP7Pc9g')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



  const [modalOpen, setModalOpen] = useState(false);

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

  return (

    <React.Fragment>
    
      <Element id='/mailer' name='example-destination'>
        <div>

<div>
{/* <Navigation_log/> */}
</div>

    {/* <form ref={form} onSubmit={sendEmail}> */}

      {/* <p> Enter your details to place donation</p>
    <label>Name</label>
    <input type="text" name="user_name" onChange={(event) => {
                    setNewDoner(event.target.value);
                  }}/>

    <label>Email</label>
    <input type="email" name="user_email" onChange={(event) => {
                    setNewEmail(event.target.value);
                  }}/>

    <label>Amount</label>
    <textarea name="amount" onChange={(event) => {
                    setNewAmount(event.target.value);
                  }}/> */}

    {/* <input type="submit" value="Save Details" /> */}
    {/* <button className="newUserButton" onClick={createDoner}>Create</button> */}

  {/* </form> */}


</div>

      </Element>
  <div class="container">
  <div class="row-2">

  <div class="row">
<div class="col-md-12 section-heading text-left">
				<h2 class=" left-border to-animate" style={{color:'white'}}>MAKE A DONATION</h2>
</div>
		</div>
    </div> 
   
    <div class="screen">
    
      <div class="screen-body">


      <div class="screen-body-item">
          <div class="app-form">
          <form ref={form} onSubmit={sendEmail}>

            <div class="app-form-group">
              <input type="text" name="user_name" class="app-form-control" placeholder="NAME" onChange={(event) => {
                    setNewDoner(event.target.value);
                  }}/>
           
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="EMAIL" type="email" name="user_email" onChange={(event) => {
                    setNewEmail(event.target.value);
                  }}/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="AMOUNT" name="amount" onChange={(event) => {
                    setNewAmount(event.target.value);
                  }}/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="MESSAGE"/>
            </div>
            <div class="app-form-group buttons">
              {/* <button class="app-form-button">CANCEL</button> */}
              <button class="app-form-button" onClick={createDoner}>SEND</button>
            </div>
            </form>

          </div>
        </div>


        <div class="screen-body-item left">
          {/* <div class="app-title">
            <span>Do your payment</span>
            <span>here</span>
          </div> */}



          <div>
     <form action="https://www.sandbox.paypal.com/donate" method="post" target="_top">
<input type="hidden" name="hosted_button_id" value="W3W2K9FNY8ASC" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
{/* <img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" /> */}
</form>
</div>

          <div class="app-contact">
            <div>
            <a className="nav-link active px-13 text-uppercase" aria-current="page" href="/mailer">MAILER</a>
            <a className="nav-link active px-13 text-uppercase" aria-current="page" href="/adduser">Add user</a>

</div>
</div>

        </div>

        


      </div>
    </div>
    
  </div>

    </React.Fragment>

   
  );
};