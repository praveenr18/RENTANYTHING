
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
function OwnerLogin() {
  const location=useLocation();
  const regdata=location.state;
  const navigate=useNavigate();
   const [logindata, setlogindata] = useState({
    email: "",
    password: "",
    username: "",
    age: "",
  })
  function handlechange(e) {
    e.preventDefault();
    setlogindata({
      ...logindata,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if(regdata.username===logindata.username && regdata.email===logindata.email && regdata.password===logindata.password && regdata.age===logindata.age){
        alert("Login Successful")
        navigate("/ownerdashboard",{state:logindata})
       }
       else
       {
        console.log("Invalid credentials")
       }
  }
  return (
    <>
   <h1 className="heading">Loginn Form</h1>
       <form className="form" onSubmit={handleSubmit}  >
        USERNAME :{" "}
        <input type="text" className="name" required placeholder="Enter your UserName here" name="username" value={logindata.username} onChange={handlechange}/>
        <br />
        EMAIL :{" "} <input type="email" className="email" required placeholder="Enter your Email here" name="email" value={logindata.email} onChange={handlechange} />
        <br />
        PASSWORD :{" "} <input type="password" className="password"  required  placeholder="Enter your Password here"  name="password"  value={logindata.password}  onChange={handlechange}/>
        <br />
        AGE :{" "}<input type ="number" className="age" required placeholder="Enter your Age" name="age" value={logindata.age} onChange={handlechange}/>
         <button type="SUBMIT" className='button'>Submit</button>
      </form>
        </>
  )
}
export default OwnerLogin;