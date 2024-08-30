import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Footer } from '../sections';
import { SvgArrow } from '../components/svg';
import { Nav } from '../components';
import PowerSupplyImage from '../assets/images/battery.png';
import { benefitsPowerSupply, solutionsPowerSupply, whyChoosePowerSupply, workingPowerSupply } from '../constans';

const PowerSupplyPage = () => {
  return (
    <main className="font-montserrat flex flex-col justify-between min-h-screen">
      <Nav absolute={false} />

      <div className="py-7 bg-gradient-to-r from-[#dbffe6] to-[#9affbb]">
        <div className="max-container">
          <h2 className="text-3xl font-bold">Энергия солнца для вашего дома и бизнеса</h2>
        </div>
      </div>

      <div className="max-container flex justify-between items-center my-10">
        <div className="w-[48%] flex justify-center">
          <img src={PowerSupplyImage} className="w-[80%] max-h-[80%] " />
        </div>
        <div className="w-[48%]">
          <h3 className="text-3xl font-black leading-9 mb-8">
            Надежное и экологичное решение для тех, кто стремится к автономности и безопасности
          </h3>
          <p className="text-2xl leading-8">
            Солнечные батареи и бесперебойные системы подачи электричества — это надежное и экологичное решение для тех, кто
            стремится к автономности и безопасности. Независимо от погодных условий или перебоев в электросети, вы всегда будете
            обеспечены энергией.
          </p>
        </div>
      </div>

      <div className="max-container py-16">
        <h3 className="text-3xl font-black leading-9 mb-8">Наши решения:</h3>
        <div>
          {solutionsPowerSupply.map((item) => (
            <div key={item.id} className="mt-8 flex gap-4">
              <SvgArrow size={30} />
              <div className="flex-col">
                <h5 className="text-xl font-bold mb-3">{item.title}</h5>
                <p className="text-xl">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" py-10 bg-gradient-to-r from-[#dbffe6] to-[#c0ffd5]">
        <div className="max-container">
          <h3 className="text-3xl font-black leading-9 mb-8">Почему выбирают нас:</h3>
          <div className="flex gap-6 justify-between">
            {whyChoosePowerSupply.map((item) => (
              <div
                key={item.id}
                className="w-[33%] flex flex-col  justify-start  p-6 shadow-xl rounded-xl bg-primary duration-150 hover:bg-green-200 hover:scale-105"
              >
                <div className="flex gap-4 mb-4">
                  <span className="text-2xl font-bold text-light-green">{item.id}.</span>
                  <h5 className="text-xl font-bold ">{item.title}</h5>
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-container py-10 ">
        <h3 className="text-3xl font-black leading-9 mb-8">Как это работает?</h3>
        <div className="flex gap-6 justify-between">
          {workingPowerSupply.map((item) => (
            <div
              key={item.id}
              className="w-[33%] flex flex-col  justify-start  p-6 shadow-xl rounded-xl bg-primary duration-150 hover:bg-green-200 hover:scale-105"
            >
              <div className="flex gap-4 mb-4">
                <span className="text-2xl font-bold text-light-green">{item.id}.</span>
                <h5 className="text-xl font-bold ">{item.title}</h5>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-10 bg-gradient-to-r from-[#dbffe6] to-[#c0ffd5]">
        <div className="max-container">
          <h3 className="text-3xl font-black leading-9 mb-8">Преимущества для вас:</h3>
          <div className="flex gap-6 justify-between">
            {benefitsPowerSupply.map((item) => (
              <div
                key={item.id}
                className="w-[33%] flex flex-col  justify-start  p-6 shadow-xl rounded-xl bg-primary duration-150 hover:bg-green-200 hover:scale-105"
              >
                <div className="flex gap-4 mb-4">
                  <span className="text-2xl font-bold text-light-green">{item.id}.</span>
                  <h5 className="text-xl font-bold ">{item.title}</h5>
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-container mt-20 flex flex-col justify-center mb-6">
        <p className="text-center mb-14 text-2xl font-bold">
          Свяжитесь с нами сегодня, чтобы узнать больше о том, как наши солнечные батареи и бесперебойные системы подачи
          электричества могут улучшить вашу жизнь и бизнес.
        </p>
        <HashLink to="/site-app-ysl/#contacts" className="button">
          Связаться с нами
        </HashLink>
      </div>

      <Footer />
    </main>
  );
};

export default PowerSupplyPage;
