import React from 'react';
import { Nav } from '../components';
import { Footer } from '../sections';
import { SvgArrow } from '../components/svg';
import { HashLink } from 'react-router-hash-link';
import { offerRepair, whyChooseRepair } from '../constans';

const RepairPage = () => {
  return (
    <main className="font-montserrat flex flex-col justify-between min-h-screen">
      <Nav absolute={false} />
      <div className="flex flex-col grow justify-between">
        <div className="py-7 bg-light-green ">
          <div className="max-container">
            <h2 className="text-3xl font-bold">Профессиональный ремонт и обслуживание оборудования</h2>
          </div>
        </div>
        <div className="max-container py-10">
          <h3 className="text-xl leading-8">
            Мы понимаем, что надежная работа вашего оборудования — это основа успешного производства. Наши услуги по ремонту и
            обслуживанию промышленного оборудования помогут вам избежать простоев и сократить затраты на капитальный ремонт.
          </h3>
          <div className="mt-7">
            <h4 className="text-2xl font-bold">Что мы предлагаем:</h4>
            <div className="ml-7">
              {offerRepair.map((item) => (
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
              {whyChooseRepair.map((item) => (
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
              Свяжитесь с нами, чтобы обсудить ваши потребности в ремонте и обслуживании оборудования. Мы готовы обеспечить
              бесперебойную работу вашего производства.
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

export default RepairPage;
