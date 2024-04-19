import React, { useState } from 'react';


export default function Incremant_num() {
function Increment(){
     var[count,setcount]=useState(0);
     var Increment=()=>{
         setcount(count+1);
     };x
     var[cou,upcount]=useState(0);
     var dic=()=>{
         upcount(cou-1);
     };
   }

   return (
     <div>
       <div className='container' margin>
         <h3>Add to card</h3>
      <button className="btn btn-primary" onClick={()=>Increment()}>click button to increment is :{count}</button>
     
      <button className="btn btn-primary" onClick={()=>Dicrement()}>click button to increment is :{cou}</button>
      </div>
     <div className='container'>
       <h3>Add to Second card</h3>
     {/*<button onMouseOver={()=>Incremant2()}>Mouse over count is : {count2}</button>*/}
    </div>
     </div>
   )
 }


