import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { AppIcon } from "../../AppIcon";
import { Master } from "../MastersBlock";
import Link from "next/link";



type Props = {
  className?: string;
  item: Master;
};

export const ReviewCard: React.FC<Props> = ({ item, className }) => {

  return (
    <Link href={`masters/${item.id}`}>
      <div
        className={clsx(
          "relative w-[180px] h-[270px] md:w-[300px] md:h-[420px] overflow-hidden",
          "shadow-base rounded-md md:rounded-lg pb-0 group hover:cursor-pointer",
          className
        )}
        onClick={() => console.log("click")}
        aria-hidden
      >
        <div className="flex flex-col  items-center gap-3 md:mb-6">
          <div className="relative w-[180px] h-[230px]  md:w-[300px] md:h-[370px] shrink-0 rounded-md">
            <Image
              src={item.avatar || "/images/empty.png"}
              alt={item.name || "Аватар"}
              fill
              className="w-full h-full rounded-md object-cover"
            />
          </div>

          <div className="text-base text-white md:text-lg uppercase group-hover:text-primary group-active:text-primary-light">
            {item.name}
          </div>
        </div>
      </div>
    </Link>
  );
};
