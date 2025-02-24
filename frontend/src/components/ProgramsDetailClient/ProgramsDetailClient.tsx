import { useQuery } from "@tanstack/react-query";
import React, { FC, useState } from "react";
import Image from "next/image";
import { Button } from "../Button";
import { useModal } from "@/hooks/useModal";
import { AppModal } from "../AppModal";
import { SignUpForm } from "../SignUpForm/SignUpForm";
import { api } from "@/shared/api/api";
import Link from "next/link";
import clsx from "clsx";
import { Programm } from "@/shared/static/types";
import { tenor } from "@/pages";

type Props = {
  id: number;
};

export const ProgramsDetailClient: FC<Props> = ({ id }) => {
  const { open, handleOpen, handleClose } = useModal();
  const getProgram = () => api.getProgramsById(id);

  const { data: programm, isLoading } = useQuery<Programm>({
    queryKey: ["program", id.toString()],
    queryFn: getProgram,
  });
  if (!programm)
    return (
      <Link
        className="text-white uppercase underline text-[36px] mt-24"
        href={"/programs"}
      >
        Перейти к выбору программы
      </Link>
    );

  return (
    <div className="container w-full md:mt-24 mt-8 flex flex-col md:gap-24 gap-12">
      <article>
        <div className="flex md:gap-8 gap-4 max-md:flex-col">
          <div className="relative md:w-[50%] md:h-[360px] h-[220px] shrink-0">
            <Image
              src={programm.image || "/images/empty.png"}
              alt={programm.name || "Аватар"}
              fill
              className="w-full h-full rounded-[20px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className={clsx("text-white  text-[40px]", tenor.className)}>
              {programm.name}
            </p>
            <div className="flex items-center gap-4">
              <p className="text-white text-[24px]">{programm.currentPrice}</p>
            </div>
            <div className="flex flex-col gap-4 md:max-w-[450px] mt-auto">
              <Button
                onButtonClick={handleOpen}
                className="bg-white w-full !m-0  font-normal"
                title="Записаться онлайн"
              ></Button>
              <Link href={`tel:+79220058113`}>
                <Button
                  title="Позвонить"
                  className="w-full !bg-black border border-white hover:!bg-white/20 font-normal !m-0"
                ></Button>
              </Link>
            </div>
          </div>
        </div>
        <p className="text-white mt-[35px] mb-5">
          Допускается поверхностные прикосновения в зоне бикини, поцелуи по
          телу. НЕ является сексуальной услугой.
        </p>
        <p className="text-white font-bold text-[24px]">ОПИСАНИЕ</p>
        <p className="text-white">{programm.description}</p>
        <ul className="flex flex-col gap-2 mt-8 list-disc ml-5">
          {programm.services.split(",").map((service, i) => (
            <li className="text-white" key={service.concat(i.toString())}>
              {service}
            </li>
          ))}
        </ul>
      </article>
      <AppModal isOpen={open} closeHandler={handleClose}>
        <SignUpForm handleClose={handleClose} />
      </AppModal>
    </div>
  );
};
