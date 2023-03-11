import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../context/DataContextProvider";
import "./Sidebar.css"
import { handleLogin, clientId, scope, redirectUrl } from "../../utils/LoginFunctions";


export default function Sidebar() {
  const { nameKey, activeKey, dataIsLoadedKey } = useContext(DataContext);
  const [name] = nameKey;
  const [dataIsLoaded] = dataIsLoadedKey
  const [active] = activeKey

 
  return (
    <div className="sidebar">
      <hr className="sidebar--hr" />
      <div className="sidebar--top">
        <Link to={dataIsLoaded ? "/site/dash" : "/site/demo"} className="router--link">
          <h2 className="sidebar--title">Dash</h2>
        </Link>
        <div className="sidebar--name">{name}</div>
      </div>
        <hr className="sidebar--hr" />
      <div className="middle--and--bottom">
        <div className="sidebar--middle">
          <Link to={"/site/about"} className="router--link" >
            <div className={`middle--text ${active == "About" ? "highlighted" : "not--highlighted"}`} >About</div>
          </Link>
            <Link to={"/site/dash"} className="router--link" >
              <div className={`middle--text ${active == "Dashboard" || active == "Demo" ? "highlighted" : "not--highlighted"}`}  >{dataIsLoaded ? "Dashboard" : "Demo"}</div>
            </Link>
          <div onClick={e => handleLogin(clientId, scope, redirectUrl)} className="middle--text" >
            Strava
          </div>
        </div>
        <div className="sidebar--bottom">
          <Link to={"/site/tables"} className="router--link" >
            <div className= {`sidebar--link ${active == "Tables" ? "highlighted" : "not--highlighted"}`} >
              <TableChartOutlinedIcon className="icon" />
              <div className="link" >Tables</div>
            </div>
          </Link>
          <Link to={"/site/maps"} className="router--link" >
            <div className= {`sidebar--link ${active == "Maps" ? "highlighted" : "not--highlighted"}`} >
              <MapOutlinedIcon className="icon" />
              <div className="link" >Maps</div>
            </div>
          </Link>
          <Link to={"/site/graphs"} className="router--link" >
            <div className= {`sidebar--link ${active == "Graphs" ? "highlighted" : "not--highlighted"}`}>
              <TimelineOutlinedIcon className="icon" />
              <div className="link" >Graphs</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
