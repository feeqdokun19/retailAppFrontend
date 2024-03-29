import React from 'react';
import Datas from './Datas'
import Transaction from "./Transaction";
// import { useState } from 'react';



const Transactiondetails = () => {
    const LoadTransactions = [
        {
            "name": "Vacation",
            "savingsID": "e090ce43-315b-4852-bcca-ee5a1f4223ba",
            "amountToSave": 50000.000000000000000000,
            "amountSaved": 0.000000000000000000,
            "totalInterestEarned": 0,
            "estimatedTerminationDate": "2022-03-08T00:00:00",
            "startDate": "2022-02-26T00:00:00",
            "savingsType": 1,
            "status": 1,
            "imageURL": "",
            "interestRate": 15.50,
            "schedule": 1,
            "installmentalContribution": 5000.000000000000000000,
            "isPaused": false
        },
        {
            "name": "Testing Personal Target",
            "savingsID": "72824131-b4ae-49d0-bcae-29e553deb51c",
            "amountToSave": 2000.000000000000000000,
            "amountSaved": 2500.000000000000000000,
            "totalInterestEarned": 10.616438356164383561643835616,
            "estimatedTerminationDate": "2022-02-23T00:00:00",
            "startDate": "2022-02-20T00:00:00",
            "savingsType": 1,
            "status": 2,
            "imageURL": "",
            "interestRate": 15.50,
            "schedule": 1,
            "installmentalContribution": 666.666666666666666667,
            "lastPaymentDate": "2022-02-20T00:00:00",
            "isPaused": true
        },
        {
            "name": "G Challenge Weekly",
            "savingsID": "c6a1f776-ab92-4c89-aceb-9fdcfc70abb2",
            "amountToSave": 2000.000000000000000000,
            "amountSaved": 0.000000000000000000,
            "totalInterestEarned": 0,
            "estimatedTerminationDate": "0001-01-01T00:00:00",
            "startDate": "0001-01-01T00:00:00",
            "savingsType": 5,
            "status": 1,
            "imageURL": "https://wealthbuddytestdiag.blob.core.windows.net/wealthbuddy-group-challenge-savings/22fe2b2b-46ab-4971-8a87-72da6085e09b.jpeg",
            "interestRate": 12.50,
            "schedule": 2,
            "installmentalContribution": 250.000000000000000000,
            "isPaused": false
        },
        {
            "name": "G challenge week",
            "savingsID": "286c453f-3910-4df7-9b02-87ae6d9844e2",
            "amountToSave": 5000.000000000000000000,
            "amountSaved": 0.000000000000000000,
            "totalInterestEarned": 0,
            "estimatedTerminationDate": "0001-01-01T00:00:00",
            "startDate": "0001-01-01T00:00:00",
            "savingsType": 5,
            "status": 1,
            "imageURL": "https://wealthbuddytestdiag.blob.core.windows.net/wealthbuddy-group-challenge-savings/897b9d7a-5030-446b-99b2-7248e80e9a95.jpeg",
            "interestRate": 12.50,
            "schedule": 1,
            "installmentalContribution": 166.666666666666666667,
            "isPaused": false
        },
        {
            "name": "G challenge",
            "savingsID": "87c9042a-16a7-4e31-80c4-1f805fa4c1b5",
            "amountToSave": 2000.000000000000000000,
            "amountSaved": 0.000000000000000000,
            "totalInterestEarned": 0,
            "estimatedTerminationDate": "0001-01-01T00:00:00",
            "startDate": "0001-01-01T00:00:00",
            "savingsType": 5,
            "status": 1,
            "imageURL": "https://wealthbuddytestdiag.blob.core.windows.net/wealthbuddy-group-challenge-savings/e8db900b-60b2-46e8-b980-5a274df81582.jpeg",
            "interestRate": 12.50,
            "schedule": 3,
            "installmentalContribution": 500.000000000000000000,
            "isPaused": false
        },
        {
            "name": "GroupTargetTest2",
            "savingsID": "d16d61ac-3f62-437c-bf10-a8bb5b83b090",
            "amountToSave": 10000.000000000000000000,
            "amountSaved": 3333.333333333333333334,
            "totalInterestEarned": 0,
            "estimatedTerminationDate": "2021-02-26T00:00:00",
            "startDate": "2021-02-23T22:45:51.57",
            "savingsType": 4,
            "status": 5,
            "imageURL": "",
            "interestRate": 12.75,
            "schedule": 1,
            "installmentalContribution": 1666.666666666666666667,
            "lastPaymentDate": "2021-02-23T23:46:04.65",
            "isPaused": false
        },
        {
            "name": "CheckTargetTest",
            "savingsID": "d5393a07-6b61-46fd-9948-ed3d1404b55e",
            "amountToSave": 5000.000000000000000000,
            "amountSaved": 1666.666666666666666666,
            "totalInterestEarned": 0,
            "estimatedTerminationDate": "2021-02-26T00:00:00",
            "startDate": "2021-02-23T22:33:26.8333333",
            "savingsType": 4,
            "status": 5,
            "imageURL": "",
            "interestRate": 12.75,
            "schedule": 1,
            "installmentalContribution": 833.333333333333333333,
            "lastPaymentDate": "2021-02-24T00:00:00",
            "isPaused": false
        },
        {
            "name": "TestChallengeCheck",
            "savingsID": "1ed6b0ce-92c9-4e6c-8b3e-2ccb94fba89b",
            "amountToSave": 2000.000000000000000000,
            "amountSaved": 2000.000000000000000001,
            "totalInterestEarned": 0.684931506849315069,
            "estimatedTerminationDate": "2021-02-26T00:00:00",
            "startDate": "2021-02-23T22:00:36.87",
            "savingsType": 5,
            "status": 5,
            "imageURL": "",
            "interestRate": 12.50,
            "schedule": 1,
            "installmentalContribution": 666.666666666666666667,
            "isPaused": false
        }
       
    ]

    // let [botton, setBotton] = useState(LoadTransaction)

    // function HandleDeleteButton(buttonToRemove){
    //     const newbutton = botton.filter(item => item.status === buttonToRemove)
    //     setBotton(newbutton)

    // }

    return(

        
        <div className="container">
            <div className='row'>
                <div className='col'>
                    <Transaction/>
                </div>
                <div className='col'>
                    <div className='row'>
                        <div className='col-5'>
                            <div className="col-3 card">
                                <div className="card-body text-success">
                                    <h5 className="card-title text-nowrap"><center>Create new savings</center></h5>
                                </div>
                            </div>
                        </div>
                        {
                           LoadTransactions.map((LoadTransaction,i) =>(<div className='col-5'> <Datas key={i} displayData={LoadTransaction}/>
                           </div>
                           ))
                        }  
                              
                    </div>  
                </div>
                </div>
    {/* <div className="row ">
            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown button
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" onClick={()=> HandleDeleteButton(1)}>Pending</a></li>
                                    <li><a class="dropdown-item" onClick={()=> HandleDeleteButton(2)}>Inprogress</a></li>
                                    <li><a class="dropdown-item" onClick={()=> HandleDeleteButton(5)}>Completed</a></li>
                                </ul>
                            </div>
                <div className="col-4 container border border-danger mt-3 pt-3">
                    <Transaction/>
                </div>
                
                <div className="col-3 card">
                            <div className="card-body text-success">
                                <h5 className="card-title text-nowrap"><center>Create new savings</center></h5>
                                    </div>
                </div>
                <div className="card w-full md:w-full">
                {
                        botton.map(tData =>
                             <div className='card-body'> <Data displayData={tData}/>
                        </div>
                        )
                        
                
                        }
                </div>
                        
                
                
            </div> */}
        </div>
    )
}

export default Transactiondetails


