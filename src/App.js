import React from "react";
import { useState } from "react";
import data from "./data";

function App() {
  const [getCount, setCount] = useState(0);
  const [getText, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    let amount = parseInt(getCount);

    if (getCount <= 0) {
      amount = 1;
    }
    if (getCount > 8) {
      amount = 8;
    }

    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center" onSubmit={handleSubmit}>
      <h3>Tired of boring lorem ipsum?</h3>

      <form className="lorem-form">
        <label htmlFor="amount">Paragraphs</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={getCount}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">Generate</button>
      </form>

      <article className="lorem-text">
        {getText.map((el, index) => {
          return <p key={index}>{el}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
