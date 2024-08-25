import * as React from 'react';
const SvgEmail = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size}>
    <defs>
      <linearGradient id="a" x1={8.29} x2={23.71} y1={29.36} y2={2.64} gradientUnits="userSpaceOnUse">
        <stop offset={0} stopColor="var(--main-green)" />
        <stop offset={1} stopColor="var(--light-green)" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M27 5H5a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3ZM4.17 7.47l7.67 6.37L4 23.42V8a1 1 0 0 1 .17-.53Zm12.47 6.7a1 1 0 0 1-1.28 0L6.73 7h18.54Zm-3.26.95.7.59a3 3 0 0 0 3.84 0l.7-.59L26.71 25H5.29Zm6.78-1.28 7.67-6.37A1 1 0 0 1 28 8v15.42Z"
      data-name="Layer 2"
    />
  </svg>
);
export default SvgEmail;
