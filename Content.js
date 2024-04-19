import React from 'react'

export default function Content() {
  return (
    <div className='contantstyle'>
    <div className="container">
    <div className="card" style={{height:"475px",width:"330px"}}>
       <center>
        <h1>Fighter</h1>
        <img src="fighter.jpeg" style={{height:"200px",width:"200px"}}/>
        </center>

        <div className="textStyle">
        Directed by	Siddharth Anand
        </div>

        <div className="textStyle">
        Release date:25 January 2024
        </div>

        <div className="textStyle">
        Running time:166 minutes[1]
        </div>

        <div className="textStyle">
        Language:Hindi
        </div>

        <div className="textStyle">
        Ticket price:400
        </div>

        <div className="textStyle">
        Report:Good
    </div>
   <button className="btn btn-danger">
    Add to Card &nbsp;
    <span className="fa fa-shopping-cart"></span>
   </button>
    </div>
    </div> 
    </div>
  );
}