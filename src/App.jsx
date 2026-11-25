import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RenterLogin from './pages/renter/renterlogin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RenterLogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App