import React from 'react';
import { whyChoose } from '../constans';

const WhyChoose = () => {
  return (
    <div className="max-container">
      <h2 className="section-title">почему мы</h2>
      <div className="flex flex-wrap max-[900px]:justify-around max-[600px]:gap-y-4 gap-y-8 justify-between">
        {whyChoose.map((item) => (
          <div key={item.id} className="container w-[32%] max-[900px]:w-[49%] max-[600px]:w-full max-[768px]:text-center">
            <span className="mb-5 text-4xl font-bold text-green max-[600px]:text-2xl">{item.id}.</span>
            <div>
              <h3 className="container-title">{item.title}</h3>
              <p className="container-text">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
