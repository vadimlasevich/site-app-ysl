import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Footer } from '../sections';
import { SvgArrow } from '../components/svg';
import { Nav } from '../components';
import { benefitsPowerSupply, solutionsPowerSupply, whyChoosePowerSupply, workingPowerSupply } from '../constans';

const PowerSupplyPage = () => {
  return (
    <main className="font-montserrat flex flex-col justify-between min-h-screen">
      <Nav absolute={false} />
      <div className="flex flex-col grow justify-between">
        <div className="py-7 bg-light-green ">
          <div className="max-container">
            <h2 className="text-3xl font-bold">Энергия солнца для вашего дома и бизнеса</h2>
          </div>
        </div>
        <div className="max-container py-10">
          <h3 className="text-xl leading-8">
            Солнечные батареи и бесперебойные системы подачи электричества — это надежное и экологичное решение для тех, кто
            стремится к автономности и безопасности. Независимо от погодных условий или перебоев в электросети, вы всегда будете
            обеспечены энергией.
          </h3>
          <div className="mt-7">
            <h4 className="text-2xl font-bold">Наши решения:</h4>
            <div className="ml-7">
              {solutionsPowerSupply.map((item) => (
                <div key={item.id} className="mt-5">
                  <div className="mb-3 flex items-center gap-3">
                    <SvgArrow size={20} />
                    <h5 className="font-bold">{item.title}</h5>
                  </div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-7">
            <h4 className="text-2xl font-bold">Почему выбирают нас?</h4>
            <div className="ml-7">
              {whyChoosePowerSupply.map((item) => (
                <div key={item.id} className="mt-5">
                  <div className="mb-3 flex items-center gap-3">
                    <SvgArrow size={20} />
                    <h5 className="font-bold">{item.title}</h5>
                  </div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-7">
            <h4 className="text-2xl font-bold">Как это работает?</h4>
            <div className="ml-7">
              {workingPowerSupply.map((item) => (
                <div key={item.id} className="mt-5">
                  <div className="mb-3 flex items-center gap-3">
                    <SvgArrow size={20} />
                    <h5 className="font-bold">{item.title}</h5>
                  </div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-7">
            <h4 className="text-2xl font-bold">Преимущества для вас:</h4>
            <div className="ml-7">
              {benefitsPowerSupply.map((item) => (
                <div key={item.id} className="mt-5">
                  <div className="mb-3 flex items-center gap-3">
                    <SvgArrow size={20} />
                    <h5 className="font-bold">{item.title}</h5>
                  </div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-center">
            <p className="text-center mb-14 text-2xl font-bold">
              Свяжитесь с нами сегодня, чтобы узнать больше о том, как наши солнечные батареи и бесперебойные системы подачи
              электричества могут улучшить вашу жизнь и бизнес.
            </p>
            <HashLink to="/site-app-ysl/#contacts" className="button">
              Связаться с нами
            </HashLink>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default PowerSupplyPage;
