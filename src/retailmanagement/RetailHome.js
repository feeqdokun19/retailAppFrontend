import React from "react";
import Retailheader from "./Retailheader";
import RetailLiveMap from "./RetailLiveMap";
import RetailMenulist from "./RetailMenulist";
import RetailStockList from "./RetailStockList";
import RetailNews from "./RetailNews";
import Retailfooter from "./Retailfooter";

const RetailHome = () => {
    return(
        <div className="container-fluid">
            <div className="row border bg-purple flex flex-row w-full">
                <Retailheader />
            </div>
            <div className="row border bg-purple flex flex-row w-full">
              
            <div className="col-md-3">
               <RetailMenulist />
            </div>

            <div className="col-md-9">
            <div className="row">
                <RetailStockList />
            </div> 
            <div className="row">
            <div className="col-md-8"><RetailLiveMap /></div>
            <div className="col-md-4"><RetailNews /></div>
            </div> 
            </div>

            </div>

            <div className="row-footer">
            <Retailfooter />

            </div>
        </div>
       
    )
}

export default RetailHome;