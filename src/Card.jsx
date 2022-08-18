import React from "react";
import { NavLink } from "react-router-dom";
import web from '../src/images/bg1.svg';
const Card = (props) => {
    return(
    <>
    <div className="col-md-4 col-10 mx-auto">
        <div className="card mx-auto">
            <img src={props.imgsrc} className="card-img-top" alt="Image is not available" style={{ height: "13rem", width: "100%" }} />
            <div className="card-body">
                <h5 className="card-title font-weight-bold text-center">{props.title}</h5>
                <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="text-center">
                <NavLink to="#" className="btn btn-primary text-center">Go somewhere</NavLink>
                </div>
            </div>
        </div>
    </div>
</>
);
}
export default Card;