import ReflectifyIcon from './assets/reflogo.png'
import { useNavigate } from 'react-router-dom'
import './WcPage.css';

function WcPage() {
  const navigate = useNavigate()

  const handleProceed = () => {
    navigate('/signup')
  }

    const handleTest = () => {
    navigate('/studentdashboard')
  }

  return (
    <>
      <header className='wpheader'>
        <link href="https://fonts.googleapis.com/css2?family=Alata&family=Black+Han+Sans&family=DM+Sans:ital,opsz,wght@0,9..40,523;1,9..40,523&family=Tilt+Warp:XROT@-3&display=swap"rel="stylesheet"/>
        <img src={ReflectifyIcon} alt="Reflectify Logo" />
        <h1>Reflectify</h1>
        <h2>Welcome!</h2>
      </header>

      <div className="wpbutton">
        <button className="proceedbtn" onClick={handleProceed}>
          Proceed
        </button>
      </div>
      <div className="wptstbutton">
      <button className="tstbtn" onClick={handleTest}>
          Try the Demo Version
        </button>
      </div>
    </>
  )
}

export default WcPage
