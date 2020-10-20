import React from 'react';
import { Link } from 'react-router-dom' //importing 

//importing components to use in other places
import LogoSide from '../../components/logoSide/logoSide';

//Icons for login page
import { MdPerson } from 'react-icons/md'
import { BiLockAlt } from 'react-icons/bi'

import './login.css';

const Login = () => {
  return (
    <div className="login">
      <div className="sideA">
        <h2>Login</h2>
        <h3>WELCOME BACK!</h3>
        <form>
          <label><span><MdPerson /></span>username </label>
          <input type="text" />  <br /> <br />

          <label><span><BiLockAlt /></span>password </label>
          <input type="password" /> <br/>
          
          <p className="loginForgotPassword">FORGOT PASSWORD</p> 
          <button type="submit">LOGIN &gt; </button>        
        </form>
        <br/>
        <div className="createAccount">
          <Link to="/signup">
            <button>CREATE A NEW ACCOUNT &gt;</button>
          </Link>
        </div>  
      </div>
        <div className="sideB">
          <LogoSide />
        </div>
    </div>
  );
}

export default Login;