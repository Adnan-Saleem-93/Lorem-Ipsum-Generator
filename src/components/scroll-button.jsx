import React, {useState, useEffect} from "react";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleUp} from "@fortawesome/free-solid-svg-icons";

const ScrollButton = () => {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  return (
    <>
      {scrollPosition !== 0 ? (
        <Button id="scroll-btn">
          <FontAwesomeIcon icon={faAngleDoubleUp} size="2x" />
        </Button>
      ) : (
        ""
      )}
    </>
  );
};

export default ScrollButton;
