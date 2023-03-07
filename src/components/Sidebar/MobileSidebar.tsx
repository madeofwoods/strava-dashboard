import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined"
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
  const { menuKey, activeKey } = useContext(DataContext);
  const [menuOpen] = menuKey;
  const [active] = activeKey

  return (
    <div className={menuOpen ? "mobile--sidebar" : "mobile--sidebar--closed"}>
      <div className="mobile--middle--and--bottom">
        <div className="mobile--sidebar--middle">
            <Link to={"/site/dash"} className="router--link">
              <div className={`mobile--middle--text ${active == "Dashboard" || active == "Dash" ? "sm--highligted" : ""}  ` }>
                <DashboardTwoToneIcon className="mobile--icon" />
              </div>
            </Link>
          <div onClick={handleLogin} className="mobile--middle--text">
            <CloudUploadTwoToneIcon className="mobile--icon" />
          </div>
        </div>
        <div className="mobile--sidebar--bottom">
          <Link to={"/site/tables"} className="router--link">
            <div className={`mobile--sidebar--link ${active == "Tables" ? "sm--highligted" : ""} ` }>
              <TableChartOutlinedIcon className="mobile--icon" />
            </div>
          </Link>
          <Link to={"/site/maps"} className="router--link">
            <div className={`mobile--sidebar--link ${active == "Maps" ? "sm--highligted" : ""} ` }>
              <MapOutlinedIcon className="mobile--icon" />
            </div>
          </Link>
          <Link to={"/site/graphs"} className="router--link">
            <div className={`mobile--sidebar--link ${active == "Graphs" ? "sm--highligted" : ""} ` }>
              <TimelineOutlinedIcon className="mobile--icon" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
