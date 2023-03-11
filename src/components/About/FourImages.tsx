import {AnimationControls, motion} from "framer-motion"
import { dashOne,
    dashTwo,
    dashThree,
    dashFour, } from "../../assets/about";
import { ImageArrayInterface } from "../../pages/About/utils/AboutTypes";
import { secondBlockVariants, secondBlockChildren } from "../../pages/About/utils/FramerVaraints"
import { Image } from "../../types/Types";

const imageArray: ImageArrayInterface[] = [
    { enum: Image.ONE, img: dashOne },
    { enum: Image.TWO, img: dashTwo },
    { enum: Image.THREE, img: dashThree },
    { enum: Image.FOUR, img: dashFour },
  ];

interface FourImageProps {
    animation: AnimationControls,
}

const FourImages = ({animation}: FourImageProps) => {
  return (
    <motion.div
    className="timeline--image--container four--image--block"
    variants={secondBlockVariants}
    initial="visible"
    animate={animation}
  >
    {imageArray.map((element) => (
      <motion.img
        key={element.enum}
        variants={secondBlockChildren}
        className="timeline--image image--focus"
        src={element.img}
      />
    ))}
  </motion.div>
  )
}

export default FourImages