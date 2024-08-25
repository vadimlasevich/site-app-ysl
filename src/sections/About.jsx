import React from 'react';
import { SvgAbout } from '../components/svg';

const About = () => {
  return (
    <div className="max-container flex justify-betwee">
      <div className="w-[50%]">
        <p className="text-2xl text-light-green font-bold uppercase">о нас</p>
        <h2 className="text-4xl font-bold">Лучшее ИТ-решение 2024 года</h2>
        <p>Здесь нужен какой-то текст</p>
      </div>
      <div className="w-[45%]">
        <SvgAbout size={'100%'} />
      </div>
    </div>
  );
};

export default About;
