import React from 'react';
import { Nav } from '../components';
import { Footer } from '../sections';
import MicrokontrollerImage from '../assets/images/micro.png';
import { HashLink } from 'react-router-hash-link';
import { microcontrollersServices, microcontrollersWhyChoose } from '../constans';
import { SvgArrow } from '../components/svg';

const MicrocontrollersDeveloperPage = () => {
  return (
    <main className="font-montserrat flex flex-col justify-between min-h-screen">
      <Nav absolute={false} />
      <div className="py-7 bg-gradient-to-r from-[#dbffe6] to-[#9affbb]">
        <div className="max-container">
          <h2 className="text-3xl font-bold">Работа с микроконтроллерами</h2>
        </div>
      </div>
      <div className="max-container ">
        <div className=" flex justify-between items-center my-10">
          <div className="w-[48%] flex justify-center">
            <img src={MicrokontrollerImage} className="w-[80%] max-h-[80%]" />
          </div>
          <div className="w-[48%]">
            <h3 className="text-3xl font-black leading-9 mb-8">
              Профессиональные услуги по разработке программного обеспечения для микроконтроллеров ведущих мировых производителей
            </h3>
            <p className="text-2xl leading-8">
              Наша компания предлагает услуги по разработке программного обеспечения для микроконтроллеров ведущих мировых
              производителей: Atmel (Microchip), Espressif и ST Microelectronics. Мы обеспечиваем полный цикл разработки — от
              проектирования и написания кода до тестирования и внедрения готового решения.
            </p>
          </div>
        </div>
        <div className="py-16">
          <h3 className="text-3xl font-black leading-9 mb-8">Наши услуги включают:</h3>
          <div>
            {microcontrollersServices.map((item) => (
              <div key={item.id} className="mt-8 flex gap-4 items-center">
                <SvgArrow size={30} />
                <p className="text-xl">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-10">
          <h3 className="text-3xl font-black leading-9 mb-8">Почему выбирают нас:</h3>
          <div className="flex gap-6 justify-between">
            {microcontrollersWhyChoose.map((item) => (
              <div
                key={item.id}
                className="w-[25%] flex flex-col  justify-start  p-6 shadow-xl rounded-xl bg-primary duration-150 hover:bg-green-200 hover:scale-105"
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
