import React from "react";
import Common from './Common';
import web from './images/bg2.svg';
const About = () => {
    return(<>
        <Common text1="Welcome to about page" text2="Contact Now" dest="/contact" imgsrc={web}/>
    </>);
}
export default About;