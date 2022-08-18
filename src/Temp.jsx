import React from "react";
import web from '../src/images/bg1.svg';
const Temp=()=>{
    const background={
        backgroundImage:`url(${web})`
    }
    return(<>
<main>
  <div className="c-glitch" style={background}>
    <div className="c-glitch__img" style={background}></div>
    <div className="c-glitch__img" style={background}></div>
    <div className="c-glitch__img" style={background}></div>
    <div className="c-glitch__img" style={background}></div>
    <div className="c-glitch__img" style={background}></div>
  </div>
</main>
</>);
}
export default Temp;
