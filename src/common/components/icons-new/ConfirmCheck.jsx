export default function ConfirmCheck({ color = "#FFFFFF", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      fill="none"
      viewBox="0 0 16 17"
      {...props}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M13.998 7.816H14c.367 0 .666.297.667.665a6.621 6.621 0 01-1.94 4.72 6.623 6.623 0 01-4.708 1.966H8a6.622 6.622 0 01-4.7-1.94A6.623 6.623 0 011.332 8.52a6.62 6.62 0 011.94-4.72A6.623 6.623 0 017.98 1.833c.53.008 1.07.062 1.587.186a.667.667 0 01-.313 1.296 5.878 5.878 0 00-1.27-.148 5.298 5.298 0 00-3.767 1.572 5.298 5.298 0 00-1.551 3.776 5.299 5.299 0 001.572 3.767A5.3 5.3 0 008 13.833h.015a5.298 5.298 0 003.767-1.572 5.299 5.299 0 001.551-3.776c0-.368.297-.668.665-.669zm-8.47.213c.261-.261.683-.261.943 0l1.496 1.496 4.198-4.798a.667.667 0 011.003.879l-4.667 5.333a.668.668 0 01-.479.228H8a.666.666 0 01-.471-.196l-2-2a.666.666 0 010-.942z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}