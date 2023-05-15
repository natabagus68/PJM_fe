export default function ArrowBackIcon({ color = "#14988B", ...props}) {
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
        fill={color}
        fillRule="evenodd"
        d="M12.667 7.333h-7.91l2.422-2.906a.666.666 0 10-1.024-.854l-3.334 4c-.026.032-.039.068-.058.103-.016.028-.036.052-.048.083a.657.657 0 00-.048.238v.006c0 .081.018.162.048.238.012.031.032.055.048.083.019.035.032.071.058.103l3.334 4a.666.666 0 101.024-.854L4.757 8.667h7.91a.667.667 0 000-1.334z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}