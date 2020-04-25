import { css } from "@emotion/core";
import { black, white } from "../../style/colors";

export const navStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${black};
  color: ${white};
  padding: 0 50px;
  height: 80px;

  a:link,
  a:visited,
  a:hover {
    color: ${white};
  }

  @media only screen and (min-width: 650px) {
    flex-direction: row;
  }
`;

export const headingStyle = css`
  display: flex;
  align-items: center;
  color: ${white};
  font-size: 32px;
  height: 100%;
  flex: 1;
  text-align: center;

  @media only screen and (min-width: 650px) {
    text-align: left;
  }
`;

export const listStyle = css`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;

  li {
    color: ${white};
    font-size: 20px;
    margin: 0 15px;
  }
`;
