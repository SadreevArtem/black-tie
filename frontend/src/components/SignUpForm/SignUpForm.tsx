import React, { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { AppTextField } from '../AppTextField';
import { getErrorMessage } from '@/shared/static/lib/getError';
import { AppPhoneInputMasked } from '../AppPhoneInputMasked';
import { getMaskedPhoneValidation } from '@/shared/static/lib';
import { montserrat } from '@/pages';
import { useMutation } from '@tanstack/react-query';
import { appToast } from '../AppToast/components/lib/appToast';
import { OrderInput } from '@/shared/static/types';
import { api } from '@/shared/api/api';

type Props = {
  handleClose: ()=> void;
}

export const SignUpForm:FC<Props> = ({ handleClose }) => {
    const {
        handleSubmit,
        control,
        formState: { errors },
      } = useForm<OrderInput>();
      const mutation = useMutation({
        mutationFn: api.createOrder,
        onSuccess: () => {
          appToast.success("Запрос успешно отправлен!");
          handleClose();
        },
        onError: ()=>{
          appToast.error("Произошла ошибка");
        },
      });
      const onSubmit:SubmitHandler<OrderInput> = (data)=>{
        mutation.mutate(data);
      }
      const getError = getErrorMessage(errors);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`"py-4 flex flex-col md:gap-4 gap-3 " ${montserrat.className}`}
    >
      <h4 className="text-brown md:text-4xl text-xl font-semibold uppercase md:mb-8">
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
        className="bg-bbg font-bold my-6 p-2 px-12 uppercase md:text-[24px] text-[18px] rounded-[80px] hover:bg-bbg transition text-white hover:text-text-gray self-center cursor-pointer"
      />
      <span className='text-center text-white'>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с Политикой конфиденциальности</span> 
    </form>
  );
}
