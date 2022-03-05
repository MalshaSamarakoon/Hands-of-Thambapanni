// import { useState, useRef, useEffect } from "react";
// import {collection,getDocs, addDoc } from "@firebase/firestore";

// import {db} from '../../database/firebase-config';
  
// const WidgetLg = () => {
  
//   const [users, setUsers] = useState([]);
//   const usersCollectionRef = collection(db, "Enterprise");

  
//     // Start the fetch operation as soon as
//     // the page loads
//     window.addEventListener('load', () => {
//         Fetchdata();
//       });
  
//     // Fetch the required data using the get() method
//     const Fetchdata = ()=>{
//         db.collection("data").get().then((querySnapshot) => {
             
//             // Loop through the data and store
//             // it in array to display
//             querySnapshot.forEach(element => {
//                 var data = element.data();
//                 setInfo(arr => [...arr , data]);
                  
//             });
//         })
//     }
      
//     // Display the result on the page
//     return (
//         <div>
//             <center>
//             <h2>Enterprise Details</h2>
//             </center>
          
//         {
//             info.map((Enterprise) => (
//             <Frame enterpriseName={Enterprise.enterpriseName} 
//                    type={Enterprise.type} 
//                    ownerName={Enterprise.ownerName}
//                    address={Enterprise.address} 
//                    phone={Enterprise.phone} 
//                    since={Enterprise.since}
//                    description={Enterprise.description}
//             />
//             ))
//         }
//         </div>
  
//     );
// }
  
// // Define how each display entry will be structured
// const Frame = ({enterpriseName , type , ownerName, address , phone , since, description }) => {
//     console.log(enterpriseName + " " + type + " " + ownerName + " " + address + " " + phone + " " + since + " " + description);
//     return (
//         <center>
//             <div className="div">
                  
// <p>enterpriseName : {enterpriseName}</p>
   
                  
// <p>type : {type}</p>
  
                  
// <p>ownerName : {ownerName}</p>

                   
// <p>address : {address}</p>
   
                  
// <p>phone : {phone}</p>
  
                  
// <p>since : {since}</p> 

// <p>description : {description}</p>  

//             </div>
//         </center>
//     );
// }
  
// export default WidgetLg;



























export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
