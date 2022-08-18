import React from "react";
import { NavLink } from "react-router-dom";
import web from '../src/images/bg1.svg'
import Sdata from "./Sdata";
import Card from "./Card";
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
                {Sdata.map((ele,idx) =>{
                     return <Card key={idx} imgsrc={ele.imgsrc} title={ele.title}/>
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Service;