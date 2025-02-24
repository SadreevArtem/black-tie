import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Master } from "../MastersBlock/MastersBlock";
import clsx from "clsx";
import Image from "next/image";
import { Button } from "../Button";
import { useModal } from "@/hooks/useModal";
import { AppModal } from "../AppModal";
import { SignUpForm } from "../SignUpForm/SignUpForm";
import { api } from "@/shared/api/api";
import { PhotoPopup } from "../PhotoPopup/PhotoPopup";
import { tenor } from "@/pages";

export const MastersList = () => {
  const { open, handleOpen, handleClose } = useModal();
  const [selectedImage, setSelectedImage] = useState<string>("");
  const {
    open: openPhoto,
    handleOpen: handleOpenPhoto,
    handleClose: handleClosePhoto,
  } = useModal();
  const getMasters = () => api.getMasters();
  const handleImageClick = (url: string) => {
    setSelectedImage(url);
    handleOpenPhoto();
  };
  const { data: masters = [], isLoading } = useQuery<Master[]>({
    queryKey: ["masters"],
    queryFn: getMasters,
  });
  return (
    <div className="w-full mt-24 flex flex-col md:gap-24 gap-12">
      {masters.map((master, i) => (
        <article key={master.name.concat(i.toString())} className="w-full">
          <div className="flex md:gap-12 gap-4">
            <div className="flex flex-col gap-[38px]">
              <Image
                style={{ objectFit: "cover" }}
                quality={100}
                src={master.imageSecond}
                onClick={() => handleImageClick(master.imageSecond)}
                alt={master.age.toString()}
                className="rounded-lg md:w-[183px] md:h-[187px] w-[140px] h-[182px]"
                width={500}
                height={600}
              />
              <Image
                style={{ objectFit: "cover" }}
                quality={100}
                onClick={() => handleImageClick(master.imageThird)}
                src={master.imageThird}
                alt={master.age.toString()}
                className=" rounded-lg md:w-[183px] md:h-[187px] w-[140px] h-[182px]"
                width={500}
                height={600}
              />
              <Image
                style={{ objectFit: "cover" }}
                quality={100}
                src={master.avatar}
                onClick={() => handleImageClick(master.avatar)}
                alt={master.age.toString()}
                className=" rounded-lg md:w-[183px] md:h-[187px] w-[140px] h-[182px]"
                width={500}
                height={600}
              />
            </div>
            <div className="">
              <Image
                style={{ objectFit: "cover" }}
                alt={master.name}
                src={master.avatar}
                width={300}
                height={300}
                className=" rounded-[5px] md:w-[544px] md:h-[640px] w-[140px] h-[182px]"
              />
            </div>
            <div className="flex flex-col gap-6 w-[60%]">
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
          <div className="text-text-gray flex gap-8 text-center justify-between md:hidden mt-4">
            <div>
              <p>{`${master.age} лет`}</p>
              <p>возраст</p>
            </div>
            <div>
              <p>{`${master.height} см`}</p>
            </div>
            <div>
              <p>{`${master.weight} кг`}</p>
            </div>
            <div>
              <p>{`${master.size}`}</p>
              <p>размер</p>
            </div>
          </div>
        </article>
      ))}
      <AppModal isOpen={open} closeHandler={handleClose}>
        <SignUpForm handleClose={handleClose} />
      </AppModal>
      <AppModal isOpen={openPhoto} closeHandler={handleClosePhoto}>
        <PhotoPopup url={selectedImage || ""} />
      </AppModal>
    </div>
  );
};
