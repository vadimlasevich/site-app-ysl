import React, { useEffect } from 'react';
import { Nav, MobileMenu } from '../components';
import { Footer } from '../sections';
import { HashLink } from 'react-router-hash-link';
import { pagesContent } from '../constans';
import { useMobileMenu } from '../store';
import AnimatedBackgroundPage from '../components/AnimatedBackgroundPage';

const WebDeveloperPage = () => {
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
              {pagesContent.webDevelopers.name}
            </h2>
          </div>
        </div>
        <div className="max-container ">
          <div className=" flex justify-between items-center my-10 max-[650px]:flex-col-reverse max-[550px]:my-5">
            <div className="w-[48%] flex justify-center  max-[650px]:w-[70%] max-[650px]:mt-10">
              <img src={pagesContent.webDevelopers.image} className="w-[80%] max-h-[80%] max-[650px]:max-h-[100%]" />
            </div>
            <div className="w-[48%] max-[850px]:w-[60%] max-[650px]:w-full">
              <h3 className="page-title">{pagesContent.webDevelopers.title}</h3>
              <p className="page-subtitle">{pagesContent.webDevelopers.subtitle}</p>
            </div>
          </div>

          <div className="mt-24">
            <div className="container">
              <h4 className="container-title mb-3">{pagesContent.webDevelopers.sectionWebAppName}</h4>
              <p>{pagesContent.webDevelopers.sectionWebAppContent}</p>
            </div>

            <div className="container mt-10">
              <h4 className="container-title mb-3">{pagesContent.webDevelopers.sectionDesktopAppName}</h4>
              <p>{pagesContent.webDevelopers.sectionDesktopAppContent}</p>
            </div>

            <div className="container mt-10">
              <h4 className="container-title mb-3">{pagesContent.webDevelopers.sectionSiteName}</h4>
              <p>{pagesContent.webDevelopers.sectionSiteContent}</p>
            </div>
          </div>

          <div className="mt-20 flex flex-col justify-center mb-6">
            <p className="text-center page-title !leading-8">{pagesContent.webDevelopers.contactsText}</p>
            <HashLink to="/#contacts" className="button">
              {pagesContent.webDevelopers.contactsButton}
            </HashLink>
          </div>
        </div>

        <Footer />
        {active && <MobileMenu />}
      </main>
    </>
  );
};

export default WebDeveloperPage;
