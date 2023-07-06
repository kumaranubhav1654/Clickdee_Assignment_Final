import React from "react";
import "./App.css";
import Card from "./components/Cards";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>Why The Industry Chooses Clickdee?</h1>
        <p>
          We understand performance marketing from every angle and every stage
          of the funnel. Our clients trust that we know what metrics move their
          business towards growth. Our publisher and affiliate partners know
          that we make maximum revenue and ROAS a main focus when growing our
          partnerships.
        </p>
      </div>
      <div className="card-container">
        <div className="row">
          <Card
            title="Card 1"
            content="This is the content of Card 1."
            imgLink="img.png"
          />
          <Card
            title="Card 2"
            content="This is the content of Card 2."
            imgLink="img.png"
          />
        </div>
        <div className="row">
          <Card
            title="Card 3"
            content="This is the content of Card 3."
            imgLink="img.png"
          />
          <Card
            title="Card 4"
            content="This is the content of Card 4."
            imgLink="img.png"
          />
          <Card
            title="Card 5"
            content="This is the content of Card 5."
            imgLink="img.png"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
