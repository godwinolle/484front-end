import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom' //importing 

//importing components to use in other places
import LogoSide from '../../components/logoSide/logoSide';

//Icons for login page
import { MdPerson } from 'react-icons/md'
import { BiLockAlt } from 'react-icons/bi'

import './login.css';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); //generates error message
  const [redirect, setRedirect] = useState(false); //will redirect to feed page

  const handleSubmit = (e) => {
    e.preventDefault();
    username.trim();
    password.trim();
    if(username !== '' && password !== ''){
      console.log(username, password)
      setError('');
      setRedirect(true);
    } else{
      setError('Invalid username and password combination entered')
    }
  }

  if(redirect){
    return <Redirect to="/feed" />
  }

  return (
    <div className="login">
      <div className="sideA">
        <h2>Login</h2>
        <h3>WELCOME BACK!</h3>
        <form onSubmit= { handleSubmit }>
          <label><span><MdPerson /></span>username </label>
          <input type="text" value={ username } onChange = {(e) => {
            setUsername(e.target.value) //sets the username to the value that is obtained
          }}/>  
          <br /> <br />

          <label><span><BiLockAlt /></span>password </label>
          <input type="password" value={ password } onChange= {(e) => {
            setPassword(e.target.value) //sets the password to the value that is obtained
          }}/> 
          <br/> 
          <p><span className="errorMessage">{ error }</span></p>
          <br/>
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