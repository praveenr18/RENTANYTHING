import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingpage.jsx'
import RenterLogin from './pages/renter/renterlogin.jsx'
import OwnerLogin from './pages/owner/ownerlogin.jsx'
import OwnerDashboard from './pages/owner/ownerdashboard.jsx'
import RenterDashboard from './pages/renter/renterdashboard.jsx'
import Registerrenter from './pages/renter/registerrenter.jsx'
import Registerowner from './pages/owner/registerowner.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/renterlogin" element={<RenterLogin />} />
        <Route path="/ownerlogin" element={<OwnerLogin />} />
        <Route path="/renterdashboard" element={<RenterDashboard />} />
        <Route path="/ownerdashboard" element={<OwnerDashboard />} />
        <Route path="/registerrenter" element={<Registerrenter />} />
        <Route path="/registerowner" element={<Registerowner />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App