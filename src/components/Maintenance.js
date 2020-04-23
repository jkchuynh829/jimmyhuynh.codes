import React, { useEffect } from "react";
import { gsap } from "gsap";
import { css } from "@emotion/core";

const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  visibility: hidden;
`;

const headerStyle = css`
  font-size: 60px;
  span {
    display: inline-block;
  }
  .word {
    margin: 0 12px;
  }
`;

const popStyle = css`
  font-size: 60px;
  position: absolute;
`;

const renderSpans = (word) =>
  word
    .split("")
    .map((letter, i) => <span key={`${letter}-${i}`}>{letter}</span>)
    .concat("  ");

const Maintenance = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".container", { autoAlpha: 0 });
    tl.from("span", {
      duration: 1,
      y: -300,
      opacity: 0,
      ease: "bounce.out",
      stagger: 0.1,
    });
    tl.to(
      ".word",
      {
        duration: 1.5,
        transform: "scale(2)",
        opacity: 0,
        ease: "power3.out",
      },
      "+=0.5"
    );
    tl.from(
      ".pop",
      {
        duration: 0.75,
        opacity: 0,
        ease: "circ.in",
      },
      "-=1.5"
    );
  });

  return (
    <div className="container" css={containerStyle}>
      <h2 className="header" css={headerStyle}>
        <span className="word">{renderSpans("Currently")}</span>
        <span className="word">{renderSpans("tinkering...")}</span>
      </h2>
      <h2 className="pop" css={popStyle}>
        Come back soon!
      </h2>
    </div>
  );
};

export default Maintenance;
