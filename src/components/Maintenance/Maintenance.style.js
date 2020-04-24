import { css } from "@emotion/core";
import { white, black } from "../../style/colors";

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85vh;
  background-color: ${black};
  color: ${white};

  .rocket {
    height: 100px;
    width: 100px;
  }
`;

export const headerStyle = css`
  font-size: 60px;
  margin-bottom: 30px;
  text-align: center;
`;
