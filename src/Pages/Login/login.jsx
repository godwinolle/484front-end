import React from 'react';

import { Link } from 'react-router-dom' //importing 

import './login.css';

const Login = () => {
  return (
    <div className="">
      <h2>Login</h2>
      <h3>WELCOME BACK</h3>

      <form>
        <label>username </label>
        <input type="text" />  <br /> <br />

        <label>password </label>
        <input type="password" /> <br/>

        <p>forget password</p>

        <button type="submit">Login &gt; </button>        
      </form>

    <br/>

    <Link to="/signup">
      <button>Create a new account &gt;</button>
    </Link>

    </div>
  );
}

export default Login;