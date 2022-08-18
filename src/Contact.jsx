import React, { useState } from "react";
const Contact = () => {
  const [data,setData]=useState({
    fullname:'',
    phoneno:'',
    email:'',
    msg:''
  });
  const fun=(p)=>{
    const {name,value} = p.target;
    setData((prevVal)=>{
      return{
        ...prevVal,
        [name]:value
      };
    });
  };
  const formSubmit=(e)=>{
       e.preventDefault();
       alert(`             My name is ${data.fullname}.
              My Mobile number is ${data.phoneno}.
              My Email is ${data.email} .
              This is Your Message ${data.msg}`)
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">FullName</label>
                <input name="fullname" value={data.fullname} onChange={fun} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Phone No</label>
                <input name="phoneno" value={data.phoneno} onChange={fun} type={"number"} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone No" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input name="email" value={data.email} onChange={fun} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea name="msg" value={data.msg} onChange={fun} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="text-center px-10">
                <button className="btn btn-primary px-8" type="submit">Submit form</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}
export default Contact;