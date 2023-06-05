import React, { useState , useEffect } from 'react'
import Axios from 'axios'
import'./App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container , Button , Badge , ListGroup , Form, ListGroupItem } from 'react-bootstrap'

function App() {

  const api = "http://localhost:3001";

  const [users , setUsers] = useState([])
  const [name , setName] = useState("")
  const [age , setAge] = useState("")
  const [email , setEmail] = useState("")

  useEffect(() => { 
    Axios.get(`${api}/users`).then((response) =>setUsers(response.data))
  }, [users]); // [] => بتشتغل لما الصفحة تحمل بس مره واحده
              // [users] => بتشتغل لما الصفحة تحمل ولما ال users يتغير


  const AddUser = () => {
    if(name && age && email){
      Axios.post(`${api}/addUser`, {name,age,email})
     .then(res => res.data)
    }else{
      alert("Please fill all fields")
    }
  }

  return (

    <Container>
      <Form className='form'>
        <Form.Control type="text" placeholder="name" onChange={event=>setName(event.target.value)}/>
        <Form.Control type="number" placeholder="Age" onChange={event=>setAge(event.target.value)}/>
        <Form.Control type="text" placeholder="email" onChange={event=>setEmail(event.target.value)}/>
        <Button className='btn btn-success' onClick={AddUser}>Add User</Button>
      </Form>

    <div className='result'>
      {
      users.map(({_id , name , age , email}) => {
        return (
          <ListGroup key={_id}>
            <ListGroupItem variant='dark' className='text-center'>
              <div className='ms-2 me-auto'>
                <div className='fw-bold'>Name : {name}</div>
                <div>Email : {email}</div>
              </div>
              Age : <Badge bg='success' pill>{age}</Badge>
            </ListGroupItem>
          </ListGroup>
        )
      })
    }
    </div>
    </Container>


    // <>
    // {
    //   users.map(({_id , name , age , email}) => {
    //     return <div className="App" key={_id}>
    //       <ul>
    //         <li>name : {name}</li>
    //         <li>Age : {age}</li>
    //         <li>Email : {email}</li>
    //       </ul>
    //     </div>
    //   })
    // }


    // <form>
    //   <input type="text" placeholder="name" onChange={event=>setName(event.target.value)}/>
    //   <input type="number" placeholder="age" onChange={event=>setAge(event.target.value)}/>
    //   <input type="email" placeholder="email" onChange={event=>setEmail(event.target.value)}/>
    //   <button onClick={AddUser}>Add User</button>
    // </form>


    // </>
  )
}

export default App