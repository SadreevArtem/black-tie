import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { Gallery } from "@/shared/static/types";
type Props = {
  className?: string;
  item: Gallery;
};

export const GalleryCard: React.FC<Props> = ({ item, className }) => {
  return (
    <>
      <div
        className={clsx(
          "relative w-[300px] h-[282px] md:w-[600px] md:h-[420px] overflow-hidden",
          "bg-[#323232] shadow-base rounded-[15px] group",
          className
        )}
        onClick={() => console.log("click")}
        aria-hidden
      >
        <div className="flex flex-col items-center gap-3 mb-3 md:mb-6">
          <div className="relative w-[300px] h-[282px]  md:w-[600px] md:h-[420px] shrink-0 rounded-[15px]">
            <Image
              src={item.image || "/images/empty.png"}
              alt={item.name || "Аватар"}
              fill
              className="w-full h-full rounded-[20px] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};
