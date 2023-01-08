import React from "react";
import "./App.css";
import { SpeedTest } from "./components/SpeedTest/SpeedTest";

function App() {
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString();

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="title">Aviel - Doorloop home exam react</h2>
      </header>

      <main>
        <SpeedTest />
      </main>

      <footer>
        <p>Aviel Poliak -{dateString}</p>
      </footer>
    </div>
  );
}

export default App;
