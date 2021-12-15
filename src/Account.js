import React from 'react';
import { useState,createContext  } from "react";
import { Link } from 'react-router-dom';


const Account = (props) => {
  const [inputs, setInputs] = useState({});

 
  const handleChange=(event)=>{
    const name=event.target.name;
    const value= event.target.value;
    setInputs(values=>({...values,[name]: value}))
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(inputs);
    
  }
return (
 

    <div className="container">

      <h2 className="m-3">Account</h2>
      <div className="form-group" onSubmit={handleSubmit} > 
      <input type="text"  placeholder="E-mail" className="m-2 form-control p-1 border-0 border-bottom"  name="email" value={inputs.email} onChange={handleChange}/>
      <input type="password" placeholder="Password" className="m-2 form-control border-0 border-bottom  p-1"  name="password" value={inputs.password} onChange={handleChange} />
    
      <select className="form-control m-2  border-0 border-bottom ml-2 p-1" name="locale" onChange={handleChange} value={inputs.locale} >
      <option value="" hidden >Locale</option>
        <option value="turkey">turkey</option>
        <option value="turkey">turkey</option>
      </select> 
      
      <Link to="/user" className="btn btn-danger  m-2 ml-4 w-100 p-1" type="submit" > Sign Up</Link>
      
      
   
      </div>
    </div>
  )
};

export default Account;