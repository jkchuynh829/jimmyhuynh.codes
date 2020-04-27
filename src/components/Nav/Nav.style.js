import { css } from "@emotion/core";
import { primary1, white, secondary2, primary2 } from "../../style/colors";

export const navStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${primary1};
  color: ${white};
  padding: 45px 50px 30px;

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
  flex: 1;
  text-align: center;
  padding: 0;

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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    cursor: pointer;
    transition: background 300ms ease-out, color 300ms ease-out;

    :hover {
      color: ${primary2};
      background: ${secondary2};
      transition: background 300ms ease-in;
    }
  }
`;
