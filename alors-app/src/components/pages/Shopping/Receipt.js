import React from 'react';

import { Link } from 'react-router-dom';

function Reciept() {
  

  return (
    <>
    <div>
      <div className="receipt-container border border-dark text-center mx-5 my-5 p-5">
        <h1>THANK YOU FOR YOUR ORDER!</h1>
        <p>check your email for your order confirmation</p>
        <p>order confirmation number: #A3Z8N2M3563</p>
      </div>
       
        </div>
        <div className="receipt-container text-center mx-5 mb-5 p-5">
            <div className="row m-1 mb-2">
                <Link>BACK TO SHOPPING</Link>
            </div>
            <div className="row">
                <p>or</p>
            </div>
            <div className="row mx-3">
                <Link>LOOK AT YOUR ORDER HISTORY</Link>
            </div> 
      
    </div>
    
   
    </>
    
  );
}

export default Reciept;
