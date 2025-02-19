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
          "shadow-base rounded-[5px] md:rounded-[5px] pb-0 group hover:cursor-pointer",
          className
        )}
        onClick={() => console.log("click")}
        aria-hidden
      >
        <div className="flex flex-col  items-center gap-3 md:mb-6">
          <div className="relative grayscale hover:grayscale-0 w-[180px] h-[270px]  md:w-[300px] md:h-[420px] shrink-0 rounded-md">
            <Image
              src={item.avatar || "/images/empty.png"}
              alt={item.name || "Аватар"}
              fill
              className="w-full h-full rounded-[5px] object-cover"
            />
          </div>

          <div className="absolute bottom-3 left-4 text-base font-bold text-white md:text-[32px]">
            {item.name}
          </div>
        </div>
      </div>
    </Link>
  );
};
