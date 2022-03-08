import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../database/firebase-config";
import { doc, getDoc } from "@firebase/firestore";

import { ContactUs } from "../../mailer";
import { useUserAuth } from "../../../context/UserAuthContext";
import GoogleMapComponent from "../../map/googleMap";

import { KadeDescription } from "../../KadeDescription";

const BathikDetails = () => {
  let params = useParams();

  const { user } = useUserAuth();

  const [bathikDetails, setBathikDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [center, setCenter] = useState({ lat: 59.955413, lng: 30.337844 });

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
      <p>{bathikDetails.since}</p>
      <p>{bathikDetails.ownerName}</p>
      <p>{bathikDetails.phone}</p>
      {user && (
        <div id="mailer">
          <div class="row">
            <ContactUs enterpriseName={bathikDetails.enterpriseName} />
          </div>
        </div>
      )}
      <GoogleMapComponent
        lat={bathikDetails.location._lat}
        long={bathikDetails.location._long}
      />

      <div>
        <KadeDescription />
      </div>
    </>
  );
};

export default BathikDetails;
