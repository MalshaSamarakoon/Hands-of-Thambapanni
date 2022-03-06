import { useState, useEffect } from "react";
import {db} from '../../database/firebase-config';import {
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
      <th scope="col">User</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{user.email}</td>
      <td>{user.amount}</td>
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

export default WidgetLg;





