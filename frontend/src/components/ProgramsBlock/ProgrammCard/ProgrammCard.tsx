import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { Programm } from "@/shared/static/types";
import { Button } from "@/components/Button";
import Link from "next/link";



type Props = {
  className?: string;
  item: Programm;
};

export const ProgrammCard: React.FC<Props> = ({ item, className }) => {

  return (
    <>
      <div
        className={clsx(
          "relative w-[300px] h-[282px] md:w-[600px] md:h-[420px] overflow-hidden",
          "bg-[#323232] shadow-base rounded-md md:rounded-lg group",
          className
        )}
        onClick={() => console.log("click")}
        aria-hidden
      >
        <div className="flex flex-col items-center gap-3 mb-3 md:mb-6">
          <div className="relative w-[300px] h-[282px]  md:w-[600px] md:h-[420px] shrink-0 rounded-md">
            <Image
              src={item.image || "/images/empty.png"}
              alt={item.name || "Аватар"}
              fill
              className="w-full h-full rounded-md object-cover"
            />
            <div className="absolute p-2 py-3 top-0 bottom-0 left-0 right-0 text-white md:text-lg flex flex-col items-start justify-between">
              <div className="bg-[#323232] opacity-50 p-2 md:px-12 px-6 uppercase md:text-[24px] text-[16px] rounded-[80px]">
                {item.currentPrice}
              </div>
              <div className="md:text-[42px] text-[24px] uppercase">
                {item.name}
              </div>
              <Link href={`/programs/${item.id}`}>
                <Button
                  title="подробнее"
                  className="!bg-[#323232] opacity-50 font-normal my-0 ml-auto md:px-12 px-6"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
