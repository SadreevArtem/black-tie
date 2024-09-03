import Image from "next/image";
import { FC } from "react";

export const InfoBlock: FC = () => {
    return (
      <div className="relative w-full">
        <div className="flex justify-center items-start">
          <div className="md:h-[480px] h-[390px]">
            <Image src={"/images/banner3.png"} alt="" fill className="w-full" />
            <div className="absolute w-full top-0 left-0 bottom-0">
              <div className="flex items-center gap-4 flex-row px-4">
                <Image
                  src={"/images/car.svg"}
                  alt=""
                  className="max-md:w-[180px]"
                  width={280}
                  height={180}
                  quality={100}
                />
                <div className="text-primary md:text-[28px] mt-2">
                  <p className="uppercase font-extrabold">такси до салона</p>
                  <p>удовольствие начинается с комфортного </p>
                  <p>такси </p>
                  <p>довезем досалона бесплатно </p>
                </div>
              </div>
              <div className="flex items-center gap-4 flex-row-reverse px-4">
                <Image
                  src={"/images/banya.svg"}
                  alt=""
                  className="max-md:w-[178px]"
                  width={240}
                  quality={100}
                  height={180}
                />
                <div className="text-primary md:text-[28px] text-right">
                  <p className="uppercase font-extrabold">сауна</p>
                  <p>для наших сауна круглосуточно! </p>
                  <p>от 2,5 часов программы и БОНУС САУНА </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}