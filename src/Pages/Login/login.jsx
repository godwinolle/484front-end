import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom' //importing 

import { NameContext } from '../../NameContext';

import returningUsers  from '../../components/newAndReturningUsers/newUsers'
import axios from 'axios'


//importing components to use in other places
import LogoSide from '../../components/logoSide/logoSide';

import { MdPerson } from 'react-icons/md'
import { BiLockAlt } from 'react-icons/bi'

import './login.css';
import { useAuth } from '../../auth-context';
import jwtDecode from 'jwt-decode';


const Login = () => {

  const { loggedIn } = useAuth();

  const {login} = useAuth();
  const [email, setEmail] = useContext(NameContext);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); //generates error message
  const [redirect, setRedirect] = useState(false); //will redirect to feed page

  const handleSubmit = (e) => {
    e.preventDefault();
    email.trim();
    password.trim();
    if(email !== '' && password !== ''){
      console.log(email, password)
      setError('');
      axios.post('https://cosc484-backend.herokuapp.com/login', {
        email: email,
        password: password
      }).then(  res => {
         console.log(res.data);
         localStorage.setItem('MongoIdToken', `Bearer ${res.data.token}`);
         const token = localStorage.MongoIdToken;
         const decodedToken = jwtDecode(token);
          const userId = decodedToken.payload._id;
          localStorage.setItem('userId', userId)


         login();
      })
      .catch(err => console.log(err))
    } else{
      setError('Invalid email and password combination entered')
    }

  }

  // return loggedIn ? <Redirect to="/feed" /> : <Redirect to="/login" />
  
  if(loggedIn){
    return < Redirect to= "/feed" />

  } 

  return (
    <div className="login">
      <div className="sideA">
        <h2>Login</h2>
        <h3>WELCOME BACK!</h3>
        <form onSubmit= { handleSubmit }>
          <label><span><MdPerson /></span>email </label>
          <input type="text" value={ email } onChange = {(e) => {
            setEmail(e.target.value) //sets the email to the value that is obtained
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