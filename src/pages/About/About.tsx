import "./About.css";
import {
  handleLogin,
  clientId,
  scope,
  redirectUrl,
} from "../../utils/LoginFunctions";
import {
  aboutStrava,
  dashGraph,
  dashMap,
  dashTable,
  keepOnTrack,
} from "../../assets/about";
import { AnimationControls, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useShowAndHideAnimation } from "../../utils/customHooks";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContextProvider";
import AboutBlock from "../../components/About/AboutBlock";
import AboutHeader from "../../components/About/AboutHeader";
import FirstLine from "../../components/About/FirstLine";

const About = () => {
  const { activeKey } = useContext(DataContext);
  const [, setActive] = activeKey;

  // react intersection observer refs

  const { ref: blockOne, inView: blockOneInView } = useInView({
    threshold: 0.2,
  });
  const { ref: blockTwo, inView: blockTwoInView } = useInView({
    threshold: 0.2,
  });

  const { ref: blockThree, inView: blockThreeInView } = useInView({
    threshold: 0.3,
  });
  const { ref: blockFour, inView: blockFourInView } = useInView({
    threshold: 0.3,
  });
  const { ref: blockFive, inView: blockFiveInView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    setActive("About");
  }, []);

  // useAnimation hook from framer-motion with custom hook for triggering animation

  const animation = useAnimation();
  const textAnimation = useAnimation();
  const animationTwo: AnimationControls = useAnimation();
  const textAnimationTwo = useAnimation();
  const animationThree = useAnimation();
  const textAnimationThree = useAnimation();
  const animationFour = useAnimation();
  const textAnimationFour = useAnimation();
  const animationFive = useAnimation();
  const textAnimationFive = useAnimation();

  useShowAndHideAnimation(blockOneInView, animation, textAnimation);
  useShowAndHideAnimation(blockTwoInView, animationTwo, textAnimationTwo);
  useShowAndHideAnimation(blockThreeInView, animationThree, textAnimationThree);
  useShowAndHideAnimation(blockFourInView, animationFour, textAnimationFour);
  useShowAndHideAnimation(blockFiveInView, animationFive, textAnimationFive);

  const timeLineElements = [
    {
      id: 1,
      className: "strava--timeline--image",
      distance: "1km",
      block: blockOne,
      animation: animation,
      textAnimation: textAnimation,
      img: aboutStrava,
      title: "Connect with Strava",
      content: (
        <>
          Access all your running data by logging into Strava. Login to Strava
          via the homepage, or by clicking{" "}
          <span
            className="about--link"
            onClick={() => handleLogin(clientId, scope, redirectUrl)}
          >
            Strava
          </span>{" "}
          on the menu. This is done by making an oAuth2 API request to the
          Strava API.
        </>
      ),
    },

    {
      id: 2,
      distance: "5km",
      block: blockTwo,
      animation: animationTwo,
      fourImage: true,
      textAnimation: textAnimationTwo,
      img: keepOnTrack,
      title: "Keep on track",
      content: (<>Get up-to-date information on your training so far this year. Here you can view:
      <ul className="timeline--list">
        <li>Your total number of runs this year.</li>
        <li>Your total distance for the current year.</li>
        <li>Your total distance for the current month.</li>
        <li>Your last recorded run.</li>
        </ul></>),
    },
    {
      id: 3,
      distance: "10km",
      block: blockThree,
      animation: animationThree,
      textAnimation: textAnimationThree,
      img: dashTable,
      title: "Stay on top",
      content:
        " A more detailed breakdown of each run can be found in the table. Here you can see your fastest times over specific distances for each run.",
    },
    {
      id: 4,
      distance: "20km",
      block: blockFour,
      animation: animationFour,
      textAnimation: textAnimationFour,
      img: dashMap,
      title: "See where you've been",
      content:
        "The map gives a view of all of your runs, centered on your most recent run.",
    },
    {
      id: 5,
      distance: "42km",
      block: blockFive,
      animation: animationFive,
      textAnimation: textAnimationFive,
      img: dashGraph,
      title: "Get that PB",
      content:
        "This graph let's you see your progression over time. Strava records your fastest time over certain distances, every time you run. Good luck chasing that PB!",
    },
  ];

  return (
    <div className="About">
      <AboutHeader/>
      <div className="timeline">
        <FirstLine/>

        {timeLineElements.map((item) => (
          <AboutBlock
            key={item.id}
            className={item.className}
            distance={item.distance}
            block={item.block}
            animation={item.animation}
            fourImage={item.fourImage}
            textAnimation={item.textAnimation}
            img={item.img}
            title={item.title}
            content ={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
