// import React from 'react';
// import './Singin.css';

// function Singin() {
//   const [showErr, setErrorMsg] = useState(false);
//   const [showPass, setErrorPass] = useState(false);

//   let getEmail = "";
//   let password = "";


//   const passwordRegex = /^[a-zA-Z0-9@^]+$/;


//   const handleLogin = () => {

//     if (!getEmail.length) {
//       setErrorMsg(true);
//     } else {
//       setErrorMsg(false);
//     }


//     if (!password.length || !passwordRegex.test(password)) {
//       setErrorPass(true);
//     } else {
//       setErrorPass(false);
//     }


//     console.log('Email:', getEmail);
//     console.log('Password:', password);
//   };

//   return (
//     <>
//       <div className="login-container">
//         <div className="login-box">
//           <h1 className="title">Fundo</h1>
//           <h2>Sign in</h2>
//           <p>Use your Fundo Account</p>
//           <form>
//             <input type="text" placeholder="Email or phone*" required />
//             <input type="password" placeholder="Password*" required />
//             <div className="options">
//               <a href="#">Forgot password</a>
//             </div>
//             <div className='Foot-button'>
//               <a href="#">Create account</a>
//               <button type="submit">Login</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import  './Singin.css';
// import { useState } from 'react';



// function Singin() { 
//   const [showErr, setErrorMsg] = useState(false); 
//   const [showPass, setErrorPass] = useState(false); 

//   let getEmail = ""; 
//   let password = ""; 


//   const passwordRegex = /^[a-zA-Z0-9@^]+$/;


//   const handleLogin = () => {

//     if (!getEmail.length) {
//       setErrorMsg(true);
//     } else {
//       setErrorMsg(false);
//     }


//     if (!password.length || !passwordRegex.test(password)) {
//       setErrorPass(true);
//     } else {
//       setErrorPass(false);
//     }


//     console.log('Email:', getEmail);
//     console.log('Password:', password);
//   };

//   return (
//     <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
//       <div className="main-container">
//         <form>
//           <div className="head">
//             <h3 id="head-text">Fundoo</h3>
//             <h3 className="firstLine">Sign up</h3>  
//             <h3 className="secondLine">Use Your Fundoo Account</h3> 
//           </div>

//           {/* Email field */}
//           <div className="name-container">
//             <TextField 
//               id="outlined-first-name" 
//               onChange={e => getEmail = e.target.value} 
//               label="Email" 
//               variant="outlined" 
//               fullWidth 
//             />
//             {showErr && <span className='emailErr'><span> Email is required. </span></span>}
//           </div>


//           <div className="password-container">
//             <TextField
//               id="outlined-password-input"
//               label="Password"
//               className="password"
//               type="password"
//               onChange={e => password = e.target.value}  
//               autoComplete="current-password"
//               fullWidth
//             />
//             <h5 className="line1">You can use letters, numbers & @ or ^ symbols</h5>
//             {showPass && <span className="passwordErr"><span>Password is invalid.</span></span>}
//           </div>


//           <div className="signin-register">
//             <a href="#" className="line3">Forget Password</a>
//             <Button className="submit-btn" onClick={handleLogin} variant="contained">Login</Button>
//           </div>
//         </form>
//       </div>
//     </Box>
//   );
// }


// export default Singin;



import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Singin.css';
import { useState } from 'react';

function Singin() { 
  const [showErr, setErrorMsg] = useState(false); 
  const [showPass, setErrorPass] = useState(false); 
  const [getEmail, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 

  const passwordRegex = /^[a-zA-Z0-9@^]+$/;

  const handleLogin = () => {
    
    if (!getEmail.length) {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
    }

    
    if (!password.length || !passwordRegex.test(password)) {
      setErrorPass(true);
    } else {
      setErrorPass(false);
    }

    // Log if valid
    if (getEmail.length && passwordRegex.test(password)) {
      console.log('Email:', getEmail);
      console.log('Password:', password);
    }
  };

  return (
    <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
      <div className="main-container">
        <form>
          <div className="head">
            <h3 id="head-text">Fundoo</h3>
            <h3 className="firstLine">Sign up</h3>  
            <h3 className="secondLine">Use Your Fundoo Account</h3> 
          </div>

          {/* Email field */}
          <div className="name-container">
            <TextField 
              id="outlined-first-name" 
              onChange={e => setEmail(e.target.value)} 
              label="Email" 
              variant="outlined" 
              fullWidth 
            />
            {showErr && <span className='emailErr'><span> Email is required. </span></span>}
          </div>

          {/* Password field */}
          <div className="password-container">
            <TextField
              id="outlined-password-input"
              label="Password"
              className="password"
              type="password"
              onChange={e => setPassword(e.target.value)}  
              autoComplete="current-password"
              fullWidth
            />
            <h5 className="line1">You can use letters, numbers & @ or ^ symbols</h5>
            {showPass && <span className="passwordErr"><span>Password is invalid.</span></span>}
          </div>

          {/* Submit button */}
          <div className="signin-register">
            <a href="#" className="line3">Forget Password</a>
            <Button className="submit-btn" onClick={handleLogin} variant="contained">Login</Button>
          </div>
        </form>
      </div>
    </Box>
  );
}

export default Singin;
