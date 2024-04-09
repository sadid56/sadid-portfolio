const useMotionAnimate = () => {
  const zoomAnimate = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };
  const upAnimate = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const LeftAnimate = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 , ease: "easeOut"} },
  };  
  
  const downAnimate = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };
  
  return [zoomAnimate, upAnimate, downAnimate, LeftAnimate];
};

export default useMotionAnimate;
