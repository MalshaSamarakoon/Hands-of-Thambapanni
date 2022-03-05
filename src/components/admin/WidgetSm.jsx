// import { useState, useRef, useEffect } from "react";
// import {collection,getDocs, addDoc, getFirestore } from "@firebase/firestore";

// import {db} from '../../database/firebase-config';


// function WidgetSm() {

//   const [users,setUsers]=useState([])


//   const fetchBlogs=async()=>{
//     const response=collection(db, "users")
//     const data=await response.get();

//     data.docs.forEach(item=>{
//       setUsers([...users,item.data()])
//     })
//   }
//   useEffect(() => {
//     fetchBlogs();
//   }, [])
//   return (
//     <div className="App">
//       {
//         users && users.map(Enterprise=>{
//           return(
//             <div className="blog-container">
//               <h4>{Enterprise.type}</h4>
//               <p>{Enterprise.enterprise}</p>
//             </div>
//           )
//         })
//       }
//     </div>
//   );
// }

// export default WidgetSm

















// // import { useState, useRef, useEffect } from "react";
// // import {collection,getDocs, addDoc } from "@firebase/firestore";

// // import {db} from '../../database/firebase-config';
  
// // const WidgetSm = () => {
  
// //   const [users, setUsers] = useState([]);
// //   const usersCollectionRef = collection(db, "Enterprise");

  
// //     // Start the fetch operation as soon as
// //     // the page loads
// //     window.addEventListener('load', () => {
// //         Fetchdata();
// //       });
  
// //     // Fetch the required data using the get() method
// //     const Fetchdata = ()=>{
// //         db.collection("Enterprise").get().then((querySnapshot) => {
             
// //             // Loop through the data and store
// //             // it in array to display
// //             querySnapshot.forEach(element => {
// //                 var data = element.data();
// //                 setUsers(arr => [...arr , data]);
                  
// //             });
// //         })
// //     }
      
// //     // Display the result on the page
// //     return (
// //         <div>
          
// //             <h2>Enterprise Details</h2>
          
// //         {
// //             users.map((Enterprise) => (
// //             <Frame enterpriseName={Enterprise.enterpriseName} 
// //                    type={Enterprise.type} 
// //                    ownerName={Enterprise.ownerName}
// //                    address={Enterprise.address} 
// //                    phone={Enterprise.phone} 
// //                    since={Enterprise.since}
// //                    description={Enterprise.description}
// //             />
// //             ))
// //         }
// //         </div>
  
// //     );
// // }
  
// // // Define how each display entry will be structured
// // const Frame = ({enterpriseName , type , ownerName, address , phone , since, description }) => {
// //     console.log(enterpriseName + " " + type + " " + ownerName + " " + address + " " + phone + " " + since + " " + description);
    
// //     return (
// //         <center>
// //             <div className="div">
                  
// // <p>enterpriseName : {enterpriseName}</p>
   
                  
// // <p>type : {type}</p>
  
                  
// // <p>ownerName : {ownerName}</p>

                   
// // <p>address : {address}</p>
   
                  
// // <p>phone : {phone}</p>
  
                  
// // <p>since : {since}</p> 

// // <p>description : {description}</p>  

// //             </div>
// //         </center>
// //     );
// // }
  
// // export default WidgetSm;
























// // import { Visibility } from "@material-ui/icons";

// // export default function WidgetSm() {
// //   return (
// //     <div className="widgetSm">
// //       <span className="widgetSmTitle">New Join Members</span>
// //       <ul className="widgetSmList">
// //         <li className="widgetSmListItem">
// //           <img
// //             src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
// //             alt=""
// //             className="widgetSmImg"
// //           />
// //           <div className="widgetSmUser">
// //             <span className="widgetSmUsername">Anna Keller</span>
// //             <span className="widgetSmUserTitle">Software Engineer</span>
// //           </div>
// //           <button className="widgetSmButton">
// //             <Visibility className="widgetSmIcon" />
// //             Display
// //           </button>
// //         </li>
// //         <li className="widgetSmListItem">
// //           <img
// //             src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
// //             alt=""
// //             className="widgetSmImg"
// //           />
// //           <div className="widgetSmUser">
// //             <span className="widgetSmUsername">Anna Keller</span>
// //             <span className="widgetSmUserTitle">Software Engineer</span>
// //           </div>
// //           <button className="widgetSmButton">
// //             <Visibility className="widgetSmIcon" />
// //             Display
// //           </button>
// //         </li>
// //         <li className="widgetSmListItem">
// //           <img
// //             src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
// //             alt=""
// //             className="widgetSmImg"
// //           />
// //           <div className="widgetSmUser">
// //             <span className="widgetSmUsername">Anna Keller</span>
// //             <span className="widgetSmUserTitle">Software Engineer</span>
// //           </div>
// //           <button className="widgetSmButton">
// //             <Visibility className="widgetSmIcon" />
// //             Display
// //           </button>
// //         </li>
// //         <li className="widgetSmListItem">
// //           <img
// //             src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
// //             alt=""
// //             className="widgetSmImg"
// //           />
// //           <div className="widgetSmUser">
// //             <span className="widgetSmUsername">Anna Keller</span>
// //             <span className="widgetSmUserTitle">Software Engineer</span>
// //           </div>
// //           <button className="widgetSmButton">
// //             <Visibility className="widgetSmIcon" />
// //             Display
// //           </button>
// //         </li>
// //         <li className="widgetSmListItem">
// //           <img
// //             src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
// //             alt=""
// //             className="widgetSmImg"
// //           />
// //           <div className="widgetSmUser">
// //             <span className="widgetSmUsername">Anna Keller</span>
// //             <span className="widgetSmUserTitle">Software Engineer</span>
// //           </div>
// //           <button className="widgetSmButton">
// //             <Visibility className="widgetSmIcon" />
// //             Display
// //           </button>
// //         </li>
// //       </ul>
// //     </div>
// //   );
// // }
