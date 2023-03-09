import { AnimationControls } from "framer-motion";
import { useEffect } from "react";

export const useShowAndHideAnimation = (
  blockOneInView: boolean,
  // add correct type, AnimationControls was suggested
  animation: AnimationControls,
  // add correct type, AnimationControls was suggested
  textAnimation: AnimationControls
) => {
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
};
