import { useState } from 'react'
import { useLocation } from 'react-router-dom'
function RenterDashboard() {
  const location = useLocation()
  const [userdata, setuserdata] = useState({})
  function displaydata() {
    setuserdata(location.state)
    console.log(location.state)
  }
  return (
    <div>
      <h1>Renter Dashboard</h1>
      <h2>Welcome {userdata.username}</h2>
      <p>Email: {userdata.email}</p>
      <button onClick={displaydata}>Submit</button>
    </div>
  )
}
export default RenterDashboard