import React from "react";
import Transaction from "./Transaction";
import Data from "./Datas";

const Transactiondata = () =>{
    return(
        <div>
            <div className="container">
                <div className="row w-100">
                    <div className="col-md-7">
                        <Transaction />
                    </div>
                   
                        
                    
                    <div className="col-md-5">
                        <Data />  
                    </div>
                     
                         
                </div>
            </div>
        </div>
    )
}

export default Transactiondata;