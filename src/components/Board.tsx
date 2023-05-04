import { useState } from "react";
import calculateWinner from "../library/CalculateWinner";
import Circle from "./Circle";
import "./Board.css";

export default function Board() {
  const columns = 7;
  const rows = 6;

  const [circles, setCircles] = useState(
    Array.from({ length: columns }, (e) => Array(rows).fill(null))
  );
  const [redIsNext, setRedIsNext] = useState(true);

  const winner = calculateWinner(columns, rows, circles);

  function handleColumnClick(columnIndex: number) {
    if (winner) {
      return;
    }

    const nextCircles = structuredClone(circles);
    const lastOpenCircleIndex = nextCircles[columnIndex].findLastIndex(
      (value: string | null) => !value
    );
    nextCircles[columnIndex][lastOpenCircleIndex] = redIsNext
      ? "red"
      : "yellow";

    setCircles(nextCircles);
    setRedIsNext(!redIsNext);
  }

  const status = winner
    ? `Winner: ${winner}`
    : `${redIsNext ? "Red" : "Yellow"} is next.`;

  return (
    <>
      <h2>{status}</h2>
      <div className="board">
        {circles.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className="board-column"
            onClick={() => handleColumnClick(columnIndex)}
          >
            {column.map((value: string | null, i: number) => (
              <Circle key={i} value={value} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
