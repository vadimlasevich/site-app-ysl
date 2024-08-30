import React from 'react';
import { Nav } from '../components';
import { Footer } from '../sections';
import MicrokontrollerImage from '../assets/images/micro.png';
import { HashLink } from 'react-router-hash-link';
import { microcontrollersServices, microcontrollersWhyChoose } from '../constans';
import { SvgArrow } from '../components/svg';

const MicrocontrollersDeveloperPage = () => {
  return (
    <main className="font-montserrat bg-main-bg text-text min-h-screen">
      <Nav absolute={false} />
      <div className="py-7 bg-gradient-to-r from-[#aed8bd] to-[#f3fff3] max-[992px]:py-5">
        <div className="max-container">
          <h2 className="text-3xl font-bold leading-9 max-[992px]:text-2xl max-[550px]:text-xl">Работа с микроконтроллерами</h2>
        </div>
      </div>
      <div className="max-container ">
        <div className=" flex justify-between items-center my-10 max-[650px]:flex-col-reverse max-[550px]:my-5">
          <div className="w-[48%] flex justify-center  max-[650px]:w-[70%] max-[650px]:mt-10">
            <img src={MicrokontrollerImage} className="w-[80%] max-h-[80%] max-[650px]:max-h-[100%]" />
          </div>
          <div className="w-[48%] max-[850px]:w-[60%] max-[650px]:w-full">
            <h3 className="page-title">
              Профессиональные услуги по разработке программного обеспечения для микроконтроллеров ведущих мировых производителей
            </h3>
            <p className="page-subtitle">
              Наша компания предлагает услуги по разработке программного обеспечения для микроконтроллеров ведущих мировых
              производителей: Atmel (Microchip), Espressif и ST Microelectronics. Мы обеспечиваем полный цикл разработки — от
              проектирования и написания кода до тестирования и внедрения готового решения.
            </p>
          </div>
        </div>
        <div className="py-16 max-[650px]:py-8">
          <h3 className="page-title-section">Наши услуги включают:</h3>
          <div>
            {microcontrollersServices.map((item) => (
              <div key={item.id} className="mt-8 flex gap-4 items-center max-[650px]:gap-2">
                <div className="w-10">
                  <SvgArrow size={'100%'} />
                </div>
                <p className="page-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-10 max-[650px]:py-5">
          <h3 className="page-title-section">Почему выбирают нас:</h3>
          <div className="flex flex-wrap justify-between max-[850px]:justify-around max-[850px]:gap-y-4">
            {microcontrollersWhyChoose.map((item) => (
              <div key={item.id} className="container flex flex-col w-[23%] max-[850px]:w-[49%] max-[550px]:w-full">
                <div className="flex gap-4 mb-4">
                  <span className="text-2xl font-bold text-green-light">{item.id}.</span>
                  <h5 className="text-xl font-bold ">{item.title}</h5>
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-center mb-6">
          <p className="text-center page-title !leading-8">
            Обратитесь к нам, чтобы получить консультацию и обсудить ваш проект. Мы поможем воплотить вашу идею в эффективное и
            надежное решение!
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

export default MicrocontrollersDeveloperPage;

// Наша компания предлагает профессиональные услуги по разработке программного обеспечения для микроконтроллеров ведущих мировых производителей: Atmel (Microchip), Espressif и ST Microelectronics. Мы обеспечиваем полный цикл разработки — от проектирования и написания кода до тестирования и внедрения готового решения.

// Наши услуги включают:
// Разработка встраиваемого ПО для микроконтроллеров различных архитектур, включая AVR, ARM, RISC-V, и другие.
// Программирование беспроводных систем на базе чипов Espressif (ESP8266, ESP32) с поддержкой Wi-Fi, Bluetooth, и IoT-протоколов.
// Создание приложений реального времени (RTOS) для критически важных систем с высокой степенью надежности.
// Оптимизация и отладка программного обеспечения для повышения производительности и снижения энергопотребления.
// Интеграция с периферийными устройствами и различными протоколами связи (SPI, I2C, UART, CAN, Ethernet и др.).
// Поддержка и обновление программного обеспечения на протяжении всего жизненного цикла продукта.
// Почему выбирают нас:
// Опыт и экспертиза: Многолетний опыт работы с микроконтроллерами от ведущих производителей.
// Индивидуальный подход: Разработка решений, полностью соответствующих вашим требованиям и техническим задачам.
// Качество и надежность: Программы, написанные нами, соответствуют самым высоким стандартам качества и тестируются на всех этапах разработки.
// Сроки и бюджет: Строгое соблюдение согласованных сроков и гибкость в работе с бюджетом проекта.
// Обратитесь к нам, чтобы получить консультацию и обсудить ваш проект. Мы поможем воплотить вашу идею в эффективное и надежное решение!
