import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { db } from "../../database/firebase-config";
import { useState, useEffect } from "react";

export default function FeaturedInfo() {

  // useEffect(() => {
  //   firebase.firestore().collection("Enterprises").get().then((querySnapshot) => {
  //     const TotalUsers = querySnapshot.size
  //     setTotalUsers(TotalUsers)
  //   })
  // }, []);
  

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Donations</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
        </div>
        <span className="featuredSub">Total Amount</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Reviews</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">54</span>
        </div>
        <span className="featuredSub">Total Review Count</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Feedback</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">20</span>

        </div>
        <span className="featuredSub">Total Feedback Count</span>
      </div>
    </div>
  );
}
