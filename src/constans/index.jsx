import React from 'react';
import { SvgAddress, SvgAndroid, SvgEmail, SvgMicrokontroller, SvgPhone, SvgRepair, SvgWebDevelopement } from '../components/svg';

export const navLinks = [
  { id: 1, href: '#our-services', label: 'Наши услуги' },
  { id: 2, href: '#why-choose', label: 'Почему мы?' },
  { id: 3, href: '#contacts', label: 'Контакты' },
];

export const ourServices = [
  {
    id: 1,
    icon: <SvgRepair size={60} />,
    title: 'Ремонт и обслуживание промышленного оборудования',
    subtitle: 'Дефектовка неисправностей промышленного оборудования. Ремонт электронных компонентов промышленного оборудования',
    href: 'repair',
  },
  {
    id: 2,
    icon: <SvgWebDevelopement size={60} />,
    title: 'Веб-разработка',
    subtitle: 'Создание адаптивных кроссплатформенных сайтов, современных web-приложений а также desctop-приложений.',
    href: 'web-development',
  },
  {
    id: 3,
    icon: <SvgAndroid size={60} />,
    title: 'Разработка мобильных приложений',
    subtitle: 'Разработка на единой кодовой базе мобильных приложений для Android, IOS, HarmonyOS.',
    href: 'mobile-development',
  },
  {
    id: 4,
    icon: <SvgMicrokontroller size={60} />,
    title: 'Работа с микроконтроллерами',
    subtitle: 'Разработка программ для микроконтроллеров Atmel, Espressif и ST Microelectronics',
    href: 'microcontroller-development',
  },
];

export const whyChoose = [
  {
    id: '01',
    title: 'Новейшие технологии',
    subtitle: 'Здесь нужен текст',
  },
  {
    id: '02',
    title: 'Уникальные решения',
    subtitle: 'Здесь нужен текст',
  },
  {
    id: '03',
    title: 'Эффективные стратегии',
    subtitle: 'Здесь нужен текст',
  },
];

export const contactsInfo = [
  {
    id: 1,
    icon: <SvgEmail size={40} />,
    text: 'info@yslsystems.by',
  },
  {
    id: 2,
    icon: <SvgPhone size={40} />,
    text: '+375 29 729 4079',
  },
  {
    id: 3,
    icon: <SvgAddress size={40} />,
    text: '224012, г. Брест',
  },
];
