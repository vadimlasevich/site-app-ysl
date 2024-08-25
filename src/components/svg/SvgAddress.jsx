import * as React from 'react';
const SvgAddress = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 120 120" width={size} height={size}>
    <path fill="url(#a)" d="M50.5 34a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />
    <path fill="url(#b)" d="M88 71a4 4 0 0 1 0 8H33a4 4 0 1 1 0-8h55Z" />
    <path fill="url(#c)" d="M92 89a4 4 0 0 0-4-4H33a4 4 0 0 0 0 8h55a4 4 0 0 0 4-4Z" />
    <path fill="url(#d)" d="M67 57a4 4 0 0 0 0 8h21a4 4 0 1 0 0-8H67Z" />
    <path
      fill="url(#e)"
      fillRule="evenodd"
      d="M64.964 43h38.286a6.75 6.75 0 0 1 4.601 11.689c-.654.61-.654 2.012 0 2.622A6.732 6.732 0 0 1 110 62.25c0 1.95-.827 3.706-2.149 4.939-.654.61-.654 2.012 0 2.622A6.732 6.732 0 0 1 110 74.75c0 1.95-.827 3.706-2.149 4.939-.654.61-.654 2.012 0 2.622A6.732 6.732 0 0 1 110 87.25a6.73 6.73 0 0 1-1.897 4.692c-.703.727-.703 2.89 0 3.616A6.75 6.75 0 0 1 103.25 107h-86.5a6.75 6.75 0 0 1-4.852-11.442c.702-.727.702-2.89 0-3.616A6.728 6.728 0 0 1 10 87.25c0-1.95.827-3.706 2.149-4.939.654-.61.654-2.012 0-2.622A6.731 6.731 0 0 1 10 74.75c0-1.95.827-3.706 2.149-4.939.654-.61.654-2.012 0-2.622A6.731 6.731 0 0 1 10 62.25c0-1.95.827-3.706 2.149-4.939.654-.61.654-2.012 0-2.622A6.75 6.75 0 0 1 16.75 43h9.286A21.8 21.8 0 0 1 24 33.8v-.3C24 21.626 33.626 12 45.5 12S67 21.626 67 33.5v.3a21.8 21.8 0 0 1-2.036 9.2ZM59 33.8v-.3C59 26.044 52.956 20 45.5 20S32 26.044 32 33.5v.3a13.8 13.8 0 0 0 2.714 8.22L45.5 56.566 56.286 42.02A13.8 13.8 0 0 0 59 33.8ZM31.414 51h-12.09c1.027 1.782 1.316 3.645 1.316 5 0 1.677-.442 4.132-2.179 6.25 1.737 2.118 2.179 4.573 2.179 6.25 0 1.677-.442 4.132-2.179 6.25 1.737 2.118 2.179 4.573 2.179 6.25 0 1.689-.448 4.168-2.217 6.296a10 10 0 0 1 1.578 3.274c.31 1.12.423 2.214.423 3.18 0 .966-.112 2.06-.423 3.18-.15.54-.398 1.274-.82 2.07h81.638c-.422-.796-.67-1.53-.82-2.07a11.942 11.942 0 0 1-.423-3.18c0-.966.112-2.06.423-3.18a10 10 0 0 1 1.578-3.274C99.808 85.168 99.36 82.689 99.36 81c0-1.677.442-4.132 2.179-6.25-1.737-2.118-2.179-4.573-2.179-6.25 0-1.677.442-4.132 2.179-6.25-1.737-2.118-2.179-4.573-2.179-6.25 0-1.355.289-3.218 1.315-5H59.586l-10.07 13.582c-1.998 2.697-6.034 2.697-8.033 0L31.413 51Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient id="a" x1={60} x2={60} y1={12} y2={107} gradientUnits="userSpaceOnUse">
        <stop stopColor="var(--light-green)" />
        <stop offset={1} stopColor="var(--main-green)" />
      </linearGradient>
      <linearGradient id="b" x1={60} x2={60} y1={12} y2={107} gradientUnits="userSpaceOnUse">
        <stop stopColor="var(--light-green)" />
        <stop offset={1} stopColor="var(--main-green)" />
      </linearGradient>
      <linearGradient id="c" x1={60} x2={60} y1={12} y2={107} gradientUnits="userSpaceOnUse">
        <stop stopColor="var(--light-green)" />
        <stop offset={1} stopColor="var(--main-green)" />
      </linearGradient>
      <linearGradient id="d" x1={60} x2={60} y1={12} y2={107} gradientUnits="userSpaceOnUse">
        <stop stopColor="var(--light-green)" />
        <stop offset={1} stopColor="var(--main-green)" />
      </linearGradient>
      <linearGradient id="e" x1={60} x2={60} y1={12} y2={107} gradientUnits="userSpaceOnUse">
        <stop stopColor="var(--light-green)" />
        <stop offset={1} stopColor="var(--main-green)" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgAddress;
