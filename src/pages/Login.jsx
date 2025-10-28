import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Button from '../components/Button.jsx'
import "./Login.css";


export default function Login(){
  const nav = useNavigate()
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const ok = email && pw.length >= 6

  function submit(e){
    e.preventDefault()
    if(!ok) return
    nav('/')
  }

  return (
    <div className="login">
      <div className="topband" />
      <div className="login-heading">Login Your Account</div>

      <form onSubmit={submit}>
        {/* Email */}
        <div className="lg-field lg-f1">
          <label className="lg-label">Email Address</label>
          <input className="lg-input" placeholder="Enter your Email" value={email} onChange={e=>setEmail(e.target.value)}/>
          <div className="lg-underline" />
        </div>

        {/* Password */}
        <div className="lg-field lg-f2">
          <label className="lg-label">New Password</label>
          <input className="lg-input" placeholder="**************" type="password" value={pw} onChange={e=>setPw(e.target.value)}/>
          <div className="lg-underline" />
        </div>

        <div className="lg-forgot">Forgot Password?</div>

        {/* CTA */}
        <div className="lg-cta">
          <Button type="submit" disabled={!ok}>Login</Button>
        </div>
      </form>

      {/* Or + providers */}
<div className="lg-or">Or</div>
<div className="lg-line-left" />
<div className="lg-line-right" />
<div className="lg-continue">Continue With</div>

<div className="lg-providers">
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

      <div className="lg-alt">
        Don’t have account? <Link to="/signup">Signup</Link>
      </div>
    </div>
  )
}
