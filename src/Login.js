import React from "react";
import './Login.css';
import person from './person.png';
import lg from './lg.png';
import {FaFacebook,FaLinkedin,FaGoogle} from "react-icons/fa";

const Login = () =>{
    return(
        <div className="login">
        <img src={lg} className='logo' alt='log'/>    
       <div className="cont">
        <div  className="sign">
        <p>Dont have an account? <b className="sign">Signup</b></p>
        <h1>Welcome Back</h1>
         </div>
        <div className="form">
        <div className="your email">Your Email</div> 
        <input type="email" id="youremail" name="your email"/>
            </div>
            <br/>
            <br/>
        <div className="form2">
            <div className="password">password</div> 
      <input type="password" id="password" name="password"/>
     <div className="chec">
        <input type="checkbox" className="check"/>
        <h6>Keep me logged in</h6>
        </div>
        <h5>forget password</h5>
        </div>
      <button class="bt">Login</button>
      <div className="line">
        <p>_____________OR______________</p>
       </div>
       <img src={person} className='Image' alt='person'/>  
       <div className="icons">
        <div className="facebook">
                    <FaFacebook/>
                    </div>
                    <div className="linked">
                    <FaLinkedin/>
                    </div>
                    <div className="google">
                    <FaGoogle/>
                    </div>
                 </div>
                 </div>
                </div>
                );
}

export default Login;