import React, { useContext } from "react";
import { DataContext } from "../../context/DataContextProvider";
import "./Home.css";

export default function Home() {
  const { nameKey, stravaDataKey } = useContext(DataContext);
  const [name, setName] = nameKey;
  const [stravaData, setStravaData] = stravaDataKey;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };
  return (
    <div>
      <div className="svg">
        <svg
          width="476"
          height="366"
          viewBox="0 0 276 166"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="mountain--svg"
            d="M96 154H14L101 45L116 65L151 19L164 40L184 13L263 154H96Z"
            stroke="#91DDD8"
            stroke-width="3"
          />
          <g filter="url(#filter0_f_1_5)">
            <path
              className="blur--svg"
              d="M96 154H14L101 45L116 65L151 19L164 40L184 13L263 154H96Z"
              stroke="#91DDD8"
              stroke-width="3"
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
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
      {/* <span>Home of: </span>
      <input
        className="input--name"
        placeholder={name}
        onChange={handleChange}
      ></input>
      <div>
        How's the weather in{" "}
        {stravaData.length > 0
          ? stravaData[0]?.location_country
          : "*country of origin*"}
        ?
      </div> */}
    </div>
  );
}
