import { AnimationControls } from "framer-motion";
import { useEffect } from "react";

export const useShowAndHideAnimation = (
  blockInView: boolean,
  animation: AnimationControls,
  textAnimation: AnimationControls
) => {
  useEffect(() => {
    if (blockInView) {
      animation.start("visible");
      textAnimation.start("visible");
    }
    if (!blockInView) {
      animation.start("hidden");
      textAnimation.start("hidden");
    }
  }, [blockInView]);
};
