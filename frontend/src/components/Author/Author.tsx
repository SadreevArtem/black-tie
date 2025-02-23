import Image from "next/image";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { AppModal } from "../AppModal";
import { useModal } from "@/hooks/useModal";
import { SignUpForm } from "../SignUpForm/SignUpForm";

type BannerProps = {
  images: { url: string }[];
};

export const Author: FC<BannerProps> = ({ images }) => {
  const { open, handleOpen, handleClose } = useModal();

  return (
    <div className="w-full h-[100vh]">
      <div className="flex justify-center items-start h-[100vh] relative ">
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent" />
        <div className="w-full h-full">
          <div
            className={`text-white h-[100vh] flex flex-col md:text-[28px] text-[22px] text-center items-center `}
          >
            <Image
              src={"/images/massage.jpg"}
              alt="logo"
              className="w-full md:h-full h-[60vh] object-cover object-right right-0 top-[130px] max-md:absolute"
              width={1920}
              height={1212}
              quality={100}
            />
          </div>
          <div className="text-white absolute md:bottom-[84px] bottom-[84px] left-1/2 transform -translate-x-1/2 xl:text-[24px] text-[20px]">
            <button
              className="shadow-button mt-12 bg-white/20 border border-transparent hover:border-white xl:p-6 p-4 xl:px-[100px] px-[86px] max-md:text-[14px] rounded-[5px]  transition"
              onClick={handleOpen}
            >
              Записаться онлайн
            </button>
          </div>
        </div>
      </div>
      <AppModal isOpen={open} closeHandler={handleClose}>
        <SignUpForm handleClose={handleClose} />
      </AppModal>
    </div>
  );
};
