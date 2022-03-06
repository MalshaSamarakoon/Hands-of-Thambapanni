import {db} from './../../database/firebase-config';
import { useState, useRef, useEffect } from "react";
import {collection,getDocs, addDoc } from "@firebase/firestore";




export default function AUser() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "Enterprises");

  const [enterprise, setNewEnterprise] = useState("");
  const [type, setNewType] = useState("");
  const [owner, setNewOwner] = useState(0);
  const [address, setNewAddress] = useState("");
  const [phone, setNewPhone] = useState("");
  const [since, setNewSince] = useState("");
  const [des, setNewDescription] = useState(0);

  const createUser = async (e) => {
    e.preventDefault();
    const enter = await addDoc(usersCollectionRef, { 
      enterpriseName: enterprise, 
      type: type,
      ownerName: owner, 
      address: address, 
      phone: phone, 
      since: since,
      description: des 
    });
    console.log(enter.id)
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
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        
      <div className="newUserItem">
          <label>Enterprise Name</label>
          <input type="text" onChange={(event) => {
                    setNewEnterprise(event.target.value);
                  }}/>
        </div>

        <div className="newUserItem">
          <label>Enterprise Type</label>
          <div className="newUserGender">
            <input type="text" 
                  onChange={(event) => {
                    setNewType(event.target.value);
                  }}/>
          </div>
        </div>

        <div className="newUserItem">
          <label>Owner Name</label>
          <input type="text" 
                  onChange={(event) => {
                    setNewOwner(event.target.value);
                  }}/>
        </div>

        <div className="newUserItem">
          <label>Address</label>
          <input type="text"
                  onChange={(event) => {
                    setNewAddress(event.target.value);
                  }}/>
        </div>
        
        <div className="newUserItem">
          <label>Telephone</label>
          <input type="text" 
                  onChange={(event) => {
                    setNewPhone(event.target.value);
                  }}/>
        </div>

        <div className="newUserItem">
          <label>Since</label>
          <input type="text" 
                  onChange={(event) => {
                    setNewSince(event.target.value);
                  }}/>
        </div>

        <div className="newUserItem">
          <label>Description</label>
          <input type="text" 
                  onChange={(event) => {
                    setNewDescription(event.target.value);
                  }}/>
        </div>

      

        <button className="newUserButton"onClick={createUser}>Create</button>
      </form>
    </div>
  );

  }






// import {db} from './../../database/firebase-config';
// import { useState, useRef, useEffect } from "react";
// import {collection,getDocs, addDoc } from "@firebase/firestore";
// import { getScopedCssBaselineUtilityClass } from "@mui/material";
// import { ownerDocument } from "@material-ui/core";
// import ImageUpload from '../ImageUpload';



// export default function AUser() {
//   const [users, setUsers] = useState([]);
//   const usersCollectionRef = collection(db, "Enterprises");

//   const [enterprise, setNewEnterprise] = useState("");
//   const [type, setNewType] = useState("");
//   const [owner, setNewOwner] = useState(0);
//   const [address, setNewAddress] = useState("");
//   const [phone, setNewPhone] = useState("");
//   const [since, setNewSince] = useState("");
//   const [des, setNewDescription] = useState(0);

//   const createUser = async () => {
//     await addDoc(usersCollectionRef, { 
//       enterpriseName: enterprise, 
//       type: type,
//       ownerName: owner, 
//       address: address, 
//       phone: phone, 
//       since: since,
//       description: des 
//     });
//   };

//   useEffect(() => {
//     const getUsers = async () => {
//       const data=await getDocs(usersCollectionRef)
//       // console.log(data);
//       setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     }

//     getUsers();
//   }, [] );

//   const [progress, setProgress] = useState(0);
//   const formHandler = (e) => {
//     e.preventDefault();
//     const file = e.target[0].files[0];
//     uploadFiles(file);
//   };

//   const uploadFiles = (file) => {
//     //
//     if (!file) return;
//     const sotrageRef = ref(storage, `test/${file.name}`);
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

//   function all(){
//     formHandler();
//     createUser();
//     uploadFiles();
// }


  
//   return (
//     <div className="newUser">
//       <h1 className="newUserTitle">New User</h1>
//       <form className="newUserForm">
        
//       <div className="newUserItem">
//           <label>Enterprise Name</label>
//           <input type="text" onChange={(event) => {
//                     setNewEnterprise(event.target.value);
//                   }}/>
//         </div>

//         <div className="newUserItem">
//           <label>Enterprise Type</label>
//           <div className="newUserGender">
//             <input type="radio" name="gender" id="male" value="male" />
//             <label for="male">Male</label>
//             <input type="radio" name="gender" id="female" value="female" />
//             <label for="female">Female</label>
//             <input type="radio" name="gender" id="other" value="other" />
//             <label for="other">Other</label>
//           </div>
//         </div>

//         <div className="newUserItem">
//           <label>Owner Name</label>
//           <input type="text" 
//                   onChange={(event) => {
//                     setNewOwner(event.target.value);
//                   }}/>
//         </div>

//         <div className="newUserItem">
//           <label>Address</label>
//           <input type="text"
//                   onChange={(event) => {
//                     setNewAddress(event.target.value);
//                   }}/>
//         </div>
        
//         <div className="newUserItem">
//           <label>Telephone</label>
//           <input type="text" 
//                   onChange={(event) => {
//                     setNewPhone(event.target.value);
//                   }}/>
//         </div>

//         <div className="newUserItem">
//           <label>Since</label>
//           <input type="text" 
//                   onChange={(event) => {
//                     setNewSince(event.target.value);
//                   }}/>
//         </div>

//         <div className="newUserItem">
//           <label>Description</label>
//           <input type="text" 
//                   onChange={(event) => {
//                     setNewDescription(event.target.value);
//                   }}/>
//         </div>

//          <div className="newUserItem">
      
//         <input type="file" className="input" />
      
//       <hr />
//       {/* <h2>Uploading done {progress}%</h2> */}
//     </div>

     
//         {/* <div className="newUserItem">
//           <label>Gender</label>
//           <div className="newUserGender">
//             <input type="radio" name="gender" id="male" value="male" />
//             <label for="male">Male</label>
//             <input type="radio" name="gender" id="female" value="female" />
//             <label for="female">Female</label>
//             <input type="radio" name="gender" id="other" value="other" />
//             <label for="other">Other</label>
//           </div>
//         </div> */}
//         {/* <div className="newUserItem">
//           <label>Active</label>
//           <select className="newUserSelect" name="active" id="active">
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//         </div> */}
//         <button className="newUserButton" onClick={all}>Create</button>
//       </form>
//     </div>
//   );

//   }


