import "./Circle.css";

type CircleProps = {
  value: string | null;
};

export default function Circle({ value }: CircleProps) {
  return <span className="grid-circle">{value}</span>;
}
