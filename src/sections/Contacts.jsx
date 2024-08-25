import React from 'react';
import { contactsInfo } from '../constans';
import FormContacts from '../components/FormContacts';

const Contacts = () => {
  return (
    <div className="max-container">
      <div className="w-[50%]">
        <p className="text-2xl text-light-green font-bold uppercase">контакты</p>
        <h2 className="text-4xl font-bold">Свяжитесь с нами по любым вопросам</h2>
      </div>
      <div className="mt-12 flex flex-wrap gap-y-8 justify-between">
        <div className="w-[50%]">
          <h3 className="text-2xl">Контактная информация :</h3>
          <div className="mt-6">
            {contactsInfo.map((item) => (
              <div key={item.id} className="ml-5 flex items-center gap-x-5 mb-7">
                <div>{item.icon}</div>
                <p className="text-lg font-bold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[50%]">
          <FormContacts />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
