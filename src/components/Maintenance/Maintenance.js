import React from "react";
import { containerStyle, headerStyle } from "./Maintenance.style";
import Rocket from "../Rocket/Rocket";

const Maintenance = () => {
  return (
    <div className="container" css={containerStyle}>
      <div>
        <h2 className="header" css={headerStyle}>
          Come back soon!
        </h2>
      </div>
      <div className="rocket">
        <Rocket />
      </div>
    </div>
  );
};

export default Maintenance;
