import React from 'react';
import { Nav } from '../components';
import { Footer } from '../sections';

const WebDeveloperPage = () => {
  return (
    <main className="font-montserrat flex flex-col justify-between min-h-screen">
      <Nav absolute={false} />
      <div className="flex flex-col grow justify-between">
        <div className="py-7 bg-light-green ">
          <div className="max-container">
            <h2 className="text-3xl font-bold">Веб-разработка</h2>
          </div>
        </div>
        <div className="max-container">
          <p>Здесь нужны текста, картинки, фото, примеры, все что можно придумать</p>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default WebDeveloperPage;
