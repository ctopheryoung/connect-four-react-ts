import "./Circle.css";

type CircleProps = {
  value: string | null;
};

export default function Circle({ value }: CircleProps) {
  return (
    <div className={`circle ${value}`}>
      <svg viewBox="0 0 100 100">
        <defs>
          <mask id="mask" x="0" y="0" width="100" height="100">
            <rect x="0" y="0" width="100" height="100" fill="#fff" />
            <circle cx="50" cy="50" r="40" />
          </mask>
        </defs>
        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          mask="url(#mask)"
          fill="#0042a3"
        />
      </svg>
    </div>
  );
}
