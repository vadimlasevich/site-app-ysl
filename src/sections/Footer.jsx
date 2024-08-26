import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { navLinks, ourServices } from '../constans';
import { SvgArrow } from '../components/svg';

const Footer = () => {
  return (
    <div className="bg-slate-800 pt-10">
      <div className="max-container flex justify-between pb-7">
        <div className="w-[30%] flex flex-col items-start">
          <a href="/site-app-ysl/" className="font-orbitron text-3xl font-semibold flex flex-col items-end text-light-green">
            YSL Systems
            <span className="font-orbitron text-[0.9rem] mt-[-1.2rem]">software & solutions</span>
          </a>
        </div>
        <div className="w-[30%] flex flex-col items-start pt-10">
          <h4 className="text-slate-100 text-xl">Навигация</h4>
          <ul>
            {navLinks.map((item) => (
              <li key={item.id} className="flex items-center gap-2 mt-3">
                <SvgArrow size={20} />
                <HashLink to={item.href} className="text-slate-200 transition text-sm hover:text-white">
                  {item.label}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[30%] flex flex-col items-start pt-10">
          <h4 className="text-slate-100 text-xl">Услуги</h4>
          <ul>
            {ourServices.map((item) => (
              <li key={item.id} className="flex items-center gap-2 mt-3">
                <SvgArrow size={20} />
                <Link to={`/site-app-ysl/service/${item.href}`} className="text-slate-200 text-sm transition hover:text-white">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="py-3" />
      <div className="max-container flex justify-start gap-4 pb-4">
        <span className="text-slate-400">© 2024</span>
        <span className="text-slate-200">YSL Systems</span>
      </div>
    </div>
  );
};

export default Footer;
