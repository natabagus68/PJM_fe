export default function LogoutIcon({ color = "black", ...props }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Property 2=log-out">
        <path
          id="Mask"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 5C8 5.55 7.55 6 7 6H6V18H7C7.55 18 8 18.45 8 19C8 19.55 7.55 20 7 20H5C4.45 20 4 19.55 4 19V5C4 4.45 4.45 4 5 4H7C7.55 4 8 4.45 8 5ZM18.0039 7.4248L20.8179 11.4248C21.0679 11.7788 21.0599 12.2538 20.7999 12.5998L17.7999 16.5998C17.6039 16.8618 17.3029 16.9998 16.9989 16.9998C16.7909 16.9998 16.5799 16.9348 16.3999 16.7998C15.9579 16.4688 15.8689 15.8418 16.1999 15.4008L18.0009 12.9998H17.9999H9.9999C9.4479 12.9998 8.9999 12.5528 8.9999 11.9998C8.9999 11.4468 9.4479 10.9998 9.9999 10.9998H17.9999C18.0164 10.9998 18.0317 11.0044 18.0472 11.0089C18.0598 11.0127 18.0724 11.0165 18.0859 11.0178L16.3679 8.5748C16.0499 8.1238 16.1589 7.4998 16.6109 7.1818C17.0619 6.8628 17.6859 6.9728 18.0039 7.4248Z"
          fill={color}
        />
      </g>
    </svg>
  );
}