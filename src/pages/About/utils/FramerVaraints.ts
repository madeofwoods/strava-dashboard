

const framerImageVariants = {
    hidden: { opacity: 0, x: "0%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        delay: 0.5,
      },
    },
  };
  const framerTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 1,
      },
    },
  };

  const secondBlockVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.14 },
    },
  };

  const secondBlockChildren = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        ease: "linear",
      },
    },
    hidden: {
      opacity: 0,
      x: "5px",
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };


  export {framerImageVariants, framerTextVariants, secondBlockVariants, secondBlockChildren, }