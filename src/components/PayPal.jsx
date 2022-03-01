import React, { useRef, useEffect } from "react";
import { BrowserRouter as Navigate } from "react-router-dom";
import { Navigation_log } from "./navigation_log";

import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

function Paypal(authorized) {
 

  return (
    <div>

<div>
<Navigation_log/>
</div>

      <h1>Do your payment here</h1>
      {/* <div ref={paypal}></div> */}
    
      <form action="https://www.sandbox.paypal.com/donate" method="post" target="_top">
<input type="hidden" name="hosted_button_id" value="W3W2K9FNY8ASC" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>


    </div>

  );

  
}
export default  withRouter(Paypal);