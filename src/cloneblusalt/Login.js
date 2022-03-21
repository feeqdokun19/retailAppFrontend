import React from "react";

const Login = () => {
 


    return(
        <div className="container">
             
            <div className="row bg-blue-400 h-screen w-screen">
                <div className="col-6">
                    <div className="bg-blue-400 h-screen w-screen">
                        <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
                            <div className="flex rounded-lg">
                                <div className="flex flex-col w-full md:w-1/2 p-4">
                                    <img src="C:\Users\USER\desktop\reactclassproject\reactclasswork\zulfah-react-training\src\cloneblusalt\images\blusaltlogo.JPG" alt="Blusalt-logo"/>
                                    <div className="flex flex-col flex-1 justify-center mb-8">
                                        <h1 className="text-4xl text-center font-thin">Welcome back, Login to continue</h1>
                                    </div>
                                </div>
                                <div className="">
                                    <img src="" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="col-6 justify-content-center"> 
                <div className="w-full mt-5 shadow-lg w-full bg-white mh-100">
                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group switch-tab" role="group" aria-label="First group">
                            <button type="button" className=" tab btn btn-secondary text-white rounded-pill">Sign Up <span>
                            <button type="button" className="tab active btn btn-primary text-white rounded-pill mt-5">Login</button>
                            </span> </button>
                            
                        </div>

                    </div>

 
                        <form className="form-control" method="POST" action="#">
                            <div className="flex flex-col mt-4">
                                <input id="email" type="text" className="flex-grow h-8 px-2 border rounded border-grey-400 form-control" name="email" value="" placeholder="Company Email *"/>
                                <p>*This email should be an admin or a primary contact for your brand</p>
                            </div>
                            <div className="flex flex-col mt-4">
                                <input id="password" type="password" className="bi bi-eye-slash flex-grow h-8 px-2 rounded border border-grey-400 form-control mt-4" name="password" required placeholder="Password *"/><i class="bi bi-eye-slash"></i>
                            </div>
                          
                            <div className="flex flex-col mt-8">
                                <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-sm mt-5 mb-3 py-2 px-4 rounded"/>
                                    
                            </div>
                            <div className="row">
                            <div className="col-5">
                                <p>Forgot Password?<span><a className="no-underline hover:underline text-blue-dark text-xs" href="{{ route('password.request') }}">
                                    Reset
                                </a></span></p>
                            </div>

                            <div className="col-5">
                                <p>Need Help?<span><a className="no-underline hover:underline text-blue-dark text-xs" href="{{ route('password.request') }}">
                                Contact us
                                </a></span></p>
                            </div>
                                
                            
                        </div>
                        </form>
                        
                    </div>
                </div> 
            </div>
        </div>
    )
}
           

export default Login;