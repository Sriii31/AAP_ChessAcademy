
// import React from 'react'
// import './Login.css'
// import {Link} from 'react-router-dom'

// const Login = () => {
//   return (
//   <div className='karadi'>
//     <div className="over">
//         <div className="background">
//             <div className="shape"></div>
//             <div className="shape"></div>
//         </div>
//         {/* <form className='frm' onSubmit={handleSubmit}> */}
//         <form className='frm'>
//             <h3 className="htag"><b>Login</b></h3>
           
//             {/* <div className='rl'>
//               <label>Choose your Role:</label>
//               <input className="radioa" 
//               type="radio" 
//               value="Admin"
//               name="role"
            
//               id="adminRadio" required/>
//               <label>ADMIN</label>
//               <input className="radiou" 
//               type="radio" 
//               name="role" 
//               value="User"
            
//               id="userRadio" required/>
//               <label>USER</label>
//             </div><br></br> */}


//             <label className='lab'>Username</label>
//             <input className="in" 
//             type="text" 
           
//             name="username"
         
//             placeholder="Enter your Username" 
//             id="username" required/>

//             <label className="lab">Password</label>
//             <input className="in" 
//             type="password" 
           
//           name="password" 
     
//             placeholder="Enter your Password" 
//             id="password" required/>

//             {/* <center><button onSubmit={(e) => handleSubmit(e) } className='but'>Login</button></center> */}
//           <Link to="/home">  <center><button className='but'>Login</button></center></Link>
//             <br></br>
            
            
//             <Link to="signup">  <h4> have an Account? <div className='reg'>Signup</div></h4></Link>
//         </form>
//     </div>
//     </div>
//   );
//   };


// export default Login;

// import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form validation
//     if (!username || !password) {
//       alert('Please enter username and password');
//       return;
//     }
//     // Perform authentication (replace this with your actual authentication logic)
//     if (username === 'admin' && password === 'admin') {
//       // If authentication is successful, navigate to the next page
//       history.push('/home');
//     } else {
//       // If authentication fails, display an error message
//       alert('Invalid username or password');
//     }
//   };

//   return (
//     <div className="karadi">
//       <div className="over">
//         <div className="background">
//           <div className="shape"></div>
//           <div className="shape"></div>
//         </div>
//         <form className="frm" onSubmit={handleSubmit}>
//           <h3 className="htag"><b>Login</b></h3>
//           <label className="lab">Username</label>
//           <input
//             className="in"
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter your Username"
//             required
//           />
//           <label className="lab">Password</label>
//           <input
//             className="in"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your Password"
//             required
//           />
//           <center>
//             <button type="submit" className="but">Login</button>
//           </center>
//           <br />
//           <Link to="/signup"><h4>Don't have an account? <span className="reg">Sign up</span></h4></Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const users = [
      { username: 'user1', password: 'password@1' },
      { username: 'sri31', password: 'sri@31' },
      { username: 'jasper12', password: 'jas@12' }, 
      { username: 'yadhu25', password: 'yadhu@25' }
    ];

    // Perform form validation
    if (!username || !password) {
      alert('Please enter username and password');
      return;
    }

    // Check if the entered username exists in the list
    const user = users.find(user => user.username === username);
    if (!user) {
      alert('Your Username is incorrect');
      return;
    }

    // Check if the entered password matches the one associated with the username
    if (user.password !== password) {
      alert('Your Paswword is incorrect');
      return;
    }

    // If authentication is successful, navigate to the next page
    history.push('/home');
  };

  return (
    <div className="karadi">
      <div className="over">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form className="frm" onSubmit={handleSubmit}>
          <h3 className="htag"><b>Login</b></h3>
          <label className="lab">Username</label>
          <input
            className="in"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your Username"
            required
          />
          <label className="lab">Password</label>
          <input
            className="in"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            required
          />
          <center>
            <button type="submit" className="but">Login</button>
          </center>
          <br />
          <Link to="/signup"><h4>Don't have an account? <span className="reg">Sign up</span></h4></Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
