import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from "./Navbar";
const App=()=>{
  return (<>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    {/* <Route path="/" element={<Navbar/>}/> */}
    <Route path="/about" element={<About/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/*"  element={<Home/>}/>
  </Routes>
    </>
  );
}
export default App;