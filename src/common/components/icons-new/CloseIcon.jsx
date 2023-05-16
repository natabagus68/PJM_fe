export default function CloseIcon({ color = "#514E4E", ...props}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M13.886 12l5.723-5.724a1.332 1.332 0 000-1.885 1.332 1.332 0 00-1.885 0L12 10.115 6.276 4.39a1.332 1.332 0 00-1.885 0 1.332 1.332 0 000 1.885L10.115 12 4.39 17.724A1.332 1.332 0 005.334 20c.341 0 .682-.13.942-.39L12 13.885l5.724 5.723a1.33 1.33 0 001.885 0 1.332 1.332 0 000-1.885L13.885 12z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}