import logo from "./logo.svg";
import "./App.css";
import { useState,useRef } from "react";

function App() {
  var [unameMessage, updateuname] = useState();
  var [pwdMessage, updatepass] = useState();
  var [emailMessage, updateemail] = useState();
  var com1 = useRef();
  var com2 = useRef();
  var com3 = useRef();
  function functionSet() {
    updateuname("")
    updatepass("")
    updateemail("")
    if (com1.current.value.length == 0) {
      updateuname("Enter user Name");
    }else{
      if (com2.current.value.length <8 ) {
        updatepass("Enter your password");
      }else{
      if (com3.current.value.length == 0) {
        updateemail("Enter your Email");
      }
     
     
      
    }
  }
  }
  return (
    <div className="container">
      <input type="text" placeholder="Enter Name" ref={com1} className="form-control"/>
      <div style={{color:"red"}}>{unameMessage}</div>
      <input type="password" placeholder="Enter Password" ref={com2} className="form-control"/>
      <div style={{color:"red"}}>{pwdMessage}</div>
      <input type="text" placeholder="Enter Email" ref={com3} className="form-control" />
      <div style={{color:"red"}}>{emailMessage}</div>
      <input
        type="button"
        value="click"
        onClick={functionSet}
        className="btn btn-secondary"
      />
    </div>
  );
}
export default App;
