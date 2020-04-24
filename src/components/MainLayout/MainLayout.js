import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const MainLayout = ({ children }) => (
  <div className="main-layout">
    <Nav />
    {children}
    <Footer />
  </div>
);

export default MainLayout;
