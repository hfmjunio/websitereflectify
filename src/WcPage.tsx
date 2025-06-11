import ReflectifyIcon from './assets/reflogo.png'
import { useNavigate } from 'react-router-dom'

function WcPage() {
  const navigate = useNavigate()

  const handleProceed = () => {
    navigate('/signup')
  }

  return (
    <>
      <header>
        <link
          href="https://fonts.googleapis.com/css2?family=Alata&family=Black+Han+Sans&family=DM+Sans:ital,opsz,wght@0,9..40,523;1,9..40,523&family=Tilt+Warp:XROT@-3&display=swap"
          rel="stylesheet"
        />
        <img src={ReflectifyIcon} alt="Reflectify Logo" />
        <h1>Reflectify</h1>
        <h2>Welcome!</h2>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </h3>
      </header>

      <div className="wpbutton">
        <button className="proceedbtn" onClick={handleProceed}>
          Proceed
        </button>
      </div>
    </>
  )
}

export default WcPage
