import "./newUser.css";
import {db} from './../../../database/firebase-config';
import { useState, useRef, useEffect } from "react";
import {collection,getDocs, addDoc } from "@firebase/firestore";
import { getScopedCssBaselineUtilityClass } from "@mui/material";
import { ownerDocument } from "@material-ui/core";



export default function AUser() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "enterprise");

  const [newAddress, setNewAddress] = useState("");
  const [owner, setNewOwner] = useState(0);
  const [phone, setNewPhone] = useState("");
  const [title, setNewtitle] = useState("");
  const [email, setNewEmail] = useState(0);

  const createUser = async () => {
    await addDoc(usersCollectionRef, { address: newAddress, owner_name: owner,phone:phone,title:title,email:email });
  };

  useEffect(() => {
    const getUsers = async () => {
      const data=await getDocs(usersCollectionRef)
      // console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getUsers();
  }, [] );

  
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        
      <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78"onChange={(event) => {
                    setNewAddress(event.target.value);
                  }}/>
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" onChange={(event) => {
                    setNewOwner(event.target.value);
                  }}/>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" 
                  onChange={(event) => {
                    setNewPhone(event.target.value);
                  }}/>
        </div>
        
        <div className="newUserItem">
          <label>Enterprise Name</label>
          <input type="text" placeholder="" onChange={(event) => {
                    setNewtitle(event.target.value);
                  }}/>
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Mawathagama | Kurunegala" onChange={(event) => {
                    setNewEmail(event.target.value);
                  }}/>
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton"onClick={createUser}>Create</button>
      </form>
    </div>
  );

  }


