import React from "react";
import Image from "next/image";
import clsx from "clsx";

type Props = {
  className?: string;
  imageUrl: string;
  mobImage: string;
  name: string;
  description: string;
  imagePosition: string;
};

export const ServicesCard: React.FC<Props> = ({
  imageUrl,
  name,
  mobImage,
  description,
  imagePosition = "right",
}) => {
  return (
    <div
      className={`relative bg-black text-white rounded-[10px] border overflow-hidden flex flex-col md:flex-row items-center max-md:min-h-[229px]`}
    >
      {/* Градиентный фон */}
      <div
        className={`absolute inset-0 bg-gradient-to-${
          imagePosition === "right" ? "r" : "l"
        } from-black via-black/50 to-transparent max-md:hidden`}
      />

      {/* Текстовая часть */}
      <div
        className={`relative w-full md:w-[60%] max-md:hidden ${
          imagePosition === "right" ? "pl-[70px]" : "pr-[70px]"
        } max-md:p-4 md:order-none order-${
          imagePosition === "right" ? "last" : "first"
        }`}
      >
        <h2 className="text-[24px] font-bold uppercase md:block hidden">
          {name}
        </h2>
        <div
          className="md:text-[24px] text-[18px] md:block hidden"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>

      {/* Изображение */}
      <div
        className={`relative w-full md:w-[60%] max-md:min-h-[229px] order-${
          imagePosition === "right" ? "last" : "first"
        }`}
      >
        <Image
          src={imageUrl}
          alt="Car image"
          layout="fill"
          objectFit="cover"
          className="!relative max-md:hidden"
        />
        <Image
          src={mobImage}
          alt="Car image"
          layout="fill"
          objectFit="cover"
          className={clsx(
            "!relative md:hidden grayscale max-md:min-h-[229px] max-md:max-h-[229px] scale-x-[-1]",
            name === "GOLD КАРТА" && "opacity-40"
          )}
        />
        {/* Мобильная версия текста поверх изображения */}
        <div
          className={`absolute  bottom-0 flex flex-col justify-center p-4 md:hidden`}
        >
          <h2 className="text-[16px] font-bold uppercase text-white z-10">
            {name}
          </h2>
          <div
            className="md:text-[24px] text-[16px] text-white z-10"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
      </div>
    </div>
  );
};
