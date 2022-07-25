import React from 'react';
import './mouse-anim.css';

const Mouse = () => (
  <svg
    width="14"
    height="40"
    viewBox="0 0 14 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g className="mouse">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 17.5V17.5C3.68629 17.5 1 14.8137 1 11.5V7C1 3.68629 3.68629 1 7 1V1C8.5913 1 10.1174 1.63214 11.2426 2.75736C12.3679 3.88258 13 5.4087 13 7V11.5C13 14.8137 10.3137 17.5 7 17.5Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M7 5.5V9.25"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </g>
    <g className="mouse-dots">
      <circle opacity="0.25" cx="7" cy="38.5" r="1.125" fill="#D8D8D8" />
      <circle opacity="0.5" cx="7" cy="31.75" r="1.125" fill="#D8D8D8" />
      <circle opacity="0.75" cx="7" cy="25" r="1.125" fill="#D8D8D8" />
    </g>
  </svg>
);

export default Mouse;
