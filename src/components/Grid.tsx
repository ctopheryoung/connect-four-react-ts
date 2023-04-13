import { useState } from "react";
import Circle from "./Circle";
import "./Grid.css";

export default function Board() {
  const columns = 8;
  const rows = 6;

  const [circles, setCircles] = useState(
    Array.from({ length: columns }, (e) => Array(rows).fill(null))
  );
  const [redIsNext, setRedIsNext] = useState(true);

  function handleColumnClick(columnIndex: number) {
    const nextCircles = [...circles];
    const lastOpenCircleIndex = nextCircles[columnIndex].findLastIndex(
      (value) => !value
    );
    nextCircles[columnIndex][lastOpenCircleIndex] = redIsNext
      ? "red"
      : "yellow";
    setCircles(nextCircles);
    setRedIsNext(!redIsNext);
  }

  return (
    <>
      <h2>Connect Four</h2>
      <h4>{redIsNext ? "Red" : "Yellow"} is next.</h4>
      <div className="grid">
        {circles.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className="grid-column"
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
