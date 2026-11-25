import { useState } from 'react'
function Login() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const formsubmit=(e)=>
  {
    e.preventDefault()
    console.log(name,email,password)
  }
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={formsubmit}>
        <label>Name:</label>
        <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} required/>
        <br /><br />
        <label>Email:</label>
        <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br /><br />
        <label>Password:</label>
        <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}required />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Login