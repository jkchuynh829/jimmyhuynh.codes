import { css } from "@emotion/core";
import { white, primary1 } from "../../style/colors";

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 65vh;
  background-color: ${primary1};
  color: ${white};

  @media only screen and (min-width: 650px) {
    height: 80vh;
  }

  .rocket {
    height: 100px;
    width: 100px;
  }
`;

export const headerStyle = css`
  font-size: 32px;
  margin-bottom: 30px;
  text-align: center;

  @media only screen and (min-width: 650px) {
    font-size: 52px;
  }
`;
