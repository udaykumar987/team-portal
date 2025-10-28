import { Routes, Route, Navigate, Link } from 'react-router-dom'
import Start from './pages/Start.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'

export default function App(){
  return (
    <div className="app">
      <div className="phone">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <footer className="credits">
        <Link to="/">Home</Link>
      </footer>
    </div>
  )
}
