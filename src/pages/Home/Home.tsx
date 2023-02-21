
import React, { useContext } from "react"
import { DataContext } from "../../context/DataContextProvider"
import "./Home.css"



export default function Home() {
  const [data, setData] = useContext(DataContext)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setData(e.target.value)
  }
  return (
    <div>
      <span>Home of: </span>
      <input className="input--name" placeholder={data} onChange={handleChange}></input>
    </div>
  )
}
