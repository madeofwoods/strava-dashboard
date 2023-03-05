import "./About.css";
import {
  handleLogin,
  clientId,
  scope,
  redirectUrl,
} from "../../utils/LoginFunctions";
import { dashOne, dashTwo, dashThree, dashFour, aboutStrava, dashTable, dashMap, dashGraph } from "../../assets/about";


const About = () => {
  return (
    <div className="About">
      <div className="about--opening">
        <h1 className="about--title">Your Personal Training Partner</h1>
        <div className="title--description">
          The Strava Dashboard is a web application to help visualize all of
          your running data in one place. Get access to information they store
          but don't share with you on their application. For example, your
          fastest times over 1km and 5km for each run.
        </div>

        <h1 className="about--sub--title">How it works</h1>
      </div>
      <div className="timeline">
        <div className="timeline--element">
          <div className="timeline--first--line--container">
            <div className="timeline--first--line"></div>
          </div>
        </div>
        
        <div className="circle">1km</div> 
        <div className="timeline--element">
          <div className="timeline--line--container">
            <div className="timeline--line"></div>
          </div>
          <div className="timeline--block">
            <img className="strava--timeline--image" src={aboutStrava}/>
            <div className="timeline--text">
                <h2 className="timeline--title">Connect with Strava</h2>
                <p className="timeline--description">Access all your running data by logging into Strava. Login to Strava via the homepage, or by clicking{" "}
          <span
            className="about--link"
            onClick={(e) => handleLogin(clientId, scope, redirectUrl)}
          >
            Strava
          </span>
          {" "}on the menu. This is done by making an oAuth2 API request to the Strava API.</p>
            </div>
          </div>
        </div>
        <div className="circle">5km</div>
        <div className="timeline--element">
          <div className="timeline--line--container">
            <div className="timeline--line"></div>
          </div>
          <div className="timeline--block">
            <div className="timeline--image--container">

            <img className="timeline--image" src={dashOne}/>
            <img className="timeline--image" src={dashTwo}/>
            <img className="timeline--image" src={dashThree}/>
            <img className="timeline--image" src={dashFour}/>
            </div>
            <div className="timeline--text">

            <h2 className="timeline--title">Keep on track</h2>
                <p className="timeline--description">Get up-to-date information on your training so far this year. Here you can view:</p>
                <ul className="timeline--list">
                    <li>Your total number of runs this year.</li>
                    <li>Your total distance for the current year.</li>
                    <li>Your total distance for the current month.</li>
                    <li>Your last recorded run.</li>
                </ul>
            </div>
          </div>
        </div>
        <div className="circle">10km</div>
        <div className="timeline--element">
          <div className="timeline--line--container">
            <div className="timeline--line"></div>
          </div>
          <div className="timeline--block">
            <img className="timeline--image timeline--image--table" src={dashTable}/>
            <div className="timeline--text">
            <h2 className="timeline--title">Stay on top</h2>
                <p className="timeline--description">The table gives a more detailed breakdown of each run can be found in the table. Here you can see your fastest times over specific distances for each run.</p>
            </div>
          </div>
        </div>
        <div className="circle">20km</div>
        <div className="timeline--element">
          <div className="timeline--line--container">
            <div className="timeline--line"></div>
          </div>
          <div className="timeline--block">
            <img className="timeline--image timeline--image--table" src={dashMap}/>
            <div className="timeline--text">
            <h2 className="timeline--title">See where you've been</h2>
                <p className="timeline--description">The map gives a view of all of your runs, centered on your most recent run.</p>
            </div>
          </div>
        </div>
        <div className="circle">42km</div>
        <div className="timeline--element">
          <div className="timeline--line--container">
            <div className="timeline--line"></div>
          </div>
          <div className="timeline--block">
            <img className="timeline--image timeline--image--table" src={dashGraph}/>
            <div className="timeline--text">
            <h2 className="timeline--title">Get that PB</h2>
                <p className="timeline--description">This graph let's you see your progression over time. Strava records your fastest time over certain distances, every time you run. Good luck chasing that PB!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
