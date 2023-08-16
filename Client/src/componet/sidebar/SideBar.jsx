import React, { useEffect, useState } from 'react'
import './sidebar.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

function SideBar() {
  const [cats,setCats] = useState([]);

  useEffect(()=>{
    const getCats = async ()=>{
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats();
  },[])
  return (
    <div className='sidebar'>
        
        <div className="sidebarItem">

          <span className='sidebarTitle'>ABOUT ME</span>
          <img src="https://images.pexels.com/photos/11540171/pexels-photo-11540171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Lack" width="80%"/>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo earum esse dolor, doloribus sequi omnis laboriosam consequuntur exercitationem facilis quod nulla beatae veniam porro nam at odio tempora vero sapiente.
          </p>

        </div>
       
        <div className="sidebarItem">

          <span className='sidebarTitle'>CATEGORIES</span>
          <ul className="sidebarList">
            {cats.map((c) => (
              <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
              </Link>
            ))}
          </ul>

        </div>

        <div className="sidebarItem">

        <span className='sidebarTitle'>FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fa-brands fa-whatsapp"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>

        </div>

        {/* https://images.pexels.com/photos/11540171/pexels-photo-11540171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 */}
    
    </div>
  )
}

export default SideBar