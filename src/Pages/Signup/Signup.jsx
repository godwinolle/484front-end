import React from 'react';
import { Link } from 'react-router-dom'

//importing components to use in other places
import LogoSide from '../../components/logoSide/logoSide';

//importing the icons to be used
import { AiOutlineMail } from 'react-icons/ai'
import { MdPerson } from 'react-icons/md'
import { BiLockAlt } from 'react-icons/bi'


import './Signup.css'

const Signup = () => {
  return (
    <div className="signup">
      <div className="sideA">
        <h2>Get your free account today.</h2>
        <h3>Are you in the IT world and want to meet with other's and share ideas?</h3>
        <form>
          <label><span><AiOutlineMail /></span>email </label>
          <input type="text" /> <br /> <br />

          <label><span><MdPerson /></span>username </label>
          <input type="text" /> <br /> <br />

          <label><span><BiLockAlt /></span>password </label>
          <input type="password" /> <br /> <br /> 

          <label><span><BiLockAlt /></span>verify password </label>
          <input type="password" /> <br />
          <br /> 
          <button type="submit" >SIGN UP &gt; </button> 
        </form>
        <div className="haveAccount">
          <h4>Already have an account? </h4>
          <Link to="/login" className="linkToLogin">
            <h4>Login</h4>
          </Link>
        </div>
      </div>
      <div className="sideB">
        <LogoSide />
      </div>
    </div>
  );
}

export default Signup;