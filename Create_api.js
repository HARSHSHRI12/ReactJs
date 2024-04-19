import axios from 'axios'
import React from 'react'
export default function Create_api() {
  function fun1(){
      axios.get("http://localhost:1000/first").then(dt=>{
    alert(dt.data)
  })
  }
  return (
    <div>
    <input type="button" value="click" onClick={fun1}/>

    </div>
  )
}
