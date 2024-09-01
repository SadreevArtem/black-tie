import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { AppIcon } from "../../AppIcon";
import { Master } from "../MastersBlock";



type Props = {
  className?: string;
  item: Master;
};

export const ReviewCard: React.FC<Props> = ({ item, className }) => {

  return (
    <>
      <div
        className={clsx(
          "relative w-[180px] h-[270px] md:w-[300px] md:h-[420px] overflow-hidden",
          "bg-[#323232] shadow-base rounded-md md:rounded-lg p-4 md:p-6 pb-0 group hover:cursor-pointer",
          className
        )}
        onClick={() => console.log("click")}
        aria-hidden
      >
        <div className="flex flex-col  items-center gap-3 mb-3 md:mb-6">
          <div className="relative w-[130px] h-[200px]  md:w-[205px] md:h-[340px] shrink-0 rounded-md">
            <Image
              src={item.avatar || "/images/empty.png"}
              alt={item.name || "Аватар"}
              fill
              className="w-full h-full rounded-md object-cover"
            />
          </div>

          <div className="text-base text-white md:text-lg font-semibold group-hover:text-primary group-active:text-primary-light">
            {item.name}
          </div>
        </div>
      </div>
    </>
  );
};
