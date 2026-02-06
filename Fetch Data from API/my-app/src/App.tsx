// // Fetching Users from backend and showing them in a list
import { useEffect, useState } from "react"

interface UsersArr {
  id: number,
  name: string,
  address: {
    street: string,
    suite: string,
    city: string
  }
}

const App = () => {
  let [users , setUsers] = useState<UsersArr[]>([]) //hold an array of UsersArr     //here ([]) means the initial value of array is empty array        //In react component data that changes over time must be stored in useState
  let [loading , setLoading] = useState<boolean>(true)

  useEffect(()=>{
    const fetchUsers = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    try {
      setUsers(await res.json())      //setUsers is a function not a variable so we can assign value by this
      // console.log(users);     // in this part it will still show the empty array because in the above line the states is updated which is an async(means react schedule the update but it will not print immediately)
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }    
  fetchUsers();
},[])

{console.log(users)} 
return(
  <div>
      <h1>Printing Array</h1>
      {loading ? <h2>Loading...</h2> : 
          users.map((user) => (
            <li key={user.id}>{user.name}       ---    {user.id}     ---     {user.address.street}    ---   {user.address.suite}  ---   {user.address.city}</li>
          ))}
        </div>)
  }

export default App


//    You will see [] empty array first then array with users are printed. here's the reason:
//You initialize your state with useState<UsersArr[]>([]).
// That means before the fetch runs, users starts as an empty array.
// React renders the component immediately with that initial state.
// When you log users during that first render, it prints [].