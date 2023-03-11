import { useNavigate } from "react-router-dom";
import "./Home.css";
import heroImg from "../../assets/hero.png"
import { handleLogin, clientId, scope, redirectUrl } from "../../utils/LoginFunctions";

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="Home">
      <div className="home--title">Strava Dashboard</div>
      <div className="home--text">All your running data in one place.</div>
      <div className="image--container">
        <img className="hero--img" src={heroImg} alt="" />
        </div>
        <div className="buttons">
      <div className="connect--to--demo">
        <button className="demo--button" onClick={() => navigate("/site/demo")}>View Demo</button>
        <div className="blur"></div>
        </div>
      <div className="connect--to--demo">
        <button className="strava--button" onClick={e => handleLogin(clientId, scope, redirectUrl)} >Connect to  Strava</button>
        <div className="blur strava--blur"></div>
        </div>
      </div>
    </div>
  );
}
