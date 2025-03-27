import React, { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);

  const getScoreBarStyle = () => {
    // Compute width based on score
    const scoreWidth = `${(score / 10) * 100}%`;

    // Compute color based on score
    let scoreColor = "#e74c3c"; 
    if (score >= 4 && score <= 7) {
      scoreColor = "#f3bc47"; 
    } else if (score >= 8) {
      scoreColor = "#2ecc71"; 
    }

    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
      height: "50px",
      borderRadius: "5px",
    };
  };

  return (
    <div className="score-panel" style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>My Score in React</h1>

      <small>Enter a score (0 to 10): </small>
      <input
        type="number"
        min="0"
        max="10"
        value={score}
        onChange={(e) => setScore(Math.min(10, Math.max(0, Number(e.target.value))))}
        style={{ marginBottom: "10px", padding: "5px" }}
      />

      <div
        className="score-bar"
        style={{
          width: "100%",
          backgroundColor: "#ddd",
          height: "50px",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <div className="score-bar-value" style={getScoreBarStyle()}></div>
      </div>
    </div>
  );
}