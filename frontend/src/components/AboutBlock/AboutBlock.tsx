import { aboutInfo } from "@/shared/static";
import { FC } from "react"


export const AboutBlock: FC = () => {
    return (
      <div className="container text-white flex flex-col items-center gap-4">
        <h1 className="opacity-10 text-[1px]">Салон Эротического массажа в Тюмени для мужчин</h1>
        <h2 className="text-lg md:text-xl text-white lg:text-2xl font-extrabold">
          О МУЖСКОМ КЛУБЕ ”CHOCOLATE”
        </h2>
        <div className="mt-2 lg:max-w-[780px]">
          <p className="uppercase text-center text-lg">
            Мы заботимся о комфорте и безопасности гостей, поэтому они
            возвращаются снова. Обратите внимание на то, что салон не оказывает
            интимных услуг.
          </p>
        </div>
        {aboutInfo.map((info) => (
          <div key={info.title} className="flex flex-col items-center">
            <div className="bg-[#191919] lg:min-w-[337px] text-center py-3 px-6 rounded-[40px] text-2xl font-bold">
              {info.title}
            </div>
            <p className="mt-2 lg:max-w-[450px] text-center text-lg">
              {info.description}
            </p>
          </div>
        ))}
      </div>
    );
}