    import ReflectifyLogo from './assets/reflogo.png'; // Update path if needed
    import './LoginPage.css'; // Your external CSS file
    import { useNavigate } from 'react-router-dom'

    export default function LoginPage() {

        const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/signup')
  }
    return (
        <div className="login-container">
        <div className="left-panel">
            <img src={ReflectifyLogo} alt="Reflectify Logo" className="logo" />
            <h1>Reflectify</h1>
        </div>
        <div className="right-panel">
            <h2>Welcome Back</h2>
            <h3>Hello there, log in to continue</h3>
            <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Log In</button>
            <p className="donthanacc">
            Don't have an account? <span className="signin-link" onClick={handleLogin}>Sign Up</span>
          </p>
            </form>
        </div>
        </div>
    );
    }
