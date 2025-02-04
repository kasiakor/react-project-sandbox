import React, { useState } from "react";
import Title from "../components/Title";

const EsignatureApp = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("DoB");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: ".35rem 0",
  };

  document.body.style.backgroundColor = "#eee";

  return (
    <div className="container text-center">
      <Title classes={"title"} title={name} />
      <Title classes={"main-title mb-4"} title={date} />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
        repellendus incidunt eligendi sunt excepturi qui doloremque inventore
        quae, molestias ipsum eveniet. Doloribus odio, minus tempore corrupti
        ipsum alias repellendus aut.
      </p>
      <footer
        className="d-flex"
        style={{
          justifyContent: "space-around",
          position: "relative",
          top: "20vw",
        }}
      >
        <input
          type="date"
          value={date}
          style={inputStyle}
          onChange={handleDateChange}
        />
        <input
          type="text"
          value={name}
          style={inputStyle}
          onChange={handleNameChange}
        />
      </footer>
    </div>
  );
};

export default EsignatureApp;
