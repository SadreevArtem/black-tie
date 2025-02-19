import React, { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { AppTextField } from "../AppTextField";
import { getErrorMessage } from "@/shared/static/lib/getError";
import { AppPhoneInputMasked } from "../AppPhoneInputMasked";
import { getMaskedPhoneValidation } from "@/shared/static/lib";
import { montserrat, tenor } from "@/pages";
import { useMutation } from "@tanstack/react-query";
import { appToast } from "../AppToast/components/lib/appToast";
import { OrderInput } from "@/shared/static/types";
import { api } from "@/shared/api/api";
import clsx from "clsx";

type Props = {
  handleClose: () => void;
};

export const SignUpForm: FC<Props> = ({ handleClose }) => {
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
    onError: () => {
      appToast.error("Произошла ошибка");
    },
  });
  const onSubmit: SubmitHandler<OrderInput> = (data) => {
    mutation.mutate(data);
  };
  const getError = getErrorMessage(errors);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`"py-4 flex flex-col md:gap-4 gap-3 " ${tenor.className}`}
    >
      <h4 className="text-white md:text-[32px] text-center md:mb-[30px]">
        Обратная связь
      </h4>
      <Controller
        name="name"
        control={control}
        rules={{ required: true, minLength: 2, maxLength: 50 }}
        render={({ field }) => (
          <AppTextField
            tag="input"
            placeholder="Ваше имя"
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

      <input
        type="submit"
        value="Записаться онлайн"
        className={clsx(
          "bg-white/20 border md:h-[76px] border-black hover:border-white my-4 px-12 md:text-[20px] text-[18px] rounded-[5px] transition text-white self-center cursor-pointer w-full",
          `${montserrat.className}`
        )}
      />
      <span
        className={clsx(
          "text-center text-white text-[14px]",
          `${montserrat.className}`
        )}
      >
        Нажимая на кнопку, вы даете согласие на обработку персональных данных и
        соглашаетесь с Политикой конфиденциальности
      </span>
    </form>
  );
};
