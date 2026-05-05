type Props = {
  variant?: "navy" | "white";
  className?: string;
};

export default function Logo({ variant = "navy", className = "w-8 h-8" }: Props) {
  const color = variant === "white" ? "#FFFFFF" : "#0A1628";
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M16 2 L28 6 V15 C28 22 22.5 27.5 16 30 C9.5 27.5 4 22 4 15 V6 Z"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10 12 L16 8 L22 12 Z"
        fill="none"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <rect x="11" y="13" width="1.6" height="8" fill={color} />
      <rect x="15.2" y="13" width="1.6" height="8" fill={color} />
      <rect x="19.4" y="13" width="1.6" height="8" fill={color} />
      <rect x="9.5" y="21" width="13" height="1.6" fill={color} />
    </svg>
  );
}
