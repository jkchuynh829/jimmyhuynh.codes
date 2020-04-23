import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const MainLayout = ({ children }) => (
  <div className="main-layout">
    <Nav />
    {children}
    <Footer />
  </div>
);

export default MainLayout;
