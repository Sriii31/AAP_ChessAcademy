// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../Styles/Register.css'
import {Link} from 'react-router-dom'
import { useState} from 'react';
import {useNavigate} from "react-router-dom"

const SignupPage = () => {
  const [role,setRole]=useState('')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  // const [registrationError,setRegistrationError] = useState('');
  const navigate=useNavigate();

  const checkPassword = (e) =>{
   const mobileRegex=/^\d{10}$/;
   const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
   if(!mobileRegex.test(mobile)){
     window.alert(
       "Mobile number must contain 10 Numbers."
     );
     initialize3()
     return;
   }
   else if (!passwordRegex.test(password)) {
     window.alert(
       "Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
     );
     initialize1()
     return;
   }
   else if (password !== confirmpassword) {
     window.alert("Passwords do not match.");
     initialize2()
     return;
   }
   else{
     window.alert("Registration Successful !!!");
   }
 }
 const initialize1 = () =>{
   setPassword('')
   setConfirmPassword('')
 }
 const initialize2 = () =>{
   setConfirmPassword('')
 }
 const initialize3 = () =>{
   setMobile('')
 }

 const handleRoleChange = (event) => {
     setRole(event.target.value);
   };
 const handleNameChange = (event) => {
     setName(event.target.value);
   };
 const handleEmailChange = (event) => {
   setEmail(event.target.value);
 };

 const handlePasswordChange = (event) => {
   setPassword(event.target.value);
 };
 
 const handleConfirmPasswordChange = (event) => {
   setConfirmPassword(event.target.value);
 };

 const handleMobileChange = (event) => {
   setMobile(event.target.value);
 };

 const handleSubmit= async (e)=>{
   e.preventDefault();
   try {
     const response = await axios.post(
       "http://localhost:8081/api/v1/auth/register",
       {
         name,
         email,
         mobile,
         password,
         // confirmpassword,
       },
     );

     console.log("Sign in successful");
     console.log(response.data); 
     navigate('/');

     // setName("");
     // setEmail("");
     // setMobile("");
     // setPassword("");
     // setRegistrationError("");
   } catch (error) {
     console.error("Registration failed");
     console.error(error); 

   }
}

  return (
    <div className="signin-over">
        <div className="signin-background">
            <div className="signin-shape"></div>
            <div className="signin-shape"></div>
        </div>
        {/* <form className='signin-frm' onSubmit={handleSubmit}> */}
        <form className='signin-frm'><br></br><br></br>
            <h3 className="signin-htag"><b>SIGN UP</b></h3>
           
          <br></br>
           

            <label className='signin-lab'>Username</label>
            <input className="signin-in" 
            type="text" 
            value={name}
            name="username"
            onChange={handleNameChange}
            placeholder="Enter your Username" 
            id="username" required/>

            <label className='signin-lab'>Email</label>
            <input className="signin-in" 
            type="email" 
            value={email}
            name="email"
            onChange={handleEmailChange}
            placeholder="Enter your Email" 
            id="email" required/>

            <label className='signin-lab'>Mobile No</label>
            <input className="signin-in" 
            type="tel" 
            value={mobile}
            name="mobile"
            onChange={handleMobileChange}
            placeholder="Enter your Mobile Number" 
            id="mobile" required/>

            <label className="signin-lab">Password</label>
            <input className="signin-in" 
            type="password" 
            value={password}
            name="password" 
            onChange={handlePasswordChange}
            placeholder="Enter New Password" 
            id="password" required/>

            <label className="signin-lab">Confirm Password</label>
            <input className="signin-in" 
            type="password" 
            name="confirmpassword" 
            value={confirmpassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Re-Enter New Password" 
            id="confirmpassword" required/>

           {/* <button type="submit" className='signin-but' onClick={checkPassword}>Register</button> */}
           <button className='signin-but'>Register</button>
            
            
            <h4 className='signin-h4tag'>Have an Account?  <Link to="/Adminlogin"><div className='signin-reg'>Signin</div></Link></h4>
        </form>
    </div>
  );
  };


export default SignupPage;