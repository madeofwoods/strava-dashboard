import "./Navbar.css";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { useContext } from "react";
import { DataContext } from "../../context/DataContextProvider";

export default function Navbar() {
  const { toggle, unitsKey, mediaKey, menuKey } = useContext(DataContext);
  const [kmToggle, setKmToggle] = toggle;
  const units = unitsKey;
  const [mQuery, setMQuery] = mediaKey;
  const [menuOpen, setMenuOpen] = menuKey;

  const handleClick = () => {
    setKmToggle(!kmToggle);
  };

  const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <div className="navbar">
      {mQuery.matches ? (
        <div className="hamburger" onClick={handleHamburgerClick}>
          {menuOpen ? <CloseTwoToneIcon/> : <MenuTwoToneIcon />}
        </div>
      ) : null}
      <div className="navbar--title">Strava Dashboard</div>
      <div className="km--miles">
        <span style={{ opacity: kmToggle ? "1" : "0.2" }}>km</span>
        <div className="toggle--image" onClick={handleClick}>
          {kmToggle ? <ToggleOffOutlinedIcon /> : <ToggleOnOutlinedIcon />}
        </div>

        <span style={{ opacity: kmToggle ? "0.2" : "1" }}>miles</span>
      </div>
    </div>
  );
}
