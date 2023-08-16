import React from 'react'
import './single.css'
import SideBar from "../../componet/sidebar/SideBar"
import SinglePost from '../../componet/singlePost/SinglePost'

function Single() {
  return (
    <div className='single'>

        <SinglePost></SinglePost>
        <SideBar></SideBar>

    </div>
  )
}

export default Single