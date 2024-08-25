import * as React from 'react';
const SvgWebDevelopement = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" data-name="line gradient" viewBox="0 0 64 64" width={size} height={size}>
    <defs>
      <linearGradient id="a" x1={4} x2={60} y1={32} y2={32} gradientUnits="userSpaceOnUse">
        <stop offset={0} stopColor="var(--main-green)" />
        <stop offset={1} stopColor="var(--light-green)" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M57 5H7a3.009 3.009 0 0 0-3 3v48a3.009 3.009 0 0 0 3 3h50a3.009 3.009 0 0 0 3-3V8a3.009 3.009 0 0 0-3-3Zm1 51a1.003 1.003 0 0 1-1 1H7a1.003 1.003 0 0 1-1-1V15h52Zm0-43H6V8a1.003 1.003 0 0 1 1-1h50a1.003 1.003 0 0 1 1 1ZM9 8.5a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3Zm0 2a.5.5 0 0 1 0-1 .5.5 0 0 1 0 1Zm4-2a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3Zm0 2a.5.5 0 0 1 0-1 .5.5 0 0 1 0 1Zm4-2a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3Zm0 2a.5.5 0 0 1 0-1 .5.5 0 0 1 0 1Zm10.051 37.184 8-24a1 1 0 0 1 1.898.632l-8 24a1 1 0 1 1-1.898-.632ZM11.293 36.707a1 1 0 0 1 0-1.414l8-8a1 1 0 0 1 1.414 1.414L13.414 36l7.293 7.293a1 1 0 1 1-1.414 1.414Zm32-8a1 1 0 0 1 1.414-1.414l8 8a1 1 0 0 1 0 1.414l-8 8a1 1 0 1 1-1.414-1.414L50.586 36Z"
    />
  </svg>
);
export default SvgWebDevelopement;
