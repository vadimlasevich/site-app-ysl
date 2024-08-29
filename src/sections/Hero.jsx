import React from 'react';
import HeroImg from '../assets/images/hero-img.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex justify-start items-center">
      <div className="max-container flex items-center justify-between">
        <div className="flex-col w-[45%]">
          <h1 className="text-4xl leading-[4rem] font-bold">
            Технологии, которые работают: от{' '}
            <Link to={`service/microcontroller-development`} className="text-[3rem] font-bold text-light-green">
              схемы
            </Link>{' '}
            до{' '}
            <Link to={`service/mobile-development`} className="text-[3rem] font-bold text-light-green">
              экрана
            </Link>
          </h1>
          <p className="mt-4 text-[1.2rem]">
            Наша команда экспертов создает решения для различных отраслей — от умного дома до промышленной автоматизации.
          </p>
        </div>
        <div className="flex justify-center w-[50%]">
          <img src={HeroImg} className="w-[80%] max-h-[80%]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
