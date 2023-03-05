import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import CalendarViewMonthOutlinedIcon from "@mui/icons-material/CalendarViewMonthOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContextProvider";
import "./Sidebar.css"
import { handleLogin, clientId, scope, redirectUrl } from "../../utils/LoginFunctions";


export default function Sidebar() {
  const { nameKey, stravaDataKey } = useContext(DataContext);
  const [name, setName] = nameKey;
  const [data] = stravaDataKey;

 
  return (
    <div className="sidebar">
      <hr className="sidebar--hr" />
      <div className="sidebar--top">
        <Link to={data.length > 0 ? "/site/dash" : "/site/demo"} className="router--link">
          <h2 className="sidebar--title">Dash</h2>
        </Link>
        <div className="sidebar--name">{name}</div>
      </div>
        <hr className="sidebar--hr" />
      <div className="middle--and--bottom">
        <div className="sidebar--middle">
          {data.length > 0 && (
            <Link to={"/site/dash"} className="router--link" >
              <div className="middle--text" >Dashboard</div>
            </Link>
          )}
          <div onClick={e => handleLogin(clientId, scope, redirectUrl)} className="middle--text" >
            Upload
          </div>

          <Link to={"/site/demo"} className="router--link" >
            <div className="middle--text" >Demo</div>
          </Link>
        </div>
        <div className="sidebar--bottom">
          <Link to={"/site/tables"} className="router--link" >
            <div className= "sidebar--link" >
              <TableChartOutlinedIcon className="icon" />
              <div className="link" >Tables</div>
            </div>
          </Link>
          <Link to={"/site/maps"} className="router--link" >
            <div className= "sidebar--link" >
              <MapOutlinedIcon className="icon" />
              <div className="link" >Maps</div>
            </div>
          </Link>
          <Link to={"/site/graphs"} className="router--link" >
            <div className= "sidebar--link">
              <TimelineOutlinedIcon className="icon" />
              <div className="link" >Graphs</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
