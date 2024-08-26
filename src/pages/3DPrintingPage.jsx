import React from 'react';
import { Footer } from '../sections';
import { Nav } from '../components';
import { SvgArrow } from '../components/svg';
import { offer3DPrinting, whyChoose3DPrinting } from '../constans';
import { HashLink } from 'react-router-hash-link';

const PrintingPage = () => {
  return (
    <main className="font-montserrat flex flex-col justify-between min-h-screen">
      <Nav absolute={false} />
      <div className="flex flex-col grow justify-between">
        <div className="py-7 bg-light-green ">
          <div className="max-container">
            <h2 className="text-3xl font-bold">Воплотите свои идеи в реальность с помощью 3D-печати</h2>
          </div>
        </div>
        <div className="max-container py-10">
          <h3 className="text-xl leading-8">
            Представьте себе мир, где ваши самые смелые идеи могут превратиться в осязаемые объекты всего за несколько часов. С
            3D-печатью это возможно! Мы предлагаем вам инновационный подход к созданию прототипов, уникальных изделий и
            малосерийной продукции.
          </h3>
          <div className="mt-7">
            <h4 className="text-2xl font-bold">Что мы предлагаем:</h4>
            <div className="ml-7">
              {offer3DPrinting.map((item) => (
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
              {whyChoose3DPrinting.map((item) => (
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
              Свяжитесь с нами, чтобы узнать больше о возможностях 3D-печати и обсудить ваш проект. Мы готовы помочь вам
              реализовать самые смелые идеи!
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

export default PrintingPage;
