import React from 'react'

import Adminsignuppage from '../images/Adminsignuppage.jpg'
import Facebookicon from '../images/Facebookicon.png'

const Createadmin = () => {

    return(
            <div className='container-fluid'>
                   <div className="row mt-5 bg-light">
    

            <section>

                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-6 col-xl-5">
                            <img src={Adminsignuppage} alt="adminboss" style={{width: 400, height: 350}} />
                        </div>

            <div className="col-md-8 col-lg-6">
                <div class="card form-control mt-5 mb-5">
                    <div class="card-body">
                        <form>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="">Admin Sign in with</p>

                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-linkedin-in">Email</i>
                                </button>
                            </div>

                        <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0">Or</p>
                        </div>

                        <div className="form-outline mb-4">
                        <label className="form-label" for="retailAdmin">fullName</label>
                        <input type="text" className="form-control form-control-lg" placeholder="Enter fullName" />
                        </div>

                        <div className="form-outline mb-4">
                        <label className="form-label" for="retailAdmin">Email</label>
                        <input type="email" className="form-control form-control-lg" placeholder="Email" />
                        </div>

                        <div className="form-outline mb-4">
                        <label className="form-label" for="retailAdmin">Admin_id</label>
                        <input type="test" className="form-control form-control-lg" placeholder="Admin_id" /> 
                        </div>

                        <div className="form-outline mb-3">
                        <label className="form-label" for="form3Example4">Password</label>
                        <input type="password" id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
                        </div>
                        
                        <div className="form-outline mb-3">
                        <label className="form-label" for="form3Example4">isAdmin</label> <br/>

                        <label className="form-check-label">
                            <input className="form-check-input me-2" type="checkbox" value=""  />
                            Yes
                            </label>

                            <label className="form-check-label">
                            <input className="form-check-input me-2" type="checkbox" value=""  />
                            No
                            </label>
                                    
                        </div>

                        <div className="d-flex justify-content-between align-items-center">

                        <div className="form-check mb-0">
                        <label className="form-check-label">
                            <input className="form-check-input me-2" type="checkbox" value=""  />
                            Remember me
                            </label>
                        </div>
                        <a href="#!" className="text-body">Forgot password?</a>
                        </div>

                        <div className="text-center text-lg-start mt-4 pt-2">
                        <button type="button" className="btn btn-primary btn-lg">Register</button>
                        <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                            className="link-danger">Continue Login</a></p>
                        </div>

                        </form>
                    </div>
            </div>

            </div>
            </div>
            </div>
            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
            {/* Copyright */}
            <div className="text-white mb-3 mb-md-0">
            Copyright © 2022. All rights reserved for Retailsmanagement application.
            </div>


            {/* Right  */}
            <div>
            <a href="#!" className="text-white me-4">
            <i className="fab fa-facebook-f"><img src={Facebookicon} alt="faceicon" style={{width: 40, height: 30}}/></i>
            </a>
            <a href="#!" className="text-white me-4">
            <i className="fab fa-twitter"><img src={Facebookicon} alt="faceicon" style={{width: 40, height: 30}}/></i>
            </a>
            <a href="#!" className="text-white me-4">
            <i className="fab fa-google"><img src={Facebookicon} alt="faceicon" style={{width: 40, height: 30}}/></i>
            </a>
            <a href="#!" className="text-white">
            <i className="fab fa-linkedin-in"><img src={Facebookicon} alt="faceicon" style={{width: 40, height: 30}}/></i>
            </a>
            </div>
            {/* Right */}
            </div>
            </section>         
</div>
            </div>

     
    )
}

export default Createadmin;