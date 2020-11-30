import './edit.css'


import React, {useState } from "react";
import { pattern } from "../pattern/pattern";
import { updateUsers } from '../newAndReturningUsers/newUsers';
import { Redirect } from 'react-router-dom';


const Edit = ({show, closeModal}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState();
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        name.trim();
        username.trim();
        email.trim();
        let validEmail = pattern.test(email);

        if(validEmail){
            setError('');
            updateUsers(name, username, email)
            setRedirect(true);
        }else{
            setError('Invalid Email');
        }

        if(redirect){
            return <Redirect to ="./profile"/>
        }
    }

    return (
        <div className = "edit_pos" >
        <div className =  "edit_wrapper" style = {
            {
                transform: show? 'translate(50%)': 'translate(-100vh)',
                opacity: show? '1': '0'
            }
        }> 
            <div className = "edit_header">
                <h1>Edit info</h1>
                <span onClick = {closeModal} className = "close_edit">x</span>
            </div>
            <div className = "edit_body">
                <form onSubmit = { handleSubmit }>
                    <label>Name:</label>
                    <br/>
                    <input type = "text" value = { name } onChange = {(e) =>{
                        setName(e.target.value)
                    }}/>
                    <br/><br/>
                    <label>Username</label>
                    <br/>
                    <input type = "text" value = { username } onChange = {(e) =>{
                        setUsername(e.target.value)}}/>
                    <br/><br/>
                    <label>Email:</label>
                    <br />
                    <input type ="text" value = { email}onChange = {(e) =>{
                        setEmail(e.target.value)}}/>
                    <br/><br/>
                    <button  onClick = {closeModal} className = "edit_submit"type = "submit" >Edit</button>
                </form>
            </div>
        </div>
        </div>
    );
} 
export default Edit 