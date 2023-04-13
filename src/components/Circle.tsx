import "./Circle.css";

type CircleProps = {
  value: string | null;
};

export default function Circle({ value }: CircleProps) {
  return (
    <div className="grid-slot">
      {value && <div className={`chip ${value}`} />}
    </div>
  );
}
