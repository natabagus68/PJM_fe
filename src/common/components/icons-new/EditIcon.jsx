export default function EditIcon({ color = "white", ...props }) {
 return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <g clipPath="url(#clip0_2699_30839)">
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.125"
          d="M7.333 2.667H2.667A1.333 1.333 0 001.333 4v9.333a1.333 1.333 0 001.334 1.334H12a1.333 1.333 0 001.333-1.334V8.667m-1-7a1.414 1.414 0 112 2L8 10l-2.667.667L6 8l6.333-6.333z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2699_30839">
          <path
            fill={color}
            d="M0 0H16V16H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}