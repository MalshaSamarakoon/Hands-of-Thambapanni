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
      <th scope="col">Donated time</th>
      <th scope="col">Enterprise Name</th>
    </tr>
  </thead>
  <tbody>
  {users.map((user) => {
        return (
    <tr>
      <td>{user.email}</td>
      <td>{user.amount}</td>
      <td>{user.date}</td>
      {/* <td>{user.enterpriseName}</td> */}
    </tr>
    );
      })}
  </tbody>
</table>

                </div>
               
              </li>
      
            </ul>
          </div>

    </div>
  );
}

export default WidgetLg;





