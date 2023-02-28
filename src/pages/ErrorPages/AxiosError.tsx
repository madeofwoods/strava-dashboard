// import React, { useContext } from "react";
import { DataContext } from "../../context/DataContextProvider";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Error.css";

export default function AxiosError() {
  const [mouseOver, setMouseOver] = useState<Boolean>(false)
  const { axiosError } = useContext(DataContext)
  const [errorStatus, setErrorStatus] = axiosError

//   useEffect(()=> {
//     setErrorStatus(404)
//   },[])


  const errorHandler = (error: number) => {
    switch (error) {
        case 444:
            return "Woods broke something";
            break
        case 400:
            return "Something went wrong";
            break;
        case 401:
        case 404:
            return 'Please the tick box "View data about your private activities" to view your data.';
            break;
        case 403: 
            return "We are forbidden from accessing this data. Please check your privacy settings to continue.";
            break;
        case 429:
            return "Apologies, Strava limits the number of requests we can make per 15 minutes. Please try again later.";
            break;
        case 500: 
            return "Apologies, Strava is having technical issues at the moment."
    }
  }

//   console.log(errorHandler(429))
  console.log("axiosError", errorStatus)

  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/site")
  }

  const handleMouse = () => {
    setMouseOver(true)
  }
  const handleMouseLeave = () => {
    setMouseOver(false)
    
  }

  return (
    <div className="Home">
      <div className="svg--error" >
        <svg 
          width="476"
          height="366"
          viewBox="0 0 276 166"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="mountain--svg--error"
            d="M96 154H14L101 45L116 65L151 19L164 40L184 13L263 154H96Z"
            stroke={mouseOver? "rebeccaPurple" : "#91DDD8"}
            strokeWidth="3"
          />
          <g filter="url(#filter0_f_1_5)">
            <path
              className="blur--svg--error"
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
      </div>
      <div className="error--message"><span className="error--span">Error:</span> {errorHandler(errorStatus)}</div>
      <div className="connect--to--demo">
        <button className="error--button" onClick={handleClick} onMouseOver={handleMouse} onMouseLeave={handleMouseLeave}>Return To Site</button>
        <div className="error--blur"></div>
      </div>
    </div>
  );
}
