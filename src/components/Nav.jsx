import React from 'react';
import { navLinks } from '../constans/index.jsx';

const Nav = () => {
  return (
    <header className="max-container py-6 absolute top-0 inset-x-4">
      <nav className="flex justify-between align-baseline">
        <a href="/" className="font-orbitron text-3xl font-semibold flex flex-col items-end text-main-green">
          YSL Systems
          <span className="font-orbitron text-[0.9rem] mt-[-1.2rem]">software & solutions</span>
        </a>
        <ul className="flex-1 flex justify-center align-bottom gap-16">
          {navLinks.map((item) => (
            <li key={item.label} className=" self-center font-montserrat">
              <a
                href={item.href}
                className="py-1 font-medium transition-all border-b-2 border-transparent hover:border-light-green hover:text-light-green"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contacts" className="button">
          Связаться с нами
        </a>
      </nav>
    </header>
  );
};

export default Nav;
