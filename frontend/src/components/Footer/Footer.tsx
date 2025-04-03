import React from "react";
import Link from "next/link";
import { AppModal } from "../AppModal";
import { SignUpForm } from "../SignUpForm/SignUpForm";
import { useModal } from "@/hooks/useModal";
import Image from "next/image";

export const Footer: React.FC = () => {
  const { open, handleOpen, handleClose } = useModal();

  return (
    <>
      <footer
        className={`container w-full flex flex-col py-4 md:mt-[60px] my-4 mb-8 border-t-white border-t`}
      >
        <div className="container md:grid md:grid-cols-4 flex flex-wrap  md:gap-8 gap-4 mt-4">
          <div className="max-md:w-full">
            <Link href="/" className="relative block shrink-0">
              <Image
                src={"/images/logo_footer.png"}
                className=""
                alt="logo"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="flex flex-col gap-2 items-start max-md:w-[40%] ">
            <div className="relative flex flex-col md:flex-row gap-4 items-center">
              <Link href="/" className="relative block shrink-0">
                <div className="flex flex-col items-center">
                  <span className="uppercase text-2xl text-white font-extrabold md:mb-4 max-md:text-[16px]">
                    гость
                  </span>
                </div>
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                href={"/masters"}
                className="text-white w-fit hover:text-hover max-md:text-[15px]"
              >
                Мастера
              </Link>
              <Link
                href={"/programs"}
                className="text-white w-fit hover:text-hover max-md:text-[15px]"
              >
                Программы
              </Link>
            </div>
          </div>
          <div className="text-white flex flex-col gap-2">
            <h5 className="uppercase font-extrabold text-2xl  md:mb-4 max-md:text-[16px]">
              платформы
            </h5>
            <Link
              href={"https://t.me/Black_Tie72"}
              className="text-white w-fit hover:text-hover max-md:text-[15px]"
            >
              Telegramm
            </Link>
            <Link
              href={"https://wa.me/79220046935"}
              className="text-white w-fit hover:text-hover max-md:text-[15px]"
            >
              WhatsApp
            </Link>
          </div>
          <div className="text-white flex flex-col gap-2">
            <h5 className="uppercase font-extrabold text-2xl  md:mb-4 max-md:text-[16px]">
              связаться с нами:
            </h5>
            <Link
              href={`tel:+79220046935`}
              className="text-white w-fit hover:text-hover"
            >
              +7 (922) 004-69-35
            </Link>
          </div>
          {/* <div className="text-white flex flex-col gap-2">
            <h5 className="font-extrabold text-2xl  md:mb-4">
              мы находимся по адресу:
            </h5>
            <p className="text-white">город Тюмень</p>
            <p className="text-white">Солнечный проезд 22</p>
          </div> */}
        </div>
        {/* <div className="md:hidden flex flex-col items-center">
          <button
            className="mt-6 bg-bg-opacity text-white px-16 py-4 max-md:text-[14px] rounded-[80px] hover:bg-black transition hover:text-primary"
            onClick={handleOpen}
          >
            ЗАПИСАТЬСЯ ОНЛАЙН
          </button>
          <div className="flex gap-4 my-8">
            <Link
              href={"https://t.me/Black_Tie72"}
              className="flex items-center gap-2"
            >
              <Image
                className="w-8"
                src={"/images/telegram-black.svg"}
                alt=""
                width={65}
                height={65}
              />
              <p className="text-white">В Telegramm</p>
            </Link>
            <Link
              href={"https://wa.me/79220046935"}
              className="flex items-center gap-2"
            >
              <Image
                className="w-8"
                src={"/images/whatsapp-black.svg"}
                alt=""
                width={65}
                height={65}
              />
              <p className="text-white">В Whatsapp</p>
            </Link>
          </div>

          <div className="relative w-full -mt-8">
            <Image
              src={"/images/bg-footer.png"}
              width={800}
              height={400}
              alt=""
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-start justify-between px-10 gap-6">
              <div className="self-center mt-3">
                <span className="my-6 block text-center rounded-[80px] bg-bg-opacity text-white px-16 py-4 uppercase">
                  Контакты салона
                </span>
                <p className="text-white text-center block my-2">
                  город Тюмень,
                </p>
                <p className="text-white text-center my-2">
                  Солнечный проезд 22
                </p>
                <Link
                  href={`tel:+79220046935`}
                  className="text-white hover:text-hover block text-center"
                >
                  +7 (922) 005-76-17
                </Link>
              </div>
              <div className="ml-auto text-[12px]">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    className="w-8"
                    src={"/images/nointim.svg"}
                    alt=""
                    width={65}
                    height={65}
                  />
                  <p className="text-white uppercase max-w-[260px]">
                    не оказываем интимные и медицинские услуги
                  </p>
                </div>
                <div className="flex items-center gap-4 mb-12">
                  <Image
                    className="w-8"
                    src={"/images/18plus.svg"}
                    alt=""
                    width={65}
                    height={65}
                  />
                  <p className="text-white uppercase max-w-[260px]">
                    Для лиц старше 18 лет
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </footer>
      <AppModal isOpen={open} closeHandler={handleClose}>
        <SignUpForm handleClose={handleClose} />
      </AppModal>
    </>
  );
};
