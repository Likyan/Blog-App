import React, { useState } from 'react'
import './registerr.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Registerr() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (e) =>{
     e.preventDefault();
     setError(false)
     try{
     const res = await axios.post("/auth/register", {
      username,
      email,
      password,
     });
     res.data && window.location.replace("/login")
    }catch(err){
      setError(true)
    }
    };

  return (
    <div className='registerr'>
        
        <span className="registerrTitle">Register</span>

        <form className="registerrForm" onSubmit={handleSubmit}>

            <label>Username</label>
            <input 
              type="text" 
              className='registerrInput' 
              placeholder='Enter your Username...'
              onChange={e=>setUsername(e.target.value)}
            />
            <label>Email</label>
            <input 
                type="email" 
                className='registerrInput' 
                placeholder='Email' 
                onChange={e=>setEmail(e.target.value)}
            />
            <label>Password</label>
            <input 
              type="password" 
              className='registerrInput' 
              placeholder='Password' 
              onChange={e=>setPassword(e.target.value)}
            />
            <button className='registerrButton' type="submit">Register</button>
            
        </form>

        <button className='registerrLoginButton'><Link className='link' to={"/login"}>Login</Link></button>
        {error && <span style={{color:"red", marginTop:"10px"}}>Something Went Wrong!</span>}

    </div>
  )
}

export default Registerr