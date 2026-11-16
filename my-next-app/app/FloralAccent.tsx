export default function FloralAccent({
  size = 60,
  className = "",
  opacity = 0.4,
}: {
  size?: number;
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Delicate rose branches */}
      <path
        d="M50,50 Q45,35 50,20 Q55,35 50,50 Z"
        fill="#d4af87"
        opacity="0.6"
      />
      <path
        d="M50,50 Q35,45 20,50 Q35,55 50,50 Z"
        fill="#d4af87"
        opacity="0.6"
      />
      <path
        d="M50,50 Q65,45 80,50 Q65,55 50,50 Z"
        fill="#d4af87"
        opacity="0.6"
      />
      <path
        d="M50,50 Q45,65 50,80 Q55,65 50,50 Z"
        fill="#d4af87"
        opacity="0.6"
      />

      {/* Center circle */}
      <circle cx="50" cy="50" r="6" fill="#d4af87" />
    </svg>
  );
}
