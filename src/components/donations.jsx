import Login from "./Login";
import React, { useState } from "react";
import { alpha, makeStyles } from '@material-ui/core/styles';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";
import { auth } from "../database/firebase-config";



function Donations() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
        YOU SHOULD LOGIN TO THE SITE BEFORE MAKE DONATIONS

 <div className='page-scroll'>
                  <button
                    className="openModalBtn"
                    onClick={() => {
                      setModalOpen(true);
                    }}
                  >
                    Login
                  </button>

                  {modalOpen && <Login setOpenModal={setModalOpen} />}
                </div>

        </div>
    )
}

export default Donations
