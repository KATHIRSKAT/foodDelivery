import React, { useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/frontend_assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Log in")
  return (
    <div className='login-popup'>
       <form  className="login-popup-container">
        <div className="login-popup-title">
            <h2>
                {currState}
            </h2>
            <img onClick={() => setShowLogin(false) } src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState === "Log in" ?<></> : <input type="text" 
            placeholder='Your Name' required/>}
            <input type="email" 
            placeholder='Your email' required/>
            <input type="password" 
            placeholder='password' required />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : 'Log in'}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>
                By Continuing ,I aggre to the terms of Use and Privacy Policy.
            </p>
        </div>
        {currState === "Log in" ? <p>
            Create a New account ? <span onClick={() => setCurrState("Sign Up")}> Click Here</span>
        </p> : <p>
            Already have an account ? <span onClick={() => setCurrState("Log in")}> Log in Here</span>
         </p>}
       </form>
    </div>
  )
}

export default LoginPopup