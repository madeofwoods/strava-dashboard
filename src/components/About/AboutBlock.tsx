import { AnimationControls, motion } from "framer-motion";
import { dashFour, dashOne, dashThree, dashTwo } from "../../assets/about";
import { ImageArrayInterface } from "../../pages/About/utils/AboutTypes";
import {
  framerImageVariants,
  framerTextVariants,
} from "../../pages/About/utils/FramerVaraints";
import { Image } from "../../types/Types";
import FourImages from "./FourImages";

interface AboutBlockProps {
  distance: string;
  block: (node?: Element | null | undefined) => void;
  animation: AnimationControls;
  fourImage?: boolean;
  img: string;
  textAnimation: AnimationControls;
  className?: string;
  title: string;
  content: string | JSX.Element;

}

const imageArray: ImageArrayInterface[] = [
  { enum: Image.ONE, img: dashOne },
  { enum: Image.TWO, img: dashTwo },
  { enum: Image.THREE, img: dashThree },
  { enum: Image.FOUR, img: dashFour },
];

const AboutBlock = ({
  distance,
  block,
  animation,
  fourImage,
  img,
  textAnimation,
  title, 
  content,
  className = "timeline--image timeline--image--table",
}: AboutBlockProps) => {
  return (
    <>
      <div className="circle">{distance}</div>
      <div className="timeline--element">
        <div className="timeline--line--container">
          <div className="timeline--line"></div>
        </div>
        <div ref={block} className="timeline--block">
          {fourImage ? (
            <FourImages animation={animation} />
          ) : (
            <motion.img
              className={className}
              variants={framerImageVariants}
              initial="visible"
              animate={animation}
              src={img}
            />
          )}
          <motion.div
            className="timeline--text"
            animate={textAnimation}
            variants={framerTextVariants}
            initial="visible"
          >
            <h2 className="timeline--title">{title}</h2>
            <p className="timeline--description">{content}</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutBlock;
