import * as React from 'react';
const SvgArrow = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size} height={size}>
    <linearGradient id="a" x1={101.286} x2={269.868} y1={442.654} y2={150.663} gradientUnits="userSpaceOnUse">
      <stop offset={0.33} stopColor="var(--light-green)" />
      <stop offset={0.63} stopColor="var(--light-green)" />
      <stop offset={0.895} stopColor="var(--light-green)" />
    </linearGradient>
    <path fill="url(#a)" d="M59.683 93.365 452.317 256 59.683 418.635 141 256 59.683 93.365z" />
  </svg>
);
export default SvgArrow;
