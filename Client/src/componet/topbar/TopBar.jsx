import React, { useContext } from 'react'
import './topbar.css'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';

function TopBar() {
    
    const {user, dispatch} = useContext(Context);
    const PF = "http://localhost:5000/images/"

    const handleLogout = () =>{
        dispatch({type:"LOGOUT"})
    }
    
  return (
    <div className='top'>
        
        <div className="topLeft">

            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-whatsapp"></i>
            <i className="topIcon fa-brands fa-instagram"></i>

        </div>

        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link to="/" className='link'>HOME</Link></li>
                <li className="topListItem"><Link to="/" className='link'>ABOUT</Link></li>
                <li className="topListItem"><Link to="/" className='link'>CONTACT</Link></li>
                <li className="topListItem"><Link to="/write" className='link'>WRITE</Link></li>
                <li className="topListItem" onClick={handleLogout}>
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>

        <div className="topRight">
            {
                user ? (
                    <Link to="/settings">
                    <img 
                        className='topImg' 
                        src= {PF + user.profilePic}
                        alt="" />
                    </Link>
                )   :   (
                    <ul className='topList'>
                        <li className='topListItem'><Link to="/login" className='link'>LOGIN</Link></li>
                        <li className='topListItem'><Link to="/register" className='link'>REGISTER</Link></li>
                    </ul>
                )
            }
             {/* <img className='topImg' src="https://images.pexels.com/photos/7267852/pexels-photo-7267852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="FIRE" /> */}
            <i className="topSearchIcon fa-solid fa-magnifying-glass fa-beat-fade"></i>
        </div>

    </div>
  )
}

export default TopBar