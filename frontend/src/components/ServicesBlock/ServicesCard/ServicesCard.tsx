import React from "react";
import Image from "next/image";

type Props = {
  className?: string;
  imageUrl: string;
  name: string;
  description: string;
  imagePosition: string;
};

export const ServicesCard: React.FC<Props> = ({
  imageUrl,
  name,
  description,
  imagePosition = "right",
}) => {
  return (
    <>
      <div className="relative bg-black text-white rounded-[10px] border overflow-hidden flex items-center">
        {/* Градиентный фон */}
        <div
          className={`absolute inset-0 bg-gradient-to-${
            imagePosition === "right" ? "r" : "l"
          } from-black via-black/50 to-transparent`}
        />

        {/* Текстовая часть */}
        <div
          className={`relative z-10 w-[60%] ${
            imagePosition === "right" ? "pl-[70px]" : "pr-[70px]"
          }`}
        >
          <h2 className="text-[28px] font-bold uppercase">{name}</h2>
          <div
            className="md:text-[28px] text-[18px] "
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>

        {/* Изображение */}
        <div
          className={`relative w-[40%] ${
            imagePosition === "right" ? "order-last" : "order-first"
          }`}
        >
          <Image
            src={imageUrl}
            alt="Car image"
            layout="fill"
            objectFit="cover"
            className="!relative"
          />
        </div>
      </div>
    </>
  );
};
