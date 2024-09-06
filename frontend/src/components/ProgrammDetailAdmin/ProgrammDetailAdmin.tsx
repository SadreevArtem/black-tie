
import { FormControlLabel, Switch, TextField } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { appToast } from "../AppToast/components/lib/appToast";
// import { ImageInput } from "../ImageInput/ImageInput";
import { api } from "@/shared/api/api";
import { useAuthStore } from "@/store/auth";
import { Button } from "../Button";
import { FilesModel, Programm } from "@/shared/static/types";
import { ImageInput } from "../ImageInput/ImageInput";


type Props = {
  id: number;
}

type Inputs = Programm;


export const ProgrammDetailAdmin: React.FC<Props> = ({id}) => {
  const isEdit = id !== 0;
  const token = useAuthStore((state) => state.token);
  const queryClient = useQueryClient()
    const getProgrammsById = () => api.getProgramsByIdAdmin(id, token);
    const getQueryKey = (id: number) => ['master'].concat(id.toString());
    const router = useRouter();
    
   const { data: master, isLoading } = useQuery<Programm>({
     queryKey: getQueryKey(id),
     queryFn: getProgrammsById,
     enabled: !!id,
   });
   const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const updateProgrammFunc = (input: Programm)=> api.updateProgramm(input, token);
  const createProgrammFunc = (input: Programm)=> api.createProgramm(input, token);
  const uploadImageFunc = (file: File) => api.uploadImage(file);
  const mutation = useMutation( {
    mutationFn: isEdit? updateProgrammFunc : createProgrammFunc,
    onSuccess: () => {
      appToast.success(isEdit ? "Успешно изменено" : "Успешно добавлено");
      queryClient.invalidateQueries(),
      router.back()
    },
    onError: () => {
      appToast.error("Произошла ошибка");
    },
  })
  const uploadImageMutation = useMutation({
    mutationFn: uploadImageFunc,
    onSuccess: (res: FilesModel) => {
      appToast.success("Успешно загружено");
      setValue("image", res.path);
    },
  });
  const uploadImageHandler: (image?: File | null) => void = (image) => {
uploadImageMutation.mutate( image as File );
  };
  const deleteMutation  = useMutation( {
    mutationFn: ()=> api.deleteProgramm(id, token),
    onSuccess: () => {
      appToast.success("Успешно удалено");
      queryClient.invalidateQueries(),
      router.back()
    },
    onError: () => {
      appToast.error("Произошла ошибка");
    },
  })
  const onDeleteClick = () => deleteMutation.mutate();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    mutation.mutate({
      ...data,
    });
    const deleteImageHandler = async () => {
      setValue("image", "");
    };
  useEffect(() => {
    if (!master) return;
    Object.keys(master).forEach((key) => {
      if (key in master) {
        setValue(key as keyof Programm, master[key as keyof Programm] as string);
      }
    });
  }, [master, setValue]);
  return (
    <>
      {!isLoading && (
        <section className="container px-40 bg-gray-500 rounded-lg pt-4">
          <div className="flex mt-8 justify-between gap-4">
            <h2 className="text-xl">
              {isEdit ? "Редактирование" : "Добавить"}
            </h2>
            <Button onButtonClick={() => router.back()} title="Назад"></Button>
          </div>
          <div className="flex justify-between">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="md:w-[50%] py-4 flex flex-col md:gap-6 gap-4"
            >
              <TextField variant="outlined" label="Имя" {...register("name")} />
              <TextField
                variant="outlined"
                label="Описание"
                multiline
                {...register("description")}
              />
              <TextField
                variant="outlined"
                label="Стоимость"
                {...register("currentPrice")}
              />
              <TextField
                variant="outlined"
                label="изображение"
                {...register("image")}
              />
              {errors.image && (
                <span className="text-red-500">Обязательно для заполнения</span>
              )}
              <TextField
                variant="outlined"
                label="Услуги"
                multiline 
                {...register("services")}
              />
              <Controller
                name="published"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <FormControlLabel
                    control={<Switch checked={value} />}
                    label="Опубликовано"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />

              <div className="flex gap-4">
                <Button title="Сохранить" type="submit" />

                <Button title="Удалить" onButtonClick={onDeleteClick} />
              </div>
            </form>
            <Controller
              control={control}
              name="image"
              render={({ field }) => (
                <ImageInput
                  addAlert={() => console.log("alert")}
                  url={field?.value ?? ""}
                  value={{ path: field.value }}
                  onUpdate={field.onChange}
                  withPreview={false}
                  onChange={uploadImageHandler}
                  onDelete={deleteImageHandler}
                />
              )}
            />
          </div>
        </section>
      )}
    </>
  );
};
