import "./App.css";
import Card from "./card";
import data from "./data";

import { FaGlobeAsia } from "react-icons/fa";

function App() {
  const cards = data.map((item) => <Card {...item} />);

  return (
    <div className="App">
      <header className="head">
        <FaGlobeAsia /> &nbsp; My Travel Journal
      </header>
      <section className="container">{cards}</section>
    </div>
  );
}

export default App;
