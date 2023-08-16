import React from 'react'
import Header from '../../componet/header/Header'
import './bloghome.css'
import SideBar from '../../componet/sidebar/SideBar'
import Posts from '../../componet/posts/Posts'
import {  useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'


function BlogHome() {

  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async ()=> {
      const res = await axios.get("/posts"+search)
      setPosts(res.data)
    }
    fetchPosts() 
  }, [search])

  return (
    <div>
        
        <Header></Header>
        <div className='bloghome'>
          <Posts posts={posts}></Posts>
          <SideBar></SideBar>        
        </div>

    </div>
  )
}

export default BlogHome