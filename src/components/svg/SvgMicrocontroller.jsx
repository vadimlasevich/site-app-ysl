import * as React from 'react';
const SvgMicrokontroller = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 120 120" width={size} height={size}>
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M44 57.778a8 8 0 0 1 2.964-6.216l8-6.482a8 8 0 0 1 10.072 0l8 6.482A8 8 0 0 1 76 57.778V68a8 8 0 0 1-8 8H52a8 8 0 0 1-8-8V57.778Zm24 0V68H52V57.778l8-6.482 8 6.482Z"
      clipRule="evenodd"
    />
    <path
      fill="url(#b)"
      fillRule="evenodd"
      d="M34.068 11.326a4 4 0 0 1 5.606-.758l8.924 6.8a8 8 0 0 1 3.152 6.363V33h4.5V13.75a4 4 0 1 1 8 0V33h4v-9.269a8 8 0 0 1 3.152-6.363l8.924-6.8a4 4 0 1 1 4.848 6.364l-8.924 6.8V33H83a4 4 0 0 1 4 4v6.5h9.019l6.799-8.924a4 4 0 0 1 6.364 4.848l-6.8 8.924a8 8 0 0 1-6.363 3.152H87V56h19a4 4 0 0 1 0 8H87v4h9.019a8 8 0 0 1 6.363 3.152l6.8 8.924a4 4 0 0 1-6.364 4.848L96.018 76H87v7a4 4 0 0 1-4 4h-6.75v8.769l8.924 6.799a4 4 0 0 1-4.848 6.364l-8.924-6.8a7.999 7.999 0 0 1-3.152-6.363V87h-4v18.75a4 4 0 0 1-8 0V87h-4.5v8.769a8 8 0 0 1-3.152 6.363l-8.924 6.8a4 4 0 0 1-4.848-6.364l8.924-6.8V87H37a4 4 0 0 1-4-4v-7h-9.019l-6.8 8.924a4 4 0 1 1-6.363-4.848l6.8-8.924A8 8 0 0 1 23.98 68H33v-4H14a4 4 0 1 1 0-8h19v-4.5h-9.019a8 8 0 0 1-6.363-3.152l-6.8-8.924a4 4 0 0 1 6.364-4.848l6.8 8.924H33V37a4 4 0 0 1 4-4h6.75v-9.269l-8.924-6.8a4 4 0 0 1-.758-5.605ZM41 41h38v38H41V41Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient id="a" x1={60} x2={60} y1={9.75} y2={109.75} gradientUnits="userSpaceOnUse">
        <stop stopColor="var(--main-green)" />
        <stop offset={1} stopColor="var(--light-green)" />
      </linearGradient>
      <linearGradient id="b" x1={60} x2={60} y1={9.75} y2={109.75} gradientUnits="userSpaceOnUse">
        <stop stopColor="var(--main-green)" />
        <stop offset={1} stopColor="var(--light-green)" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgMicrokontroller;
