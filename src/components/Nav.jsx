import React from 'react';
import { navLinks } from '../constans/index.jsx';
import { HashLink } from 'react-router-hash-link';

const Nav = ({ absolute }) => {
  return (
    <header
      className="max-container w-full py-2 absolute top-0 inset-x-4"
      style={{ position: !absolute ? 'relative' : 'absolute' }}
    >
      <nav className="flex justify-between align-baseline">
        <a href="/site-app-ysl/" className="font-orbitron text-3xl font-semibold flex flex-col items-end text-main-green">
          YSL Systems
          <span className="font-orbitron text-[0.9rem] mt-[-1.2rem]">software & solutions</span>
        </a>
        <ul className="flex-1 flex justify-center align-bottom gap-7">
          {navLinks.map((item) => (
            <li key={item.label} className=" self-center font-montserrat">
              <HashLink
                to={item.href}
                className="py-1 font-bold transition-all border-b-2 border-transparent hover:border-light-green hover:text-light-green"
              >
                {item.label}
              </HashLink>
            </li>
          ))}
        </ul>
        <HashLink to="/site-app-ysl/#contacts" className="button">
          Связаться с нами
        </HashLink>
      </nav>
    </header>
  );
};

export default Nav;
