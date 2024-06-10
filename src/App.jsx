import { useEffect, useState } from "react";

function App() {
  const [isPlayer1, changePlayer] = useState(true);
  const [circles, setCircles] = useState([]);
  const [prevCircles, setPrevCircles] = useState([]);
  const [circle, setCircle] = useState({ x: "", y: "", colour: "" });
  const [error, setError] = useState("");
  const [winner, setWinner] = useState("");

  const checkDirection = (directionValues, direction) => {
    let filterBy;
    let sortBy;
    if (direction === "row") {
      filterBy = "x";
      sortBy = "y";
    } else if (direction === "column") {
      filterBy = "y";
      sortBy = "x";
    }
    for (let i = 0; i < directionValues.length; i++) {
      const circlesInRow = circles
        .filter((c) => c[filterBy] === directionValues[i])
        .sort((a, b) => a[sortBy] - b[sortBy]);
      let colourCount = 0;
      let colour = "green";
      for (let j = 0; j < circlesInRow.length; j++) {
        const circleColour = circlesInRow[j].colour;
        if (circleColour === colour) {
          colourCount++;
          if (Number(colourCount) === Number(4)) {
            console.log("Winner!");
            setWinner(`The winner is: ${colour.toUpperCase()}`);
            break;
          }
        } else {
          colour = circleColour;
          colourCount = 1;
        }
      }
      if (Number(colourCount) === Number(4)) {
        console.log("In", direction, "with value", directionValues[i]);
        break;
      }
    }
  };

  useEffect(() => {
    // TODO: check that 4 in a row does not contain blank field in the middle
    const rows = [40, 90, 140, 190, 240, 290, 340];
    checkDirection(rows, "row");
    const columns = [50, 100, 150, 200, 250, 300];
    checkDirection(columns, "column");
    // TODO: check if anyone has 4 in a row on the diagonals
  }, [circles]);

  const handleTurn = (event) => {
    if (circle.x && circle.y && circle.colour) {
      // Used to fill in the board of all previous moves
      setPrevCircles([
        ...prevCircles,
        {
          ...circle,
        },
      ]);
      setCircle({ x: "", y: "", colour: "" });
    }
    // Find out which column was clicked
    let column;
    const { clientX } = event;
    // Shift clientX to better match what was clicked
    const shiftedClientX = clientX + 10;
    if (shiftedClientX < 90) {
      column = 40;
    } else if (shiftedClientX < 140) {
      column = 90;
    } else if (shiftedClientX < 190) {
      column = 140;
    } else if (shiftedClientX < 240) {
      column = 190;
    } else if (shiftedClientX < 290) {
      column = 240;
    } else if (shiftedClientX < 340) {
      column = 290;
    } else {
      column = 340;
    }

    // Find the lowest row that is empty
    let currentHeight = circles.filter((c) => c.x === column).length;
    let row;
    let hasError;
    switch (currentHeight) {
      case 0:
        row = 300;
        hasError = false;
        break;
      case 1:
        row = 250;
        hasError = false;
        break;
      case 2:
        row = 200;
        hasError = false;
        break;
      case 3:
        row = 150;
        hasError = false;
        break;
      case 4:
        row = 100;
        hasError = false;
        break;
      case 5:
        row = 50;
        hasError = false;
        break;
      default:
        setError("The row is full, try again");
        hasError = true;
        break;
    }
    if (!hasError) {
      // Used to animate last move made
      setCircle({
        x: column,
        y: row,
        colour: isPlayer1 ? "green" : "purple",
      });
      // Used to check for a winner
      setCircles([
        ...circles,
        {
          x: column,
          y: row,
          colour: isPlayer1 ? "green" : "purple",
        },
      ]);
      changePlayer(!isPlayer1);
      setError("");
    }
  };

  const handleGameOver = () => {
    setError("The game is over. Reload page to play again.");
    if (circle.x && circle.y && circle.colour) {
      setPrevCircles([
        ...prevCircles,
        {
          ...circle,
        },
      ]);
      setCircle({ x: "", y: "", colour: "" });
    }
  };

  // TODO: make animation stop after 1 iteration for each new move made

  return (
    <div>
      <h1>4 In A Row</h1>
      <p>Click on the column you want to place your colour in.</p>
      <p>Green player starts, purple player is second.</p>
      {winner && <h2>{winner}</h2>}
      {error && <p>{error}</p>}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="380"
        height="380"
        onClick={winner ? handleGameOver : handleTurn}
      >
        <defs>
          <mask id="holes" x="0" y="0" width="400" height="400">
            <rect width="380" height="380" fill="white" />
            <circle cx="90" cy="300" r="20" fill="black" pointerEvents="all" />
            <circle cx="90" cy="50" r="20" fill="black" pointerEvents="all" />
            <circle cx="90" cy="100" r="20" fill="black" pointerEvents="all" />
            <circle cx="90" cy="150" r="20" fill="black" pointerEvents="all" />
            <circle cx="90" cy="200" r="20" fill="black" pointerEvents="all" />
            <circle cx="90" cy="250" r="20" fill="black" pointerEvents="all" />
            <circle cx="40" cy="300" r="20" fill="black" pointerEvents="all" />
            <circle cx="40" cy="50" r="20" fill="black" pointerEvents="all" />
            <circle cx="40" cy="100" r="20" fill="black" pointerEvents="all" />
            <circle cx="40" cy="150" r="20" fill="black" pointerEvents="all" />
            <circle cx="40" cy="200" r="20" fill="black" pointerEvents="all" />
            <circle cx="40" cy="250" r="20" fill="black" pointerEvents="all" />
            <circle cx="140" cy="300" r="20" fill="black" pointerEvents="all" />
            <circle cx="140" cy="50" r="20" fill="black" pointerEvents="all" />
            <circle cx="140" cy="100" r="20" fill="black" pointerEvents="all" />
            <circle cx="140" cy="150" r="20" fill="black" pointerEvents="all" />
            <circle cx="140" cy="200" r="20" fill="black" pointerEvents="all" />
            <circle cx="140" cy="250" r="20" fill="black" pointerEvents="all" />
            <circle cx="190" cy="300" r="20" fill="black" pointerEvents="all" />
            <circle cx="190" cy="50" r="20" fill="black" pointerEvents="all" />
            <circle cx="190" cy="100" r="20" fill="black" pointerEvents="all" />
            <circle cx="190" cy="150" r="20" fill="black" pointerEvents="all" />
            <circle cx="190" cy="200" r="20" fill="black" pointerEvents="all" />
            <circle cx="190" cy="250" r="20" fill="black" pointerEvents="all" />
            <circle cx="290" cy="300" r="20" fill="black" pointerEvents="all" />
            <circle cx="290" cy="50" r="20" fill="black" pointerEvents="all" />
            <circle cx="290" cy="100" r="20" fill="black" pointerEvents="all" />
            <circle cx="290" cy="150" r="20" fill="black" pointerEvents="all" />
            <circle cx="290" cy="200" r="20" fill="black" pointerEvents="all" />
            <circle cx="290" cy="250" r="20" fill="black" pointerEvents="all" />
            <circle cx="240" cy="300" r="20" fill="black" pointerEvents="all" />
            <circle cx="240" cy="50" r="20" fill="black" pointerEvents="all" />
            <circle cx="240" cy="100" r="20" fill="black" pointerEvents="all" />
            <circle cx="240" cy="150" r="20" fill="black" pointerEvents="all" />
            <circle cx="240" cy="200" r="20" fill="black" pointerEvents="all" />
            <circle cx="240" cy="250" r="20" fill="black" pointerEvents="all" />
            <circle cx="340" cy="300" r="20" fill="black" pointerEvents="all" />
            <circle cx="340" cy="50" r="20" fill="black" pointerEvents="all" />
            <circle cx="340" cy="100" r="20" fill="black" pointerEvents="all" />
            <circle cx="340" cy="150" r="20" fill="black" pointerEvents="all" />
            <circle cx="340" cy="200" r="20" fill="black" pointerEvents="all" />
            <circle cx="340" cy="250" r="20" fill="black" pointerEvents="all" />
          </mask>
        </defs>
        <path
          d="M 330 330 L 362.5 370"
          fill="black"
          stroke="#d6b656"
          strokeWidth="10"
          strokeMiterlimit="10"
        />
        <path
          d="M 20 370 L 52.5 330"
          fill="black"
          stroke="#d6b656"
          strokeWidth="10"
          strokeMiterlimit="10"
        />
        <rect
          x="10"
          y="10"
          width="360"
          height="330"
          rx="49.5"
          ry="49.5"
          fill="lightblue"
        />
        {circle.y && (
          <circle
            key={"" + circle.x + circle.y}
            cx={circle.x}
            cy={circle.y}
            r="21"
            fill={circle.colour}
          >
            <animate
              key={"" + circle.x + circle.y}
              attributeName="cy"
              begin="0s"
              dur="3s"
              from="0"
              to={circle.y}
              repeatCount="indefinite"
            />
          </circle>
        )}
        {prevCircles.map((c) => (
          <circle
            key={"" + c.x + c.y}
            cx={c.x}
            cy={c.y}
            r="21"
            fill={c.colour}
          ></circle>
        ))}
        <rect
          x="10"
          y="10"
          width="360"
          height="330"
          rx="49.5"
          ry="49.5"
          fill="#6c8ebf"
          mask="url(#holes)"
        />
      </svg>
    </div>
  );
}

export default App;
