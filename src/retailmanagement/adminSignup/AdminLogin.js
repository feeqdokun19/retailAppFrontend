import React from 'react'
import Retailmanagerman from '../images/Retailmanagerman.jpg'

const AdminLogin = () => {
     
    return(

        <section className="vh-100" style={{backgroundColor: '#2E1D20'}}>
  <div className="container py-0 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100 ">
      <div className="col col-xl-12">
        <div className="card" style={{borderRadius: 20}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src={Retailmanagerman} alt="login" className="img-fluid" style={{borderRadius: 100, height: 500, marginBlock: 50, marginLeft: 50 }}/>  
            </div>
            <div className="col-md-6 d-flex align-items-center">
            <div className="card-body p-4 p-lg-5 text-black">

                <form>

                  <div className="d-flex align-items-center mb-3 pb-1">
                   <span className="h1 fw-bold mb-0" style={{color: '#393f81', fontFamily: 'Algerian'}}>AZFEEQ_ABDUL </span>
                   <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}}>RetailManagent App</i>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: 1}}>Sign into your account</h5>

                  <div className="form-outline mb-4">
                    <input type="email" id="form2Example17" className="form-control form-control-lg" />
                    <label className="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example27" className="form-control form-control-lg" />
                    <label className="form-label" for="form2Example27">Password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-success btn-lg btn-block" type="button">Login</button>
                  </div>

                  <a className="small text-muted" href="#!">Forgot password?</a>
                  <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>
                  <a href="#!" className="small text-muted">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        
//         <div classNameName='row'>
//             <div classNameName='col-3'>
// A
//             </div>          
//             <div classNameName='col-6'>
//                 <div classNameName="flex items-center justify-center min-h-screen bg-gray-100">
//                     <div classNameName="px-8 py-6 mt-4 text-left bg-white shadow-lg">
//                         <h3 classNameName="text-2xl font-bold text-center">Login to Admin Page</h3>
//                         <form classNameName='form-control'>
//                             <div className="mt-4">
//                                 <input type="text" placeholder="Enter your Email"
//                                     className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 form-control"/>
//                             </div>
//                             <div className="mt-4">
                   
//                             <input type="password" placeholder="Enter your Password"
//                                 className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 form-control"/>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>  
//             <div classNameName='col-3'>
// B
//             </div>
//         </div>
    
    )
}

export default AdminLogin;