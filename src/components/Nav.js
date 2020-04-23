import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";
import { black, white } from "../style/colors";

const navStyle = css`
  display: grid;
  grid-template-columns: 1fr 300px;
  background-color: ${black};
  color: ${white};
  padding: 0 50px;
  height: 80px;

  a:link,
  a:visited,
  a:hover {
    color: ${white};
  }
`;

const headingStyle = css`
  display: flex;
  align-items: center;
  color: ${white};
  font-size: 32px;
  height: 100%;
`;

const buttonsContainer = css`
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

const Nav = () => (
  <nav css={navStyle}>
    <Link to="/">
      <heading css={headingStyle}>Jimmy Huynh</heading>
    </Link>
    <ul css={buttonsContainer}>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/resume">Resume</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
