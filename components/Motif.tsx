type Kind = "guitar" | "wrench" | "flame" | "bottle" | "gas";

export function Motif({
  kind,
  className = "",
}: {
  kind: Kind;
  className?: string;
}) {
  const paths: Record<Kind, string> = {
    guitar:
      "M8 34c6-2 10-10 9-16 4-1 8 2 9 6 3 8-2 16-10 19-2 6-8 9-14 7l-2-8c6 1 10-2 8-8zm16-20 14-14",
    wrench:
      "M8 32l16-16 4 4c3-5 9-7 14-4l-8 8 6 6-8 8-6-6-8 8z",
    flame:
      "M24 44c10 0 16-8 16-16 0-10-8-16-8-24-8 6-10 14-8 20-4-2-8 2-8 8 0 8 6 12 8 12z",
    bottle:
      "M22 6h4v8l4 4v24a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V18l4-4V6zm-2 16h8",
    gas: "M10 18h20v24H10zM16 10h8v8h-8zm20 10h6v8l-4 6h-2M14 26h12M14 32h12",
  };

  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden
      className={`motif ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <path d={paths[kind]} />
    </svg>
  );
}
