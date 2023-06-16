import React from "react";

function BackIcon({...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="84"
      height="84"
      fill="none"
      viewBox="0 0 84 84"
      {...props}
    >
      <path
        fill="#fff"
        d="M21.167 42L42 21.168v12.5h16.667v16.667H42v12.5L21.167 42.001zm62.5 0A41.667 41.667 0 11.333 42a41.667 41.667 0 0183.334 0zm-8.334 0a33.333 33.333 0 10-66.666 0 33.333 33.333 0 0066.666 0z"
      ></path>
    </svg>
  );
}

export default BackIcon;