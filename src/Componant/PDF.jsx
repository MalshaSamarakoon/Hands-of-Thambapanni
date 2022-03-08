
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { PDFExport } from "@progress/kendo-react-pdf";

const ref = React.createRef();

const PDF = (props) => {
  
  const pdfExportComponent = React.useRef(null);

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };
  <div style={{ whiteSpace: 'pre-wrap' }}> { }</div>
  
  return (
    
    <div>
      <div style={{ whiteSpace: 'pre-wrap' }}> { }</div>
      <div className="example-config">
        <button
          className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
          onClick={exportPDFWithComponent}
        >
          Export to PDF
        </button>
        
      </div>
      <div style={{ whiteSpace: 'pre-wrap' }}> { }</div>
      <PDFExport ref={pdfExportComponent} paperSize="A4">
        <div>
          <div style={{ whiteSpace: 'pre-wrap' }}> { }</div>
          <div className="container">
                        
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
          <form className="block-example border border-dark 10px 50px 50px" method="post">
             <fieldset>
      <div className="col-md-12"ref={ref}>
         
                        
                          
        <div className="form-group">                  
       <label>Name:
        <input value={props.name} className="form-control" />
           </label>  
                        </div>  
                        
              <div className="form-group">              
          <label>Email:           
          <input value={props.email} className="form-control" />
          </label>    
           </div>
                        
              <div className="form-group">                
          <label>Amount:              
          <input value={props.amount} className="form-control" />
          </label>  
             </div>
                        
              <div className="form-group">                
          <label>Details:
         <input value={props.content} className="form-control" />
           </label>
                </div>          
           
            <div style={{ whiteSpace: 'pre-wrap' }}> {   }</div>
                        <div style={{ whiteSpace: 'pre-wrap' }}> { }</div>
                        
                      </div>  
                      
          </fieldset>
                    </form>
                  </div>
                </div>
              </div>
          </div>
          </div>
          <div style={{ whiteSpace: 'pre-wrap' }}> </div>
          
       </PDFExport>
         </div>
      
  
 
    
  )
  
};

export default PDF;