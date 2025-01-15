import React from "react";

const Light = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <circle cx="12" cy="32" r="6">
            <animate
              fill="freeze"
              attributeName="cy"
              dur="0.6s"
              values="32;12"
            />
          </circle>
          <g>
            <path
              strokeDasharray="2"
              strokeDashoffset="2"
              d="M12 19v1M19 12h1M12 5v-1M5 12h-1"
            >
              <animate
                fill="freeze"
                attributeName="d"
                begin="0.7s"
                dur="0.2s"
                values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
              />
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.7s"
                dur="0.2s"
                values="2;0"
              />
            </path>
            <path
              strokeDasharray="2"
              strokeDashoffset="2"
              d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"
            >
              <animate
                fill="freeze"
                attributeName="d"
                begin="0.9s"
                dur="0.2s"
                values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
              />
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.9s"
                dur="0.2s"
                values="2;0"
              />
            </path>
            <animateTransform
              attributeName="transform"
              dur="30s"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 12;360 12 12"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Light;
