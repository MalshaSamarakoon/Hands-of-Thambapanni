import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./Ratingstyle";
import { db } from "../database/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { Fragment } from "react";
import { useAlert } from "react-alert";

var space = <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>;

const Rate = () => {
  const alert = useAlert();
  const [rate, setRate] = useState(0);
  const [hover, setHover] = useState(null);
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    await addDoc(collection(db, "rate"), {
      rate,
    })
      .then(() => {
        setLoader(false);
        alert.show("Thanks for Rating👍");
      })
      .catch((error) => {
        alert.show(error.message);
        setLoader(false);
      });

    setRate(Number);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label>
            <Radio
              type="radio"
              value={givenRating}
              onChange={(e) => setRate(e.target.value)}
            />
            <Rating>
              <FaStar
                size="2em "
                color={givenRating <= (hover || rate) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => setHover(givenRating)}
                onMouseLeave={() => setHover(null)}
              />
            </Rating>
          </label>
        );
      })}
      <div>
        {space}
        <button type="submit" className="btn btn-custom btn-lg">
          {" "}
          click to Rate{" "}
        </button>
      </div>
    </form>
  );
};

export default Rate;
