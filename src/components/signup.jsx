import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()
    const  [username, setUsername] = useState("")
    const  [password, setPassword] = useState("")
    const handlesignup = () =>{
        if(username ==="san" && password ==="12"){
             alert("successfully signin")
        }
        else{
            alert("not ")
        }
        
       
    }
  return (
    <div>
      <h1>Signup page</h1>
      <input type="text" name="" id="" value={username} onChange={(e) =>setUsername(e.target.value)} />
      <input type="text" name="" id="" value={password} onChange={(e)=> setPassword(e.target.value)} />
      <button onClick={handlesignup}>Signup</button>
      <button onClick={() => navigate("/Login")}>Login</button>
    </div>
  )
}

export default Signup
