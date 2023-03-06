import "./About.css";
import {
  handleLogin,
  clientId,
  scope,
  redirectUrl,
} from "../../utils/LoginFunctions";
import {
  dashOne,
  dashTwo,
  dashThree,
  dashFour,
  aboutStrava,
  dashTable,
  dashMap,
  dashGraph,
} from "../../assets/about";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
  framerImageVariants,
  framerTextVariants,
  secondBlockChildren,
  secondBlockVariants,
} from "./utils/FramerVaraints";
import { handleHover, handleHoverEnd } from "./utils/Functions";

const About = () => {
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

  const animation = useAnimation();
  const textAnimation = useAnimation();
  const animationTwo = useAnimation();
  const textAnimationTwo = useAnimation();
  const animationThree = useAnimation();
  const textAnimationThree = useAnimation();
  const animationFour = useAnimation();
  const textAnimationFour = useAnimation();
  const animationFive = useAnimation();
  const textAnimationFive = useAnimation();

  useEffect(() => {
    if (blockOneInView) {
      animation.start("visible");
      textAnimation.start("visible");
    }
    if (!blockOneInView) {
      animation.start("hidden");
      textAnimation.start("hidden");
    }
  }, [blockOneInView]);

  useEffect(() => {
    if (blockTwoInView) {
      animationTwo.start("visible");
      textAnimationTwo.start("visible");
    }
    if (!blockTwoInView) {
      animationTwo.start("hidden");
      textAnimationTwo.start("hidden");
    }
  }, [blockTwoInView]);

  useEffect(() => {
    if (blockThreeInView) {
      animationThree.start("visible");
      textAnimationThree.start("visible");
    }
    if (!blockThreeInView) {
      animationThree.start("hidden");
      textAnimationThree.start("hidden");
    }
  }, [blockThreeInView]);

  useEffect(() => {
    if (blockFourInView) {
      animationFour.start("visible");
      textAnimationFour.start("visible");
    }
    if (!blockFourInView) {
      animationFour.start("hidden");
      textAnimationFour.start("hidden");
    }
  }, [blockFourInView]);

  useEffect(() => {
    if (blockFiveInView) {
      animationFive.start("visible");
      textAnimationFive.start("visible");
    }
    if (!blockFiveInView) {
      animationFive.start("hidden");
      textAnimationFive.start("hidden");
    }
  }, [blockFiveInView]);

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
          <div ref={blockOne} className="timeline--block">
            <motion.img
              className="strava--timeline--image"
              variants={framerImageVariants}
              initial="visible"
              animate={animation}
              src={aboutStrava}
            />
            <motion.div
              animate={textAnimation}
              variants={framerTextVariants}
              initial="visible"
              className="timeline--text"
            >
              <h2 className="timeline--title">Connect with Strava</h2>
              <p className="timeline--description">
                Access all your running data by logging into Strava. Login to
                Strava via the homepage, or by clicking{" "}
                <span
                  className="about--link"
                  onClick={(e) => handleLogin(clientId, scope, redirectUrl)}
                >
                  Strava
                </span>{" "}
                on the menu. This is done by making an oAuth2 API request to the
                Strava API.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="circle">5km</div>
        <div className="timeline--element">
          <div className="timeline--line--container">
            <div className="timeline--line"></div>
          </div>
          <div className="timeline--block" ref={blockTwo}>
            <motion.div
              className="timeline--image--container"
              variants={secondBlockVariants}
              initial="hidden"
              animate={animationTwo}
            >
              <motion.img
                variants={secondBlockChildren}
                onHoverStart={(e) => handleHover("image--one")}
                onHoverEnd={(e) => handleHoverEnd("image--one")}
                className="timeline--image image--focus"
                src={dashOne}
              />
              <motion.img
                variants={secondBlockChildren}
                onHoverStart={(e) => handleHover("image--two")}
                onHoverEnd={(e) => handleHoverEnd("image--two")}
                className="timeline--image image--focus"
                src={dashTwo}
              />
              <motion.img
                variants={secondBlockChildren}
                onHoverStart={(e) => handleHover("image--three")}
                onHoverEnd={(e) => handleHoverEnd("image--three")}
                className="timeline--image image--focus"
                src={dashThree}
              />
              <motion.img
                variants={secondBlockChildren}
                onHoverStart={(e) => handleHover("image--four")}
                onHoverEnd={(e) => handleHoverEnd("image--four")}
                className="timeline--image image--focus"
                src={dashFour}
              />
            </motion.div>
            <motion.div
              className="timeline--text"
              animate={textAnimationTwo}
              variants={framerTextVariants}
            >
              <h2 className="timeline--title">Keep on track</h2>
              <p className="timeline--description">
                Get up-to-date information on your training so far this year.
                Here you can view:
              </p>
              <ul className="timeline--list">
                <li id="image--one">Your total number of runs this year.</li>
                <li id="image--two">
                  Your total distance for the current year.
                </li>
                <li id="image--three">
                  Your total distance for the current month.
                </li>
                <li id="image--four">Your last recorded run.</li>
              </ul>
            </motion.div>
          </div>
        </div>
        <div className="circle">10km</div>
        <div className="timeline--element">
          <div className="timeline--line--container">
            <div className="timeline--line"></div>
          </div>
          <div className="timeline--block" ref={blockThree}>
            <motion.img
              className="timeline--image timeline--image--table"
              variants={framerImageVariants}
              initial="visible"
              animate={animationThree}
              src={dashTable}
            />
            <motion.div
              className="timeline--text"
              animate={textAnimationThree}
              variants={framerTextVariants}
              initial="visible"
            >
              <h2 className="timeline--title">Stay on top</h2>
              <p className="timeline--description">
                The table gives a more detailed breakdown of each run can be
                found in the table. Here you can see your fastest times over
                specific distances for each run.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="circle">20km</div>
        <div className="timeline--element">
          <div className="timeline--line--container">
            <div className="timeline--line"></div>
          </div>
          <div ref={blockFour} className="timeline--block">
            <motion.img
              className="timeline--image timeline--image--table"
              variants={framerImageVariants}
              initial="visible"
              animate={animationFour}
              src={dashMap}
            />
            <motion.div
              className="timeline--text"
              animate={textAnimationFour}
              variants={framerTextVariants}
              initial="visible"
            >
              <h2 className="timeline--title">See where you've been</h2>
              <p className="timeline--description">
                The map gives a view of all of your runs, centered on your most
                recent run.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="circle">42km</div>
        <div className="timeline--element">
          <div className="timeline--line--container">
            <div className="timeline--line"></div>
          </div>
          <div ref={blockFive} className="timeline--block">
            <motion.img
              className="timeline--image timeline--image--table"
              variants={framerImageVariants}
              initial="visible"
              animate={animationFive}
              src={dashGraph}
            />
            <motion.div
              className="timeline--text"
              animate={textAnimationFive}
              variants={framerTextVariants}
              initial="visible"
            >
              <h2 className="timeline--title">Get that PB</h2>
              <p className="timeline--description">
                This graph let's you see your progression over time. Strava
                records your fastest time over certain distances, every time you
                run. Good luck chasing that PB!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
