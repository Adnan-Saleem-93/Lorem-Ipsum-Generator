import React, {useState, useEffect} from "react";
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";
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

  const handleClick = () => {
    setScrollPosition(0);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {scrollPosition > 500 ? (
        <OverlayTrigger
          placement="left"
          delay={{show: 250, hide: 100}}
          overlay={<Tooltip id={`tooltip-btn-scrollTop`}>Scroll back to the top.</Tooltip>}
        >
          <Button id="scroll-btn" onClick={handleClick}>
            <FontAwesomeIcon icon={faAngleDoubleUp} size="2x" />
          </Button>
        </OverlayTrigger>
      ) : (
        ""
      )}
    </>
  );
};

export default ScrollButton;
