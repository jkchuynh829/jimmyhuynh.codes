import React from "react";
import { css } from "@emotion/core";
import { Link } from "@reach/router";
import { black, white } from "../style/colors";

const footerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${black};
  color: ${white};
  padding: 25px 50px;

  a:link,
  a:visited,
  a:hover {
    color: ${white};
  }
`;

const buttonsContainer = css`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  li {
    color: ${white};
    font-size: 20px;
    margin: 0 15px;
  }
`;

const Footer = () => (
  <footer css={footerStyle}>
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
    <section>Everything made by © Jimmy Huynh 2020</section>
  </footer>
);

export default Footer;
