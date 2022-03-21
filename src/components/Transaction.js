import React from "react";
const Transaction = (props) => {
    
    const displayData = props.displayData

 
    
 
    return(
        <div>
                     <div className="row card-body bg-dark border-right-4 rounded-top rounded-right rounded-left rounded-bottom">
                            <h5 className="card-title text-white-50">Total saved</h5>
                            <p className="card-text text-white">#23,500</p>
                    </div>
                    <div className="row bg-white">
                        <div className="card-body bg-white">
                            <h5 className="card-title">Transaction history</h5>
                            <label className="text-muted">2022-03-03</label> 
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                {displayData}
                             </div>
                            <div className="col-md-6">
                                {displayData}
                             </div>

                        </div>


                    </div>
               

            </div>
       
    )
}
export default Transaction;
