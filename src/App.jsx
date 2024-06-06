import { useState } from "react";

function App() {
  const [isPlayer1, changePlayer] = useState(true);
  const [circles, setCircles] = useState([{ x: 40, y: 300, colour: "purple" }]);
  const [error, setError] = useState("");

  const handleTurn = (event) => {
    // Find out which coloumn was clicked
    // TODO: change ranges a little to match clicked
    let coloumn;
    const { clientX } = event;
    if (clientX < 90) {
      coloumn = 40;
    } else if (clientX < 140) {
      coloumn = 90;
    } else if (clientX < 190) {
      coloumn = 140;
    } else if (clientX < 240) {
      coloumn = 190;
    } else if (clientX < 290) {
      coloumn = 240;
    } else if (clientX < 340) {
      coloumn = 290;
    } else {
      coloumn = 340;
    }

    // Find the lowest row that is empty
    const currentHeight = circles.filter((c) => c.x === coloumn).length;
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
      setCircles([
        ...circles,
        { x: coloumn, y: row, colour: isPlayer1 ? "green" : "purple" },
      ]);
      changePlayer(!isPlayer1);
      setError("");
    }

    // TODO: get animation to work
    // TODO: check if anyone has 4 in a row, print message
  };

  return (
    <div>
      <h1>4 In A Row</h1>
      {error && <p>{error}</p>}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="380"
        height="380"
        onClick={handleTurn}
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
        {circles.map((c) => (
          <circle
            key={c}
            cx={c.x}
            cy={c.y}
            r="18"
            fill={c.colour}
            stroke="rgb(0, 0, 0)"
          >
            <animate
              attributeName="cy"
              begin="1s"
              dur="4s"
              from="0"
              to="300"
              repeatCount="1"
            />
          </circle>
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
