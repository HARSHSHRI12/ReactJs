import React from 'react'
import NavigationBar from './NavigationBar';
import Plist from './Plist';


export default function Produ() {
    var product=[
        {
            price:19800000,
            name:"i phone 15 pro max",
            quantity:0,
        },
        {
            price:870000,
            name:"samsung galaxy j7 ultra pro max",
            quantity:0,
        }
    ]
  return (
    <div>
   <NavigationBar/>
   <Plist product={product}/>

   </div>
  )
}
