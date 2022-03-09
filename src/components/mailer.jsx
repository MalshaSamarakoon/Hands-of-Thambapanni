import React, { useState, useRef, useEffect } from "react";
import { db } from "./../database/firebase-config";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import { PayPalButton } from "react-paypal-button-v2";

import emailjs from "emailjs-com";

import { useUserAuth } from "../context/UserAuthContext";

import { Helmet } from "react-helmet";
import { useAlert } from "react-alert";

export const ContactUs = (enterpriseName = null) => {
  const alert = useAlert();

  const [doners, setDoners] = useState([]);
  const donersCollectionRef = collection(db, "payments");

  const [amount, setNewAmount] = useState(0);
  const [email, setNewEmail] = useState("");
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const { user } = useUserAuth();

  const createDoner = async () => {
    await sendEmail();
    await addDoc(donersCollectionRef, {
      amount: amount,
      email: user?.email,
      date: new Date().toLocaleString(),
      enterpriseName,
    });
    setShowSuccessMsg(false);
  };

  useEffect(() => {
    if (showSuccessMsg) {
      alert.show("You have successfully placed your donation!");
    }
  }, [showSuccessMsg]);

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
    amount,
  };

  const sendEmail = async () => {
    emailjs
      .send(
        "service_bii6i3s",
        "template_eq39yy7",
        templateParams,
        "NT14pWIgu04Z65eRN"
      )
      .then(
        function (response) {
          setShowSuccessMsg(true);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <React.Fragment>
      <section id="fh5co-intro">
        <div class="container">
          <div class="row row-bottom-padded-lg">
            <div class="fh5co-block to-animate">
              <div class="overlay-darker"></div>
              <div class="overlay"></div>
              <div class="fh5co-text">
                <i class="fh5co-intro-icon icon-wrench"></i>
                <h2>Make a Donation</h2>
                <br />
                <p> Your Contribution</p>
                <div class="app-form">
                  <form>
                    <div class="app-form-group">
                      <input
                        class="app-form-control"
                        placeholder="EMAIL"
                        type="hidden"
                        value={user?.email}
                        name="user_email"
                        onChange={(event) => {
                          setNewEmail(event.target.value);
                        }}
                      />
                    </div>

                    <div class="app-form-group-d">
                      <label class="dollar">$</label>
                      <input
                        class="app-form-control"
                        name="amount"
                        onChange={(event) => {
                          setNewAmount(event.target.value);
                        }}
                      />
                    </div>
                    {/* <div class="app-form-group">
                    <input
                      class="app-form-control"
                      name="type"
                      placeholder="type"
                      onChange={(event) => {
                        setNewType(event.target.value);
                      }}
                    />
                  </div> */}

                    {/* <div class="app-form-group buttons">
                    <button class="app-form-button" onClick={createDoner}>
                      SEND
                    </button>
                  </div> */}
                  </form>
                </div>

                {/*PAYPAL BTN STARTS HERE  */}

                <Helmet>
                  <script src="https://www.paypal.com/sdk/js?client-id=ATHibLN3m7DP7mbN5k5BpbpP9JDcRZH8GtrTOwYpkJDlT4zLIccyxEQWCs0t4rL8qwMMpaqQrmZ09PrM&currency=USD"></script>
                </Helmet>

                {amount > 0 ? (
                  <PayPalButton
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
                        console.log("Transaction completed by " + user?.email);
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
                  />
                ) : (
                  <h3></h3>
                )}

                {/* PAYPAL BTN ENDS */}
              </div>
            </div>
          </div>
          {/* <div class="row watch-video text-center to-animate">
				<span>Watch the video</span>

				<a href="https://vimeo.com/channels/staffpicks/93951774" class="popup-vimeo btn-video"><i class="icon-play2"></i></a>
			</div> */}
        </div>
      </section>
    </React.Fragment>
  );
};
