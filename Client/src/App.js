import React, { useContext } from 'react'
import TopBar from './componet/topbar/TopBar'
import BlogHome from './pages/loghome/BlogHome'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Logins from './pages/logins/Logins'
import Registerr from './pages/registerr/Registerr'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Context } from './context/Context'


 
function App() {
  
  const {user} = useContext(Context);

  return (
    <div className="App">
    
    
    <BrowserRouter>  

    <TopBar></TopBar>
    
     <Routes>
          
          <Route exact path="/" element={<BlogHome />} />
          {/* <Route path="/single" element={<Single />} /> */}
          <Route exact path="/write" element={user ? <Write /> :<Registerr />} />
          <Route exact path="/register" element={user ? <BlogHome/> :<Registerr />} />
          <Route exact path="/login" element={user ? <BlogHome/> :<Logins />} />
          <Route exact path="/settings" element={user ? <Settings /> :<Registerr />} />
          <Route exact path="/post/:postId" element={<Single />} />
     </Routes>  
    


    </BrowserRouter>


    </div>
  )
}

export default App
