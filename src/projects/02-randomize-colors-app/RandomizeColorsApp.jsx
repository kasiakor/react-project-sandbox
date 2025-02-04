import React from "react";
import Title from "../components/Title";

// generate random bg color when clicking on a button
// change the bg color of the button

const RandomizeColorsApp = () => {
  const generateColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  let body = document.querySelector("body");

  const handleButtonClick = (e) => {
    body.style.backgroundColor = generateColor();
    console.log("target", e.target);
    e.target.style.backgroundColor = generateColor();
  };

  return (
    <div className="container m-auto text-center">
      <Title title={"Randomize colors"} />
      <button className="btn btn-danger" onClick={handleButtonClick}>
        Click me
      </button>
      <button className="btn btn-success" onClick={handleButtonClick}>
        Click me
      </button>
      <button className="btn btn-primary" onClick={handleButtonClick}>
        Click me
      </button>
      <button className="btn btn-warning" onClick={handleButtonClick}>
        Click me
      </button>
    </div>
  );
};

export default RandomizeColorsApp;
