import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignupPage.css';


export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Signup with: ${email} / ${password}`)
    // TODO: Add Firebase Auth logic here
  }
  const handleSignin = () => {
    navigate('/login')
  }
  return (
    <>
    <div className="signup-root">
    <div className='reflogo'>Reflectify</div>
        <div className="SignUp">
          <h2>Create Account</h2>
          <h3>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>
            Hello there, fill in below to create an account</h3>
          <form onSubmit={handleSignup}>
            <div className="name-row">
      <div className="name-field">
        <h4>First Name</h4>
        <input type="text" placeholder="Ex. Juan" required />
      </div>
      <div className="name-field">
        <h4>Last Name</h4>
        <input type="text" placeholder="Ex. Dela Cruz" required />
      </div>
      </div>
        <h4>Email Address</h4>
        <input
          type="email"
          placeholder="Ex. j.delacruz00355@student.tsu.edu.ph"

          value={email}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <h4>Password</h4>
        <input
          type="password"
          placeholder="Must be at least 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <h4>Confirm Password</h4>
        <input
          type="password"
          placeholder="Match your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <h4>Are you a/an:</h4>
          <div className="role-options">
          <label>
            <input
              type="radio"
              name="role"
              value="student"
              required
            />
            Student
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="instructor"
            />
            Instructor
          </label>
          </div>
          <button type="submit" className="createacc-btn">Create Account</button>
          <p className="alrhanacc">
            Already have an account? <span className="signin-link" onClick={handleSignin}>Sign In</span>
          </p>
      </form>
    </div>
    </div>
    </>
  )
}
