import React, {useState} from "react";

function RandomNumber(){
const [count,add]= useState(0)
function random (){
     add(Math.floor(Math.random()*100)+1)
}


    return(
        <div>
            <h3>RandomNumber Generation</h3>
        <h2>RandomNumber : {count}</h2>
        <button onClick={random}>click</button>

        </div>
    )
}
export default RandomNumber;