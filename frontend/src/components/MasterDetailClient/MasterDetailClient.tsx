import { useQuery } from "@tanstack/react-query";
import React, { FC, useState } from "react";
import { Master } from "../MastersBlock/MastersBlock";
import Image from "next/image";
import { Button } from "../Button";
import { useModal } from "@/hooks/useModal";
import { AppModal } from "../AppModal";
import { SignUpForm } from "../SignUpForm/SignUpForm";
import { api } from "@/shared/api/api";
import Link from "next/link";
import { PhotoPopup } from "../PhotoPopup/PhotoPopup";
import clsx from "clsx";
import { tenor } from "@/pages";

type Props = {
  id: number;
};

export const MastersDetailClient: FC<Props> = ({ id }) => {
  const { open, handleOpen, handleClose } = useModal();
  const [selectedImage, setSelectedImage] = useState<string>("");
  const {
    open: openPhoto,
    handleOpen: handleOpenPhoto,
    handleClose: handleClosePhoto,
  } = useModal();
  const getMaster = () => api.getMastersById(id);
  const handleImageClick = (url: string) => {
    setSelectedImage(url);
    handleOpenPhoto();
  };
  const { data: master, isLoading } = useQuery<Master>({
    queryKey: ["master", id.toString()],
    queryFn: getMaster,
  });
  if (!master)
    return (
      <Link
        className="text-white uppercase underline text-[36px] mt-24"
        href={"/masters"}
      >
        Перейти к выбору мастера
      </Link>
    );
  return (
    <div className="w-full md:mt-24 flex flex-col md:gap-24 gap-12">
      <article
        key={master.name.concat(master.id.toString())}
        className="w-full"
      >
        <h2
          className={clsx(
            "md:hidden text-white text-[24px] my-2 font-normal",
            tenor.className
          )}
        >
          {master.name}
        </h2>
        <div className="flex md:gap-12 gap-4">
          <div className="w-full">
            <Image
              style={{ objectFit: "cover" }}
              alt={master.name}
              src={master.avatar}
              width={300}
              height={300}
              className=" rounded-[5px] md:w-[400px] md:h-[470px] w-full h-[386px]"
            />
          </div>
          <div className="flex flex-col gap-6 w-[60%] max-md:hidden">
            <div className="flex justify-between max-lg:flex-col lg:flex-row">
              <h2
                className={clsx(
                  "text-white text-[40px] font-normal",
                  tenor.className
                )}
              >
                {master.name}
              </h2>
            </div>
            <div className="text-white md:max-w-[450px] grid grid-cols-2 gap-8 text-center justify-between max-md:hidden ">
              <div className="text-start ">
                <p className="font-light">возраст</p>
                <p className="text-[24px]">{`${master.age} лет`}</p>
              </div>
              <div className="text-start">
                <p className="font-light">вес</p>
                <p className="text-[24px]">{`${master.weight} кг`}</p>
              </div>
              <div className="text-start">
                <p className="font-light">размер груди</p>
                <p className="text-[24px]">{`${master.size}`}</p>
              </div>
              <div className="text-start">
                <p className="font-light">рост</p>
                <p className="text-[24px]">{`${master.height} см`}</p>
              </div>
            </div>
            <Button
              type="button"
              onButtonClick={handleOpen}
              className=" max-md:px-6 max-md:my-4 md:max-w-[450px]"
              title="Записаться онлайн"
            ></Button>
          </div>
        </div>
        <div className="text-text-gray grid grid-cols-2 gap-4 justify-between md:hidden mt-4">
          <div>
            <p className="font-light text-[14px]">Возраст</p>
            <p className="text-[16px] font-medium">{`${master.age} лет`}</p>
          </div>
          <div>
            <p className="font-light text-[14px]">Вес</p>
            <p className="text-[16px] font-medium">{`${master.weight} кг`}</p>
          </div>
          <div>
            <p className="font-light text-[14px]">Размер груди</p>
            <p className="text-[16px] font-medium">{`${master.size}`}</p>
          </div>
          <div>
            <p className="font-light text-[14px]">Рост</p>
            <p className="text-[16px] font-medium">{`${master.height} см`}</p>
          </div>
        </div>
        <div>
          <h3
            className={clsx(
              "text-white md:text-[32px] text-[20px] font-normal md:mt-12 mt-8 ",
              tenor.className
            )}
          >
            Фото мастера
          </h3>
          <div className="lg:grid lg:grid-cols-3 md:mt-12 mt-4 flex gap-2 justify-start overflow-auto">
            <Image
              style={{ objectFit: "cover" }}
              quality={100}
              onClick={() => handleImageClick(master.imageSecond)}
              src={master.imageSecond}
              alt={master.age.toString()}
              className="rounded-lg md:w-[300px] md:h-[399px] w-[184px] h-[230px]"
              width={500}
              height={600}
            />
            <Image
              style={{ objectFit: "cover" }}
              quality={100}
              onClick={() => handleImageClick(master.imageThird)}
              src={master.imageThird}
              alt={master.age.toString()}
              className=" rounded-lg md:w-[300px] md:h-[399px] w-[184px] h-[230px]"
              width={500}
              height={600}
            />
            <Image
              style={{ objectFit: "cover" }}
              quality={100}
              onClick={() => handleImageClick(master.avatar)}
              src={master.avatar}
              alt={master.age.toString()}
              className=" rounded-lg md:w-[300px] md:h-[399px] w-[184px] h-[230px]"
              width={500}
              height={600}
            />
          </div>
          <Button
            onButtonClick={handleOpen}
            className="bg-white w-full !m-0  font-normal md:hidden !my-8"
            title="Записаться онлайн"
          ></Button>
        </div>
      </article>
      <AppModal isOpen={open} closeHandler={handleClose}>
        <SignUpForm handleClose={handleClose} />
      </AppModal>
      <AppModal isOpen={openPhoto} closeHandler={handleClosePhoto}>
        <PhotoPopup url={selectedImage || ""} />
      </AppModal>
    </div>
  );
};
