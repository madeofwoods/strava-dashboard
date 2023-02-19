import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import CalendarViewMonthOutlinedIcon from "@mui/icons-material/CalendarViewMonthOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import { Link } from "react-router-dom";


  const clientId: string  = import.meta.env.VITE_CLIENT_ID;
  const redirectUrl: string = "http://localhost:5173/upload";
  const scope: string = "activity:read_all"

  const handleLogin = ():void => {
      (window as Window).location = `http://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=${scope}`;
  }


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar--top">
        <Link to={"/dash"} className="router--link">
          <h2 className="sidebar--title">Dash</h2>
        </Link>
        <div className="sidebar--name">Matt Woods</div>
        <hr className="sidebar--hr" />
      </div>
      <div className="sidebar--middle">
        <Link to={"/"} className="router--link">
          <div className="middle--text">Home</div>
        </Link>
        <Link to={"/dash"} className="router--link">
          <div className="middle--text">Dashboard</div>
        </Link>
        <div onClick={handleLogin} className="middle--text">Upload</div>
       
        <Link to={"/demo"} className="router--link">
          <div className="middle--text">Demo</div>
        </Link>
      </div>
      <div className="sidebar--bottom">
        <Link to={"/tables"} className="router--link">
          <div className="sidebar--link">
            <TableChartOutlinedIcon className="icon" />
            <div className="link">Tables</div>
          </div>
        </Link>
        <Link to={"/grid"} className="router--link">
          <div className="sidebar--link">
            <CalendarViewMonthOutlinedIcon className="icon" />
            <div className="link">Grid</div>
          </div>
        </Link>
        <Link to={"/maps"} className="router--link">
          <div className="sidebar--link">
            <MapOutlinedIcon className="icon" />
            <div className="link">Maps</div>
          </div>
        </Link>
        <Link to={"/graphs"} className="router--link">
          <div className="sidebar--link">
            <TimelineOutlinedIcon className="icon" />
            <div className="link">Graphs</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
