import React, { useState, useRef, useEffect } from "react";
import { db } from "./../database/firebase-config";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import { PayPalButton } from "react-paypal-button-v2";
import { Element } from "react-scroll";

import emailjs from "emailjs-com";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Login from "./Login";
import { useUserAuth } from "../context/UserAuthContext";

import { Navigation_log } from "./navigation_log";
import { Helmet } from "react-helmet";

export const ContactUs = () => {
  const [doners, setDoners] = useState([]);
  const donersCollectionRef = collection(db, "payments");

  const [doner, setNewDoner] = useState("");
  const [amount, setNewAmount] = useState(0);
  const [email, setNewEmail] = useState("");
  const [paypalAmount, setPaypalAmount] = useState("");

  const { user } = useUserAuth();

  const createDoner = async () => {
  await sendEmail()
    await addDoc(donersCollectionRef, {
      doner: doner,
      amount: amount,
      email: email,
    });
  };

  useEffect(() => {
    const getDoners = async () => {
      const data = await getDocs(donersCollectionRef);
      // console.log(data);
      getDoners(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getDoners();
  }, []);


  var templateParams = {
    user_email: user?.email,
    amount
};

  const sendEmail = async () => {

    emailjs.send('service_ukg9fte', 'template_uh9yzgf', templateParams,"user_CaVgj9aXnYjHxUjP7Pc9g")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  return (
    <React.Fragment>
        
     <div class="container">
        <div class="row">
          <div class="col-md-12 section-heading text-left">
            <h2 class=" left-border to-animate" style={{ color: "white" }}>
              MAKE A DONATION
            </h2>
          </div>
        </div>
        <div class="screen">
          <div class="screen-body">
            <div class="screen-body-item">
              <div class="app-form">
                <form>
                  <div class="app-form-group">
                    {/* <input
                      type="text"
                      name="user_name"
                      class="app-form-control"
                      placeholder="NAME"
                      onChange={(event) => {
                        setNewDoner(event.target.value);
                      }}
                    /> */}
                  </div>
                  <div class="app-form-group">
                    <input
                      class="app-form-control"
                      placeholder="EMAIL"
                      type="email"
                      value={user?.email}
                      name="user_email"
                      onChange={(event) => {
                        setNewEmail(event.target.value);
                      }}
                    />
                  </div>
                  <div class="app-form-group">
                    <input
                      class="app-form-control"
                      placeholder="AMOUNT"
                      name="amount"
                      onChange={(event) => {
                        setNewAmount(event.target.value);
                      }}
                    />
                  </div>
                  {/* <div class="app-form-group message">
                    <input
                      class="app-form-control"
                      name="message"
                      placeholder="MESSAGE"
                    />
                  </div> */}
                  {/* <div class="app-form-group buttons">
                    <button class="app-form-button" onClick={createDoner}>
                      SEND
                    </button>
                  </div> */}
                </form>
              </div>
            </div>

  

            <div class="screen-body-item left">
              {/*PAYPAL BTN STARTS HERE  */}

              <Helmet>
                <script src="https://www.paypal.com/sdk/js?client-id=ATHibLN3m7DP7mbN5k5BpbpP9JDcRZH8GtrTOwYpkJDlT4zLIccyxEQWCs0t4rL8qwMMpaqQrmZ09PrM&currency=USD">
                </script>
              </Helmet>

              {
                amount > 0 ? <PayPalButton
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          currency_code: "USD",
                          value: amount,
                        },
                      },
                    ],
                
                  });
                }}
                onApprove={(data, actions) => {
                  // Capture the funds from the transaction
                  return actions.order.capture().then(function (details) {
                    // Show a success message to your buyer
                    // alert("Transaction completed by " + user?.email);
                    console.log("Transaction completed by " + user?.email)
                    createDoner();
                    sendEmail();


                    // OPTIONAL: Call your server to save the transaction
                    return fetch("/paypal-transaction-complete", {
                      method: "post",
                      body: JSON.stringify({
                        orderID: data.orderID,
                      }),
                    });
                  });
                }}
              /> : <h3>Please add a amount</h3>
              }

              {/* PAYPAL BTN ENDS */}

              <div class="app-contact">
                {/* <div>
                  <a
                    className="nav-link active px-13 text-uppercase"
                    aria-current="page"
                    href="/mailer"
                  >
                    MAILER
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>      
     
    </React.Fragment>
  );
};
