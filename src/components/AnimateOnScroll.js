"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimateOnScroll({ 
  children, 
  animation = "fadeInUp", 
  delay = 0,
  className = "" 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const animationClasses = {
    fadeIn: "animate-fade-in",
    fadeInUp: "animate-fade-in-up",
    fadeInDown: "animate-fade-in-down",
    fadeInLeft: "animate-fade-in-left",
    fadeInRight: "animate-fade-in-right",
    scaleIn: "animate-scale-in",
    slideInUp: "animate-slide-in-up",
  };

  return (
    <div
      ref={ref}
      className={`${isVisible ? animationClasses[animation] || animationClasses.fadeInUp : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

