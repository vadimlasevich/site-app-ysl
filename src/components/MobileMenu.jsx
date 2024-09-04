import React from 'react';
import { navLinks } from '../constans';
import { HashLink } from 'react-router-hash-link';
import { useMobileMenu } from '../store';
import Burger from './Burger';

const MobileMenu = () => {
  const selectedMobileMenu = useMobileMenu((state) => state.selectedMobileMenu);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 h-screen inset-0 flex justify-end z-50">
      <div className="mt-5 mr-2">
        <Burger />
      </div>

      <div className="fixed inset-0 bg-slate-900 bg-opacity-70" onClick={selectedMobileMenu}></div>
      <div className="absolute z-[300] top-0 right-0 flex flex-col bg-linear-from pt-14 pb-6 px-5 h-[20rem] rounded-bl-2xl">
        <ul className="flex flex-col justify-center align-bottom gap-5">
          {navLinks.map((item) => (
            <li key={item.label} className=" self-center font-montserrat">
              <HashLink
                to={item.href}
                className="py-1 font-bold transition-all border-b-2 border-transparent hover:border-green hover:text-green"
                onClick={selectedMobileMenu}
              >
                {item.label}
              </HashLink>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <HashLink to="/site-app-ysl/#contacts" className="button" onClick={selectedMobileMenu}>
            Связаться с нами
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
