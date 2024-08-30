import React from 'react';
import { Nav } from '../components';
import { Footer } from '../sections';
import { SvgArrow } from '../components/svg';
import { HashLink } from 'react-router-hash-link';
import { offerRepair, whyChooseRepair } from '../constans';
import RepairImage from '../assets/images/repire.png';

const RepairPage = () => {
  return (
    <main className="font-montserrat bg-main-bg text-text min-h-screen">
      <Nav absolute={false} />
      <div className="py-7 bg-gradient-to-r from-[#aed8bd] to-[#f3fff3] max-[992px]:py-5">
        <div className="max-container">
          <h2 className="text-3xl font-bold leading-9 max-[992px]:text-2xl max-[550px]:text-xl">
            Профессиональный ремонт и обслуживание оборудования
          </h2>
        </div>
      </div>

      <div className="max-container ">
        <div className=" flex justify-between items-center my-10  max-[650px]:flex-col-reverse max-[550px]:my-5">
          <div className="w-[48%] flex justify-center max-[650px]:w-[70%] max-[650px]:mt-10">
            <img src={RepairImage} className="w-[80%] max-h-[80%] max-[650px]:max-h-[100%]" />
          </div>
          <div className="w-[48%] max-[850px]:w-[60%] max-[650px]:w-full">
            <h3 className="page-title">Надежная работа вашего оборудования — это основа успешного производства.</h3>
            <p className="page-subtitle">
              Наши услуги по ремонту и обслуживанию промышленного оборудования помогут вам избежать простоев и сократить затраты
              на капитальный ремонт.
            </p>
          </div>
        </div>
        <div className="py-16 max-[650px]:py-8">
          <h3 className="page-title-section">Наши услуги включают:</h3>
          <div>
            {offerRepair.map((item) => (
              <div key={item.id} className="mt-8 flex gap-4 items-start max-[650px]:gap-2">
                <div className="w-10">
                  <SvgArrow size={'100%'} />
                </div>

                <div className="flex-col">
                  <h5 className="page-title-item">{item.title}</h5>
                  <p className="page-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-10 max-[650px]:py-5">
          <h3 className="page-title-section">Почему выбирают нас:</h3>
          <div className="flex flex-wrap justify-between max-[850px]:justify-around max-[850px]:gap-y-4">
            {whyChooseRepair.map((item) => (
              <div key={item.id} className="container flex flex-col w-[32%] max-[850px]:w-[49%] max-[550px]:w-full">
                <div className="flex gap-4 mb-4">
                  <span className="text-2xl font-bold text-green">{item.id}.</span>
                  <h5 className="container-title">{item.title}</h5>
                </div>
                <p className="container-text !mt-0 !mb-0">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-center mb-6">
          <p className="text-center page-title !leading-8">
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
