import React from 'react'

export default function Ecomarce() {
  return (
    <div className='headerstyle'>
       <header>
    <input type="search" placeholder='Search'/><buuton className="btn btn-secondary " style={{color:"black"}}>Search</buuton>
    </header>
      

    <div className="container">
    <div className="card" style={{height:"470px",width:"350px"}}>
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
    <span className="fa fa-shopping-cart" style={{fontSize:"30px",color:"red"}}></span>
    <span className="fa fa-star" style={{color:"red"}}></span>
    </div> 
    </div>
    
  );
}
