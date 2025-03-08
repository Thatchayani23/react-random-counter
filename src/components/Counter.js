import {useState} from "react";
function Counter (){
const [count,setcount]=useState(0)
function increment(){
 setcount(count+1)
}
function decrement(){
setcount(count-1)
}
return(
<div>
<h1>Counter:{count}</h1>
<button onClick={increment}>INCREMENT</button>
<button onClick={decrement}>DECREMENT</button>

</div>

)



}



export default Counter;