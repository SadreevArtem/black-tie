import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { AppTextField } from '../AppTextField';
import { getErrorMessage } from '@/shared/static/lib/getError';
import { AppPhoneInputMasked } from '../AppPhoneInputMasked';
import { getMaskedPhoneValidation } from '@/shared/static/lib';
import { montserrat } from '@/pages';

type Input ={
    phone: string;
    name: string;
}

export const SignUpForm = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
      } = useForm<Input>();
      const onSubmit = ()=>{console.log('onSubmit')}
      const getError = getErrorMessage(errors);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`"py-4 flex flex-col md:gap-4 gap-3 " ${montserrat.className}`}
    >
      <h4 className="text-white text-xl font-semibold uppercase">
        Обратная связь
      </h4>
      <span className='text-black text-xl'>Номер телефона</span>
      <Controller
        name="phone"
        control={control}
        rules={getMaskedPhoneValidation({ required: true })}
        render={({ field: { value, onChange } }) => {
          return (
            <AppPhoneInputMasked
              className="w-full"
              required
              inputClassName="w-full"
              value={value}
              // disabled={isLoading}
              onChange={onChange}
            //   label="Номер телефона"
              error={getError("phone")}
            />
          );
        }}
      />
      <span className='text-black text-xl'>Ваше имя</span>
      <Controller
        name="name"
        control={control}
        rules={{ required: true, minLength: 2, maxLength: 50 }}
        render={({ field }) => (
          <AppTextField
            tag="input"
            placeholder='Введите ваше имя'
            required
            error={getError("name")}
            // {...(register("name"), { required: true })}
            {...field}
          />
        )}
      />
      {errors.name && (
        <span className="text-red-500">Обязательно для заполнения</span>
      )}
      
      <input
        type="submit"
        value="Записаться онлайн"
        className="bg-bg-opacity font-bold my-6 p-2 px-12 uppercase md:text-[24px] text-[18px] rounded-[80px] hover:bg-black transition text-white hover:text-primary self-center cursor-pointer"
      />
      <span className='text-center text-white'>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с Политикой конфиденциальности</span>
    </form>
  );
}
