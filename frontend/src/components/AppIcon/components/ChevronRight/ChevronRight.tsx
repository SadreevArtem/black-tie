import React from "react";

type Props = {
  className?: string;
};

export const ChevronRight: React.FC<Props> = ({ className = "" }) => (
  <svg
    className={className}
    width="14"
    height="28"
    fill=""
    viewBox="0 0 14 28"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.850098 27.1998L11.7168 16.3331C13.0001 15.0498 13.0001 12.9498 11.7168 11.6665L0.850098 0.799805"
      stroke="white"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
