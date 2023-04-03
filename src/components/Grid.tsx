import "./Grid.css";

export default function Board() {
  const rowCount = 6;
  const columnCount = 7;
  let circleCount = 0;

  return (
    <>
      {[...Array(rowCount)].map((e, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {[...Array(columnCount)].map((e, columnIndex) => (
            <span key={columnIndex} className="grid-circle">
              {++circleCount}
            </span>
          ))}
        </div>
      ))}
    </>
  );
}
