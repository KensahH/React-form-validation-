import React from "react";
import "./style.css";
import{useState} from "react";

export default function App() {

const[username, setUsername] = useState("")
const[email, setEmail] = useState("")
const[password, setPassword] = useState("")
const[message, setMessage] = useState("")

function handleChange(e){
setUsername(e.target.username)
setEmail(e.target.email)
setPassword(e.target.password)
}


const handleValidation=(e)=>{
  
if(username ===""){
setMessage(" required");

}  
if(password===""){
setMessage("required")
}

if(email===""){
setMessage("required")

}

}

  return (
    <div>
      <form>
        <h1 className="form"> Form validation</h1>

<label className=" name">username</label>
<input className="nameText" placeholder="enter your username" onChange={handleChange}type="text" value={username}></input>
<p className="nameMessage">{message}</p><br></br>



<label className="email">Email</label>
<input className="emailText" placeholder="asdfg@gmail.com" onChange={handleChange} value={email}type="text"></input>
<p className="emailMessage">{message}</p><br></br>


<label className="password">Password</label>
<input className="passwordText" placeholder ="enter your password" value={password} onChange={handleChange}type="password"></input>
<p className="passwordMessage">{message}</p><br></br>


<button onClick={handleValidation} className="Btn">Submit</button>



      </form>
    </div>
  );
}
