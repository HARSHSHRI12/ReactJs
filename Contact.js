import React from 'react'
import {Link,Outlet} from 'react-router-dom'
export default function Contact() {
  return (
    <div>
       Open  Contact.....
       <br/>
       <Link to="prg">Address1 is: </Link>
       &nbsp;    
       <Link to="sing">Address2 is:</Link>
             <br/>
       <Outlet/>
    </div>
  )
}
