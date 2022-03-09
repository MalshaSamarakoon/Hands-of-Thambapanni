import { useState, useEffect } from "react";
import {db} from '../../database/firebase-config';
import {
  collection,
  getDocs,
} from "firebase/firestore";

function WidgetLg() {

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "payments");



  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
<>

</>
  );
}

export default WidgetLg;





