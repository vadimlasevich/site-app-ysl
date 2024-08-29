import React from 'react';
import { whyChoose } from '../constans';

const WhyChoose = () => {
  return (
    <div className="max-container">
      <div className="w-[50%]">
        <h2 className="text-3xl text-light-green font-bold uppercase">почему мы</h2>
      </div>
      <div className="mt-12 flex flex-wrap gap-y-8 justify-between">
        {whyChoose.map((item) => (
          <div key={item.id} className="w-[32%] flex flex-col justify-start  p-6 shadow-xl rounded-xl bg-primary">
            <span className="mb-5 text-4xl font-bold text-light-green">{item.id}.</span>
            <div>
              <h3 className="font-bold text-xl">{item.title}</h3>
              <p className="text-sm mt-2 mb-4">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
