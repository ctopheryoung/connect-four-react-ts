import { useState } from "react";
import Circle from "./Circle";
import "./Grid.css";

export default function Board() {
  const columns = 8;
  const rows = 6;
  const [circles, setCircles] = useState(
    Array.from({ length: columns }, (e) => Array(rows).fill(null))
  );

  function handleColumnClick(columnIndex: number) {
    const nextCircles = [...circles];
    const lastOpenCircleIndex = nextCircles[columnIndex].findLastIndex(
      (value: string | null) => !value
    );
    nextCircles[columnIndex][lastOpenCircleIndex] = "X";
    setCircles(nextCircles);
  }

  return (
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
  );
}
