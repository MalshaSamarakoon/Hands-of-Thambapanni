import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../database/firebase-config";
import { doc, getDoc } from "@firebase/firestore";

import { ContactUs } from "../../mailer";

const BathikDetails = () => {
  let params = useParams();

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
      <p>{bathikDetails.since}</p>
      <p>{bathikDetails.ownerName}</p>
      <p>{bathikDetails.phone}</p>

      <div id="mailer">
          <div class="row">
            <ContactUs />
          </div>
        </div>

    </>
  );
};

export default BathikDetails;
