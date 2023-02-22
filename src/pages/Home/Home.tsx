
import React, { useContext } from "react"
import { DataContext } from "../../context/DataContextProvider"
import "./Home.css"



export default function Home() {
  const {nameKey, stravaDataKey} = useContext(DataContext)
  const [name, setName] = nameKey
  const [stravaData, setStravaData] = stravaDataKey
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setName(e.target.value)
  }
  return (
    <div>
      <span>Home of: </span>
      <input className="input--name" placeholder={name} onChange={handleChange}></input>
      <div>How's the weather in {stravaData.length > 0 ? stravaData[0]?.location_country : "*country of origin*"}?</div>
    </div>
  )
}
