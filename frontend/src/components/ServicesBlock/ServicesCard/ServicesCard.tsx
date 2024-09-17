import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { Services } from "@/shared/static/types";





type Props = {
  className?: string;
  item: Services;
};

export const ServicesCard: React.FC<Props> = ({ item, className }) => {

  return (
    <>
      <div
        className={clsx(
          "relative w-[360px] h-[282px] md:w-[600px] md:h-[420px] overflow-hidden",
          "bg-[#323232] shadow-base rounded-[20px] group",
          className
        )}
        onClick={() => console.log("click")}
        aria-hidden
      >
        <div className="flex flex-col items-center gap-3 mb-3 md:mb-6">
          <div className="relative w-[360px] h-[282px]  md:w-[600px] md:h-[420px] shrink-0 rounded-md">
            <Image
              src={item.image || "/images/empty.png"}
              alt={item.name || "Аватар"}
              fill
              className="w-full h-full rounded-[20px] object-cover opacity-40"
            />
            <div className="absolute p-2 py-8 top-0 bottom-0 left-0 right-0 text-white md:text-lg flex flex-col items-center justify-between">
              <div className="self-center">
                <Image className="max-md:w-[150px]" src={"/images/logo-card.svg"} alt="" width={250} height={100}/>
              </div>
              <div className="md:text-[24px] text-[18px] text-center"  dangerouslySetInnerHTML={{ __html: item.description }}>
                
              </div>
              {/* <Link href={`/programs/${item.id}`} className="self-end">
                <Button
                  title="подробнее"
                  className="!bg-[rgba(50,50,50,0.5)] font-normal !my-0 md:px-12 px-6 !rounded-[20px]"
                />
              </Link> */}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
