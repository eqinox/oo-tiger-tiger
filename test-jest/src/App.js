import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const checkboxHandler = () => {
    setDisabled(!disabled);
  };

  return (
    <div className="App">
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" onClick={checkboxHandler} />
    </div>
  );
}

export default App;
