import Circle from "./Circle";
import "./Grid.css";

export default function Board() {
  const rowCount = 6;
  const columnCount = 7;
  let circleCount = 0;

  return (
    <div className="grid">
      {[...Array(columnCount)].map((e, i) => (
        <div key={i} className="grid-column">
          {[...Array(rowCount)].map((e) => {
            circleCount++;
            return <Circle key={circleCount} id={circleCount} />;
          })}
        </div>
      ))}
    </div>
  );
}
