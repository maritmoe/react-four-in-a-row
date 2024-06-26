import { useState } from "react";
import "./App.css";
import Board from "./Board";
import Realistic from "react-canvas-confetti/dist/presets/realistic";
import Applause from "./Applause";

function App() {
  const [error, setError] = useState("");
  const [winner, setWinner] = useState("");

  // TODO: players can choose their own colour

  return (
    <div>
      <h1 id="title">4 IN A ROW</h1>
      <div id={window.innerWidth > 999 ? "content" : ""}>
        <div id="board">
          <Board winner={winner} setWinner={setWinner} setError={setError} />
        </div>
        <div id="information">
          <div id="how-to-play-box">
            <h2>How To Play:</h2>
            <ul>
              <li>Click on the column you want to place your colour in.</li>
              <li>
                <span className="green">Green</span> player starts,{" "}
                <span className="purple">Purple</span> player is second.
              </li>
              <li>
                The player that first places four circles in a row, column or on
                the diagonal wins.
              </li>
            </ul>
          </div>
          {winner && (
            <div>
              <h2>
                The winner is:{" "}
                <span className={winner}>{winner.toUpperCase()}</span>
              </h2>
              <Realistic autorun={{ speed: 4, duration: 5 }} />
              <Applause />
            </div>
          )}
          {error && <p id="error">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
