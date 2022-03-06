import { useState, useEffect } from "react";
import {db} from '../../database/firebase-config';import {
  collection,
  getDocs,
} from "firebase/firestore";

function WidgetSm() {

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "Enterprises");


  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="App">
    

      {users.map((user) => {
        return (


          
            <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
           
            <ul className="widgetSmList">
             
              <li className="widgetSmListItem">
              
                <div className="widgetSmUser">
                <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">enterpriseName</th>
      <th scope="col">ownerName</th>
      <th scope="col">type</th>
      <th scope="col">address</th>
      <th scope="col">phone</th>
      <th scope="col">since</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{user.enterpriseName}</td>
      <td>{user.ownerName}</td>
      <td>{user.type}</td>
      <td>{user.address}</td>
      <td>{user.phone}</td>
      <td>{user.since}</td>
    </tr>
  </tbody>
</table>

                </div>
               
              </li>
      
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default WidgetSm;





