import React, { useRef } from 'react'
import './logins.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';

function Logins() {

  const userRef = useRef();
  const passwordRef = useRef(); 
  const { dispatch, isFetching } = useContext(Context)

  const handleSubmit = async (e) =>{
    e.preventDefault()
    dispatch({type:"LOGIN_START"});
    try{
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({type:"LOGIN_SUCCESS", payload: res.data});

    }catch(err){
      dispatch({type:"LOGIN_FAILURE"});
    }
  };

  
  return (
    <div className='logins'>
        
        <span className="loginTitle">Login</span>
 
        <form className="loginForm" onSubmit={handleSubmit}>

            <label>Username</label>
            <input 
              type="text" 
              className='loginInput' 
              placeholder='Enter your username...'
              ref={userRef} 
            />
            <label>Password</label>
            <input 
              type="text" 
              className='loginInput' 
              placeholder='Enter your Password...'
              ref={passwordRef}  
            />
            <button className='loginButton' type="submit" disabled={isFetching}>LOGIN</button>
            
        </form>

        <button className='loginRegisterButton'><Link className='link' to={"/register"}>Register</Link></button>


    </div>
  )
}

export default Logins