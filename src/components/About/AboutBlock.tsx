import { AnimationControls, motion } from "framer-motion";
import {
  framerImageVariants,
  framerTextVariants,
} from "../../pages/About/utils/FramerVaraints";

interface AboutBlockProps {
  distance: string;
  block: (node?: Element | null | undefined) => void;
  animation: AnimationControls;
  img: string;
  textAnimation: AnimationControls;
  children: React.ReactNode;
  className?: string;
}

const AboutBlock = ({
  distance,
  block,
  animation,
  img,
  textAnimation,
  children,
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
          <motion.img
            className={className}
            variants={framerImageVariants}
            initial="visible"
            animate={animation}
            src={img}
          />
          <motion.div
            className="timeline--text"
            animate={textAnimation}
            variants={framerTextVariants}
            initial="visible"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutBlock;
