import { useState } from 'react'

function RenterLogin() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const formsubmit = (e) => {
    e.preventDefault()
    console.log(name, email, password)
  }
  return (
    <div className="login-box">
      <h1 className="heading">Renter Login</h1>
      <form onSubmit={formsubmit} className="form">
        <label>Name:</label>
        <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} className="name" required/>
        <label>Email:</label>
        <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} className="email" required />
        <label>Password:</label>
        <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} className="password" required />
        <button type="submit" className="button">
          Login
        </button>
      </form>
      <p className="text">Welcome to RentAnything!</p>
    </div>
  )
}
export default RenterLogin