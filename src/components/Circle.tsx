type CircleProps = {
  id: number;
  value?: string;
};

export default function Circle({ id }: CircleProps) {
  return <span className="grid-circle">{id}</span>;
}
