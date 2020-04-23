import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import MainLayout from "./components/MainLayout";
import Maintenance from "./components/Maintenance";

const App = () => (
  <MainLayout>
    <Router>
      <Maintenance path="/" />
    </Router>
  </MainLayout>
);

render(<App />, document.getElementById("root"));
