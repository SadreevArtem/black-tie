import Image from "next/image";
import clsx from "clsx";
import React from "react";
import { montserrat } from "@/pages";
import Link from "next/link";

export const TelegrammBlock = () => {
  return (
    <div className="container">
      <div className="relative  text-white  rounded-[10px] border overflow-hidden flex items-center max-md:max-h-[124px]">
        {/* Градиентный фон */}
        <div className="absolute z-10 inset-0 bg-gradient-to-r from-black via-black/70 to-white/60" />

        {/* Текстовая часть */}
        <div className="relative w-[60%] md:pl-[70px]  z-20">
          <div
            className={clsx(
              "md:text-[24px] max-md:pl-4 md:font-semibold text-[12px]",
              montserrat.className
            )}
            dangerouslySetInnerHTML={{
              __html:
                "Подпишись на приватный TELEGRAM и получи карту VIP - гостя ",
            }}
          ></div>
        </div>

        {/* Изображение */}
        <div className="relative w-[60%] order-last h-[200px]">
          <Image
            src={"/images/tg2.jpg"}
            alt="Car image"
            layout="fill"
            objectFit="cover"
            className="!relative"
          />
          <div className="z-20 absolute bottom-5 left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 max-md:w-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-1">
              <p className="text-black font-black md:text-[32px]">
                КУПОН НА 10%
              </p>
              <Link
                href={"/"}
                className="flex gap-3 md:px-6 md:py-2 py-1 px-3 bg-transparent text-black border border-black rounded-[5px] transition"
              >
                <Image
                  src={"/images/tg-icon.png"}
                  alt="Car image"
                  width={18}
                  height={18}
                  className="!relative md:w-6 w-[20px]"
                />
                <p className="max-md:text-[12px]">перейти</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
