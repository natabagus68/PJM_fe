export default function TrashIcon({ color = "white", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.125"
        d="M2 4h1.333m0 0H14M3.333 4v9.333a1.333 1.333 0 001.334 1.334h6.666a1.333 1.333 0 001.334-1.334V4H3.333zm2 0V2.667a1.333 1.333 0 011.334-1.334h2.666a1.333 1.333 0 011.334 1.334V4"
      />
    </svg>
  );
}