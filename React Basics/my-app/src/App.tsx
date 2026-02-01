// it looks like html but in reality react is converting every code.
// files must have .tsx extension to support JSX
// in JSX you can use curly braces to embed javascript expressions

interface GreetingProps{      //props(properties) are how you pass data from a parent component to a child component
  name1:string;
  age:number;
}
const Greeting = ({name1 , age} : GreetingProps) => {
  return <h2>Hello {name1}!!!! and you are {age} years old..</h2>
}


const App = () =>{    // here App is a component(function)
  const name:string = "aman";   // you need to declare variables here!


  const age:number = 22;
  let message:string = "";
  if (age > 18) {   // you can use ternary operator that will be written in return
    message =  "Adult"
  }else {
    message =  "Minor";
  }

  return (
    <div>
      <h1>Hello Welcome to React + Typescript!</h1>
      <h2>hello {name}</h2>
      <p>{message}</p>

      <Greeting name1 = "Aki" age={22} />
    </div>
  )
}
export default App;