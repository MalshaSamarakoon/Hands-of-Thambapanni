import React from 'react';

import './App.css';

//Calling Bootstrap 4.5 css
import 'bootstrap/dist/css/bootstrap.min.css';

//Calling Firebase config setting to call the data
import { db } from './firebaseconfig';
import { useState, useEffect } from 'react';
import { collection, doc, getDocs } from 'firebase/firestore';
import * as ReactDOM from "react-dom";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

function App() {

 const [feedback, SetFeedback] = useState([]);
  const feedbackCollectionref = collection(db, "contacts")

  useEffect(() => {
    const getFeedback = async () => {
      const data = await getDocs(feedbackCollectionref);
      
      SetFeedback(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    };
    
    getFeedback();
  }, []);

    const pdfExportComponent = React.useRef(null);

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  return (

    <div>
      <div className="example-config">
        <button
          className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
          onClick={exportPDFWithComponent}
        >
          Export to PDF
        </button>
        
      </div>
  <PDFExport ref={pdfExportComponent} paperSize="A4">
      <div className="MainDiv">
        <div class="jumbotron text-center bg-sky">
          <h3>Feedbacks Report</h3>
        </div>
    
        <div className="container">
          <table id="example" class="display table">
            <thead class="thead-dark">
              <tr>
                <th>Email</th>
                <th>Name</th>
                <th>Massege</th>
                    
              </tr>
            </thead>
            <tbody> 
             
         
             {feedback.map((feedback) => {
               return (
                 <tr>
                   <td>{feedback.email}</td>
                   <td>{feedback.name}</td>
                   <td>{feedback.message}</td>
                    
                 </tr>
                    
               
               )
             })}
             
            
              
        
               
            </tbody>
            
          </table>
          
        </div>
     </div>
     
    </PDFExport>
   </div>
    );

            }

export default App;