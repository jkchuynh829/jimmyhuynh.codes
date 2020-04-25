import React from "react";
import { Link } from "@reach/router";
import { navStyle, headingStyle, listStyle } from "./Nav.style";

const Nav = () => (
  <nav css={navStyle}>
    <header css={headingStyle}>
      <Link to="/">Jimmy Huynh</Link>
    </header>
    <ul css={listStyle}>
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
