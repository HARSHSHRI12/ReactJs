import React from 'react'
import Home from './Mini_project/Home'
import About from './About'
import Contact from './Contact'
import Address1 from './Address1'
import Address2 from './Address2'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'

export default function React_prject() {
  return (
    <div className='container'>
      <BrowserRouter>
      <div style={{textAlign:'center', marginTop:'50px',marginLeft:'50px' }}>
      <Link to="/hm">Open Home</Link>
      &nbsp;
      <Link to="/Ab"> Open About</Link>
      &nbsp;
      <Link to="/cn"> Open Contact</Link>
        
      <Routes>
        <Route path="/hm" element={<Home/>}/>
        <Route path="/Ab" element={<About/>}/>
        <Route path="/cn" element={<Contact/>}>
       <Route path="prg" element={<Address1/>}/>
       <Route path="sing" element={<Address2/>}/>
        
        </Route>
      </Routes>
      </div>
      </BrowserRouter>
      </div>
        
  )
}
