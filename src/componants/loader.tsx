import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = () => {
  const [count, setCount] = useState(0);
  const leftBarRef = useRef(null);
  const rightBarRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 100) {
          clearInterval(interval);
          return 100; // Ensure it does not exceed 100
        }
        return prevCount + 1;
      });
    }, 20);

    const currentLeftBar = leftBarRef.current;
    const currentRightBar = rightBarRef.current;

    gsap.fromTo(
      currentLeftBar,
      { xPercent: -100, opacity: 0 },
      { xPercent: 0, opacity: 1, duration: 2, ease: "none" }
    );
    gsap.fromTo(
      currentRightBar,
      { xPercent: 100, opacity: 0 },
      { xPercent: 0, opacity: 1, duration: 2, ease: "none" }
    );

    return () => {
      clearInterval(interval);
      if (currentLeftBar) {
        gsap.killTweensOf(currentLeftBar);
      }
      if (currentRightBar) {
        gsap.killTweensOf(currentRightBar);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <div className="flex absolute justify-center w-full">
        <div ref={leftBarRef} className="bg-black h-10 w-1/2"></div>
        <div ref={rightBarRef} className="bg-black h-10 w-1/2"></div>
      </div>
      <div className="text-white text-4xl font-bold uppercase">({count}%)</div>
    </div>
  );
};

export default Loader;
