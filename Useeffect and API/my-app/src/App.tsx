// import { useEffect } from "react";

// //UseEffect lets you run code:
// // when a component loads
// // when data changes
// // when component unmounts

// const App = () => {
//   useEffect(()=>{
//     console.log("component loaded");   //it means that when component is mounted it will be printed        //it will be printed two times because of "react.StrictMode"
//   },[]);
  
//   return <div>Hello React</div>;
// }

// export default App;


import { log } from "console";
import { useState, useEffect } from "react";

const App1 = () => {
  const [count,setCount] = useState<number>(0);
  useEffect(()=>{
    console.log("Count change : " + count);
  },[count]);   //runs everytime counts changes and it will give live changing when you click any of the two buttons

//  useEffect(()=>{
//     console.log("Count change : " + count);
//   },[]);      // the dependency array is empty which means that run only one time when page is loaded

  return(       // React does not allow more than 1 JSX element in return unless you can put it all into one div parent element.
    <div>
    <button onClick={()=>{setCount(count + 1)}}>Increment</button>
    <button onClick={()=>{setCount(count - 1)}}>Decrement</button>
    <h1>Count : {count}</h1>
    </div>
  );
};
export default App1;