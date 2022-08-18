import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>{props.text1}
                <br/>
                <strong className="brand-name">Harsh rathod</strong></h1>
                <p className="my-3">We are the team of the talanted developer making website</p>
                <div className="mt-3">
                  <NavLink to={props.dest} className="btn btn-outline-primary">{props.text2}</NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg2 header-img d-flex align-items-center">
                <img src={props.imgsrc} className="img-fluid animated" alt="homeimg"></img>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>);
}
export default Common;