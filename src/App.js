import React from "react";
import { Element } from "react-scroll";
import { Router } from "@reach/router";

import Home from "./pages/home";
import Detail from "./pages/detail";
import "./App.css";

const DetailComponent = ({ slug, id }) => (
  <Element name="heroes" className="heroes">
    <Detail slug={slug} id={id} />
  </Element>
);

function App() {
  return (
    <Router>
      <Home path="/" exact />
      <DetailComponent path="/detail/:slug/:id" />
    </Router>
  );
}

export default App;
