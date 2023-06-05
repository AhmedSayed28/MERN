import React, { useState , useEffect } from 'react'
import Axios from 'axios'

function App() {

  const [users , setUsers] = useState([])
  const [name , setName] = useState("")
  const [age , setAge] = useState("")
  const [email , setEmail] = useState("")

  useEffect(() => { 
    Axios.get("http://localhost:3000/users").then((response) => {
      setUsers(response.data)
    })
  }, [users]); // [] => بتشتغل لما الصفحة تحمل بس مره واحده
  // [users] => بتشتغل لما الصفحة تحمل ولما ال users يتغير


  const AddUser = (e) => {
    Axios.post("http://localhost:3000/addUser", {
      name:name,
      age:age,
      email:email,
    })
    .then(res => {
      console.log(res.data)
    })
    e.preventDefault();
  }

  return (
    <>
    {
      users.map((user, index) => {
        return <div className="App" key={index}>
          <ul>
            <li>name : {user.name}</li>
            <li>Age : {user.age}</li>
            <li>Email : {user.email}</li>
          </ul>
        </div>
      })
    }


    <form>
      <input type="text" placeholder="name" onChange={event=>setName(event.target.value)}/>
      <input type="number" placeholder="age" onChange={event=>setAge(event.target.value)}/>
      <input type="email" placeholder="email" onChange={event=>setEmail(event.target.value)}/>
      <button onClick={AddUser}>Add User</button>
    </form>


    </>
  )
}

export default App