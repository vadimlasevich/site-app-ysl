import React from 'react';
import { contactsInfo } from '../constans';
import FormContacts from '../components/FormContacts';

const Contacts = () => {
  return (
    <div className="max-container">
      <h2 className="section-title">контакты</h2>
      <div className="mt-12 flex flex-wrap gap-y-8 justify-between max-[800px]:mt-6 max-[750px]:flex-col">
        <div className="w-[50%] max-[750px]:w-full items-center">
          <h3 className="text-2xl max-[750px]:text-center">Контактная информация :</h3>
          <div className="mt-6">
            {contactsInfo.map((item) => (
              <div key={item.id} className="ml-5 flex items-center gap-x-5 mb-7 max-[750px]:justify-center max-[750px]:mb-2">
                <div className="w-10 max-[750px]:w-7">{item.icon}</div>
                <p className="text-lg font-bold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[50%] max-[750px]:w-full">
          <FormContacts />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
