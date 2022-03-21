import React from "react";

const RetailMenulist = () => {
    return(
        <div className="row">
            <div classNameName="col-md-4">
                <div className="row">
                    <div className="card">
                        {/* <img src="..." className="card-img-top" alt="..."> */}
                     
                   
                       
                        <div className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" style={{
                            height: `100%`,
                            overflow: "hidden",
                            backgroundColor: "#00003E",
                            padding: `12px`
                        }}>
                        <div className="card-body">
                            <h4 className="text-warning text-center">Update Alert Here</h4>
                                <p className="card d-flex justify-content-between">Some quick to build or to know about our service. could make this a modal or pop-up slide</p>
                        </div>
                            <ul className="nav flex-column text-black w-100">
                                 
                            <div className="card-body bg-primary rounded-pill">
                                    <h4 className="dropdown-toggle text-white text-center">Wallect Balance</h4>
                                <p className="card-text text-light text-center">*************</p>
                        </div>
                                
                                <div className="dropdown">
                                    <h4 className="dropdown-toggle text-white-50" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dashboard
                                    </h4>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a  href="sds" className="dropdown-item">Pending</a></li>
                                        <li><a  href="sds" className="dropdown-item">Inprogress</a></li>
                                        <li><a  href="sds" className="dropdown-item">Completed</a></li>
                                    </ul>
                                </div>

                                <div className="dropdown mt-3">
                                    <p className=" text-white-50 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Admin
                                    </p>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a href="sds" className="dropdown-item">Pending</a></li>
                                    </ul>
                                </div>

                                <div className="dropdown mt-3">
                                    <p className=" text-white-50 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Enterprise
                                    </p>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a href="sds" className="dropdown-item">Pending</a></li>
                                    </ul>
                                </div>

                                <div className="dropdown mt-3">
                                    <p className=" text-white-50 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    About
                                    </p>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a href="sds" className="dropdown-item">Pending</a></li>
                                    </ul>
                                </div>

                                <div className="dropdown mt-3">
                                    <p className=" text-white-50 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    services
                                    </p>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a href="sds" className="dropdown-item">Pending</a></li>
                                    </ul>
                                </div>

                                <div className="dropdown mt-3">
                                    <p className=" text-white-50 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Settings
                                    </p>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a href="sds" className="dropdown-item">Pending</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown mt-3">
                                    <p className=" text-white-50 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Report
                                    </p>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a href="sds" className="dropdown-item">Pending</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown mt-3">
                                    <p className=" text-white-50 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Contact
                                    </p>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a href="sds" className="dropdown-item">Pending</a></li>
                                    </ul>
                                </div>
 
                               
                            </ul>
                            </div>
                        <div className="card-body">
                            <a href="fdj" className="card-link">Card link</a>
                            <a href="dj" className="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RetailMenulist;