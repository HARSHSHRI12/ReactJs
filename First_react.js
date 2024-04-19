import React from 'react'

export default function First_react() {
  function check(){
    var name=document.getElementById("M").ariaValueText;
    if(name=="harsh_13"){
      alert("you are right user..");
    }
    else{
      alert("sorry try again..");
    }
  }
  return (
   <div class="container">
     <input type="text" id="M" placeholder="User_name" class="form-control"/>
    <br/>
     <input type="password" placeholder="password" class="form-control"/>
     <br/>
     <input type="email" placeholder="eg:@gmail.com" class="form-control"/>
     <br/>
     <input type="number" placeholder="phone n0." class="form-control"/>
     <br/>
     <input type="button" value="click" onClick={check} class="btn btn-primary"/>
     <input type="button" value="click" class="btn btn-secondary"/>
     <input type="button" value="click" class="btn btn-warning"/>
     <input type="button" value="click" class="btn btn-danger"/>
     <input type="button" value="click" class="btn btn-success"/>
     <input type="button" value="click" class="btn btn-info"/>
     <table class="table table-striped">
      <thead>
        <th>user_name</th>
        <th>city</th>
      </thead>
      <tbody>
        <tr>
          <td>harsh shrivastava</td>
          <td>madhya pradesh</td>
        </tr>
        <tr>
          <td>anshu shrivastava</td>
          <td>singrauli</td>
        </tr>
        <tr>
          <td>kuku shrivastava</td>
          <td>delhi</td>
        </tr>
      </tbody>
     </table>
     <div class="card" style={{height:"400px",width:"400px",pending:"10px"}}>
     <center><h1>Harsh Shrivastava</h1></center>
      <center><img src="harsh.jpg" height="200px" width="200px"/></center>
      <div class="textStyle">
        harsh , anshu
      </div>
      <div class="textStyle">
        Costing:Harsh shrivastava
      </div>
      <div class="textStyle">
        Director:Avvier Edu Hub
      </div>
      <div class="textStyle">
        Report:Good
      </div>
      
       <input type="button" value="Add to Card" class="btn btn-danger"/>

     </div>
    </div>
  );
}