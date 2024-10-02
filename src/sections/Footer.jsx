import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { navLinks, pagesContent } from '../constans';
import { SvgArrow } from '../components/svg';

const Footer = () => {
  return (
    <div className="bg-slate-800 pt-5 lg:pt-10">
      <div className="max-container flex justify-between pb-7 max-[650px]:flex-col max-[650px]:items-center">
        <div className="flex flex-col items-start">
          <a
            href="/"
            className="font-orbitron leading-10 max-[850px]:text-xl text-3xl font-semibold flex flex-col items-end text-green-light"
          >
            YSL Systems
            <span className="font-orbitron text-sm max-[850px]:text-xs">software & solutions</span>
          </a>
        </div>
        <div className="flex flex-col items-start pt-10">
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
        <div className="max-[992px]:w-[50%] max-[650px]:w-full max-[650px]:items-center flex flex-col items-start pt-10">
          <h4 className="text-slate-100 text-xl">Услуги</h4>
          <ul className="">
            {pagesContent.main.sectionServicesContent.map((item) => (
              <li key={item.id} className="flex items-center gap-2 mt-3">
                <div>
                  <SvgArrow size={20} />
                </div>
                <Link to={`/service/${item.href}`} className="text-slate-200 text-sm transition hover:text-white">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="py-3" />
      <div className="max-container flex justify-between pb-4 max-[560px]:flex-col max-[560px]:items-center">
        <div className="max-[560px]:mb-3">
          <span className="text-slate-400 mr-5">© 2024</span>
          <span className="text-slate-200">YSL Systems</span>
        </div>
        <div className=" flex items-center max-[420px]:flex-col">
          <div>
            <span className="text-gray-400 text-lg mr-5">ООО "ИСЛ системы"</span>
          </div>
          <div className="flex items-center">
            <p className="text-gray-400">УНП</p>
            <p className="text-gray-400 ml-2">291884454</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
