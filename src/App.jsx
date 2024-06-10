import { useState } from "react";
import "./App.css";
import Board from "./Board";

function App() {
  const [error, setError] = useState("");
  const [winner, setWinner] = useState("");

  // TODO: make animation stop after 1 iteration for each new move made
  // TODO: players can choose their own colour
  // TODO: confetti, balloons and applause for winner!

  return (
    <div>
      <h1 id="title">4 In A Row</h1>
      <div id="content">
        <Board winner={winner} setWinner={setWinner} setError={setError} />
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
            <h2>
              The winner is:{" "}
              <span className={winner}>{winner.toUpperCase()}</span>
            </h2>
          )}
          {error && <p id="error">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
