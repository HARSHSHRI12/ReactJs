import React from 'react'
import Navigatorbar from './Component/Navigatorbar';
import ProductList from './Component/Productlist';
export default function product() {
  var prod=[
    {
      price:1900000,
      name:"i phone 15 pro max",
      quantity:0,
    },
    {
      price:1890000,
      name:"samsung galaxy j7",
      quantity:0,
    }
  ]
  return (
    <div>
     <Navigatorbar/>
     <ProductList product={prod}/>
    

    </div>
  )
}
