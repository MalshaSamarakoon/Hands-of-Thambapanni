import { db, storage } from "./../../database/firebase-config";
import { useState, useRef, useEffect } from "react";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import Sidebar from "./Sidebar";
import { Topbar } from "./Topbar";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

import "./newUser.css";

export default function AUser() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "Enterprises");

  const [progress, setProgress] = useState(0);

  const formHandler = (e) => {};

  const [enterprise, setNewEnterprise] = useState("");
  const [type, setNewType] = useState("");
  const [owner, setNewOwner] = useState(0);
  const [address, setNewAddress] = useState("");
  const [phone, setNewPhone] = useState("");
  const [since, setNewSince] = useState("");
  const [des, setNewDescription] = useState(0);
  const [lat, setNewLattitude] = useState(0);
  const [lon, setNewLongertitude] = useState(0);
  const [newImageOwner, setNewImageOwner] = useState("");

  const uploadFiles = () => {
    if (!newImageOwner) return;
    const sotrageRef = ref(storage, `images/${newImageOwner.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, newImageOwner);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log("Error in uploading image", error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  const createUser = async (e) => {
    e.preventDefault();
     await addDoc(usersCollectionRef, {
      enterpriseName: enterprise,
      type: type,
      ownerName: owner,
      address: address,
      phone: phone,
      since: since,
      description: des,
      lattitude: lat,
      longertitude: lon,
      });

    e.preventDefault();
    uploadFiles();
    // console.log(enter.id);
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
            placeholder="M.K.W.Nimal"
            onChange={(event) => {
              setNewOwner(event.target.value);
            }}
          />
        </div>

        <div className="newUserItem">
          <label>Brand Name</label>
          <input
            type="text"
            placeholder="Minimuthu Bathik"
            onChange={(event) => {
              setNewEnterprise(event.target.value);
            }}
          />
        </div>

        <div className="newUserItem">
          <label>Since</label>
          <input
            type="number"
            placeholder="2007"
            onChange={(event) => {
              setNewSince(event.target.value);
            }}
          />
        </div>

        <div className="newUserItem">
          <label>Phone</label>
          <input
            type="text"
            placeholder="+94 123 456 789"
            onChange={(event) => {
              setNewPhone(event.target.value);
            }}
          />
        </div>

        <div className="newUserItem">
          <label>Address</label>
          <input
            type="text"
            placeholder="No:12,Kandy,Sri Lanka"
            onChange={(event) => {
              setNewAddress(event.target.value);
            }}
          />
        </div>

        <div className="newUserItem">
          <label>Location</label>
          <input
            type="text"
            placeholder="Lattitude:"
            onChange={(event) => {
              setNewLattitude(event.target.value);
            }}
          />
          <br></br>
          <input
            type="text"
            placeholder="Longertitude:"
            onChange={(event) => {
              setNewLongertitude(event.target.value);
            }}
          />
        </div>

        <div className="newUserItem">
          <label>About</label>
          <textarea 
            type="text"
            placeholder="Description about:"
            onChange={(event) => {
              setNewDescription(event.target.value);
            }}
          />
        </div>

        <div className="newUserItem">
          <label>Enterprise Type</label>
          <select
            className="newUserSelect"
            name="active"
            id="active"
            onChange={(event) => {
              setNewType(event.target.value);
            }}
          >
            <option value="bathik">Bathik</option>
            <option value="cane">Cane</option>
            <option value="coir">Coir</option>
            <option value="toddy">Toddy</option>
            <option value="pottery">Pottery</option>
            <option value="handloom">Handloom</option>
            <option value="drums">Drums</option>
            <option value="mask">Mask</option>
            <option value="cane">Cane</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Image</label>
          <input
            type="file" className="image"
            onChange={(event) => {
              setNewImageOwner(event.target.files[0]);
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








