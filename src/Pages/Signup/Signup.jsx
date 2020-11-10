import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'

//importing components to use in other places
import LogoSide from '../../components/logoSide/logoSide';

//importing functions used
import { pattern } from '../../components/pattern/pattern'

//importing the icons to be used
import { AiOutlineMail } from 'react-icons/ai'
import { MdPerson } from 'react-icons/md'
import { BiLockAlt } from 'react-icons/bi'


import './Signup.css'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(''); //this is going to be generating an error message if needed
  const [redirect, setRedirect] = useState(false); //redirecting to the feed page

  const handleSubmit = (e) => {
    e.preventDefault();
    email.trim();
    username.trim();
    password1.trim();
    password2.trim();
    let result = pattern.test(email); //testing to make sure the email input is an actual email
    if(email !== '' && username !== '' && password1 !== '' && password2 !== ''){
        if(result){
          if(password1 === password2){
            console.log('Successful login attempt');
            console.log(email, username, password1);
            setError('');
            setRedirect(true)
          } else{
            setError('Passwords do not match');
          }
        } else{
          setError('Please enter a valid email')
        }
    } else {
      setError('Please make sure all fields are entered')
    }
  }

  if(redirect){
    return <Redirect to="/feed" />
  }

  return (
    <div className="signup">
      <div className="sideA">
        <h2>Get your free account today.</h2>
        <h3>Are you in the IT world and want to meet with other's and share ideas?</h3>
        <form onSubmit= { handleSubmit }>

          <label><span><AiOutlineMail /></span>email </label>
          <input type="text" value={ email } onChange={(e) => {
            setEmail(e.target.value) //setting the email to the value obtained
          }}/> 
          <br /> <br />

          <label><span><MdPerson /></span>username </label>
          <input type="text" value={ username } onChange = {(e) => {
            setUsername(e.target.value) //setting the username to the value obtained
          }}/> 
          <br /> <br />

          <label><span><BiLockAlt /></span>password </label>
          <input type="password" value={ password1 } onChange= {(e) => {
            setPassword1(e.target.value) //setting the password1 to the value obtained
          }}/>
          <br /> <br /> 

          <label><span><BiLockAlt /></span>verify password </label>
          <input type="password" value={ password2 } onChange= {(e) => {
            setPassword2(e.target.value) //setting the password2 to the value obtained
          }}/>
          <br /> <br /> 
          <p><span className="errorMessage">{ error }</span></p>
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