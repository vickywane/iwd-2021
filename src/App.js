import Detail from "./pages/detail";
import { Router } from "@reach/router";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import "./App.css";
import Card from "./components/card";
import Banner from "./components/banner";

const data = [
  "https://res.cloudinary.com/dkfptto8m/image/upload/v1619793474/marie.png",
  "https://res.cloudinary.com/dkfptto8m/image/upload/v1619793474/marie.png",
  "https://res.cloudinary.com/dkfptto8m/image/upload/v1619793474/marie.png",
  "https://res.cloudinary.com/dkfptto8m/image/upload/v1619793474/marie.png",
  "https://res.cloudinary.com/dkfptto8m/image/upload/v1619793474/marie.png",
  "https://res.cloudinary.com/dkfptto8m/image/upload/v1619793474/marie.png",
];

const Home = () => (
  <div className="App">
    <Banner />
    <div className="cards">
      {data.map((e) => (
        <Card
          url={e}
          name="Marie Curie"
          // descripton="Marie Curie was the first woman to win a Nobel Prize, in Physics, and with her later win, in Chemistry, she became the first person to claim Nobel honors twice. Her efforts with her husband Pierre led to the discovery of polonium and radium, and she championed the development of X-rays."
          descripton="The first woman to win a Nobel Prize, in Physics."
        />
      ))}
    </div>
    <br />
  </div>
);

const DetailComponent = () => (
  <Element name="test1" className="element">
    <Detail path="detail" />
  </Element>
);

function App() {
  return (
    <Router>
      <Home path="/" exact />
      <DetailComponent path="/detail" />
    </Router>
  );
}

export default App;
