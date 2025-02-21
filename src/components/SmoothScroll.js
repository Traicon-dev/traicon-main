"use client"; // Only if using Next.js App Router

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const locoScroll = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    locoScroll.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1, // Controls smoothness
      multiplier: 1.2, // Adjusts scroll speed
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    return () => {
      locoScroll.current.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default SmoothScroll;
