import { useState } from "react";
import "./App.css"

const Counter = () => {
  const [count , setCount] = useState<number>(0);
  return (
    <div>
      <h1 style={{margin:"20px"}}>Counter Using React!</h1>
      <h2 style={{display:"flex" , margin: "5px"}}>Count = {count}</h2>
      <button onClick={() => setCount(count + 1)} id="increment" style={{fontSize: "20px", color:"white" , backgroundColor:"lightgreen"}}>Increment</button>
      <button onClick={()=>setCount(count -1)} id="decrement" style={{fontSize: "20px" , color:"white", backgroundColor:"lightcoral"}}>Decrement</button>
    </div>
  )
}
export default Counter;



//EXTRA BASICS OF REACT
// const App = () => {
//   const isloggenIn:boolean = true 
//   const users:string[] = ["john","alia","kiki"]

// return(
//   <div>
    {/* conditional rendering */}
    // {isloggenIn ? <p>Welcome!</p>: <p>Please Login first!</p>}      {/* for now it will show Welcome as the initial value is true */}


    {/* Rendering List */}
    // <ul>
      {/* This one's implicit return(No need to add return as you dont have used curly braces) */}
      // {users.map((user,index) => (    //it takes 2 parameters user = john,alia,kiki and index = 0,1,2
        // <li key={index}>{user}</li>   //In react you are required to have a unique key and it is achieve by key={index}
      // ))}
      {/* OR (this one's explicit return(in this you have to add return as you have used curly braces))   {   
       {users.map((user, index) => {
        return <li key={index}>{user}</li>;
        })}}
       */}
    // </ul>

  // </div>
// )}
// export default App;

//    Key Rule:
// Arrow function + parentheses () → implicit return.
// Arrow function + curly braces {} → explicit return required.