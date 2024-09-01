import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { AppTextField } from "../AppTextField";
import { useAuthStore } from "@/store/auth";
import { PasswordTextField } from "../PasswordTextField/PasswordTextField";
import { api } from "@/pages/api/api";


type Inputs = {
    username: string
  password: string
}


export const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>()
  const auth = useAuthStore((state) => state.auth);
  const mutation = useMutation( {
    mutationFn:api.signInRequest,
    onSuccess: async (data: any) => {
      const response = await data.json();
      const token = response.access_token;
      auth(token);
    },
    onError: () => window.alert("Ошибка авторизации"),
  })
  const onSubmit: SubmitHandler<Inputs> = (data) => mutation.mutate(data as Inputs);

  return (
    <>
      <div className="h-[100vh] flex justify-center items-center bg-bg-opacity">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:w-[30%] py-4 flex flex-col md:gap-6 gap-4"
        >
          <span className='text-black text-xl'>Username</span>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <AppTextField
                tag="input"
                className="!text-primary"
                // label="Имя"
                {...(register("username"), { required: true })}
                {...field}
              />
            )}
          />
          <span className='text-black text-xl'>Password</span>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <PasswordTextField
                tag="input"
                // label="Пароль"
                // disabled={isLoading}
                // error={getError("password")}
                {...register("password", { required: true })}
                {...field}
              />
            )}
          />
          {/* <PasswordTextField
            variant="filled"
            label="Пароль"
            {...register("password", { required: true })}
          /> */}
          {errors.password && (
            <span className="text-red-500">Обязательно для заполнения</span>
          )}
          <button
            className="bg-bg-opacity font-bold my-6 p-2 px-12 uppercase md:text-[24px] text-[18px] rounded-[80px] hover:bg-black transition text-white hover:text-primary self-center"
            type="submit"
          >
            Войти
          </button>
          <Link className="text-center underline" href="/">
            Вернуться на главную
          </Link>
        </form>
      </div>
    </>
  );
};
