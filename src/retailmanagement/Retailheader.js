import React from "react";
// import Retailsmanagement from "./images/Retailsmanagement.jpg"
import Retailsmanagement from './images/Retailsmanagementlogo.jpg'
//import Blusaltmainlogo from './images/Blusaltmainlogo.png'

const Retailheader = () => {

    return(
        <nav class="navbar-fixed-top">
            <div>
            
            <section>
            
                <div className="row bg-danger bg-gradient">
                    <div className="col-1">
                       <img classNameName=" rounded-full" src={Retailsmanagement} alt="retails" style={{height: `90%`, width: '100%', marginTop: 5, backgroundColor: "light",}} />
                    </div>
                    <div className="col-9"><h1 className="text-light mt-4" style={{fontFamily: 'Algerian'}}>AZFEEQ_ABDUL</h1></div> 
                    <div className="col-2 ">
                        <button type="button" className="btn btn-lg btn-primary mt-4" disabled>Buy Now</button>
                    </div>
                </div>   
                  
            </section>
        
        <div className="container-fluid">
        <section>
                <div className="row bg-danger bg-light">
                    <div className="col-md-3">
                        <h1 className="text-black" style={{fontFamily: 'Century' }}>Retail Stock</h1> 
                          
                    </div>
                    <div className="col-md-4 mt-2">
                            <div id="navbar-search-autocomplete" className="form-outline">
                                <input type="search" className="form-control relative flex-auto min-w-0 px-3 py-1.5 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search"/>
                            </div>

                    </div>
                    <div className="col-md-1 mt-2"><button type="submit" className="btn btn-primary btn inline-block px-6 py-2.5 bg-blue-600 text-white">Search</button> </div>
                    <div className="col-md-4 mt-2" style={{fontFamily: 'Droid Sans'}} >
                    <a className="navbar-brand" href="fdfd">Features</a>
                    <a className="navbar-brand" href="fdf">Pricing</a>
                    <a className="navbar-brand" href="fdf">Sign in</a>
                    <button className="navbar-brand" href="jhfid" style={{fontFamily: 'Century'}}>Login</button>
                    </div>
                </div>            
            </section>
        </div>
         


        </div>
        </nav>   
    )
}

export default Retailheader;