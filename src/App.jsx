function App() {
  return (
    <div>
      <h1>4 In A Row</h1>
      <svg xmlns="http://www.w3.org/2000/svg" width="380" height="380">
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
        <circle
          cx="40"
          cy="300"
          r="18"
          fill="rgb(100, 255, 255)"
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
