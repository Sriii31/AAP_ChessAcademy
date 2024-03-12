// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../Styles/Login.css'
import {Link} from 'react-router-dom'
import { useState} from 'react';
import {useNavigate} from "react-router-dom"
import axios from 'axios';
const SigninPage = () => {

  const navigate=useNavigate();
  const[role,setRole]=useState("");
  const [email,setUsername]=useState("");
  const [password, setPassword] = useState(''); 
  // const dispatch = useDispatch();
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    // if(email==='admin@gmail.com' && password==='admin@123' ){
    //   localStorage.setItem('token',response.data.token);
    //   navigate('/Backhome');
    // }
    // else{
    //   window.alert("Invalid credentials");
    // }
    try{
      const response=await axios.post('http://localhost:8080/api/v1/auth/authenticate',{
        email:email,
        password:password
      });
      console.log(response.data);
      navigate("/backhome")
     
    }
    catch(error){
      console.error('Login failed',error);
    }
  };

  return (
    <div className="over">
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        {/* <form className='frm' onSubmit={handleSubmit}> */}
        <form className='frm' onSubmit={handleSubmit}>
          <br></br><br></br>
            <h3 className="htag"><b>Login Here</b></h3>
           <br></br>
          


            <label className='lab'>Email</label>
            <input className="in" 
            type="text" 
            value={email}
            name="email"
            onChange={(event) => setUsername(event.target.value)} 
            placeholder="Enter your email" 
            id="email" required/>

            <label className="lab">Password</label>
            <input className="in" 
            type="password" 
            value={password}
          name="password" 
          onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter your Password" 
            id="password" required/>

            {/* <center><button onSubmit={(e) => handleSubmit(e) } className='but'>Login</button></center> */}
           <center><button type='submit' className='but'>Login</button></center>
            <br></br>
            
            
            {/* <h4>Don't have an Account?  </h4>
            <Link to="/Adminregister"><div className='reg'>Register</div></Link> */}
        </form>
    </div>
  );
  };


export default SigninPage;