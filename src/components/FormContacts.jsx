import axios from 'axios';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form';

import Modal from './Modal';
import Loader from '../assets/loader.gif';
import { SvgError, SvgSuccess } from './svg';

const FormContacts = () => {
  const [loading, setLoading] = useState(false);
  const [isModalOpenSuccess, setModalOpenSuccess] = useState(false);
  const [isModalOpenError, setModalOpenError] = useState(false);

  const openModalSuccess = () => setModalOpenSuccess(true);
  const closeModalSuccess = () => setModalOpenSuccess(false);

  const openModalError = () => setModalOpenError(true);
  const closeModalError = () => setModalOpenError(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    console.log(data);

    const url = 'https://apiv2.yslsystems.by/api/user/support-site';

    await axios({
      method: 'post',
      url: url,
      data,
    })
      .then((res) => {
        openModalSuccess();
      })
      .catch((error) => {
        openModalError();
      })
      .finally(() => {
        setLoading(false);
      });
  });

  return (
    <>
      <form onSubmit={onSubmit} className="flex justify-between flex-wrap gap-5">
        <div className="w-full lg:w-[48%]">
          <input
            {...register('name', {
              required: { value: true, message: 'Поле обязательно к заполнению' },
              minLength: { value: 2, message: 'Минимум 2 символа' },
              maxLength: { value: 40, message: 'Максимум 40 символов' },
            })}
            placeholder="Имя"
            className="w-full input"
          />
          {errors.name && <span className="text-xs text-red-400 mt-1">{errors.name.message}</span>}
        </div>
        <div className="w-full lg:w-[48%]">
          {/* <Controller
          name="phone"
          control={control}
          rules={{
            validate: (value) => isValidPhoneNumber(value),
          }}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              placeholder="Телефон"
              value={value}
              // international
              onChange={onChange}
              // defaultCountry="BY"
              country="BY"
              id="phone"
              className="input flex"
              maxLength={17}
              style={{ width: '2rem' }}
            />
          )}
        /> */}
          <input
            {...register('phone', {
              minLength: { value: 12, message: 'Некорректный телефон' },
              maxLength: { value: 12, message: 'Некорректный телефон' },
            })}
            placeholder="Телефон"
            type="number"
            className="w-full input"
          />
          {errors.phone && <span className="text-xs text-red-400 mt-1">{errors.phone.message}</span>}
        </div>
        <div className="w-full">
          <input
            {...register('email', {
              required: { value: true, message: 'Поле обязательно к заполнению' },
              maxLength: { value: 40, message: 'Максимум 40 символов' },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Некорректный email',
              },
            })}
            placeholder="Email"
            className="w-full input"
          />
          {errors.email && <span className="text-xs text-red-400 mt-1">{errors.email.message}</span>}
        </div>
        <div className="w-full">
          <textarea
            {...register('message', {
              required: { value: true, message: 'Поле обязательно к заполнению' },
              minLength: { value: 2, message: 'Минимум 2 символа' },
              maxLength: { value: 500, message: 'Максимум 500 символов' },
            })}
            placeholder="Сообщение"
            className="w-full input"
          />
          {errors.message && <span className="text-xs text-red-400 mt-1">{errors.message.message}</span>}
        </div>
        <button className="button flex items-center" type="submit">
          Отправить
          {loading ? <img src={Loader} className="w-5 ml-4" /> : null}
        </button>
      </form>

      <Modal isOpen={isModalOpenSuccess} onClose={closeModalSuccess}>
        <>
          <div className="flex justify-center mb-5">
            <SvgSuccess size={70} />
          </div>
          <h2 className="text-lg font-bold mb-4 text-center">Мы получили ваше сообщение</h2>
          <p className="mb-6 text-center">Наша служба поддержки свяжется с Вами в ближайшее время!</p>
          <div className="flex self-end">
            <button className="button ml-auto" onClick={closeModalSuccess}>
              Закрыть
            </button>
          </div>
        </>
      </Modal>

      <Modal isOpen={isModalOpenError} onClose={closeModalError}>
        <>
          <div className="flex justify-center mb-5">
            <SvgError size={70} />
          </div>
          <h2 className="text-lg font-bold mb-4 text-center">Что-то пошло не так...</h2>
          <div className="mb-6 text-center">
            <p className="text-center">Попробуйте позже или свяжитесь с нами по телефону</p>
            <p className="text-center text-lg mt-3">+375 29 729 4079</p>
          </div>

          <div className="flex self-end">
            <button className="button ml-auto" onClick={closeModalError}>
              Закрыть
            </button>
          </div>
        </>
      </Modal>
    </>
  );
};

export default FormContacts;
