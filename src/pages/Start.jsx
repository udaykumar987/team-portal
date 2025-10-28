import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import "./Start.css";

export default function Start(){
  return (
    <div className="start">
      {/* iPhone Status bar (optional visual spacing as per Figma) */}
      <div className="statusbar" aria-hidden />

      {/* Illustration block (use your PNG/SVG at the coordinates you want) */}
      <div className="start-illustration">
        <img src="/src/assets/illustartion.png" alt="illustration" />
      </div>

      {/* Tagline as one paragraph (title + subtitle) */}
      <div className="start-tagline">
  <p className="start-tagline-text">
    <span className="start-title">
      Where creativity meets functionality for an online presence that makes an <b>impact.</b>
    </span>
  </p>
</div>


      {/* CTA Button container */}
      <div className="start-cta">
        <Link to="/login">
          <Button>Lets Go</Button>
        </Link>
      </div>
    </div>
  )
}
