import {db} from './../../database/firebase-config';
import { useState, useRef, useEffect } from "react";
import {collection,getDocs, addDoc } from "@firebase/firestore";
import { getScopedCssBaselineUtilityClass } from "@mui/material";
import { ownerDocument } from "@material-ui/core";



export default function AUser() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "Enterprise");

  const [enterprise, setNewEnterprise] = useState("");
  const [type, setNewType] = useState("");
  const [owner, setNewOwner] = useState(0);
  const [address, setNewAddress] = useState("");
  const [phone, setNewPhone] = useState("");
  const [since, setNewSince] = useState("");
  const [description, setNewDescription] = useState(0);

  const createUser = async () => {
    await addDoc(usersCollectionRef, { 
      enterpriseName: enterprise, 
      type: type,
      ownerName: owner, 
      address: address, 
      phone: phone, 
      since: since,
      description: des 
    });
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
          <label>Enterprise Name</label>
          <input type="text" onChange={(event) => {
                    setNewEnterprise(event.target.value);
                  }}/>
        </div>

        <div className="newUserItem">
          <label>Enterprise Type</label>
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

     
        {/* <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div> */}
        {/* <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div> */}
        <button className="newUserButton"onClick={createUser}>Create</button>
      </form>
    </div>
  );

  }


