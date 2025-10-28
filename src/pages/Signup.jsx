import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Button from '../components/Button.jsx'
import "./Signup.css";


export default function Signup(){
  const nav = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const [pw2, setPw2] = useState('')
  const valid = name && email && pw.length>=6 && pw===pw2

  function submit(e){
    e.preventDefault()
    if(!valid) return
    nav('/verify')
  }

  return (
    <div className="signup">
      <div className="topband" />
      <div className="signup-heading">Create New Account</div>

      <form onSubmit={submit}>
        {/* Full Name */}
        <div className="sg-field sg-f1">
          <label className="sg-label">Full Name</label>
          <input
            className="sg-input"
            placeholder="Enter your name"
            value={name}
            onChange={e=>setName(e.target.value)}
          />
          <div className="sg-underline" />
        </div>

        {/* Email */}
        <div className="sg-field sg-f2">
          <label className="sg-label">Email Address</label>
          <input
            className="sg-input"
            placeholder="Enter your Email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
          <div className="sg-underline" />
        </div>

        {/* New Password */}
        <div className="sg-field sg-f3">
          <label className="sg-label">New Password</label>
          <input
            className="sg-input"
            type="password"
            placeholder="**************"
            value={pw}
            onChange={e=>setPw(e.target.value)}
          />
          <div className="sg-underline" />
        </div>

        {/* Re-enter Password */}
        <div className="sg-field sg-f4">
          <label className="sg-label">Re-enter Password</label>
          <input
            className="sg-input"
            type="password"
            placeholder="**************"
            value={pw2}
            onChange={e=>setPw2(e.target.value)}
          />
          <div className="sg-underline" />
        </div>

        {/* CTA */}
        <div className="sg-cta">
          <Button type="submit" disabled={!valid}>Signup</Button>
        </div>
      </form>

     <div className="sg-or">Or</div>
<div className="sg-line-left" />
<div className="sg-line-right" />
<div className="sg-continue">Continue With</div>

<div className="sg-providers">
  <button className="pv g">
    <img src="/src/assets/google.jpg" alt="Google" />
  </button>
  <button className="pv a">
    <img src="/src/assets/apple.jpg" alt="Apple" />
  </button>
  <button className="pv f">
    <img src="/src/assets/facebook.jpg" alt="Facebook" />
  </button>
</div>
      <div className="sg-alt">
        Already have account? <Link to="/login">Login</Link>
      </div>
    </div>
  )
}
