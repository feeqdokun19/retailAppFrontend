import React from "react";

const Retailfooter = () => {

    return(
        <div classNameName="row" style={{
            height: `100%`,
            overflow: "hidden",
            backgroundColor: "#00003E",
            padding: `12px`
        }}>
            <section className="">
                <footer className="text-center text-black">
     
    <div className="container p-4 pb-0">
       
      <section className="">
        <p className="d-flex justify-content-center align-items-center">
          <span className="me-3">Register for free</span>
          <button type="button" className="btn btn-outline-light btn-rounded">
            Sign up!
          </button>
        </p>
      </section>
     
    </div>
     

   
    <div className="text-center p-3">
      © Feeq2022 Copyright:
      <a className="text-white" href="http">Feeq.com</a>
    </div>
     
  </footer>
  
</section>
        </div>
    )
}

export default Retailfooter;