import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../database/firebase-config";
import { doc, getDoc } from "@firebase/firestore";
import "./bathik.css";

import { ContactUs } from "../../mailer";
import { useUserAuth } from "../../../context/UserAuthContext";
import { Navigation } from "../../navigation";
import GoogleMapComponent from "../../map/googlemapComponent";

import { KadeDescription } from "../../KadeDescription";

const BathikDetails = () => {
  let params = useParams();

  const { user } = useUserAuth();

  const [bathikDetails, setBathikDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const docRef = doc(db, "Enterprises", params.docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) setBathikDetails(docSnap.data());
    else setBathikDetails(null);

    setLoading(false);
  }, []);

  if (loading) return null;
  return (
    <>
      <div>
        <Navigation />
      </div>
      <br />
      <br />
      <div class="col-md-10 mx-auto" style={{paddingtop: '30px'}}>
        <div class="media align-items-end profile-head">
          <div class="profile mr-6" >
            <img
              src={bathikDetails.image}
              alt="..."
              width="600" height="200"
              class="rounded mb-2 img-thumbnail"
            />
           
            <br></br>
            <div class="px-4 py-3">
          <h4 class="mb-0">Since {bathikDetails.since}</h4>
          </div>
          </div>
         
        </div>

        
        
        <div class="px-4 py-3">
          <h4 class="mb-0">About</h4>
          <div class="p-4 rounded shadow-sm" style={{textAlign:'justify'}}>
            <p class="fs-5 mb-0">
            {bathikDetails.description}
            <br></br></p>
          </div>
        </div>
        <div class="py-4 px-4">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <h4 class="mb-0">Gallery</h4>
          </div>
          <div class="row">
           
            <div class="col-lg-6 mb-2 pl-lg-1">
              <img
                src="/img/batik7.jpg"
                alt=""
                class="img-fluid rounded shadow-sm"
              />
            </div>
            
            <div class="col-lg-6 pl-lg-1">
              <img
                src="/img/batik6.jpg"
                alt=""
                class="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
        </div>
      
      <div class="col-lg-12">
          <div class="card mt-12 border-0 mb-12">
            <div class="row" >
            <div class="col-lg-2 col-md-2" ></div>
              <div class="col-lg-3 col-md-3" >
                <div class="card-body d-flex align-items-center c-detail pl-0">
                  <div class="mr-6 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png"/>
                  </div>
                  <div class="ms-4" >
                    <h6 class="font-weight-medium">Address</h6>
                    <p class="">{bathikDetails.address}</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-2" ></div>
              <div class="col-lg-3 col-md-3">
              <div class="card-body d-flex align-items-center c-detail pl-0">
                <div class="mr-6 align-self-center" style={{marginTop:'25px'}}>
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png"/>
                  </div>
                  <div class="ms-4">
                    <h6 class="font-weight-medium">Phone</h6>
                    <p class="">{bathikDetails.phone}</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-2" ></div>
              <GoogleMapComponent
        lat={bathikDetails.location._lat}
        long={bathikDetails.location._long}
      />
            </div>
          </div>
          
          <div class="py-4 px-4">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <h4 class="mb-0">Donate to Us</h4>
          </div>
          
          <div class="row">
           
          <div class="p-4 rounded " style={{textAlign:'justify'}}>
            <p class="fs-5 mb-0 col-lg-6 mb-2 pl-lg-1 shadow-sm" style={{lineHeight:'1.5', display: 'inline-block', verticalAlign: 'middle' }}>Your support means the world to us. Show your support by sending your valuable donations. Every rupee counts!</p>
            </div>
            
            <div class="col-lg-6 pl-lg-1">
             
            </div>
          </div>
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
      
      
    </>
  );
};

export default BathikDetails;




// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { db } from "../../../database/firebase-config";
// import { doc, getDoc } from "@firebase/firestore";

// import { ContactUs } from "../../mailer";
// import { useUserAuth } from "../../../context/UserAuthContext";
// import GoogleMapComponent from "../../map/googleMap";

// import { KadeDescription } from "../../KadeDescription";

// const BathikDetails = () => {
//   let params = useParams();

//   const { user } = useUserAuth();

//   const [bathikDetails, setBathikDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   // const [center, setCenter] = useState({ lat: 59.955413, lng: 30.337844 });

//   useEffect(async () => {
//     const docRef = doc(db, "Enterprises", params.docId);
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) setBathikDetails(docSnap.data());
//     else setBathikDetails(null);
//     setLoading(false);
//   }, []);

//   if (loading) return null;
//   return (
//     <>
//       <p>{bathikDetails.since}</p>
//       <p>{bathikDetails.ownerName}</p>
//       <p>{bathikDetails.phone}</p>
//       {user && (
//         <div id="mailer">
//           <div class="row">
//             <ContactUs enterpriseName={bathikDetails.enterpriseName} />
//           </div>
//         </div>
//       )}
//       <GoogleMapComponent
//         lat={bathikDetails.location._lat}
//         long={bathikDetails.location._long}
//       />

//       <div>
//         <KadeDescription />
//       </div>
//     </>
//   );
// };

// export default BathikDetails;
