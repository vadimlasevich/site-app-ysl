import React from 'react';
import { Link } from 'react-router-dom';
import { pagesContent } from '../constans';

const OurServices = () => {
  return (
    <div className="max-container">
      <h2 className="section-title">{pagesContent.main.sectionServicesName}</h2>
      <div className="flex flex-wrap gap-y-8 max-[600px]:gap-y-4 justify-between">
        {pagesContent.main.sectionServicesContent.map((item) => (
          <div key={item.id} className="container flex flex-col justify-between w-[32%] max-[850px]:w-[49%] max-[550px]:w-full">
            <div className="mb-2 w-12 max-[550px]:w-8">{item.icon}</div>
            <div>
              <h3 className="container-title">{item.title}</h3>
              <p className="container-text">{item.subtitle}</p>
            </div>
            <Link to={`service/${item.href}`} className="button self-start">
              {item.button}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
