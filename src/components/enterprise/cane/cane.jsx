import React, { useEffect, useState } from "react";
import { Navigation } from "../../navigation";
import { db } from "./../../../database/firebase-config";
import { collection, where, query, onSnapshot } from "@firebase/firestore";
import "./cane.css";
import BathikImg from "../../../data/img/b1.jpg";
import CaneTile from "./caneTile";

function Cane() {
  const [caneList, setCaneList] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "Enterprises"),
      where("type", "==", "cane")
    );

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        setCaneList((arr) => [...arr, doc.data()]);
      });
    });
  }, []);

  return (
    <div>
      <div>
        <Navigation />
      </div>

      <section
        style={{
          backgroundImage: `url(${BathikImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        id="header "
        class="jumbotron text-center"
      >
        {/* <img src={bathikImg} alt="" srcset="" /> */}
        <h1 class="display-3">CANE </h1>
        <p class="lead">Slogan on batik.</p>
      </section>
      <section id="gallery">
        <div class="container">
          <div class="row">
            {caneList &&
              caneList.map((cane, index) => {
                return <CaneTile key={index} cane={cane} />;
              })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cane;
