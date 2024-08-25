import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';

const FormContacts = () => {
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

  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <form onSubmit={onSubmit} className="flex justify-between flex-wrap gap-5">
      <div className="w-[48%]">
        <input
          {...register('name', {
            required: { value: true, message: 'Поле обязательно к заполнению' },
            minLength: { value: 2, message: 'Минимум 2 символа' },
            maxLength: { value: 25, message: 'Максимум 25 символов' },
          })}
          placeholder="Имя"
          className="w-full input"
        />
        {errors.name && <span className="text-xs text-red-400 mt-1">{errors.name.message}</span>}
      </div>
      <div className="w-[48%]">
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
              onChange={onChange}
              defaultCountry="BY"
              id="phone"
              className="input flex"
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
      <button className="button" type="submit">
        Отправить
      </button>
    </form>
  );
};

export default FormContacts;
