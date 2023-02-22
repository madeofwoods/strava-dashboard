import "./Navbar.css"
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';
import { useContext } from "react";
import { DataContext } from "../../context/DataContextProvider";

export default function Navbar() {
    const {toggle, unitsKey} = useContext(DataContext)
    const [kmToggle, setKmToggle] = toggle
    const units = unitsKey

    const handleClick = () => {
        setKmToggle(!kmToggle)
    }
  return (
    <div className="navbar">
        <div className="navbar--title">Strava Dashboard</div>
        <div className="km--miles">
            <span style={{opacity: kmToggle ? "1" : "0.2"}}>km</span>
            <div className="toggle--image" onClick={handleClick} >
                {kmToggle ? <ToggleOffOutlinedIcon /> : <ToggleOnOutlinedIcon/>}
            </div>
            
            <span style={{opacity: kmToggle ? "0.2" : "1"}}>miles</span>
        </div>
    </div>
  )
}
 