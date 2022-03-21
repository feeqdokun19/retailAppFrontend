import React from "react";
// import { useState } from "react";
const Datas = (props) => {

    const displayDatas = props.displayData
 

    return(
    
                
        <div className="col-7 border border-default mt-3 p-4 w-100" >

            <div>
                <div className="col-8 border-success mb-2 mt-0">
                    <div className="row">
                        <div className="col-sm-2 bg-warning border-success py-1  px-2 mb-0 mt-0"><span className="bi bi-lock h-50"></span></div>
                        <div className="col-sm-2"><h5>{displayDatas.name}</h5></div>
                    </div>
                    <div className="progress mt-1">
                        <div className="progress-bar w-100 " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"> </div>
                    </div> 
                    <div className="row">      
                        <div className="col-md-9">0%</div>
                        <div className="col-md-3">#50</div>
                    </div><span className="badge bg-success">Pending</span>
                </div>
                
                <div className="col-4 bg-warning border-success px-1 mb-2 mt-2"><span className="bi bi-lock h-50"></span></div>
        
                    <div className="row">
                        <div className="col-6 border border-default">
                            <div>Total saved</div>
                                <div>{displayDatas.name}</div>
                        </div>
                    
                    <div className="col-6 border border-default">
                        <div>Start Date</div>
                            <div> {displayDatas.startDate}</div>
                    </div>      
                    </div>

                    <div className="row">
                        <div className="col-6 border border-default">
                            <div>InterestRate</div>
                                <div> {displayDatas.interestRate} </div>
                        </div>
                                
                        <div className="col-6 border border-default">
                            <div>Maturity Date</div>
                                <div>{displayDatas.estimatedTerminationDate}</div>
                        </div>       
                    </div>
            </div>
        </div>
    

                    
     )
}

export default Datas;

