import React, { useContext, useState } from 'react'
import './write.css'
import axios from 'axios'
import { Context } from '../../context/Context'

function Write() {

  const [title,SetTitle] = useState("")
  const [desc,SetDesc] = useState("")
  const [file,SetFile] = useState(null)
  const {user} = useContext(Context);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const newPost = {
      username:user.username,
      title,
      desc,
    }
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name",filename)
      data.append("file",file)
      newPost.photo = filename;
      try{
        await axios.post("/upload", data)
      }catch(err){ 

      }
    }
    try{

      const res = await axios.post("/posts", newPost)
      window.location.replace("/post/" + res.data._id)
    
    }catch(err){}
    
  }

  return (
    <div className='write'>

      {file &&(
        
        <img 
          className='writeImg' 
          src={URL.createObjectURL(file)} 
          alt="" 
        />
      )}

        <form className='writeForm' onSubmit={handleSubmit}>

             <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" name="" id="fileInput" style={{display:'none'}} onChange={e=>SetFile(e.target.files[0])}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true} onChange={e=>SetTitle(e.target.value)}/>
            </div>

            <div className="writeFormGroup">
                <textarea placeholder='Tell Your Story......' type='text' className='writeInput writeText' onChange={e=>SetDesc(e.target.value)}></textarea>
            </div>

            <button className='writeSubmit' type="submit">Publish</button>

        </form>

    </div>
  )
}

export default Write