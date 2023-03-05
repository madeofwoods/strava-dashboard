import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import heroImg from "../../assets/hero.png"
import { handleLogin, clientId, scope, redirectUrl } from "../../utils/LoginFunctions";


export default function Home() {
  const [mouseOver, setMouseOver] = useState<boolean>(false)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/site/demo")
  }


  const handleMouse = () => {
    setMouseOver(true)
  }
  const handleMouseLeave = () => {
    setMouseOver(false)
    
  }

  return (
    <div className="Home">
      <div className="home--title">Strava Dashboard</div>
      <div className="home--text">All your running data in one place.</div>
      {/* <div className="svg--home" >
        <svg 
          width="276"
          height="126"
          viewBox="0 0 276 166"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="mountain--svg"
            d="M96 154H14L101 45L116 65L151 19L164 40L184 13L263 154H96Z"
            stroke={mouseOver? "rebeccaPurple" : "#91DDD8"}
            strokeWidth="3"
          />
          <g filter="url(#filter0_f_1_5)">
            <path
              className="blur--svg"
              d="M96 154H14L101 45L116 65L151 19L164 40L184 13L263 154H96Z"
              stroke={mouseOver? "lightBlue" : "#91DDD8"}
              strokeWidth="3"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1_5"
              x="0.883545"
              y="0.243637"
              width="274.676"
              height="165.256"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="5"
                result="effect1_foregroundBlur_1_5"
              />
            </filter>
          </defs>
        </svg>
      </div> */}
      <div className="image--container">
        <img className="hero--img" src={heroImg} alt="" />
        </div>
        <div className="buttons">
      <div className="connect--to--demo">
        <button className="demo--button" onClick={handleClick} onMouseOver={handleMouse} onMouseLeave={handleMouseLeave}>View Demo</button>
        <div className="blur"></div>
        </div>
      <div className="connect--to--demo">
        <button className="strava--button" onClick={e => handleLogin(clientId, scope, redirectUrl)} onMouseOver={handleMouse} onMouseLeave={handleMouseLeave}>Connect to  Strava</button>
        <div className="blur strava--blur"></div>
        </div>
      </div>
    </div>
  );
}
