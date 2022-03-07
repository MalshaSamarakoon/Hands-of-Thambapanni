import { db } from "./../../database/firebase-config";
import { useState, useRef, useEffect } from "react";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import Sidebar from "./Sidebar";
import { Topbar } from "./Topbar";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../database/firebase-config";


export default function AUser() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "Enterprises");

  const [progress, setProgress] = useState(0);

  const formHandler = (e) => {
    
  };

  const uploadFiles = (file) => {
    if (!file) return;
    const sotrageRef = ref(storage, `${file.name}/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  const [enterprise, setNewEnterprise] = useState("");
  const [type, setNewType] = useState("");
  const [owner, setNewOwner] = useState(0);
  const [address, setNewAddress] = useState("");
  const [phone, setNewPhone] = useState("");
  const [since, setNewSince] = useState("");
  const [des, setNewDescription] = useState(0);
  const [downloadURL, setNewImageOwner] = useState(0);
 


  const createUser = async (e) => {
    // e.preventDefault();
    // const enter = await addDoc(usersCollectionRef, {
    //   enterpriseName: enterprise,
    //   type: type,
    //   ownerName: owner,
    //   address: address,
    //   phone: phone,
    //   since: since,
    //   description: des,
    //   imageOwner: downloadURL,
    e.preventDefault();
    const file = downloadURL;
    console.log(file)
    uploadFiles(file);
  
    // });
    // console.log(enter.id);
  };

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data=await getDocs(usersCollectionRef)
  //     // console.log(data);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   }

  //   getUsers();
  // }, [] );

  return (
    <div className="newUser">
      <Topbar />
      <div className="col-md-2">
        <Sidebar />
      </div>

      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={formHandler}>


        <div className="newUserItem">
          <label>Enterprise Name</label>
          <input
            type="text"
            onChange={(event) => {
              setNewEnterprise(event.target.value);
            }}
          />
        </div>

        <div className="newUserItem">
          <label>Enterprise Type</label>
          <div className="newUserGender">
            <input
              type="text"
              onChange={(event) => {
                setNewType(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="newUserItem">
          <label>Owner Name</label>
          <input
            type="text"
            onChange={(event) => {
              setNewOwner(event.target.value);
            }}
          />
        </div>

        <div className="newUserItem">
          <label>Address</label>
          <input
            type="text"
            onChange={(event) => {
              setNewAddress(event.target.value);
            }}
          />
        </div>

        <div className="newUserItem">
          <label>Telephone</label>
          <input
            type="text"
            onChange={(event) => {
              setNewPhone(event.target.value);
            }}
          />
        </div>

        <div className="newUserItem">
          <label>Since</label>
          <input
            type="text"
            onChange={(event) => {
              setNewSince(event.target.value);
            }}
          />
        </div>

        <div className="newUserItem">
          <label>Description</label>
          <input
            type="text"
            onChange={(event) => {
              setNewDescription(event.target.value);
            }}
          />
        </div>
        <div className="newUserItem">
          <label>Image</label>
          <input
            type="file"
            onChange={(event) => {
              setNewImageOwner(event.target.value);
            }}
          />
        </div>

       



        <button type="submit" className="newUserButton" onClick={createUser}>
          Create
        </button>
      </form>
    </div>
  );
}




// import { db } from "./../../database/firebase-config";
// import { useState, useRef, useEffect } from "react";
// import { collection, getDocs, addDoc } from "@firebase/firestore";
// import Sidebar from "./Sidebar";
// import { Topbar } from "./Topbar";

// import "./newUser.css";

// export default function AUser() {
//   const [users, setUsers] = useState([]);
//   const usersCollectionRef = collection(db, "Enterprises");

//   const [progress, setProgress] = useState(0);

//   const formHandler = (e) => {
//     e.preventDefault();
//     const file = e.target[0].files[0];
//     uploadFiles(file);
//   };

//   const uploadFiles = (file) => {
//     if (!file) return;
//     const sotrageRef = ref(storage, `${file.name}/${file.name}`);
//     const uploadTask = uploadBytesResumable(sotrageRef, file);

//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         const prog = Math.round(
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//         );
//         setProgress(prog);
//       },
//       (error) => console.log(error),
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           console.log("File available at", downloadURL);
//         });
//       }
//     );
//   };

//   const [enterprise, setNewEnterprise] = useState("");
//   const [type, setNewType] = useState("");
//   const [owner, setNewOwner] = useState(0);
//   const [address, setNewAddress] = useState("");
//   const [phone, setNewPhone] = useState("");
//   const [since, setNewSince] = useState("");
//   const [des, setNewDescription] = useState(0);
//   const [lattitude, setNewLattitude] = useState(0);
//   const [longertitude, setNewLongertitude] = useState(0);
//   const [downloadURL, setNewImage] = useState(0);
//   const [downloadURLOwner, setNewImageOwner] = useState(0);
//   const [downloadURLHeader, setNewImageHeader] = useState(0);
//   const [downloadURLProducts, setNewImageProducts] = useState(0);
//   const [downloadURLShop, setNewImageShop] = useState(0);

//   const createUser = async (e) => {
//     e.preventDefault();
//     const enter = await addDoc(usersCollectionRef, {
//       enterpriseName: enterprise,
//       type: type,
//       ownerName: owner,
//       address: address,
//       phone: phone,
//       since: since,
//       description: des,
//       lattitude: lattitude,
//       longertitude: longertitude,
//       image: downloadURL,
//       imageOwner: downloadURLOwner,
//       imageHeader: downloadURLHeader,
//       imageProducts: downloadURLProducts,
//       imageShop: downloadURLShop,
//     });
//     console.log(enter.id);
//   };

//   // useEffect(() => {
//   //   const getUsers = async () => {
//   //     const data=await getDocs(usersCollectionRef)
//   //     // console.log(data);
//   //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//   //   }

//   //   getUsers();
//   // }, [] );

//   return (
//     <>
//       <div className="newUser">
//       <Topbar />

//       <div className="col-md-2">
//           <Sidebar />
//         </div>
//         <div className="col-md-10">

//         <h1 className="newUserTitle">New SME</h1>
//         <form className="newUserForm">
//           <div className="newUserItem">
//             <label>Enterprise Name</label>
//             <input
//               type="text" className="field"
//               onChange={(event) => {
//                 setNewEnterprise(event.target.value);
//               }}
//             />
//           </div>

//           <div className="newUserItem">
//             <label>Brand Name</label>
//             <input
//               type="text" className="field"
//               onChange={(event) => {
//                 setNewOwner(event.target.value);
//               }}
//             />
//           </div>

//           <div className="newUserItem">
//             <label>Since</label>
//             <input className="field"
//               type="text"
//               onChange={(event) => {
//                 setNewSince(event.target.value);
//               }}
//             />
//           </div>

//           <div className="newUserItem">
//             <label>Phone</label>
//             <input className="field"
//               type="text"
//               onChange={(event) => {
//                 setNewPhone(event.target.value);
//               }}
//             />
//           </div>

//           <div className="newUserItem">
//             <label>Address</label>
//             <input className="field"
//               type="text"
//               onChange={(event) => {
//                 setNewAddress(event.target.value);
//               }}
//             />
//           </div>

//           <div className="newUserItem">
//             <label>Location</label>
//             <input className="field"
//               type="text"
//               placeholder="Lattitude:"
//               onChange={(event) => {
//                 setNewLattitude(event.target.value);
//               }}
//             />
//             <br></br>
//             <input className="field"
//               type="text"
//               placeholder="Longertitude:"
//               onChange={(event) => {
//                 setNewLongertitude(event.target.value);
//               }}
//             />
//           </div>

//           <div className="newUserItem">
//             <label>Enterprise Type</label>
//             <select
//               className="newUserSelect"
//               name="active"
//               id="active"
//               onChange={(event) => {
//                 setNewType(event.target.value);
//               }}
//             >
//               <option value="bathik">Bathik</option>
//               <option value="cane">Cane</option>
//               <option value="coir">Coir</option>
//               <option value="toddy">Toddy</option>
//               <option value="pottery">Pottery</option>
//               <option value="handloom">Handloom</option>
//               <option value="drums">Drums</option>
//               <option value="mask">Mask</option>
//               <option value="beeralu">Beeralu</option>
//               <option value="laksha">Laksha</option>
//             </select>
//           </div>


//           <div className="newUserItem">
//             <label>About</label>
//             <textarea
//               type="text" className="field"
//               onChange={(event) => {
//                 setNewDescription(event.target.value);
//               }}
//             />
//           </div>

         
//           <br></br>
//           <hr/>
//           <div className="newUserItem">
//             <label for="formFileSm" class="form-label">
//               Header Image
//             </label>
//             <input
//               class="form-control form-control-sm"
//               id="formFileSm"
//               type="file"
//             />
//           </div>

//           <br></br>
//           <div className="newUserItem">
//             <label for="formFileSm" class="form-label">
//               Profile Image
//             </label>
//             <input
//               class="form-control form-control-sm"
//               id="formFileSm"
//               type="file"
//             />
//           </div>

//           <br></br>
//           <div className="newUserItem">
//             <label for="formFileSm" class="form-label">
//               Body Image
//             </label>
//             <input
//               class="form-control form-control-sm"
//               id="formFileSm"
//               type="file"
//               onChange={(event) => {
//                 setNewType(event.target.value);
//               }}
//             />
//             {/* <button type="submit" onClick={formHandler}>
//               Upload
//             </button> */}
//           </div>

//           <br></br>
//           <div className="newUserItem">
//             <label for="formFileSm" class="form-label">
//               Body Image
//             </label>
//             <input
//               class="form-control form-control-sm"
//               id="formFileSm"
//               type="file"
//             />
//           </div>

//           <br></br>
//           <button className="newUserButton" type="submit" onClick={createUser}>
//             Create
//           </button>
//         </form>
//       </div>
//       </div>
//     </>
//   );
// }

// // import {db} from './../../database/firebase-config';
// // import { useState, useRef, useEffect } from "react";
// // import {collection,getDocs, addDoc } from "@firebase/firestore";
// // import { getScopedCssBaselineUtilityClass } from "@mui/material";
// // import { ownerDocument } from "@material-ui/core";
// // import ImageUpload from '../ImageUpload';

// // export default function AUser() {
// //   const [users, setUsers] = useState([]);
// //   const usersCollectionRef = collection(db, "Enterprises");

// //   const [enterprise, setNewEnterprise] = useState("");
// //   const [type, setNewType] = useState("");
// //   const [owner, setNewOwner] = useState(0);
// //   const [address, setNewAddress] = useState("");
// //   const [phone, setNewPhone] = useState("");
// //   const [since, setNewSince] = useState("");
// //   const [des, setNewDescription] = useState(0);

// //   const createUser = async () => {
// //     await addDoc(usersCollectionRef, {
// //       enterpriseName: enterprise,
// //       type: type,
// //       ownerName: owner,
// //       address: address,
// //       phone: phone,
// //       since: since,
// //       description: des
// //     });
// //   };

// //   useEffect(() => {
// //     const getUsers = async () => {
// //       const data=await getDocs(usersCollectionRef)
// //       // console.log(data);
// //       setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
// //     }

// //     getUsers();
// //   }, [] );

// //   const [progress, setProgress] = useState(0);
// //   const formHandler = (e) => {
// //     e.preventDefault();
// //     const file = e.target[0].files[0];
// //     uploadFiles(file);
// //   };

// //   const uploadFiles = (file) => {
// //     //
// //     if (!file) return;
// //     const sotrageRef = ref(storage, `test/${file.name}`);
// //     const uploadTask = uploadBytesResumable(sotrageRef, file);

// //     uploadTask.on(
// //       "state_changed",
// //       (snapshot) => {
// //         const prog = Math.round(
// //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
// //         );
// //         setProgress(prog);
// //       },
// //       (error) => console.log(error),
// //       () => {
// //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
// //           console.log("File available at", downloadURL);
// //         });
// //       }
// //     );
// //   };

// //   function all(){
// //     formHandler();
// //     createUser();
// //     uploadFiles();
// // }

// //   return (
// //     <div className="newUser">
// //       <h1 className="newUserTitle">New User</h1>
// //       <form className="newUserForm">

// //       <div className="newUserItem">
// //           <label>Enterprise Name</label>
// //           <input type="text" onChange={(event) => {
// //                     setNewEnterprise(event.target.value);
// //                   }}/>
// //         </div>

// //         <div className="newUserItem">
// //           <label>Enterprise Type</label>
// //           <div className="newUserGender">
// //             <input type="radio" name="gender" id="male" value="male" />
// //             <label for="male">Male</label>
// //             <input type="radio" name="gender" id="female" value="female" />
// //             <label for="female">Female</label>
// //             <input type="radio" name="gender" id="other" value="other" />
// //             <label for="other">Other</label>
// //           </div>
// //         </div>

// //         <div className="newUserItem">
// //           <label>Owner Name</label>
// //           <input type="text"
// //                   onChange={(event) => {
// //                     setNewOwner(event.target.value);
// //                   }}/>
// //         </div>

// //         <div className="newUserItem">
// //           <label>Address</label>
// //           <input type="text"
// //                   onChange={(event) => {
// //                     setNewAddress(event.target.value);
// //                   }}/>
// //         </div>

// //         <div className="newUserItem">
// //           <label>Telephone</label>
// //           <input type="text"
// //                   onChange={(event) => {
// //                     setNewPhone(event.target.value);
// //                   }}/>
// //         </div>

// //         <div className="newUserItem">
// //           <label>Since</label>
// //           <input type="text"
// //                   onChange={(event) => {
// //                     setNewSince(event.target.value);
// //                   }}/>
// //         </div>

// //         <div className="newUserItem">
// //           <label>Description</label>
// //           <input type="text"
// //                   onChange={(event) => {
// //                     setNewDescription(event.target.value);
// //                   }}/>
// //         </div>

// //          <div className="newUserItem">

// //         <input type="file" className="input" />

// //       <hr />
// //       {/* <h2>Uploading done {progress}%</h2> */}
// //     </div>

// //         {/* <div className="newUserItem">
// //           <label>Gender</label>
// //           <div className="newUserGender">
// //             <input type="radio" name="gender" id="male" value="male" />
// //             <label for="male">Male</label>
// //             <input type="radio" name="gender" id="female" value="female" />
// //             <label for="female">Female</label>
// //             <input type="radio" name="gender" id="other" value="other" />
// //             <label for="other">Other</label>
// //           </div>
// //         </div> */}
// //         {/* <div className="newUserItem">
// //           <label>Active</label>
// //           <select className="newUserSelect" name="active" id="active">
// //             <option value="yes">Yes</option>
// //             <option value="no">No</option>
// //           </select>
// //         </div> */}
// //         <button className="newUserButton" onClick={all}>Create</button>
// //       </form>
// //     </div>
// //   );

// //   }
