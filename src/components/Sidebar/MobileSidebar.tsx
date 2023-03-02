import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import CloudUploadTwoToneIcon from "@mui/icons-material/CloudUploadTwoTone";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContextProvider";
import "./MobileSidebar.css";

const clientId: string = import.meta.env.VITE_CLIENT_ID;
const scope: string = "activity:read_all";
const redirectUrl = import.meta.env.VITE_REDIRECT_URL;

const handleLogin = (): void => {
  (
    window as Window
  ).location = `http://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=${scope}`;
};

const MobileSidebar = () => {
  const { nameKey, stravaDataKey, menuKey } = useContext(DataContext);
  const [name, setName] = nameKey;
  const [data] = stravaDataKey;
  const [menuOpen, setMenuOpen] = menuKey;

  return (
    <div className={menuOpen ? "mobile--sidebar" : "mobile--sidebar--closed"}>
      <div className="mobile--middle--and--bottom">
        <div className="mobile--sidebar--middle">
          {data.length > 0 && (
            <Link to={"/site/dash"} className="router--link">
              <div className="middle--text">
                <DashboardTwoToneIcon className="mobile--icon" />
              </div>
            </Link>
          )}
          <div onClick={handleLogin} className="middle--text">
            <CloudUploadTwoToneIcon className="mobile--icon" />
          </div>

          <Link to={"/site/demo"} className="router--link">
            <div className="middle--text">
              <DashboardTwoToneIcon className="mobile--icon" />
            </div>
          </Link>
        </div>
        <div className="mobile--sidebar--bottom">
          <Link to={"/site/tables"} className="router--link">
            <div className="mobile--sidebar--link">
              <TableChartOutlinedIcon className="mobile--icon" />
            </div>
          </Link>
          <Link to={"/site/maps"} className="router--link">
            <div className="mobile--sidebar--link">
              <MapOutlinedIcon className="mobile--icon" />
            </div>
          </Link>
          <Link to={"/site/graphs"} className="router--link">
            <div className="mobile--sidebar--link">
              <TimelineOutlinedIcon className="mobile--icon" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
