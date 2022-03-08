import React, { useEffect, useState } from "react";
import { Navigation_log } from "../../navigation_log";
import { db } from "./../../../database/firebase-config";
import { collection, where, query, onSnapshot } from "@firebase/firestore";
import "./bathik.css";
import bathikImg from "../../../data/img/b1.jpg";
import BathikTile from "./bathikTile";

import { Description} from "../../Description";


function Bathik({ children }) {
  const [bathikList, setBathikList] = useState([]);
  const [docId, setDocId] = useState(null);

  useEffect(() => {
    const q = query(
      collection(db, "Enterprises"),
      where("type", "==", "bathik")
    );

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        setDocId(doc.id);
        setBathikList((arr) => [...arr, doc.data()]);
      });
    });
  }, []);

  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div>
      <div>
        <Navigation_log />
      </div>

  
      <div class ="row">

      <section
        style={{
          backgroundImage: `url(${bathikImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        id="header "
        class="jumbotron text-center"
      >
        <h1 class="display-3">BATIK </h1>
        <p class="lead">Slogan on batik.</p>
      </section>
</div>


<div class ="row">
  <Description />
</div>

<div class ="row">

      <section id="gallery">
        <div class="container">
          <div class="row">
            {bathikList &&
              bathikList.map((bathik, index) => {
                return <BathikTile key={index} bathik={bathik} docId={docId} />;
              })}
          </div>
        </div>
      </section>
</div>


      
    </div>
  
  
  
  
  );


  
}

export default Bathik;
