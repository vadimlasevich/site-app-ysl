import React from 'react';
import { ourServices } from '../constans/index.jsx';
import { Link } from 'react-router-dom';

const OurServices = () => {
  return (
    <div className="max-container">
      <p className="text-2xl text-light-green font-bold uppercase">наши услуги</p>
      <h2 className="text-4xl font-bold">Что мы предлагаем?</h2>
      <div className="mt-12 flex flex-wrap gap-y-8 justify-between">
        {ourServices.map((item) => (
          <div key={item.id} className="w-[32%] flex flex-col justify-between  p-6 shadow-xl rounded-xl bg-primary">
            <div className="mb-5">{item.icon}</div>
            <div>
              <h3 className="font-bold text-xl">{item.title}</h3>
              <p className="text-sm mt-2 mb-7">{item.subtitle}</p>
            </div>
            <Link to={`service/${item.href}`} className="button self-start">
              Подробнее
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;

//border-2 border-light-green
