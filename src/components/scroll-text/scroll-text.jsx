// ScrollText.js
import React, { useState, useEffect } from "react";
import "./scroll-text.css";

const ScrollText = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    // Check the scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop === 0);
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-text ${isVisible ? "visible" : "hidden"}`}>
      Please scroll down
    </div>
  );
};

export default ScrollText;
