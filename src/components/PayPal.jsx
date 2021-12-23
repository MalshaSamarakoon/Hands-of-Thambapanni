import React, { useRef, useEffect } from "react";
import { BrowserRouter as Navigate } from "react-router-dom";

function Paypal(authorized) {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: 650.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  
  if (!authorized){
    return <Navigate to="/" />
 }

  return (
    <div>
      <h1>Do your payment here</h1>
      <div ref={paypal}></div>
    </div>
  );

  
}
export default Paypal;