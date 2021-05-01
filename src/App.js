import Detail from "./pages/detail";
import { Router } from "@reach/router";
import { Element } from "react-scroll";

import "./App.css";
import Card from "./components/card";
import Banner from "./components/banner";
import Footer from "./components/footer";

const data = [
  "https://res.cloudinary.com/dkfptto8m/image/upload/v1619793474/marie.png",
  "https://res.cloudinary.com/dkfptto8m/image/upload/v1619869813/highbee-removebg-preview.png",
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
          descripton="The first woman to win a Nobel Prize, in Physics."
        />
      ))}
    </div>
    <br />
    <Footer />
  </div>
);

const DetailComponent = () => (
  <Element name="heroes" className="heroes">
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
