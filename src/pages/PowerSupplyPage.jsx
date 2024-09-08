import React, { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Footer } from '../sections';
import { SvgArrow } from '../components/svg';
import { Nav, MobileMenu } from '../components';
import { pagesContent } from '../constans';
import { useMobileMenu } from '../store';
import AnimatedBackgroundPage from '../components/AnimatedBackgroundPage';

const PowerSupplyPage = () => {
  const active = useMobileMenu((state) => state.active);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <main className="font-montserrat bg-main-bg text-text min-h-screen relative z-10">
        <AnimatedBackgroundPage />

        <div className="py-7 mt-10 bg-gradient-to-r from-[#aed8bd] to-[#f3fff3] max-[992px]:py-5">
          <div className="max-container">
            <h2 className="text-3xl font-bold leading-9 max-[992px]:text-2xl max-[550px]:text-xl">
              {pagesContent.powerSupply.name}
            </h2>
          </div>
        </div>

        <div className="max-container flex justify-between items-center my-10 max-[650px]:flex-col-reverse max-[550px]:my-5">
          <div className="w-[48%] flex justify-center  max-[650px]:w-[70%] max-[650px]:mt-10">
            <img src={pagesContent.powerSupply.image} className="w-[80%] max-h-[80%] max-[650px]:max-h-[100%]" />
          </div>
          <div className="w-[48%] max-[850px]:w-[60%] max-[650px]:w-full">
            <h3 className="page-title">{pagesContent.powerSupply.title}</h3>
            <p className="page-subtitle">{pagesContent.powerSupply.subtitle}</p>
          </div>
        </div>

        <div className="max-container py-16 max-[650px]:py-8">
          <h3 className="page-title-section">{pagesContent.powerSupply.sectionSolutionsName}</h3>
          <div>
            {pagesContent.powerSupply.sectionSolutionsContent.map((item) => (
              <div key={item.id} className="mt-8 flex items-start gap-4 max-[650px]:gap-2">
                <div className="w-6 min-w-6 max-[650px]:w-4 max-[650px]:min-w-4">
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

        <div className=" py-10 bg-gradient-to-r from-[#aed8bd] to-[#f3fff3]">
          <div className="max-container">
            <h3 className="page-title-section">{pagesContent.powerSupply.sectionWhyChooseName}</h3>
            <div className="flex flex-wrap justify-between max-[850px]:justify-around max-[850px]:gap-y-4">
              {pagesContent.powerSupply.sectionWhyChooseContent.map((item) => (
                <div
                  key={item.id}
                  className="w-[32%] flex flex-col  justify-start max-[850px]:w-[49%] max-[550px]:w-full container"
                >
                  <div className="flex gap-4 mb-4">
                    <span className="text-2xl font-bold text-green-light">{item.id}.</span>
                    <h5 className="container-title">{item.title}</h5>
                  </div>
                  <p className="container-text !mt-0 !mb-0">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-container py-10 ">
          <h3 className="page-title-section">{pagesContent.powerSupply.sectionWorkingName}</h3>
          <div className="flex flex-wrap justify-between max-[850px]:justify-around max-[850px]:gap-y-4">
            {pagesContent.powerSupply.sectionWorkingContent.map((item) => (
              <div
                key={item.id}
                className="w-[32%] flex flex-col  justify-start max-[850px]:w-[49%] max-[550px]:w-full container"
              >
                <div className="flex gap-4 mb-4">
                  <span className="text-2xl font-bold text-green-light">{item.id}.</span>
                  <h5 className="container-title">{item.title}</h5>
                </div>
                <p className="container-text !mt-0 !mb-0">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-10 bg-gradient-to-r from-[#aed8bd] to-[#f3fff3]">
          <div className="max-container">
            <h3 className="page-title-section">{pagesContent.powerSupply.sectionBenefitsName}</h3>
            <div className="flex flex-wrap justify-between max-[850px]:justify-around max-[850px]:gap-y-4">
              {pagesContent.powerSupply.sectionBenefitsContent.map((item) => (
                <div
                  key={item.id}
                  className="w-[32%] flex flex-col  justify-start  container max-[850px]:w-[49%] max-[550px]:w-full"
                >
                  <div className="flex gap-4 mb-4">
                    <span className="text-2xl font-bold text-green-light">{item.id}.</span>
                    <h5 className="container-title">{item.title}</h5>
                  </div>
                  <p className="container-text !mt-0 !mb-0">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-container mt-20 flex flex-col justify-center mb-6">
          <p className="text-center page-title !leading-8">{pagesContent.powerSupply.contactsText}</p>
          <HashLink to="/#contacts" className="button">
            {pagesContent.powerSupply.contactsButton}
          </HashLink>
        </div>

        <Footer />
        {active && <MobileMenu />}
      </main>
    </>
  );
};

export default PowerSupplyPage;
