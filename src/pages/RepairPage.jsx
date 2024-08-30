import React from 'react';
import { Nav } from '../components';
import { Footer } from '../sections';
import { SvgArrow } from '../components/svg';
import { HashLink } from 'react-router-hash-link';
import { offerRepair, whyChooseRepair } from '../constans';
import RepairImage from '../assets/images/repire.png';

const RepairPage = () => {
  return (
    <main className="font-montserrat flex flex-col justify-between min-h-screen">
      <Nav absolute={false} />
      <div className="py-7 bg-gradient-to-r from-[#dbffe6] to-[#9affbb]">
        <div className="max-container">
          <h2 className="text-3xl font-bold">Профессиональный ремонт и обслуживание оборудования</h2>
        </div>
      </div>

      <div className="max-container ">
        <div className=" flex justify-between items-center my-10">
          <div className="w-[48%] flex justify-center">
            <img src={RepairImage} className="w-[80%] max-h-[80%] " />
          </div>
          <div className="w-[48%]">
            <h3 className="text-3xl font-black leading-9 mb-8">
              Надежная работа вашего оборудования — это основа успешного производства.
            </h3>
            <p className="text-2xl leading-8">
              Наши услуги по ремонту и обслуживанию промышленного оборудования помогут вам избежать простоев и сократить затраты
              на капитальный ремонт.
            </p>
          </div>
        </div>
        <div className="py-16">
          <h3 className="text-3xl font-black leading-9 mb-8">Наши услуги включают:</h3>
          <div>
            {offerRepair.map((item) => (
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
            {whyChooseRepair.map((item) => (
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
            Свяжитесь с нами, чтобы обсудить ваши потребности в ремонте и обслуживании оборудования. Мы готовы обеспечить
            бесперебойную работу вашего производства.
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

export default RepairPage;
