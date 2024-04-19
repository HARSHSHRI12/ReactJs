import React, { useState } from 'react'
import axios from 'axios'
export default function Api_call() {
    var[tabledata,updata]=useState()
    function fun1(){
   axios.get("https://restcountries.com/v3.1/all").then(dt=>{
    updata(dt.data.map(function(oneRecord){
     return<tr>   
        <td>{oneRecord.name.common}</td>
        <td>{oneRecord.capital}</td>
        <td>{oneRecord.area}</td>
        <td><img src={oneRecord.flags.png }width="100px" height="100px"/></td>
    
     </tr>
    }))
   })
    }
  return (
    <div>
       <input type="button" value="Get data" onClick={fun1}/>
       <table>
        <tr>{tabledata}</tr>
       </table>
    </div>
  )
}
