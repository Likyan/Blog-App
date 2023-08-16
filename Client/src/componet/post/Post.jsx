import React from 'react'
import './post.css'
import {Link} from "react-router-dom"

function Post({post}) {

  const PF = "http://localhost:5000/images/"
 
  return (
    <div className='post'>
        {post.photo && (
        <img 
          className='postImg' 
          src={PF + post.photo}
          alt="Dark"
          />
        )}
        {/* // "https://images.pexels.com/photos/11164488/pexels-photo-11164488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Dark" */}
        <div className="postInfo">
            <div className="postCats">{
              post.categories.map(c=>(
                <span className='postCat'>{c.name}</span>
              )) 
            }
            </div>
            <Link to={`/post/${post._id}`} className='link'>
            <span className='postTitle'>{post.title}</span>
            </Link>
            <hr></hr>
            <span className='postDate'>{new Date(post.createdAt).toDateString()}</span>
        </div>

        <p className='postDesc'>
          {post.desc}
        </p>
    </div>
  )
}

export default Post