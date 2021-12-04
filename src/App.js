import React from "react";
import "./styles.css";
import { useState } from "react";

const bikeDB = {
  bajaj: [
    { name: "Platina", power: "9 bHP" },
    { name: "Pulsar 150", power: "13 bHP" }
  ],

  hero: [
    {
      name: "Splendour",
      power: "8 bHP"
    },
    {
      name: "Passion",
      power: "8.5 bHP"
    }
  ],
  tvs: [
    {
      name: "Radeon",
      power: "10 bHP"
    },
    {
      name: "Apache 160 4V",
      power: "16 bHP"
    }
  ]
};

export default function App() {
  const [selectedBike, setBike] = useState("hero");
  function bikeClickHandler(bike) {
    setBike(bike);
  }
  return (
    <div className="App">
      <h1>🏍️ Motocycles </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite Bikes. Select on the brand to know more{" "}
      </p>

      <div>
        {Object.keys(bikeDB).map((bike) => (
          <button
            onClick={() => bikeClickHandler(bike)}
            style={{
              cursor: "pointer",
              background: "#E5C7EC",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {bike}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bikeDB[selectedBike].map((bike) => (
            <li
              key={bike.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1C5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "2rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {bike.name} </div>
              <div style={{ fontSize: "smaller" }}> {bike.power} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
