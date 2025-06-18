import { useNavigate } from 'react-router-dom';
import ReflectifyLogo from './assets/reflogo.png';
import './LoginPage.css';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add login logic here
    navigate('/signup');
  };

  return (
    <div className="login-container">
      {/* Left Panel */}
      <div className="left-panel">
        <img src={ReflectifyLogo} alt="Reflectify Logo" className="logo" />
        <h1 className="reflectify">Reflectify</h1>
      </div>

      {/* Right Panel */}
      <div className="right-panel">
        <h1 className="welcome-title">Welcome Back</h1>
        <h3 className="welcome-subtitle">Hello there, log in to continue</h3>

        <form onSubmit={handleLogin}>
          <label className="input-label">Email</label>
          <input
            type="email"
            placeholder="Ex. j.delacruz@student.tsu.edu.ph"
            required
          />

          <label className="input-label">Password</label>
          <input
            type="password"
            placeholder="At least 8 characters"
            required
          />

          <div className="forgot-link">
            <span>Forgot Password?</span>
          </div>

          <button type="submit">Log In</button>

          <p className="donthanacc">
            Don't have an account?{" "}
            <span className="signin-link" onClick={handleLogin}>
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
