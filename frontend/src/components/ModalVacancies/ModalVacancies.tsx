import { useModal } from "@/hooks/useModal";
import React from "react";
import { AppModal } from "../AppModal";
import { SignUpForm } from "../SignUpForm/SignUpForm";
import { Button } from "../Button";
import clsx from "clsx";
import { montserrat, tenor } from "@/pages";

export const ModalVacancies = () => {
  const { open, handleOpen, handleClose } = useModal();
  return (
    <>
      <div className={`container mt-[105px] flex flex-col items-center `}>
        <h1
          className={clsx(
            "text-lg text-[40px] text-white lg:text-[40px] self-start font-normal md:mt-12 mt-8 ",
            tenor.className
          )}
        >
          Вакансии
        </h1>
        <p
          className={clsx(
            "text-white text-center text-[16px] self-start md:mt-12 mt-8",
            montserrat.className
          )}
        >
          Здесь мы найдём применение всем твоим качествам, которыми ты
          обладаешь.
        </p>

        <div className="text-white grid md:grid-cols-2 md:gap-16 gap-4 md:mt-12 mt-8 w-full">
          <div className="flex flex-col gap-6">
            <div
              className="flex flex-col gap-4 items-center justify-center aspect-video rounded-[5px]  bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vacan1.png')" }}
            ></div>
            <h3
              className={clsx(
                "font-normal text-lg md:text-[36px]",
                tenor.className
              )}
            >
              Менеджер
            </h3>
            <p className={clsx("text-[16px]", montserrat.className)}>
              от 80 тысяч в месяц
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div
              className="flex flex-col gap-4 items-center justify-center aspect-video rounded-[5px]  bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vacan2.png')" }}
            ></div>
            <h3
              className={clsx(
                "font-normal text-lg md:text-[36px]",
                tenor.className
              )}
            >
              Мастер
            </h3>
            <p className={clsx("text-[16px]", montserrat.className)}>
              от 150 тысяч в месяц
            </p>
          </div>
        </div>

        <div className={clsx("self-start mt-8", montserrat.className)}>
          <p className="text-white text-left text-[24px] ">
            Работа исключительно в наших комфортабельных салонах.
          </p>
          <p className="text-white font-bold text-left  text-lg mt-4">
            Преимущества работы у нас:
          </p>
        </div>
        <ul
          className={clsx(
            "text-white self-start mt-4 list-disc pl-4 flex flex-col gap-1 pb-8 text-[24px]",
            montserrat.className
          )}
        >
          <li>Без интимных услуг</li>
          <li>Опыт работы не обязателен</li>
          <li>Стабильный высокий заработок</li>
          <li>Гибкий график</li>
          <li>Безопасность и конфиденциальность гарантируется</li>
        </ul>
        <Button
          onButtonClick={handleOpen}
          className=""
          title="Связаться с нами"
        ></Button>
      </div>
      <AppModal isOpen={open} closeHandler={handleClose}>
        <SignUpForm handleClose={handleClose} />
      </AppModal>
    </>
  );
};
