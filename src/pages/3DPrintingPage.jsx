import React from 'react';
import { Footer } from '../sections';
import { Nav } from '../components';
import { SvgArrow } from '../components/svg';
import PrintingImage from '../assets/images/print.png';
import { offer3DPrinting, whyChoose3DPrinting } from '../constans';
import { HashLink } from 'react-router-hash-link';

const PrintingPage = () => {
  return (
    <main className="font-montserrat flex flex-col justify-between min-h-screen">
      <Nav absolute={false} />

      <div className="py-7 bg-gradient-to-r from-[#dbffe6] to-[#9affbb]">
        <div className="max-container">
          <h2 className="text-3xl font-bold">Воплотите свои идеи в реальность с помощью 3D-печати</h2>
        </div>
      </div>
      <div className="max-container ">
        <div className=" flex justify-between items-center my-10">
          <div className="w-[48%] flex justify-center">
            <img src={PrintingImage} className="w-[80%] max-h-[80%] " />
          </div>
          <div className="w-[48%]">
            <h3 className="text-3xl font-black leading-9 mb-8">
              Инновационный подход к созданию прототипов, уникальных изделий и малосерийной продукции.
            </h3>
            <p className="text-2xl leading-8">
              Представьте себе мир, где ваши самые смелые идеи могут превратиться в осязаемые объекты всего за несколько часов. С
              3D-печатью это возможно! Мы предлагаем вам инновационный подход к созданию прототипов, уникальных изделий и
              малосерийной продукции.
            </p>
          </div>
        </div>
        <div className="py-16">
          <h3 className="text-3xl font-black leading-9 mb-8">Что мы предлагаем:</h3>
          <div>
            {offer3DPrinting.map((item) => (
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

        <div className="py-10">
          <h3 className="text-3xl font-black leading-9 mb-8">Почему выбирают нас:</h3>
          <div className="flex gap-6 justify-between">
            {whyChoose3DPrinting.map((item) => (
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

        <div className="mt-20 flex flex-col justify-center mb-6">
          <p className="text-center mb-14 text-2xl font-bold">
            Свяжитесь с нами, чтобы узнать больше о возможностях 3D-печати и обсудить ваш проект. Мы готовы помочь вам реализовать
            самые смелые идеи!
          </p>
          <HashLink to="/site-app-ysl/#contacts" className="button">
            Связаться с нами
          </HashLink>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default PrintingPage;
