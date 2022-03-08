import { db } from "./../../database/firebase-config";
import { useState, useRef, useEffect } from "react";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import Sidebar from "./Sidebar";
import { Topbar } from "./Topbar";

export default function AUser() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "Enterprises");

  const [progress, setProgress] = useState(0);

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
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
  const [downloadURLOwner, setNewImageOwner] = useState(0);
  const [downloadURLHeader, setNewImageHeader] = useState(0);
  const [downloadURLProducts, setNewImageProducts] = useState(0);
  const [downloadURLShop, setNewImageShop] = useState(0);



  const createUser = async (e) => {
    e.preventDefault();
    const enter = await addDoc(usersCollectionRef, {
      enterpriseName: enterprise,
      type: type,
      ownerName: owner,
      address: address,
      phone: phone,
      since: since,
      description: des,
      imageOwner: downloadURLOwner,
      imageHeader: downloadURLHeader,
      imageProducts: downloadURLProducts,
      imageShop: downloadURLShop,
    });
    console.log(enter.id);
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

        <div className="newUserItem">
          <label>Image</label>
          <input
            type="file"
            onChange={(event) => {
              setNewImageHeader(event.target.value);
            }}
          />
        </div>

        <div className="newUserItem">
          <label>Image</label>
          <input
            type="file"
            onChange={(event) => {
              setNewImageProducts(event.target.value);
            }}
          />
        </div>

        <div className="newUserItem">
          <label>Image</label>
          <input
            type="file"
            onChange={(event) => {
              setNewImageShop(event.target.value);
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


