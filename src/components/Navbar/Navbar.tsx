import "./Navbar.css";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { useContext } from "react";
import { DataContext } from "../../context/DataContextProvider";

export default function Navbar() {
  const { toggle, mediaKey, menuKey, activeKey } = useContext(DataContext);
  const [kmToggle, setKmToggle] = toggle;
  const [mQuery] = mediaKey;
  const [menuOpen, setMenuOpen] = menuKey;
  const [active] = activeKey

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
      <div className="navbar--title">{active}</div>
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
