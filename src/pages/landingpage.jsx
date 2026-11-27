import { useNavigate } from 'react-router-dom'
function LandingPage() {
  const navigate = useNavigate()
  return (
    <div>
      <h1 className="heading">Welcome to RentAnything</h1>
      <p className="text">
        Rent anything you need or earn money by renting out your products.
      </p>
      <h2 className="heading">Choose Your Login</h2>
      <div className="form">
        <div>
          <h2>Renter Login</h2>
          <p>Find and rent products you need.</p>
          <button className="button" onClick={() => navigate('/renterlogin')} > Continue as Renter </button>
        </div>
        <div>
          <button className="button" onClick={() => navigate('/registerrenter')} > Register here </button>
        </div>
        <div>
          <h2>Owner Login</h2>
          <p>List your products and earn by renting.</p>
          <button className="button" onClick={() => navigate('/ownerlogin')} >  Continue as Owner </button>
        </div>
        <div>
          <button className="button" onClick={() => navigate('/registerowner')} > Register here </button>
        </div>
      </div>
    </div>
  )
}
export default LandingPage