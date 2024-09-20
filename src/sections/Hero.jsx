import React from 'react';
import { MouseParallax } from 'react-just-parallax';
import { Link } from 'react-router-dom';
import { pagesContent } from '../constans';

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex justify-start items-center">
      <div className="max-container flex items-center justify-between max-[600px]:flex-col max-[600px]:mt-14 max-[400px]:mt-10">
        <div className="flex-col w-[45%] max-[768px]:w-[55%] max-[600px]:w-full">
          <h1 className="text-3xl leading-7 font-bold lg:text-4xl max-[600px]:text-center">
            Технологии, которые работают: от{' '}
            <Link
              to={`service/microcontroller-development`}
              className="text-3xl font-bold text-green lg:text-4xl duration-150 hover:text-green-light"
            >
              схемы
            </Link>{' '}
            до{' '}
            <Link
              to={`service/mobile-development`}
              className="text-3xl leading-7 font-bold text-green lg:text-4xl duration-150 hover:text-green-light"
            >
              экрана
            </Link>
          </h1>
          <p className="mt-4 text-lg lg:text-xl max-[600px]:text-center max-[600px]:text-base">
            {pagesContent.main.sectionHero.subtitle}
          </p>
        </div>
        <div className="flex justify-center w-[50%] max-[600px]:mt-7 max-[600px]:w-[90%]">
          <MouseParallax enableOnTouchDevice strength={0.03} lerpEase={0.5}>
            <img
              src={pagesContent.main.sectionHero.image}
              className="w-[80%] max-h-[80%] max-[600px]:max-h-[100%]"
              alt="YSL Systems промышленные и IT решения"
            />
          </MouseParallax>
        </div>
      </div>
    </div>
  );
};

export default Hero;
